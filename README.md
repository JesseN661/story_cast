# StoryCast

StoryCast is a three-page storytelling microsite I built for my advanced frontend assignment. It uses semantic HTML5, Sass, CSS Grid/Flexbox, a container-queried component, native media with WebVTT captions, and a little bit of vanilla JavaScript. I didn't use a front-end framework.

My featured story is "From Uncertainty to Opportunity", a fictional narrative about a young Rwandan named Eric exploring new possibilities in agriculture. I labelled it as
fiction on the story page.

## Pages

- `index.html` — home: hero, mission intro, featured story, and a story grid.
- `story/story-1.html` — story detail: video, audio, full transcript, and related links.
- `about.html` — mission and accessibility information.

## Project structure

storycast/
├── index.html
├── about.html
├── story/
│   └── story-1.html
├── sass/
│   ├── main.scss
│   ├── _colors.scss        # colour tokens
│   ├── _typography.scss    # type tokens
│   └── _spacing.scss       # spacing/layout tokens
├── css/
│   └── main.css            # compiled from sass/main.scss
├── js/
│   └── main.js             # mobile navigation toggle
├── assets/
│   ├── images/             # page imagery
│   ├── media/
│   │   ├── story-1.mp3     # narration (audio)
│   │   ├── story-1.mp4     # narration + images (video)
│   │   ├── story-poster.jpg
│   │   └── story-poster.svg
│   └── transcripts/
│       └── story-1.vtt     # WebVTT captions
├── vid pics/               # source photographs I used to build story-1.mp4
└── docs/
    ├── research-document.pdf
    ├── project-report.pdf
    ├── research/sitemap.png
    └── mockups/wireframes/

## Run locally

From the project root:

<bash>

python3 -m http.server 8000

Then open <http://localhost:8000>. Opening `index.html` directly also works, but a server would be better for the media files and captions load correctly.

### Compile Sass

I generated the CSS from `sass/main.scss`, which `@use`s the three token partials. Recompile after editing Sass:

If you have Node installed, `npx --yes sass sass/main.scss css/main.css --style=expanded` also works. I committed the compiled output in `css/main.css`, so the site runs without a build step.

## Media notes

- I recorded the narration as an iPhone voice memo. It was originally saved as an M4A/AAC file with a `.mp3` extension; I converted it to a true MP3 (mono, 44.1 kHz, 160 kbps, 3 min 16 s) so the `type="audio/mpeg"` declaration is correct.
- I produced `story-1.mp4` from the narration plus the photographs in `vid pics/`, using slides with crossfades, 1920×1080, H.264 video and AAC audio due to bad timing.
- I re-timed the captions in `story-1.vtt` to the narration using speech recognition and manual alignment, and they cover the full 3 min 16 s.
- The background music in the video is **"Inner Light" by Kevin MacLeod**, which I was recommended to by ChatGPT.

## Accessibility checklist

Requirements met:

- Semantic HTML5: `header`, `nav`, `main`, `article`, `section`, `figure`, `figcaption`, `footer`, and a logical heading order on every page.
- Skip link to the main content on every page.
- Accessible media: native `<video>`/`<audio>` with `<track kind="captions">` and a full visible transcript; media wrapped in `<figure>`/`<figcaption>`.
- Keyboard navigation: all navigation and media controls are keyboard operable; the mobile menu toggle uses `aria-expanded` and `aria-controls`.
- Visible focus states: a 3 px focus outline with offset. I used `#132238` for the focus colour, which meets the WCAG 3:1 non-text contrast requirement on the cream, white, and green backgrounds in the design.
- ARIA used only where needed (`aria-label`, `aria-current`, `aria-labelledby`, `aria-expanded`, `aria-controls`, `aria-hidden` for decorative separators).
- Responsive layout: CSS Grid and Flexbox, with a `@media` breakpoint at 48rem.
- Container query: the story grid is a container (`container-type: inline-size`); the story cards adapt their padding and media height with `@container story-list`.
- Reduced motion: `prefers-reduced-motion` disables smooth scrolling and animations.

## Research and design artefacts

- Sitemap: `docs/research/sitemap.png` and `docs/research/sitemap.svg`
- Wireframes: `docs/mockups/wireframes/`
- Research document: `docs/research-document.pdf`
- Project report: `docs/project-report.pdf`

I stored the mockups as image files in this repository. If the brief specifically requires
Figma share links, I still need to recreate these screens in Figma, set the sharing access as
required, and swap in the real share URLs.