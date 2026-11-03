# AGENTS.md: TrueBatch website

This repo is the TrueBatch marketing site: lab-results publishing software for Shopify brands.

**Before you write or change anything, read `TRUEBATCH_PLAYBOOK.md`.** It holds the client brief, hard rules, voice, the shared data, design tokens, the visual system, components, motion and page recipes.

## To build a new page
1. Copy `templates/page-template.html` to `pages/<slug>.html`.
2. Use only the classes in `assets/truebatch.css` and the tokens in `tokens/tokens.css`.
3. Follow a recipe in playbook section 10, and use the data in section 4.
4. Run the checklist in playbook section 11.

See `pages/baby-food.html` for a finished example.

## Non-negotiables (short version)
- **No certification language.** No "passed", "certified", "safe" or "verified", and no pass/fail badges. TrueBatch is not a lab and doesn't decide safety.
- **Results stay as reported.** "Not Detected" stays "Not Detected", units stay as reported, and qualifiers are kept.
- **Sample data is labelled** "Illustrative sample", and the original lab report is always one click away.
- **Nothing invented.** No made-up logos, stats, reviews or trust marks.
- **Fonts:** Spline Sans (display and headings) and Inter (body) only. No monospace.
- **Colours:** token colours only. Lime `#00F500` is a fill for CTAs and highlights, never text on white.
- **Shape:** controls are pills, cards 16px, nested surfaces 10px. Surfaces are flat with a hairline border, with one float shadow only for things that float.
- **Wireframes show layout and motion only.** Colour, type and shape always come from the playbook.

## Preview

```bash
python3 -m http.server 5178
```

Then open `http://127.0.0.1:5178/`. Pages need HTTP; `file://` won't work.
