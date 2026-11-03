---
name: truebatch-visual-system
description: MANDATORY check before designing, building or editing ANY TrueBatch section, component or mock. Defines the one visual system for the whole site — corner radius per role, elevation (flat vs float), the button family, chips, inputs, card hover. Use alongside truebatch-typography and tokens/tokens.css.
---

# TrueBatch visual system: one look across every section

The user asked for a single consistent style, judged at the level of a "$100B product's chief design officer". Mixed radii, mixed button shapes and cards that use shadows inconsistently are defects. Colours come from `tokens/tokens.css` and fonts from the `truebatch-typography` skill. This skill covers shape and depth.

The implementation lives in `index.html` as the "TrueBatch visual system" block (`--r-pill`, `--r-card`, `--r-inner`, `--hairline`, `--shadow-float`). Reuse those variables. Never hard-code a new radius or shadow.

## Corner radius: one rule per role
| Role | Radius | Examples |
|---|---|---|
| Controls | **pill** (`--r-pill`) | every button, tab, segmented control, chip, tag, lot code tag, status chip, input, select, nav pill, close button |
| Surfaces | **16px** (`--r-card`) | cards, panels, form cards, floating cards, the drop zone, the top of bottom sheets |
| Surfaces nested inside a surface | **10px** (`--r-inner`) | widget inside a phone, tables inside a card, the file upload row, success states, screenshot frames inside a card |
| Physical objects | real-world corners | paper reports (about 3px), product packs, phone hardware, printed labels on packs |

Merchant store mocks (the made-up "morrow" store) follow the same control and surface rules, so the page never mixes shapes. Only their colours differ.

## Elevation: two levels only
- **Flat (default):** a 1px hairline border (`--hairline`), no shadow. Use it for everything that sits on the page.
- **Float:** one shadow (`--shadow-float`), only for things that genuinely float: the header pills, the persistent QR card, the product UI being demonstrated in a pinned stage (for example the draft record), and the hover state of interactive cards.
- Physical objects (papers, packs, phones) keep their own object shadows, because they are photographs of things, not UI.

## Buttons: one family
- **Sizes:** 52px (hero, closing, form submit), 40px (header and default), 34px (small actions inside product UI).
- **Variants:**
  - Primary: lime fill, forest text. Use at most one per view.
  - Dark: forest fill, white text. Use for in-product actions and form submits.
  - Outline: 1px border.
  - Text link: arrow plus hover nudge.
- **All buttons:** pill shape, Spline Sans 600, icon gap of 10–12px, content centred.

## Chips and tags: one recipe
- Pill, 24px tall (20px when nested in a dense UI), 10px horizontal padding, 11–12px weight 500.
- **Variants:** neutral (hairline border), accent (lime or forest), review (sand fill), solid (forest).
- Never use pass/fail or "certified" chips.

## Cards
- Same recipe everywhere: warm `#F9F6EE` or white fill, hairline border, 16px radius, 24px padding (20px on mobile).
- **Hover (the same everywhere):** `translateY(-4px)` plus `--shadow-float`, plus the card's own content cue (product lifts, TrueBatch spot highlights). No colour flips.

## Check before you hand anything over
Run this in the browser and confirm the results:
- controls and chips all report `pill`
- cards report `16px`
- nested surfaces report `10px`
- flat surfaces report `none` for their shadow

```js
const g={controls:'button,.btn,.coa,.tbw-btn,.approve,input,select,.role-tab',chips:'.lot,.cat-lot,.sample,.pill,.panels span,.lchip',cards:'.scard,.cat,.rp-list li,.setup,.qr-chip,.draft',nested:'.tbw,.tb-w,.lots,.file,.setup .done'};
Object.fromEntries(Object.entries(g).map(([k,s])=>[k,[...new Set([...document.querySelectorAll(s)].map(e=>{const r=parseFloat(getComputedStyle(e).borderTopLeftRadius);return r>=e.offsetHeight/2-1?'pill':r+'px'}))]]))
```
