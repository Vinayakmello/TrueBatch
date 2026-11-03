---
name: truebatch-typography
description: MANDATORY check before designing, building or editing ANY TrueBatch page, section, frame, component or mock (HTML, CSS, Figma). TrueBatch uses exactly two fonts — Spline Sans for display and headings, Inter for paragraphs and body/UI. No other font family is allowed.
---

# TrueBatch typography — the only allowed fonts

This rule comes from the user. It overrides every reference, skill or default, including the "monospace for evidence" idea in `truebatch-design-references`.

| Role | Font | Token |
|---|---|---|
| Display, headlines, section titles, header text, logo, buttons | **Spline Sans** | `--font-display` |
| Paragraphs, body copy, UI text, labels, tables, values, lot numbers, captions | **Inter** | `--font-body` |

Both come from `tokens/tokens.css`, which loads them from Google Fonts.

## Rules
- Never add another family. That means no monospace (JetBrains Mono, IBM Plex Mono, ui-monospace…), no serif and no system font picked on purpose. The only fallbacks allowed are the `system-ui, sans-serif` ones already in the tokens.
- Don't load any extra Google Fonts `<link>` or `@import`.
- For numbers, lot codes, report IDs, units and other "evidence" strings, use **Inter** with `font-variant-numeric: tabular-nums`. Medium weight (500) or a small outlined tag can set them apart. Never switch font to do it.
- Use the token variables (`var(--font-display)`, `var(--font-body)`), not hard-coded family names.

## Check before you hand anything over
1. Search the file for `font-family`, `font:`, `fonts.googleapis`, `@import` and `mono`. Every family must resolve to `--font-display` or `--font-body`.
2. In the browser, run `[...new Set([...document.body.querySelectorAll('*')].filter(e => !(e instanceof SVGElement)).map(e => getComputedStyle(e).fontFamily))]`. It must list only Spline Sans and Inter stacks.
3. Form controls don't inherit fonts by default, so the CSS reset must include `button, input, select, textarea { font: inherit; }`.
