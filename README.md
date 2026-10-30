# KEIR @ CIKM 2026 — Workshop Website

Website for **KEIR @ CIKM 2026: The Third Workshop on Knowledge-Enhanced Information Retrieval**, held on November 8, 2026, at Sapienza University of Rome (co-located with CIKM 2026).

## Credits

This website is based on the [BrainBodyFM Workshop](https://brainbodyfm-workshop.github.io/) website by **Mehdi Azabou**, adapted **with the author's permission**. The template credit is also displayed in the footer of every page. The KEIR-themed icons in `assets/keir/` are original artwork created for this adaptation.

## Structure

- `index.html` — Overview (description + how to attend), Invited Speakers, Organizers, Schedule, Accepted Papers, Proceedings (Springer LNCS post-proceedings: author resources and previous editions), Community (Discord), Updates dropdown.
- `call-for-papers.html` — Call for Papers: timeline with important dates (including the LNCS revised-paper deadline), topics, submission guidelines.
- `styles.css` — original stylesheet + `KEIR @ CIKM 2026 overrides` block at the end.
- `script.js` — original interactions (nav, updates dropdown).
- `biosignal-animation.js` — original drifting-icon engine, configured with the 4 KEIR icons in rows below the title card.
- `assets/keir/` — icons: `graph.svg`, `doc.svg`, `lens.svg`, `agent.svg` (the 4 moving assets), `speaker-tba.svg`, `person.svg`, `favicon.svg`.
- `assets/keir/lncs-logo.jpg` — LNCS series logo (Springer), shown in the Proceedings section as requested by Springer.
- `assets/keir/KEIR2026_Licence_to_Publish.docx` — Springer licence-to-publish form, pre-filled with the volume information, linked from the Proceedings section.

No build step required — plain static HTML/CSS/JS.

## Local testing

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Note: the internal links use extensionless URLs (e.g., `call-for-papers`), which GitHub Pages resolves automatically; when testing with a simple local server, append `.html` manually or use `npx serve .` which also resolves them.
