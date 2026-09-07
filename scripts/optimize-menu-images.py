"""Convert generated menu PNGs to optimized WebP for the site."""

from pathlib import Path
from PIL import Image

SRC = Path(r"C:\Users\ahmha\.cursor\projects\d-smartcook-dera\assets")
DST = Path(r"d:\smartcook-dera\public\images\menu")
VENUE = Path(r"d:\smartcook-dera\public\images")

DST.mkdir(parents=True, exist_ok=True)

FULL_W = 960
THUMB_W = 480
QUALITY = 74


def save_webp(im, path, width):
    img = im.convert("RGB")
    if img.width > width:
        height = max(1, round(img.height * width / img.width))
        img = img.resize((width, height), Image.Resampling.LANCZOS)
    img.save(path, "WEBP", quality=QUALITY, method=6)
    return path.stat().st_size


total = 0
for png in sorted(SRC.glob("*.png")):
    with Image.open(png) as im:
        full_size = save_webp(im, DST / f"{png.stem}.webp", FULL_W)
        thumb_size = save_webp(im, DST / f"{png.stem}-sm.webp", THUMB_W)
    total += full_size + thumb_size
    print(f"{png.stem}: {full_size // 1024}KB / {thumb_size // 1024}KB")

copies = {
    "mutton-karahi.webp": "karahi.webp",
    "bbq-mix-platter.webp": "bbq.webp",
    "chicken-biryani.webp": "biryani.webp",
    "special-chai.webp": "chai.webp",
}
for src_name, dest_name in copies.items():
    src = DST / src_name
    if src.exists():
        (VENUE / dest_name).write_bytes(src.read_bytes())
        print(f"copied {dest_name}")

print(f"done, total {total // 1024}KB")
