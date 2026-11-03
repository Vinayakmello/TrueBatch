---
name: truebatch-design-references
description: Visual, typography and motion references for the TrueBatch homepage (LabTested, FacilPay, Tinker, See for Yourself, Seed), with what to borrow and what to avoid. Load before designing or building any TrueBatch page, frame or component.
---

# TrueBatch design references

Measured from the live sites on 2026-11-03 at 1440×900 (computed styles, loaded fonts, CSS transitions, libraries in use). Use these as a vocabulary, not a template. The brief comes first: "warm precision", serious about evidence, easy to approach, no hype, no invented trust marks, no certification claims.

## How to use this
- **Colours come from `tokens/tokens.css` first.** Wireframes and screenshots the user shares are for layout and motion, never for colour. Don't copy a wireframe's greys. Build each surface from the token palette (forest-950/800/700, lime-500 for highlights only, sand-200, cream-50, neutrals), plus any hex the user names, such as #F9F6EE for warm cards.
- **First load the mandatory `truebatch-typography` skill.** It allows only Spline Sans and Inter, and it overrides any font named below.
- The **TrueBatch brief** wins over any reference.
- LabTested is a **category competitor**. Learn how it explains the product. Do not copy its look.
- FacilPay, Tinker, See for Yourself and Seed are **craft references** for motion, type and composition only.
- Every borrowed technique must show something true about the product (a COA, a lot, an extraction, a review step, a shopper's view). Decoration for its own sake fails the brief.

---

## 1. LabTested — labtested.co (direct competitor)
**What it is:** a lab-results publishing product for brands. It covers the same category, so its story structure matters most.

**Typography**
- Display: *Season Mix* serif, 400 weight. H1 78px / 0.98 line-height / −3% tracking. H2 60px / 1.02 / −3%. Italic serif is used for the emotional half of a headline ("Nothing worth hiding.", "can I trust it?").
- UI/body: *Season Sans* 400–600. Lead paragraph 21.6px / 1.45. Small UI text: *GT Standard* 12px at 66% ink opacity.
- Pattern: a soft serif display paired with a neutral grotesk for UI, plus tight negative tracking on large sizes.

**Colour and surface**
- Near-black ink `#212121` / `#1D1D1F` on white and warm off-whites (`#F9F8F5`, `#F6F4EF`, `#F0EEE8`).
- Hero sits on a warm photo (tan/brown). One section uses a saturated periwinkle-blue gradient stage to present the product card.
- The only semantic colour is green `#16703D` for "passed" states.
- Radii: 14px cards, 100px pills, 50% markers.

**Motion** (Next.js + Lenis smooth scroll, no GSAP)
- Main ease: `cubic-bezier(0.22, 1, 0.36, 1)` (easeOutQuint) at 0.5–0.7s for reveals. Micro-interactions at 0.15–0.2s.
- A sticky product-card "stage" that changes content as you scroll ("Every value beside its limit", "Checked before it is read", "Every batch, not just the good one").
- Ambient loops: brand marquee at 80s linear, drifting test markers at 17s linear.
- The "Different products" section places floating product-category photo cards around a centered serif headline.

**Story order:** hero ("Your lab results. On your product pages.") → what a published record shows → coverage ("Everything worth testing") → how it works → categories → "One report. Everywhere it matters." (surfaces) → FAQ.

**Borrow:** the sticky product stage that explains one feature per scroll step, and the habit of putting every value beside its context.
**Avoid / differentiate:**
- It uses "Passed 12 of 12 lab tests" badges and pass/limit framing. The TrueBatch brief forbids certification claims, so TrueBatch should show *reported values with units and qualifiers* and never pass/fail.
- Don't reuse the serif-italic headline formula or the warm-photo hero. TrueBatch needs its own look.

## 2. FacilPay — facilpay.io (motion reference)
**What it is:** a crypto wallet site, dark and cinematic.

**Typography:** *Plus Jakarta Sans* only, 500 for display. H1 68px. Section words go huge (120px "The easiest way to send crypto. Ever."). Single-word beats ("Chat." "Confirm.") are set at display size beside the device.

**Colour:** near-black `#080808` / `#171717`, white text, grey `#A3A3A3` secondary, electric blue glow `#2476CC` / `rgba(103,146,255,.5)` around the phone.

**Motion** (Webflow + GSAP ScrollTrigger + Lenis + Three.js particles)
- A **pinned device** in the centre while the scroll advances a sequence. A one-word caption swaps at each step, and UI cards (a transaction confirmation) slide over the phone.
- Long, soft eases: `cubic-bezier(0.19, 1, 0.22, 1)` (easeOutExpo) at up to 2s, plus "levitate" idle loops of 5–6s ease-in-out on floating elements.
- Particle background on canvas.

**Borrow for TrueBatch:** the pinned-object scroll sequence with one-word step captions. Pin a COA, then step through "Upload." → "Extract." → "Review." → "Publish." while fields lift off the PDF into a structured draft and then into the shopper widget.
**Avoid:** the dark crypto glow, particles and Three.js spectacle. It reads as fintech hype and goes against "quietly confident".

## 3. Tinker — tinker.com (layout and product-in-context reference)
**What it is:** Shopify's AI playground app.

**Typography:** *Shopify-Inter* variable (100–900). H2 80px / 700 / −3% tracking. Huge bold black sans with tight leading. Buttons 15–20px at 600 with −4% tracking.

**Colour:** white and black with a single acid lime accent `#CCE600` for CTAs and a coral accent `#FF5C54`. The hero sits on a real photographed desk (green cutting mat with a grid, keyboard keys, paper).

**Motion** (Tailwind defaults, no scroll library): standard `cubic-bezier(0.4, 0, 0.2, 1)` at 0.15–0.3s, plus an accordion using `grid-template-rows 0.3s ease-out`. The scroll story comes from layout (a large phone over a tactile flat-lay), not from scripted animation.

**Borrow:** a **tactile flat-lay** that grounds the software in physical work. For TrueBatch that could be a printed COA, a product tub showing its lot code, a pen and a QR label on a workbench, with the UI overlaid. It also shows restraint: one strong accent and almost no motion still feels alive.
**Avoid:** acid lime on white (a common AI-default look) and playful toy energy.

## 4. See for Yourself — see-for-yourself.com (pacing and storytelling reference)
**What it is:** an AR "see it in your home" tool for home-goods retailers. It's built in Framer.

**Typography:** *Inter Display* 300–400 with very light weights at big sizes. H1 48px and stat numerals at 120px, all at −3% tracking. *PP Neue Montreal* for the wordmark and labels. Step numbers ("01", "02") are set at 40% opacity next to the step name.

**Colour:** white and `#F6F6F6` greys, black type, one bright blue `#0099FF` for CTAs, progress and pills. There are dark full-bleed sections for big statements.

**Motion** (Framer + Lenis, 11 videos)
- A **percentage preloader** (0→100% with a blue progress line), then a pinned phone in the centre with a product swatch swapping inside it.
- Pill-shaped floating nav with tabs (Home / About / Process / Analytics / Use Cases / Gallery).
- An isometric room diorama that updates as you scroll. Large statement type on black ("We have in total 7 verticals…").
- A persistent QR code bottom-right inviting you to try it on a phone.

**Borrow for TrueBatch:**
- A persistent "scan to see a sample result" QR. It's directly relevant, because TrueBatch publishes to QR destinations.
- Low-opacity step numbers.
- A light-weight display at large sizes for calm confidence.

**Avoid:** the preloader (it hides content and fails the "complete at rest" rule) and very long scroll-jacked pages (25k px).

## 5. Seed — seed.com (tone and colour reference for the customer world)
**What it is:** a science-led probiotic and supplement brand, and the closest match to TrueBatch's *customers*.

**Typography:** custom *Seed Sans* at 300–500, display 48px at a light 350 weight with −1.5 to −2.5% tracking. *Seed Sans Mono* is used for product codes ("DS-01®", "DM-02", "PM-02") shown as small outlined pills. Small uppercase labels at 12px/500 ("OUTER CAPSULE").

**Colour:** deep forest green `#1C3A13` with warm off-white `#FCFCF7`, plus a pale lime highlight `#D3FA99` used sparingly. Two-colour sections alternate between green on cream and cream on green.

**Motion:** quiet. Eases are `cubic-bezier(0.75, 0, 0.25, 1)` (easeInOutQuart) at 0.6s for slides and width changes, and 0.25–0.3s fades. Video of the product is used, not motion graphics.

**Borrow:** product codes set as small outlined tags (in Inter, not mono). This maps directly to TrueBatch's lot numbers ("Lot WPI-24-0918") and report IDs. Light-weight display type, a two-tone palette and calm, science-led copy also carry over.
**Avoid:** looking like a D2C supplement brand. The brief says TrueBatch is not one, so Seed's lifestyle photography and promo pop-ups are out.

---

## Synthesis for TrueBatch

**Typography direction**
- Large display at light-to-regular weight (300–450) with −2.5 to −3% tracking. All five references set big type light or tight, never heavy and loose.
- **Fonts are fixed: Spline Sans (display and headings) and Inter (body and UI) only.** See the mandatory `truebatch-typography` skill. Set evidence strings (lot numbers, report IDs, units, LOQ values, dates) in Inter with tabular numerals, never in a monospace.
- Use low-opacity numerals only for real sequences (upload → extract → review → publish).

**Colour direction**
- A light, warm-neutral base with one deep "ink" colour and **one** restrained accent.
- Semantic colour only for review state (needs review / approved), never for pass/fail.
- Avoid: crypto-dark glow (FacilPay), acid lime (Tinker), cream with serif italic (LabTested, which also sits close to the AI-default look).

**Motion direction**
- One orchestrated moment: a pinned COA where the scroll lifts fields out of the PDF into a structured draft, a reviewer confirms them against the source, and they settle into the shopper widget. That's FacilPay's pinned sequence with LabTested's sticky stage, applied to TrueBatch's real workflow.
- Eases: `cubic-bezier(0.22, 1, 0.36, 1)` at 0.5–0.7s for reveals, `cubic-bezier(0.4, 0, 0.2, 1)` at 0.15–0.2s for hover and press.
- Optional ambient detail: a slow marquee of product categories or lot codes (60–80s linear).
- No preloaders, particles or 3D. Respect `prefers-reduced-motion` and keep every frame readable at rest.

**Composition ideas**
- A tactile workbench flat-lay with UI overlaid (Tinker).
- A persistent "scan a sample result" QR (See for Yourself).
- Outlined lot and product-code tags in Inter (Seed).
- A sticky stage with one feature per step (LabTested).
- Huge one-word step captions beside the pinned object (FacilPay).

**Hard rules from the brief**
- No "Passed", "Certified", "Safe" or similar badges.
- The sample widget is labeled "Illustrative sample".
- "Not Detected" stays "Not Detected", and units stay as reported.
- The original COA is always one click away in any widget mock.
