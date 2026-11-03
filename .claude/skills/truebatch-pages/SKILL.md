---
name: truebatch-pages
description: Build any new TrueBatch page or sub-page (category, role, feature, sample results, help, legal) from the shared kit. Use whenever the user asks for a new TrueBatch page, landing page, sub-page or section outside the homepage.
---

# Building TrueBatch pages

1. Read `TRUEBATCH_PLAYBOOK.md` (repo root) in full. It's the source of truth for the brief, hard rules, voice, data, tokens, visual system, components, motion and recipes.
2. Load the `truebatch-typography` and `truebatch-visual-system` skills.
3. Copy `templates/page-template.html` to `pages/<slug>.html`.
4. Pick the matching recipe in playbook section 10, and reorder or delete the template's sections to fit.
5. Use only the classes in `assets/truebatch.css` and data from playbook section 4. Keep "Illustrative sample", "Not Detected" and the original-report link.
6. Update the title, meta description and `aria-current`.
7. Serve the page with `python3 -m http.server`, then check it at 1440×900 and 375×812. Run the console checks in playbook section 11 (fonts, shape, no horizontal scroll).

`pages/baby-food.html` is a finished example.

If a page needs a component the kit doesn't have, build it from kit parts (pill controls, 16px cards, 10px nested, hairline, one float shadow). Then add it to `assets/truebatch.css` and to the playbook's component table.
