"""Rebuild web images from the portfolio PDFs. Requires pymupdf and Pillow."""
from pathlib import Path
import io
import pymupdf
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets/images'
OUT.mkdir(parents=True, exist_ok=True)
for slug in ['flicker', 'emotional-damage', 'alibi', 'dymo', 'luna', 'spin-poster', 'spin-report']:
    doc = pymupdf.open(ROOT / f'assets/documents/{slug}.pdf')
    for i, page in enumerate(doc):
        scale = min(1800 / page.rect.width, 2)
        pix = page.get_pixmap(matrix=pymupdf.Matrix(scale, scale), alpha=False)
        Image.frombytes('RGB', [pix.width, pix.height], pix.samples).save(OUT / f'{slug}-{i+1}.webp', quality=85)
    if slug in ['flicker', 'emotional-damage', 'alibi', 'dymo', 'luna']:
        index = {'flicker':0,'emotional-damage':0,'alibi':1,'dymo':0,'luna':0}[slug]
        info = doc[0].get_image_info(xrefs=True)[index]
        data = doc.extract_image(info['xref'])
        im = Image.open(io.BytesIO(data['image'])).convert('RGB')
        im.thumbnail((1500, 1200))
        im.save(OUT / f'{slug}-cover.webp', quality=90)
print('Portfolio images ready.')
