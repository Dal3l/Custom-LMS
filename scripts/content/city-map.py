"""Draws the simple town map for English A1, module 9 (directions).

    python3 scripts/content/city-map.py  →  content/english-a1/assets/maps/town.png

Layout (the lesson texts depend on it — change both together):
  Main Street runs left → right through the middle; Green Street and
  River Road cross it. "You are here" is on Main Street, far left, facing right.
  Above Main Street: Park | Museum, Bank | Hospital
  Below Main Street: School, Pharmacy | Supermarket, Café | Cinema, Metro station
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

W, H = 1600, 1000
ROAD = 110
MAIN_Y = H // 2 - ROAD // 2  # top of Main Street
GREEN_X, RIVER_X = 520, 1060  # left edges of the two crossing streets

FONTS = "/usr/share/fonts/opentype/inter/"
title = ImageFont.truetype(FONTS + "Inter-Bold.otf", 34)
label = ImageFont.truetype(FONTS + "Inter-SemiBold.otf", 30)
street = ImageFont.truetype(FONTS + "Inter-Medium.otf", 26)

img = Image.new("RGB", (W, H), "#eef2f7")
d = ImageDraw.Draw(img)

# Roads with dashed centre lines.
d.rectangle([0, MAIN_Y, W, MAIN_Y + ROAD], fill="#9aa3ad")
for x in (GREEN_X, RIVER_X):
    d.rectangle([x, 0, x + ROAD, H], fill="#9aa3ad")
for x in range(0, W, 60):
    if not any(sx - 10 < x < sx + ROAD for sx in (GREEN_X, RIVER_X)):
        d.line([x, MAIN_Y + ROAD // 2, x + 30, MAIN_Y + ROAD // 2], fill="white", width=4)
for sx in (GREEN_X, RIVER_X):
    for y in range(0, H, 60):
        if not MAIN_Y - 10 < y < MAIN_Y + ROAD:
            d.line([sx + ROAD // 2, y, sx + ROAD // 2, y + 30], fill="white", width=4)

def text_center(box, text, font, fill):
    x0, y0, x1, y1 = box
    tw, th = d.textbbox((0, 0), text, font=font)[2:]
    d.text(((x0 + x1 - tw) / 2, (y0 + y1 - th) / 2), text, font=font, fill=fill)

def place(box, name, color):
    x0, y0, x1, y1 = box
    d.rounded_rectangle([x0 + 14, y0 + 14, x1 - 14, y1 - 14], radius=22, fill=color, outline="#334155", width=3)
    font, size = label, 30
    while d.textbbox((0, 0), name, font=font)[2] > (x1 - x0) - 48:
        size -= 2
        font = ImageFont.truetype(FONTS + "Inter-SemiBold.otf", size)
    text_center((x0 + 14, y0 + 14, x1 - 14, y1 - 14), name, font, "#0f172a")

top, bottom = (0, MAIN_Y), (MAIN_Y + ROAD, H)
left, middle, right = (0, GREEN_X), (GREEN_X + ROAD, RIVER_X), (RIVER_X + ROAD, W)

def half(span, i):
    a, b = span
    m = (a + b) // 2
    return (a, m) if i == 0 else (m, b)

def box(cols, rows):
    return (cols[0], rows[0], cols[1], rows[1])

place(box(left, top), "PARK", "#bbf7d0")
place(box(half(middle, 0), top), "MUSEUM", "#fde68a")
place(box(half(middle, 1), top), "BANK", "#c7d2fe")
place(box(right, top), "HOSPITAL", "#fecaca")
place(box(half(left, 0), bottom), "SCHOOL", "#fed7aa")
place(box(half(left, 1), bottom), "PHARMACY", "#a7f3d0")
place(box(half(middle, 0), bottom), "SUPERMARKET", "#fbcfe8")
place(box(half(middle, 1), bottom), "CAFÉ", "#fde68a")
place(box(half(right, 0), bottom), "CINEMA", "#ddd6fe")
place(box(half(right, 1), bottom), "METRO", "#bae6fd")

# Street names.
def pill(name):
    tw, th = d.textbbox((0, 0), name, font=street)[2:]
    lbl = Image.new("RGBA", (tw + 36, 50), (0, 0, 0, 0))
    ld = ImageDraw.Draw(lbl)
    ld.rounded_rectangle([0, 0, tw + 35, 49], radius=24, fill="#334155")
    ld.text((18, (50 - th) / 2 - 2), name, font=street, fill="white")
    return lbl

main = pill("Main Street")
img.paste(main, (GREEN_X + ROAD + 150, MAIN_Y + (ROAD - 50) // 2), main)
for sx, name in ((GREEN_X, "Green Street"), (RIVER_X, "River Road")):
    v = pill(name).rotate(90, expand=True)
    img.paste(v, (sx + (ROAD - 50) // 2, 60), v)

# You are here: a star on Main Street, far left, with an arrow to the right.
cx, cy = 70, MAIN_Y + ROAD // 2
d.ellipse([cx - 26, cy - 26, cx + 26, cy + 26], fill="#ef4444", outline="white", width=4)
d.polygon([(cx + 40, cy - 16), (cx + 72, cy), (cx + 40, cy + 16)], fill="#ef4444")
d.rounded_rectangle([8, MAIN_Y - 62, 300, MAIN_Y - 14], radius=14, fill="#ef4444")
text_center((8, MAIN_Y - 62, 300, MAIN_Y - 14), "YOU ARE HERE", street, "white")

out = Path("content/english-a1/assets/maps/town.png")
out.parent.mkdir(parents=True, exist_ok=True)
img.save(out, optimize=True)
print("✓", out)
