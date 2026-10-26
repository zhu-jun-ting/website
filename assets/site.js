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
  if(status) status.textContent=`显示 ${count} 个精选项目`;
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
