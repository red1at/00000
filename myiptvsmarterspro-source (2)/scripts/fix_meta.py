#!/usr/bin/env python3
"""Trim all meta descriptions to <=159 chars (word boundary) in .md frontmatter and .astro pages."""
import re
import os
import glob

ROOT = "/home/z/my-project/myiptvsmarterspro"


def trim(desc: str, limit=159) -> str:
    if len(desc) <= limit:
        return desc
    cut = desc[:limit]
    # cut at last space or punctuation
    for sep in [". ", ", ", "; "]:
        idx = cut.rfind(sep)
        if idx > 80:
            return cut[: idx + 1].rstrip()
    idx = cut.rfind(" ")
    if idx > 80:
        out = cut[:idx].rstrip()
        # avoid trailing comma/colon
        out = re.sub(r"[,;:…]$", "", out)
        return out + "."
    return cut.rstrip()


changed = []

# 1. Blog markdown frontmatter
for md in glob.glob(f"{ROOT}/src/content/blog/*.md"):
    src = open(md, encoding="utf-8").read()
    m = re.search(r"^description: \"(.*)\"$", src, flags=re.M)
    if m:
        old = m.group(1)
        new = trim(old)
        if new != old:
            src = src.replace(f'description: "{old}"', f'description: "{new}"', 1)
            open(md, "w", encoding="utf-8").write(src)
            changed.append((os.path.basename(md), len(old), len(new)))

# 2. Astro pages — description="..." props
for astro in glob.glob(f"{ROOT}/src/pages/*.astro") + [f"{ROOT}/src/components/ProductPage.astro"]:
    src = open(astro, encoding="utf-8").read()
    out = src
    for m in re.finditer(r'description: "([^"]*)"', src):
        old = m.group(1)
        new = trim(old)
        if new != old:
            out = out.replace(f'description: "{old}"', f'description: "{new}"', 1)
    # attribute-style props: description="..."
    for m in re.finditer(r'\n(\s*)description="([^"]*)"', src):
        old = m.group(2)
        new = trim(old)
        if new != old:
            out = out.replace(f'description="{old}"', f'description="{new}"', 1)
    if out != src:
        open(astro, "w", encoding="utf-8").write(out)
        changed.append((os.path.basename(astro), "-", "-"))

for c in changed:
    print("trimmed:", c)
print(f"\n{len(changed)} files updated")
