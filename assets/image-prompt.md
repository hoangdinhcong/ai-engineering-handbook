# Image generation prompt — AI Engineering series

Reusable prompt template for generating hero infographic images via `codex` CLI.
Tested with `codex-cli 0.133.0-alpha.1` (gpt-5.5, ChatGPT auth) and ChatGPT's built-in image generation tool.

## How to use

```bash
cat batch-prompt.txt | codex exec \
  --skip-git-repo-check \
  --sandbox workspace-write \
  --cd /Users/hoangcong/workbuddy/JMSNEXT/jms-docs/ai-engineering \
  -i images/09-rag.png \
  -
```

The `-i images/09-rag.png` attaches the reference image as style anchor. Replace `09-rag.png` with any of the generated images in this series — they all share the same aesthetic.

Recommended: don't run more than 2 codex sessions in parallel (image-gen quota hits fast). Run 5–10 minute batches sequentially.

---

## Shared style block (paste into every batch prompt)

```
## SHARED STYLE (apply to every image — non-negotiable)

**REFERENCE STYLE**: the attached image (09-rag.png) is the TARGET visual style. Match its aesthetic precisely.

**Canvas:**
- Format: PNG, ~1200x900 (4:3)
- Background: ONE single light cream / off-white (#faf6ee) — the ENTIRE image is on this single cream background, no other backgrounds anywhere
- Illustration: clean hand-drawn / sketchy line art, friendly approachable, exactly like the reference

**Color palette (used sparingly):**
- Title and key highlights: muted coral red (#d9544a)
- Secondary accents: soft purple (#8c7fb8)
- Body text: dark warm gray (#3a3530)
- That's it. No white panels. No other colors.

**LABEL / CALLOUT RULES — VERY IMPORTANT:**
- Each callout label is PLAIN BOLD ALL-CAPS text (1-3 words), placed DIRECTLY on the cream background
- ⛔ ABSOLUTELY NO rectangular box around labels
- ⛔ ABSOLUTELY NO rounded-rectangle card / badge / pill behind labels
- ⛔ ABSOLUTELY NO outlined frame / border around labels
- ⛔ ABSOLUTELY NO white / lighter background patch behind labels
- ⛔ NO drop shadows on labels
- ✅ Connect labels to illustration parts via thin (1-1.5px) leader lines with a small simple arrowhead, OR via dotted lines, OR via a simple curve — NO box at either end
- ✅ Label color: coral red (#d9544a). The 1-line Vietnamese explanation directly underneath uses smaller normal-weight darker text on the same cream background — also no box
- The reference image demonstrates the correct style: labels float as plain text on cream, NO boxes whatsoever

**Composition:**
- BIG BOLD TITLE at top in coral red (mixed VN/EN as specified per image), centered or left-aligned. Optional smaller subtitle in muted gray below.
- Central illustration showing the concept
- 4-7 callouts with leader lines pointing to parts
- 1-2 sentence Vietnamese summary at bottom — plain text on cream, no box, no separator line
- Generous white space (cream space) between elements

**Forbidden:**
- ⛔ NO grids, NO timestamp watermarks, NO border frames around the whole image
- ⛔ NO white panels / cards anywhere
- ⛔ NO multiple background colors

**Misc:**
- Language: Vietnamese for explanations; English jargon preserved (RAG, LLM, Agent, etc.)
- Mood: educational poster, clean & airy, easy to grasp at a glance
- Text: keep short, use simple words, NO misspellings
- Final size: resize to 1200x900 via `sips -Z 1200`
```

---

## Per-image spec template

For each image in a batch, provide:

```
### {N}. {filename}.png
- Title: "{Tên big bold}"
- Subtitle: "{tuỳ chọn, nhỏ hơn}"
- Illustration: {mô tả ngắn artwork ở giữa}
- Callouts (label → 1-line explain):
  - {LABEL 1} — "{giải thích}"
  - {LABEL 2} — "{giải thích}"
  - …(4-7 callouts)
- Bottom: "{1-2 câu tóm tắt tiếng Việt}"
```

---

## Instructions block (paste at end of batch prompt)

```
## Instructions — STRICT WORKFLOW (do not deviate)

For EACH image, do EXACTLY these steps:
1. Call your built-in image generation tool ONCE with a prompt that combines the SHARED STYLE + the specific concept for that image.
2. Take the FIRST raw output PNG. Do NOT iterate, do NOT generate multiple variants, do NOT regenerate.
3. Run `sips -Z 1200 <generated-path>` to resize to ~1200px max dimension.
4. Copy/move the resized file to the exact target path under the output directory.
5. Verify the file exists with `test -f`.

⛔ DO NOT compose text locally — no Swift/AppKit, no Pillow, no Chrome screenshot, no Node renderer, no headless browser.
⛔ DO NOT search system fonts (no `fc-match`, no font discovery).
⛔ DO NOT post-process beyond the single `sips -Z 1200` resize.
⛔ DO NOT regenerate, retry, or attempt to "improve" the first output.

The image-gen tool itself draws the text directly into the image — we accept whatever text quality it produces. Minor imperfections in Vietnamese diacritics or letter spacing are FINE and expected.

Generate all images one at a time, sequentially. After all are saved, report a list of final file paths + sizes.
```

---

## Tips learned the hard way

- **No bullet boxes around labels.** Without the explicit ⛔ rules, the image-gen tool draws coral-bordered rectangles around each callout. They look "infographic-y" but overlay the illustration. Plain text + leader lines is much cleaner.
- **Attach a reference image.** `-i` flag with a known-good output gives consistency. Describing style in text is unreliable.
- **Use real Unicode signs (⛔ ✅) for emphasis.** The tool seems to weight these more than ALL-CAPS or asterisks.
- **Don't burst quota.** ChatGPT image-gen has hourly limits. 6 parallel sessions hit the cap fast; 2 parallel is safer.
- **Resize after generation.** Codex's image-gen tool emits 1024x1024 or 1448x1086 by default. Always `sips -Z 1200` (or your target) afterward.
- **Vietnamese in image text usually renders OK** thanks to system fonts, but the model occasionally drops diacritics. Keep callout text short to reduce risk.
- **Tell codex to STOP being perfectionist.** With overly detailed text rules, codex assumes you want pixel-perfect typography and falls back to local renderers (Swift/AppKit, Pillow, Chrome) to composite text on top of the illustration. This either fails (sandbox rejection, font lookup loops) or burns tokens generating dozens of variants without saving any. The "STRICT WORKFLOW" instructions block (generate-once, no-postprocess, no-local-render) prevents this rabbit hole.

---

## Files in this folder
- `style.css` — shared design system for all section HTML pages
- `script.js` — TOC interactions (mini-rail, scroll-spy)
- `image-prompt.md` — this file
