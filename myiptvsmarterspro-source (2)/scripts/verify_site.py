#!/usr/bin/env python3
"""Site-wide verification of the built dist/ folder:
metadata, JSON-LD, headings, keywords, links (broken + orphans), images, order buttons."""
import os
import re
import json
import html as hm
from collections import defaultdict

DIST = "/home/z/my-project/myiptvsmarterspro/dist"
SITE = "https://myiptvsmarterspro.com"
KW = ["iptv smarters pro", "abonnement iptv", "iptv france", "iptv code", "code iptv"]

problems = []
warnings = []


def pages():
    out = []
    for root, _, files in os.walk(DIST):
        for f in files:
            if f.endswith(".html"):
                path = os.path.join(root, f)
                rel = "/" + os.path.relpath(path, DIST).replace(os.sep, "/")
                if rel.endswith("/index.html"):
                    rel = rel[: -len("index.html")]
                if rel == "/index":
                    rel = "/"
                out.append((rel, path))
    return sorted(out)


PAGES = pages()
print(f"Pages found: {len(PAGES)}")

linked_from = defaultdict(set)
titles = {}

for rel, path in PAGES:
    raw = open(path, encoding="utf-8").read()
    no_script = re.sub(r"<script[^>]*>.*?</script>", " ", raw, flags=re.S | re.I)
    no_style = re.sub(r"<style[^>]*>.*?</style>", " ", no_script, flags=re.S | re.I)
    text = hm.unescape(re.sub(r"<[^>]+>", " ", no_style))
    text = re.sub(r"\s+", " ", text).strip()

    # --- metadata ---
    m = re.search(r"<title>(.*?)</title>", raw, re.S)
    title = m.group(1).strip() if m else ""
    titles[rel] = title
    if not (55 <= len(title) <= 70):
        warnings.append(f"{rel}: title {len(title)} chars (target 55-70): {title[:80]}")
    m = re.search(r'<meta name="description" content="([^"]*)"', raw)
    desc = m.group(1) if m else ""
    if not (145 <= len(desc) <= 165):
        warnings.append(f"{rel}: description {len(desc)} chars (target 145-160)")
    if not re.search(r'rel="canonical"', raw):
        problems.append(f"{rel}: no canonical")

    # --- H1 ---
    h1s = re.findall(r"<h1[^>]*>(.*?)</h1>", no_style, flags=re.S | re.I)
    if len(h1s) != 1:
        problems.append(f"{rel}: {len(h1s)} H1 tags")
    for h2 in re.findall(r"<h2[^>]*>(.*?)</h2>", no_style, flags=re.S | re.I):
        pass  # per-page H2 checks below only for home

    # --- JSON-LD ---
    for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', raw, flags=re.S):
        try:
            json.loads(block)
        except Exception as e:
            problems.append(f"{rel}: JSON-LD parse error: {e}")

    # --- images ---
    for img in re.findall(r"<img\b[^>]*>", no_style):
        if not re.search(r'alt="[^"]+"', img):
            problems.append(f"{rel}: img without alt: {img[:80]}")
        if not (re.search(r'width="\d+"', img) and re.search(r'height="\d+"', img)):
            problems.append(f"{rel}: img without width/height: {img[:80]}")

    # --- links ---
    for href in re.findall(r'href="([^"]+)"', no_style):
        if href.startswith("#") or href.startswith("mailto:") or href.startswith("http"):
            if href.startswith(SITE):
                target = (href[len(SITE):] or "/").split("#")[0].split("?")[0] or "/"
                linked_from[target].add(rel)
            continue
        if href.startswith("/"):
            clean = href.split("#")[0].split("?")[0] or "/"
            linked_from[clean].add(rel)
            # broken check
            if clean.endswith("/") or clean == "/":
                fpath = os.path.join(DIST, clean.lstrip("/"), "index.html") if clean != "/" else os.path.join(DIST, "index.html")
            else:
                fpath = os.path.join(DIST, clean.lstrip("/"))
                if not os.path.exists(fpath):
                    fpath = os.path.join(DIST, clean.lstrip("/") + "/index.html")
            if not os.path.exists(fpath):
                problems.append(f"{rel}: broken internal link -> {href}")

    # --- word count (content pages) ---
    words = re.findall(r"\w+", text)
    wc = len(words)

    if rel == "/":
        low = text.lower()
        for kw in KW:
            n = low.count(kw)
            dens = 100 * n * len(kw.split()) / max(wc, 1)
            print(f"  HOME keyword '{kw}': {n}x ({dens:.2f}% of {wc} words)")
        if not (1800 <= wc <= 2600):
            warnings.append(f"/: homepage word count {wc} (target 1800-2500)")
        # widget.js on home
        if "client.vpn-protected.com/widget.js" not in raw:
            problems.append("/: widget.js missing (hasOrder)")
        # order buttons
        nforms = len(re.findall(r'data-iptv-form="', raw))
        print(f"  HOME data-iptv-form buttons: {nforms}")
        if nforms < 2:
            problems.append("/: too few order buttons")

    # --- article checks ---
    if rel.startswith("/blog/") and rel != "/blog/":
        art_links = [h for h in re.findall(r'href="(/blog/[^"]+)"', no_style) if h != rel]
        if len(set(art_links)) < 2:
            problems.append(f"{rel}: article links to fewer than 2 other articles")
        if "/" not in [h for h in re.findall(r'href="(/)"', no_style)]:
            problems.append(f"{rel}: no link to home")

# --- orphans ---
for rel, _ in PAGES:
    if rel == "/":
        continue
    if rel == "/404":
        continue
    incoming = linked_from.get(rel, set())
    if len(incoming) < 2:
        warnings.append(f"ORPHAN-ish {rel}: linked from {len(incoming)} pages: {sorted(incoming)}")

# --- unique titles ---
dups = {t: [r for r, tt in titles.items() if tt == t] for t in set(titles.values())}
for t, rs in dups.items():
    if len(rs) > 1:
        problems.append(f"duplicate title on {rs}: {t[:60]}")

print("\n=== PROBLEMS ===")
for p in problems:
    print("  ✗", p)
if not problems:
    print("  (none)")
print("\n=== WARNINGS ===")
for w in warnings:
    print("  ⚠", w)
if not warnings:
    print("  (none)")
print("\nRESULT:", "PROBLEMS" if problems else "clean")
