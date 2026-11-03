# TrueBatch Playbook

**One file to understand TrueBatch and build any page or sub-page in its style.**
It's written for any person or AI agent (Claude, ChatGPT, Grok, Gemini, Cursor…), and it doesn't depend on any one tool.

> **How to use this file**
> 1. Read sections 1–4 (brief, hard rules, voice, data) before writing anything.
> 2. Read sections 5–8 (tokens, type, visual system, components) before styling anything.
> 3. To make a page, copy `templates/page-template.html` to `pages/<slug>.html`, pick a recipe from section 10, and fill it in.
> 4. Run the checklist in section 11 before you hand the page over.
>
> If anything here conflicts with a wireframe or screenshot, **this file wins**. Wireframes show layout and motion only, never colour, type or corner style.

---

## 0. File map

| Path | What it is |
|---|---|
| `TRUEBATCH_PLAYBOOK.md` | This file: the single source of truth |
| `AGENTS.md`, `CLAUDE.md` | Short pointers that coding agents read automatically |
| `tokens/tokens.css`, `tokens/tokens.json` | Design tokens: colour, type, spacing, radius, motion (from the Figma style board) |
| `assets/truebatch.css` | **Page kit**: every shared component (header, buttons, chips, cards, widget, FAQ, CTA, footer) |
| `assets/truebatch.js` | Kit behaviour: header split, FAQ accordion, scroll reveal, prototype form |
| `templates/page-template.html` | Starting point for every new page, with commented, reorderable sections |
| `pages/baby-food.html` | Worked example of a sub-page built only from the template and kit |
| `index.html` | The homepage. It's the reference implementation of the big scroll-driven moments and is self-contained (its CSS and JS are inline) |
| `.claude/skills/*` | The same rules split into Claude skills (typography, visual system, references, pages) |

Preview locally from the project root:

```bash
python3 -m http.server 5178
```

Then open `http://127.0.0.1:5178/`. Pages must be served over HTTP, not opened as `file://`.

---

## 1. The brief (from the client)

The source is `TrueBatch_Homepage_Design_Brief.pdf` (2 pages). Its content is reproduced here so that no agent needs the PDF.

### The assignment
**Make laboratory results useful, understandable and visible.** Design for TrueBatch, a software product for brands that already test their products. Communicate:
- what the product does
- why that work matters
- why a brand can trust the process

It's a creative brief, not a page layout.

### The category
**Lab-results operations and publishing software for Shopify brands.** It's a bridge between:
- the authoritative laboratory report
- a brand's internal review process
- customer-facing product information

It is **not** a testing laboratory, a certification service or another supplement brand.

### What we offer (the four pillars)
1. **Turn reports into usable data.** Start with PDF certificates of analysis (COAs). Extract results, units, qualifiers, dates, product and lot details into structured drafts, rather than just hosting a file.
2. **Keep the brand in control.** Make extracted information reviewable against the original source before publication. Preserve important meaning, including "Not Detected", units and lot matching.
3. **Publish understandable proof.** Show clear, lot-specific results with the source document accessible. This can appear on Shopify product pages, public results views, QR destinations and optional lot lookup.
4. **Make recurring testing easier.** Help brands repeat the process when new reports arrive, keep history, and get hands-on help during setup.

### Who should recognise themselves
- **Brands selling:** sports nutrition and protein, supplements, baby food, and prenatal and family vitamins.
- **The people at those brands:** founders, QA and operations teams, and ecommerce teams managing product testing and disclosure.

### How it should feel
**Warm precision. Serious about evidence, easy to approach.**
- Careful, credible, contemporary and quietly confident.
- Responsible without looking clinical.
- Human without becoming D2C lifestyle advertising.
- Clarity and judgement over generic SaaS decoration, hype or invented reassurance.

### The results widget (brief, page 2): the one retained visual reference
Any shopper-facing results view must communicate four things:
- **Product and lot context:** the result belongs to a specific product, batch or lot, and test date.
- **Readable result detail:** names, values, units and qualifiers are readable, not just a PDF thumbnail.
- **Original evidence available:** the viewer can open the original COA and browse published lots.
- **No certification claims:** it's an illustrative sample only. TrueBatch is never presented as the authority deciding whether a product is safe.

The brief's example widget has a header (product name plus an "Illustrative merchant product" line), a lot selector, a "View original COA" button, "Lab report linked to this lot" with its date, filter chips (All results · Heavy metals · Pesticides · Microbials · Nutrients), one row per analyte (Lead 3.2 ppb, Arsenic Not Detected, Cadmium 1.1 ppb, Mercury <0.5 ppb), an "About these results" note ("Values are displayed from a reviewed lab source."), and footer links (Browse published lots · Original report · Share).

### Success test
From the design alone, a merchant should understand three things, **without invented trust marks or unsupported claims**:
1. what TrueBatch does with existing lab reports
2. why human review matters
3. what shoppers see

**Every page must pass this test in miniature.**

### Competitor and category context (understand them, don't copy them)
- **LabLinks** (lab-links.com): COA and report hosting, storefront transparency.
- **LabTested** (labtested.co): lab-result publishing. It uses pass/fail badges, which TrueBatch must not.
- **Grüns** (gruns.co): a live consumer-facing testing page. Not a competitor.

---

## 2. Hard rules (never break these)

1. **No certification language.** Never use "Passed", "Certified", "Safe", "Verified", "Approved by TrueBatch", "Clean", or pass/fail and limit badges. Show reported values with units and qualifiers, nothing else.
2. **"Not Detected" stays "Not Detected".** Don't convert it to 0, "None" or a tick. Keep qualifiers such as `<LOQ` and `<0.5` with their value.
3. **Units stay as reported.** Never convert ppb to ppm.
4. **The original COA is always one click away** in any results view ("View original lab report (PDF)").
5. **Sample data is labelled.** Every results mock carries an **"Illustrative sample"** chip, and pages carry the footer disclaimer.
6. **No invented trust marks.** No customer logos, star ratings, review counts, "trusted by X brands", lab partnerships or statistics unless the client supplies them.
7. **TrueBatch is not a lab and doesn't decide safety.** Say this plainly wherever it could be misread.
8. **Fonts:** **Spline Sans** for display and headings, **Inter** for body and UI. Nothing else, including no monospace, even for lot codes or numbers (use Inter with `tabular-nums`).
9. **Colours:** only from `tokens/tokens.css`, plus the warm card `#F9F6EE`. **Lime `#00F500` is a fill** (primary CTA, highlights). It's never text on white.
10. **Shape:** one visual system (section 7). Controls are pills, surfaces are 16px, nested surfaces are 10px, surfaces are flat with a hairline, and there's one float shadow.
11. **Human review is the hero.** When showing the product, the review step (source line beside extracted value, a person approving) must be visible. Nothing ever "auto-publishes".
12. **Accessibility:**
    - Semantic headings in order.
    - Visible focus on everything interactive.
    - `prefers-reduced-motion` respected.
    - Every page is complete and readable at rest, with no preloaders.
    - At least 4.5:1 contrast for body text.

---

## 3. Voice and copy

**Tone:** warm precision. Plain sentences, specific nouns, no hype. Confident because it's careful.

**Headline pattern:** two short sentences, or one sentence split into a plain half and an **accented half** (`<span class="tb-accent">`).
- "From lab report to reviewed record"
- "Nothing goes live *until it matches the source.*"
- "Show approved lab results *where customers shop.*" (Here "approved" means approved by the brand's own team, never by TrueBatch.)
- "Built for the next batch, *and the one after.*"
- "For brands that already test, *and want it to show.*"
- "Your lab reports are done. *Put them to work.*"

| Say | Avoid |
|---|---|
| lab report, certificate of analysis (COA), results, lot, batch, reported value, unit, qualifier, LOQ, reviewed, draft, source, publish, original report | certified, verified safe, clean, toxin-free, guaranteed, best-in-class, revolutionary, AI-powered magic |
| "as reported by your laboratory" | "proven safe" |
| "your team reviews each value against the source" | "fully automated, no work needed" |
| "Illustrative sample" | presenting mock data as real |

- **Microcopy:** sentence case. Button labels are verbs, such as "Install on Shopify", "View original lab report (PDF)", "See how it works", "Request setup help" and "Look up".
- **Eyebrows:** short and uppercase, such as "HOW IT WORKS", "WHERE RESULTS APPEAR", "RECURRING TESTING", "WHO IT'S FOR".
- **Numbers:** use step numbers ("01 / 02 / 03") only for real sequences.

---

## 4. Data canon (reuse this so every page tells one story)

All data is illustrative. Keep values consistent across pages.

| Field | Value |
|---|---|
| Hero product | **Plant Protein / Vanilla**, 500 g, $38.00, pea and rice protein, 24 g protein per serving |
| Merchant store (mocks) | **morrow** (a made-up brand: neutral whites and greys, never TrueBatch green) |
| Laboratory | **Northfield Analytical** (made up) |
| Report ID | NFA-80412 |
| Current lot | **A2419**, tested **12 Sep 2026** |
| Lot A2419 results | Lead **3.2 ppb** (LOQ 1.0) · Arsenic **Not Detected** (LOQ 2.0 ppb) · Cadmium **1.1 ppb** (LOQ 0.5) · Mercury **<0.5 ppb** (below LOQ) · Protein 24.1 g per 30 g serving. Method ICP-MS |
| Lot history | A2416 (12 Jun 2026): Lead 2.9, Cd 1.0 · A2417 (10 Jul 2026): Lead 3.4, Cd 0.9 · A2418 (14 Aug 2026): Lead 3.0, Cd 1.2 · A2419 (12 Sep 2026) · **A2420** received 09 Oct 2026, a new report in review: Lead 3.1, Cd 1.0 |
| Other categories | Supplements: Daily Magnesium, lot M0712 · Baby food: Oat Cereal / Stage 1 or Pear & Oat, lot P3381 (Lead 1.4 ppb, Cd 0.8 ppb, tested 02 Oct 2026) · Prenatal: Prenatal 60 tablets, lot V5520 |
| Test panels (filter names) | Heavy metals · Pesticides · Microbials · Nutrients |
| Review states | Draft → Unchecked → "Check qualifier" (flag, sand colour) → "Matches source" → "Approved · ready to publish" |

---

## 5. Design tokens (`tokens/tokens.css`)

**Principle: white first, minimal.** Brand colours are accents.

| Token | Hex | Use |
|---|---|---|
| `--tb-forest-950` | `#0A2120` | Dark sections, footer, active pills |
| `--tb-forest-800` | `#035631` | Primary brand green: accent text, dark buttons, logo mark |
| `--tb-forest-700` | `#016E39` | Hover states, positive status ("Matches source") |
| `--tb-lime-500` | `#00F500` | **Fill only:** primary CTA, highlights, the newest item. Text on lime is forest-800 |
| `--tb-sand-200` | `#E7D9B9` | Warm backdrops, product labels, "needs review" chip |
| `--tb-cream-50` | `#F4F3EA` | Alternate section background |
| `#F9F6EE` (`--card-warm`) | | Card fill |
| `--tb-amber-500` | `#F67D1F` | Ratings only (currently unused) |

- **Neutrals:** `#FFFFFF`, `#FAFAF9`, `#F2F2F2`, `#ECECEC` (borders), `#99989B` (muted), `#5F6067` (secondary), `#212121` (primary text).
- **On dark backgrounds:**
  - text: cream `#F4F3EA`
  - secondary text: `#B9C2BC`
  - muted text: `#7F8C86`
  - lines: `#1E3A37`
  - panels: `#0F2B29`

**Type scale:**

| Size | Value |
|---|---|
| display | `clamp(44px … 88px)` |
| h1 | `36 → 64` |
| h2 | `28 → 44` |
| h3 | `22 → 28` |
| body | 16 |
| large | 18 |
| small | 14 |
| extra small | 12 |

**Leading:** tight 1.05, snug 1.2, normal 1.55. **Tracking:** display −0.03em, headings −0.015em.

- **Spacing:** a 4px base (`--space-1` to `--space-32`).
- **Section padding:** `--section-y: clamp(64px, 8vw, 128px)`.
- **Gutter:** `--gutter: clamp(16px, 4vw, 80px)`.
- **Container:** 1280px.

---

## 6. Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display and section headlines | Spline Sans | 500 | Tight tracking (−0.03 to −0.035em), `text-wrap: balance` |
| Card titles, buttons, UI labels | Spline Sans | 600 | −0.01 to −0.02em |
| Body, lead, answers, tables, values, lot codes | Inter | 400–500 | `font-variant-numeric: tabular-nums` |
| Eyebrows | Inter | 500 | 12px, uppercase, +0.06em |

Only those two families. Form controls must inherit fonts (`button, input, select, textarea { font: inherit; }`).

---

## 7. Visual system: one look everywhere

The variables live in `assets/truebatch.css`: `--r-pill`, `--r-card`, `--r-inner`, `--hairline`, `--shadow-float`.

| Role | Corner radius |
|---|---|
| **Controls:** buttons, tabs, chips, tags, lot tags, inputs, selects, nav pills, close buttons | **pill** |
| **Surfaces:** cards, panels, form cards, floating cards, the top of sheets | **16px** |
| **Nested surfaces:** a widget inside a card or phone, tables, file rows, screenshot frames | **10px** |
| **Physical objects:** paper reports (3px), product packs, phones, printed labels | real-world corners |

**Elevation: two levels only.**
- **Flat (default):** a 1px hairline (`rgb(10 33 32 / .09)`), no shadow.
- **Float:** one shadow, used only for:
  - the header pills
  - floating cards (such as the QR chip)
  - the demonstrated product UI (such as a draft record or widget on a stage)
  - interactive card hover
- **Physical objects** keep an object shadow (`--shadow-object`).

**Buttons, one family:**
- **Sizes:** 52px (`.btn--lg`), 40px (default) and 34px (`.btn--sm`).
- **Variants:**
  - Primary: lime. Use at most one per view.
  - `.btn--dark`: forest. For in-product actions and form submits.
  - `.btn--outline`
  - `.link-arrow`: a text link.
- **All buttons:** pills in Spline Sans 600 with centred content.

**Chips, one recipe:**
- Pill, 24px tall (20px with `.is-sm`).
- **Variants:** neutral, `.is-accent`, `.is-review` (sand), `.is-solid`, `.is-sample`.

**Cards:**
- Warm `#F9F6EE` or white, with a hairline, 16px radius and 24px padding (20px on mobile).
- **Hover is the same everywhere:** lift 4px plus the float shadow. No colour flips.

**Section rhythm:**
- Alternate white, cream (`.is-cream`) and occasionally a dark section (`.is-dark`) to change pace.
- The closing CTA is brand green (`.is-brand`), and the footer is forest-950.
- Avoid two dark sections in a row.

**Header (on every page):**
- Two white floating pills: logo plus wordmark, and an optional nav link plus a lime "Install on Shopify" button.
- They're joined in the centre at the top of the page and split to the edges after 40px of scroll (after Tinker). This is handled by `assets/truebatch.js`.

---

## 8. Component library (`assets/truebatch.css`)

| Component | Markup (abbreviated) |
|---|---|
| Section | `<section class="tb-section [is-cream\|is-warm\|is-dark\|is-brand] [tb-page-top]">` with `.tb-wrap` (1280px) or `.tb-narrow` (920px) inside |
| Layouts | `.tb-split` (2 columns), `.tb-split.is-sticky` (left column pinned at 120px), `.tb-grid.cols-2/3/4`, `.tb-stack`, `.tb-center` |
| Type | `.eyebrow`, `.tb-display`, `.tb-h1`, `.tb-h2`, `.tb-h3`, `.tb-accent`, `.tb-lead`, `.tb-body`, `.tb-fine` |
| Buttons | `.btn`, `.btn--lg`, `.btn--sm`, `.btn--dark`, `.btn--outline`, `.btn--block`, `.link-arrow`, a `.tb-ctas` row |
| Chips | `.chip`, `.is-sm`, `.is-accent`, `.is-review`, `.is-solid`, `.is-sample` |
| Card | `.tb-card` (`.is-white`, `.is-interactive`; `<a class="tb-card">` lifts on hover) with `h3`, `p`, `.num` |
| Inner surface and stage | `.tb-inner` (10px white panel), `.tb-stage` (cream stage for visuals, 10px) |
| Shopper results widget | `.tb-widget` (`.is-float`) with `.tb-widget__head`, `.tb-widget__meta`, `.chip.is-sample`, `.tb-rows`, `.tb-row`, then `.btn.btn--sm.btn--outline` "View original lab report (PDF)" |
| Paper lab report | `.tb-paper` with `.k`, `h4`, `.tb-row`, `.tb-row.is-hl` (the source line under review) |
| Product pack | `.tb-tub` with `.lid`, `.bd`, `.lb` (label text) |
| Pack and widget pair | `.tb-duo` wrapping a `.tb-tub` and a `.tb-widget`. They sit side by side and stack on phones |
| FAQ | `.faq-list` containing `.qa`: `h3 > button.qa-q[aria-expanded][aria-controls]` with a `.qa-ic` plus icon, and `.qa-a > div > p` |
| Forms | `.tb-form`, `.field` with `label` and `input/select/textarea` (pill, 52px), a `.btn--lg.btn--dark.btn--block` submit, and a `.tb-done[hidden]` success state. Prototype forms use `data-tb-form` and send nothing |
| Closing CTA | `.tb-section.is-brand.tb-cta`: `h2` with a lime accent, then `p` and `.tb-ctas` |
| Footer | `.foot` with `.foot-top`, `.foot-links`, `.foot-bottom` (keep the disclaimer text) |
| Reveal | add `.reveal` (and `style="--i:n"` to stagger). Elements fade up once when they scroll into view |

Copy exact markup from `templates/page-template.html`. Don't invent new radii, shadows or colours. If a page needs a new component, build it from these parts and add it to the kit and this table.

---

## 9. Motion

**Eases:**
- **Reveal:** `cubic-bezier(0.22, 1, 0.36, 1)`, 0.5–0.8s.
- **UI:** `cubic-bezier(0.4, 0, 0.2, 1)`, 0.15–0.3s.

**Rules:**
- One orchestrated moment per page at most. Everything else is a quiet reveal.
- Every frame is readable at rest, and `prefers-reduced-motion` removes movement.
- No preloaders, particles, 3D or scroll-jacking beyond the pinned sequences.
- Animate `transform`, `translate` and `opacity` only.

**The homepage's orchestrated moments** (reuse the idea when a page needs one, implemented in `index.html`):

| Section | Pattern |
|---|---|
| Hero | Scattered lab-report PDFs converge on scroll into a pile, a phone rises showing a store product page, and the badged "View lab results" button presses itself, opening the results sheet |
| How it works | A pinned stage. Upload: the report drops in. Extract: a scan line runs and fields fly into a draft. Review: a dotted link joins each draft row to its source line, a qualifier gets flagged then confirmed, and the record ends "Approved · ready to publish" |
| Where results appear | A huge headline dims as four cards rise over it, then the cards travel sideways (product page, browse lots, QR, lot lookup). Hover outlines the TrueBatch part in lime |
| Recurring testing | A product tub stays pinned. Each batch's report flies in and is filed behind it with a lot tab, the jar's printed lot flips, and the newest lot goes to review |
| Who it's for | Four product category cards, then "Across your team": a sticky intro with role pills, and one card per role scrolling, with the pills tracking the card in view |
| FAQ | A plain, centred accordion |
| Closing | Brand-green CTA with a setup form. Faint papers drift (parallax) |

---

## 10. Page recipes (how to make hundreds of pages)

**Steps for any page:**
1. Copy `templates/page-template.html` to `pages/<slug>.html`.
2. Write the page's one-line purpose and its version of the success test: what TrueBatch does here, why review matters, and what shoppers see.
3. Pick a recipe below, then delete or reorder template sections to match.
4. Swap in data from the data canon (section 4), and keep the "Illustrative sample" chip on every results mock.
5. Update `<title>`, `<meta name="description">` and `aria-current` in the nav.
6. Run the QA checklist (section 11).

| Page type | Section recipe |
|---|---|
| **Category page** (protein, supplements, baby food, prenatal) | Hero (category headline, that category's product and lot in the widget) → card grid (Upload · Check against the source · Show where shoppers look) → sticky split on human review → FAQ (3–5 category questions) → closing CTA. Example: `pages/baby-food.html` |
| **Role page** (founders, QA and ops, ecommerce) | Hero (the role's statement from the homepage) → card grid (3 points for that role) → sticky split showing that role's moment (founder: shopper widget · QA: paper source plus draft · ecom: product page, QR and lot lookup) → FAQ → CTA |
| **Feature page** (extraction, review, widget, QR, lot lookup, history) | Hero → one demonstration on a `.tb-stage` → card grid of specifics → a "what stays as reported" note → FAQ → CTA |
| **Sample results page** (a public lot page mock) | Header → `.tb-narrow` with product, lot and date, an "Illustrative sample" chip, filter chips (Heavy metals · Pesticides · Microbials · Nutrients), `.tb-row` results with LOQ, "View original lab report (PDF)", and "Browse published lots" → footer |
| **Help or setup article** | Header → `.tb-narrow` article (eyebrow, `.tb-h1`, `.tb-body` paragraphs, numbered steps as `.tb-card`) → FAQ → footer |
| **Legal or plain page** | Header → `.tb-narrow` with `.tb-h1` and `.tb-body` → footer |

**Naming:** slugs are kebab-case (`pages/qr-codes.html`). Section ids are short (`#how`, `#faq`). One `h1` per page.

---

## 11. QA checklist (run before handing over)

**Content**
- [ ] Passes the success test: what TrueBatch does with reports, why human review matters, what shoppers see.
- [ ] No pass/fail, certified, safe or verified language. No invented logos, stats or reviews.
- [ ] Every results mock has "Illustrative sample", "Not Detected" written out, units as reported, and an original-report link.
- [ ] The data matches the canon (section 4).

**Style**
- [ ] Only Spline Sans and Inter render.
- [ ] Only token colours are used. Lime is never text on white.
- [ ] Controls are pills, cards 16px, nested surfaces 10px, flat surfaces have no shadow.
- [ ] At most one lime primary button per view.

**Behaviour**
- [ ] The header joins and splits. Focus is visible. Reduced motion works.
- [ ] No horizontal scroll at 375px. The layout holds at 1440×900 and 375×812.
- [ ] No console errors.

**Browser checks** (paste into the console):

```js
// fonts: expect only Inter and Spline Sans stacks
[...new Set([...document.body.querySelectorAll('*')].filter(e=>!(e instanceof SVGElement)).map(e=>getComputedStyle(e).fontFamily))]
// shape: expect controls/chips = pill, cards = 16px, nested = 10px
const g={controls:'button:not(.qa-q),.btn,input,select',chips:'.chip',cards:'.tb-card',nested:'.tb-inner,.tb-widget,.tb-stage'}; // FAQ rows are full-width, not pills
Object.fromEntries(Object.entries(g).map(([k,s])=>[k,[...new Set([...document.querySelectorAll(s)].filter(e=>e.offsetHeight).map(e=>{const r=parseFloat(getComputedStyle(e).borderTopLeftRadius);return r>=e.offsetHeight/2-1?'pill':r+'px'}))]]))
// no horizontal scroll
document.documentElement.scrollWidth === innerWidth
```

---

## 12. Reference sites: what was borrowed, what to avoid

| Site | Borrowed | Avoid |
|---|---|---|
| **Tinker** (tinker.com) | The split floating pill header; real objects grounding software; one accent | Acid lime on white as text, toy energy |
| **Seed** (seed.com) | Packs with real material and light; small lot tags; calm, science-led copy | D2C lifestyle photography and promos |
| **See for Yourself** | A persistent "scan a sample result" QR; low-opacity step numbers | Preloaders; very long scroll-jacking |
| **LabTested** | One pinned card changing feature by feature; every value beside its context | Pass/fail badges; serif-italic headline formula; warm-photo hero |
| **FacilPay** | A pinned object with a stepped sequence | Crypto-dark glow, particles, 3D spectacle |

**Next upgrade:** real product photography or 3D renders would replace the CSS packs, which is how Tinker and Seed get realism. Keep the same compositions.
