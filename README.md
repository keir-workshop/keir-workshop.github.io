# KEIR @ CIKM 2026 — Workshop Website

Website for **KEIR @ CIKM 2026: The Third Workshop on Knowledge-Enhanced Information Retrieval**, held on November 8, 2026, at Sapienza University of Rome (co-located with CIKM 2026).

## Credits

This website is based on the [BrainBodyFM Workshop](https://brainbodyfm-workshop.github.io/) website by **Mehdi Azabou**, adapted **with the author's permission**. The template credit is also displayed in the footer of every page. The KEIR-themed icons in `assets/keir/` are original artwork created for this adaptation.

## Structure

- `index.html` — Overview (description + how to attend), Invited Speakers (TBA), Organizers, Community (Discord), Updates dropdown.
- `call-for-papers.html` — Call for Papers: timeline with important dates, topics, submission guidelines (submissions open).
- `styles.css` — original stylesheet + `KEIR @ CIKM 2026 overrides` block at the end.
- `script.js` — original interactions (nav, updates dropdown).
- `biosignal-animation.js` — original drifting-icon engine, configured with the 4 KEIR icons in rows below the title card.
- `assets/keir/` — icons: `graph.svg`, `doc.svg`, `lens.svg`, `agent.svg` (the 4 moving assets), `speaker-tba.svg`, `person.svg`, `favicon.svg`.

No build step required — plain static HTML/CSS/JS.

## Local testing

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Note: the internal links use extensionless URLs (e.g., `call-for-papers`), which GitHub Pages resolves automatically; when testing with a simple local server, append `.html` manually or use `npx serve .` which also resolves them.

## Deployment (GitHub Pages)

1. Push these files to the repository's default branch.
2. Settings → Pages → deploy from branch (`main`, root).
3. Share the resulting URL with the CIKM 2026 workshop chairs (due July 13).

## TODO before launch

- [ ] Replace the EasyChair placeholder URL (`https://easychair.org/conferences/?conf=keir2026`) with the actual submission link (it appears in the nav button and in the Submission Guidelines of `call-for-papers.html`).
- [ ] Add invited speakers when confirmed (replace the two TBA cards in `index.html`).
- [ ] Replace `assets/keir/person.svg` placeholders with organizer photos when available.
- [ ] Add a Schedule section closer to the event and an Accepted Papers section after notification (the original template's markup for both can be recovered from the BrainBodyFM repository).
