"""
Vylepší fotky ze zakázek. Originály od klienta jsou zmenšené náhledy kolem
400 px, na dlaždici 390 px při dvojnásobné hustotě pixelů se proto roztahují a
měknou.

Postup: doostření na původním rozlišení, pak zvětšení LANCZOSem tak, aby už
prohlížeč obrázek jen zmenšoval, a závěrečné jemné doostření. Kontrast a barvy
schválně skoro nesaháme, silnější křivka fotky zašpiní.

Originály zůstávají v photo-src/, výstup jde do public/img/.
"""

from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter

SRC = Path("photo-src")
OUT = Path("public/img")

# Cíl: dost pixelů na dlaždici 390 px při DPR 2 i po ořezu na 4:3.
MIN_W, MIN_H, MAX_SCALE = 830, 620, 3.0


def scale_for(w: int, h: int) -> float:
    return min(MAX_SCALE, max(1.0, MIN_W / w, MIN_H / h))


def enhance(im: Image.Image) -> Image.Image:
    im = im.convert("RGB")
    im = ImageEnhance.Color(im).enhance(1.06)
    im = im.filter(ImageFilter.UnsharpMask(radius=1.0, percent=80, threshold=3))

    s = scale_for(*im.size)
    if s > 1.01:
        im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
        im = im.filter(ImageFilter.UnsharpMask(radius=1.5, percent=50, threshold=4))
    return im


def main() -> None:
    for src in sorted(SRC.glob("*.webp")):
        im = Image.open(src)
        before = im.size
        out = enhance(im)
        dst = OUT / src.name
        out.save(dst, "WEBP", quality=84, method=6)
        print(f"{src.name}: {before[0]}x{before[1]} -> {out.width}x{out.height}, "
              f"{dst.stat().st_size // 1024} kB")


if __name__ == "__main__":
    main()
