const dictionary = window.PORTFOLIO_I18N || {};
const languageButton = document.querySelector('.language-toggle');
const languageKey = 'junting-portfolio-language';
const siteRoot = new URL('../', document.querySelector('script[src$="assets/site.js"]').src);
let language = 'en';
function preferredLanguage() {
  const explicit = new URL(location.href).searchParams.get('lang');
  if (explicit === 'en' || explicit === 'zh') return explicit;
  try { return localStorage.getItem(languageKey) === 'zh' ? 'zh' : 'en'; }
  catch { return 'en'; }
}
function applyLanguage(next, updateUrl = false) {
  language = next === 'zh' ? 'zh' : 'en';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const pair = dictionary[el.dataset.i18n];
    if (pair) el.textContent = pair[language];
  });
  for (const attr of ['aria-label', 'alt', 'placeholder', 'content']) {
    document.querySelectorAll(`[data-i18n-${attr}]`).forEach(el => {
      const pair = dictionary[el.getAttribute(`data-i18n-${attr}`)];
      if (pair) el.setAttribute(attr, pair[language]);
    });
  }
  languageButton.textContent = language === 'en' ? '中文' : 'EN';
  languageButton.lang = language === 'en' ? 'zh-CN' : 'en';
  languageButton.setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : '切换到英文');
  try { localStorage.setItem(languageKey, language); } catch { /* URL links also preserve the choice. */ }
  if (updateUrl) {
    const url = new URL(location.href);
    url.searchParams.set('lang', language);
    history.replaceState(null, '', url);
  }
  document.querySelectorAll('a[href]').forEach(link => {
    if (link.getAttribute('href').startsWith('#')) return;
    const url = new URL(link.href);
    if (url.origin === siteRoot.origin && url.pathname.startsWith(siteRoot.pathname) && /(?:\.html|\/)$/i.test(url.pathname)) {
      url.searchParams.set('lang', language);
      link.href = url.href;
    }
  });
  filterProjects();
  if (lightbox?.open && opener) lightbox.querySelector('img').alt = opener.querySelector('img').alt;
}
languageButton?.addEventListener('click', () => applyLanguage(language === 'en' ? 'zh' : 'en', true));
window.addEventListener('popstate', () => applyLanguage(preferredLanguage()));

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav?.addEventListener('click', e => {
  if (e.target.closest('a')) {menu?.setAttribute('aria-expanded','false');nav.classList.remove('open');}
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav?.classList.contains('open')) {nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}
});

let category = 'all';
const search = document.querySelector('#project-search');
const cards = [...document.querySelectorAll('.filter-grid .project-card')];
function filterProjects() {
  const term = (search?.value || '').trim().toLowerCase();
  let count=0;
  for(const card of cards) {
    card.hidden = !((category === 'all' || card.dataset.category === category) && card.dataset.search.toLowerCase().includes(term));
    if(!card.hidden) count++;
  }
  const status=document.querySelector('.filter-status');
  if(status) status.textContent=language==='zh'?`显示 ${count} 个精选项目`:`${count} featured ${count===1?'project':'projects'}`;
  const empty=document.querySelector('.empty-state');
  if(empty) empty.hidden=count!==0;
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  category=button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  filterProjects();
}));
search?.addEventListener('input',filterProjects);

const lightbox=document.querySelector('.lightbox');
let opener;
document.querySelectorAll('.zoom').forEach(link=>link.addEventListener('click',e=>{
  if(!lightbox?.showModal) return;
  e.preventDefault();opener=link;
  const img=lightbox.querySelector('img');img.src=link.href;img.alt=link.querySelector('img').alt;
  lightbox.querySelector('p').textContent=link.dataset.caption;
  lightbox.showModal();document.body.classList.add('modal-open');
}));
lightbox?.querySelector('button').addEventListener('click',()=>lightbox.close());
lightbox?.addEventListener('click',e=>{if(e.target===lightbox) lightbox.close();});
lightbox?.addEventListener('close',()=>{document.body.classList.remove('modal-open');opener?.focus();});
applyLanguage(preferredLanguage());
