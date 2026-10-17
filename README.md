# StoryCast

StoryCast is a three-page responsive storytelling microsite for an accessibility-focused web development assignment. It uses semantic HTML5, Sass, CSS Grid/Flexbox, vanilla JavaScript, native audio/video, and WebVTT. No front-end framework is used.

**Important media note:** The featured story is fictional and is labelled as such. The page expects `assets/media/story-1.mp3` and `assets/media/story-1.mp4`, but those binary files are not included. Add the final recording and video export before submission. The supplied VTT timings are a draft and must be synchronized to the final media.

## Pages
- `index.html`: Home and story cards.
- `story/story-1.html`: Story detail, video, audio, captions, transcript.
- `about.html`: About, design principles, accessibility checklist.

## Project structure
```text
storycast/
├── index.html
├── about.html
├── story/story-1.html
├── sass/main.scss
├── sass/partials/_colors.scss
├── sass/partials/_typography.scss
├── sass/partials/_spacing.scss
├── css/main.css
├── js/main.js
├── assets/media/
├── assets/transcripts/story-1.vtt
└── docs/
    ├── research-document.pdf
    ├── project-report.pdf
    ├── research/sitemap.png
    └── mockups/{wireframes,high-fidelity}/
```

## Run locally
From the project root, run `python -m http.server 8000`, then open `http://localhost:8000`. Alternatively, open `index.html` directly. To compile Sass, run:
```bash
npx --yes sass sass/main.scss css/main.css --style=expanded
```

## Accessibility checklist
- [x] Semantic landmarks and logical headings.
- [x] Skip link to main content.
- [x] Keyboard-operable mobile navigation using `aria-expanded` and `aria-controls`.
- [x] Visible focus indicators.
- [x] Native audio/video controls.
- [x] Transcript and WebVTT caption track included.
- [x] Responsive Grid and Flexbox layouts.
- [x] Container query for a card component.
- [x] Reduced-motion preference.
- [ ] Measure contrast against WCAG AA requirements.
- [ ] Add final MP3/MP4 and verify caption timing and transcript accuracy.
- [ ] Test keyboard-only use, zoom/reflow, and a screen reader.
- [ ] Run axe/WAVE/Lighthouse and manually review findings.

The checklist is not a claim of formal WCAG certification. Test the final build before making accessibility claims.

## Research and design artefacts
- Sitemap: `docs/research/sitemap.png` and `sitemap.svg`
- Wireframes: `docs/mockups/wireframes/`
- High-fidelity mockups: `docs/mockups/high-fidelity/`
- Research document: `docs/research-document.pdf`
- Project report: `docs/project-report.pdf`

The PNGs are local mockup artefacts, not live Figma links. If your lecturer requires Figma URLs, recreate/import the screens in Figma, set sharing access as required, then replace the placeholders in the research document with real share links.

## Known limitations
- Final MP3 and MP4 files still need to be added.
- Caption timings need to be checked against the final video.
- Contact information is informational; there is no working backend form.
- Two story cards are planned concepts, not published stories.

## Submission checklist
- [ ] Publish as a public GitHub repository named `storycast`.
- [ ] Keep both PDFs and all mockups in the repository.
- [ ] Add final audio/video files and synchronize captions.
- [ ] Add real Figma share URLs if specifically required.
- [ ] Complete and record accessibility testing.
- [ ] Commit the final version and confirm repository visibility.
