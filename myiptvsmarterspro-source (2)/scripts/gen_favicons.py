#!/usr/bin/env python3
"""Generate favicon PNGs from logo-mark.png (Pillow, no cairo per skill rule)."""
from PIL import Image

SRC = "/home/z/my-project/myiptvsmarterspro/public/images/logo-mark.png"
OUT = "/home/z/my-project/myiptvsmarterspro/public/"

img = Image.open(SRC).convert("RGBA")

for size, name in [(32, "favicon-32.png"), (16, "favicon-16.png"), (180, "apple-touch-icon.png"), (192, "icon-192.png")]:
    img.resize((size, size), Image.LANCZOS).save(OUT + name, optimize=True)
    print(f"OK {name} ({size}x{size})")
print("DONE")
