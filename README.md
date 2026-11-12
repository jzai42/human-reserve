# HUMAN RESERVE — Official Website

An original English-first, four-panel satirical comic about life in a world managed by AI.

## Website v1.0

A lightweight static site using semantic HTML, CSS, and vanilla JavaScript. No build step, database, or external application runtime required. Fonts may load from Google Fonts; system fallbacks are provided.

- `/` — Home and latest episode
- `/comics/` — Comic archive
- `/comics/the-lucky-ones/` — Season 3 Episode 1, complete English four-panel comic with responsive reader and lightbox
- `/watch/` — Future animation archive (no videos claimed or embedded yet)
- `/world/` — Public universe introduction
- `/about/` — About the project

All live published art is derived from the approved existing Human Reserve artwork. Original master files and unpublished IP materials remain outside this public repository.

### Deployment

GitHub → Settings → Pages → Build and deployment → **Deploy from a branch**, branch `main`, folder `/ (root)`. The site is designed for `https://jzai42.github.io/human-reserve/`.

For local development, run `python3 -m http.server 8000` in a directory containing the parent `human-reserve` folder, or serve the files with a web server at `/human-reserve/`. The pages link to `/human-reserve/...` because GitHub Pages project sites have this base path.

### Adding an episode

1. Export the approved English comic as optimized WebP or PNG; keep original masters in Google Drive.
2. Add a new episode reader page and its images to `assets/img`.
3. Update `comics/index.html` and the homepage latest-episode section.
4. Update `sitemap.xml` and preview on desktop and mobile before publishing.

### Privacy and ownership

No analytics, cookies or third-party marketing trackers are configured. This repository contains only intended public website material. © 2026 Human Reserve. All rights reserved.
