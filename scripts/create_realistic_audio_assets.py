from __future__ import annotations

import json
import math
import re
import shutil
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "audio-product-images"

SOURCES = {
    "earbuds": Path.home()
    / ".codex/generated_images/019f11d5-ab4f-7130-88f6-a7042e329cf3/ig_008babccdcfa767f016a42335c36c881918eac81213af7c77f.png",
    "overear": Path.home()
    / ".codex/generated_images/019f11d5-ab4f-7130-88f6-a7042e329cf3/ig_008babccdcfa767f016a4233989e0881918c4dd327819b5342.png",
    "sport": Path.home()
    / ".codex/generated_images/019f11d5-ab4f-7130-88f6-a7042e329cf3/ig_008babccdcfa767f016a4233d3243c8191892f5712aba8222b.png",
    "gaming": Path.home()
    / ".codex/generated_images/019f11d5-ab4f-7130-88f6-a7042e329cf3/ig_008babccdcfa767f016a423414cf048191a615ee0817065e11.png",
    "kids": Path.home()
    / ".codex/generated_images/019f11d5-ab4f-7130-88f6-a7042e329cf3/ig_008babccdcfa767f016a42347f55848191b6ddd3e51e01c9a7.png",
    "speaker_compact": Path.home()
    / ".codex/generated_images/019f11d5-ab4f-7130-88f6-a7042e329cf3/ig_008babccdcfa767f016a4234bb5ec88191a5a62acb1bc3df4b.png",
    "speaker_outdoor": Path.home()
    / ".codex/generated_images/019f11d5-ab4f-7130-88f6-a7042e329cf3/ig_008babccdcfa767f016a42350edc7481918cd93af358e6cc1a.png",
    "speaker_party": Path.home()
    / ".codex/generated_images/019f11d5-ab4f-7130-88f6-a7042e329cf3/ig_008babccdcfa767f016a42355948c481918875180ab77ec49b.png",
    "soundbar": Path.home()
    / ".codex/generated_images/019f11d5-ab4f-7130-88f6-a7042e329cf3/ig_008babccdcfa767f016a4235b92cc08191a2f8d7531959eabc.png",
    "hero": Path.home()
    / ".codex/generated_images/019f11d5-ab4f-7130-88f6-a7042e329cf3/ig_008babccdcfa767f016a4235fccf5481918ba7a3aa3c1de6c0.png",
    "guide": Path.home()
    / ".codex/generated_images/019f11d5-ab4f-7130-88f6-a7042e329cf3/ig_008babccdcfa767f016a4236389fec8191892f6ec32c7af5d4.png",
}


def parse_products() -> list[dict]:
    source = (ROOT / "src/data/audioProducts.ts").read_text()
    match = re.search(
        r"export const audioProducts: AudioProduct\[\] = ([\s\S]*?);\n\nexport const readyProducts",
        source,
    )
    if not match:
        raise RuntimeError("Could not parse audioProducts.ts")
    return json.loads(match.group(1))


def cover(img: Image.Image, size: tuple[int, int], shift_x: float = 0, shift_y: float = 0) -> Image.Image:
    target_w, target_h = size
    src_w, src_h = img.size
    scale = max(target_w / src_w, target_h / src_h)
    resized = img.resize((math.ceil(src_w * scale), math.ceil(src_h * scale)), Image.Resampling.LANCZOS)
    max_x = resized.width - target_w
    max_y = resized.height - target_h
    left = int(max_x * (0.5 + shift_x))
    top = int(max_y * (0.5 + shift_y))
    left = max(0, min(max_x, left))
    top = max(0, min(max_y, top))
    return resized.crop((left, top, left + target_w, top + target_h))


def vignette(img: Image.Image, strength: float = 0.34) -> Image.Image:
    w, h = img.size
    mask = Image.new("L", (w, h), 0)
    px = mask.load()
    cx, cy = w * 0.5, h * 0.46
    max_d = math.sqrt(cx * cx + cy * cy)
    for y in range(h):
        for x in range(w):
            d = math.sqrt((x - cx) ** 2 + (y - cy) ** 2) / max_d
            px[x, y] = int(max(0, min(255, (d - 0.28) / 0.72 * 255 * strength)))
    dark = Image.new("RGB", (w, h), (4, 8, 16))
    return Image.composite(dark, img, mask)


def polish(img: Image.Image, variant: int = 0, target=(1200, 900)) -> Image.Image:
    sx = ((variant % 5) - 2) * 0.035
    sy = (((variant // 5) % 3) - 1) * 0.025
    img = cover(img.convert("RGB"), target, sx, sy)
    if variant % 2:
        img = ImageEnhance.Color(img).enhance(1.04)
    if variant % 3 == 0:
        img = ImageEnhance.Contrast(img).enhance(1.06)
    if variant % 4 == 0:
        img = ImageEnhance.Brightness(img).enhance(1.025)
    img = vignette(img, 0.18 + (variant % 4) * 0.025)
    return img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=85, threshold=3))


def product_base(product: dict) -> str:
    category = product["category"].lower()
    collections = set(product["collections"])
    kind = product["kind"]
    if "kinder" in category:
        return "kids"
    if kind == "headset":
        return "gaming"
    if "sportkopfhoerer" in collections or kind == "openear":
        return "sport"
    if kind == "earbuds":
        return "earbuds"
    if kind == "overear":
        return "overear"
    if kind == "party" or "party-lautsprecher" in collections:
        return "speaker_party"
    if "outdoor-lautsprecher" in collections:
        return "speaker_outdoor"
    return "speaker_compact"


def save_webp(img: Image.Image, path: Path, quality: int = 90) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, "WEBP", quality=quality, method=6)


def main() -> None:
    missing = [str(path) for path in SOURCES.values() if not path.exists()]
    if missing:
        raise FileNotFoundError("Missing generated source images:\n" + "\n".join(missing))

    OUT.mkdir(parents=True, exist_ok=True)
    for old in OUT.glob("*.svg"):
        old.unlink()

    products = parse_products()
    source_images = {key: Image.open(path).convert("RGB") for key, path in SOURCES.items()}

    for index, product in enumerate(products):
        base_key = product_base(product)
        img = polish(source_images[base_key], index)
        save_webp(img, OUT / f"{product['id']}.webp")

    masters = {
        "hero-audio.webp": ("hero", (1600, 1000), 92),
        "category-in-ear.webp": ("earbuds", (1200, 900), 90),
        "category-over-ear.webp": ("overear", (1200, 900), 90),
        "category-anc.webp": ("overear", (1200, 900), 90),
        "category-sport.webp": ("sport", (1200, 900), 90),
        "category-gaming.webp": ("gaming", (1200, 900), 90),
        "category-kids.webp": ("kids", (1200, 900), 90),
        "category-speaker.webp": ("speaker_compact", (1200, 900), 90),
        "category-outdoor.webp": ("speaker_outdoor", (1200, 900), 90),
        "category-party.webp": ("speaker_party", (1200, 900), 90),
        "category-soundbar.webp": ("soundbar", (1200, 900), 90),
        "guide-headphones.webp": ("guide", (1200, 900), 90),
        "guide-anc.webp": ("overear", (1200, 900), 90),
        "guide-speakers.webp": ("speaker_outdoor", (1200, 900), 90),
        "guide-ipx.webp": ("speaker_outdoor", (1200, 900), 90),
    }
    for name, (key, size, quality) in masters.items():
        save_webp(polish(source_images[key], len(name), size), OUT / name, quality)

    manifest = {
        "productImages": len(products),
        "supportingImages": len(masters),
        "folder": str(OUT),
        "format": "webp",
        "sources": {key: str(path) for key, path in SOURCES.items()},
    }
    (ROOT / "work" / "realistic-image-manifest.json").write_text(json.dumps(manifest, indent=2))
    print(json.dumps(manifest, indent=2))


if __name__ == "__main__":
    main()
