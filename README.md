# Municipal Urban Planning Departments Forum

A responsive bilingual website prototype for the Municipal Urban Planning Departments Forum in Saudi Arabia.

## Pages

- `index.html` — Forum home page
- `library.html` — Searchable municipal project archive and standardized submission form
- `news.html` — Forum and municipal planning news
- `insights.html` — Weekly AI-assisted insights grounded in Library material

## Features

- Responsive desktop, tablet, and mobile layouts
- English and Arabic interface support
- Search and filters for municipal project summaries
- Standardized municipal project-submission form
- Filterable news categories
- Evidence-led Insights page with charts and workflow diagrams
- Accessible navigation, labels, focus states, and reduced-motion support
- Portable relative links and assets for GitHub Pages

## Run locally

From the repository root, start a static web server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000/](http://localhost:8000/).

Opening the files directly with a `file://` URL is possible, but a local server more closely matches GitHub Pages.

## GitHub Pages deployment

The workflow in `.github/workflows/pages.yml` deploys the repository root to GitHub Pages whenever changes are pushed to `main`. It can also be run manually from the Actions tab.

If Pages is not already enabled for the repository, choose **GitHub Actions** under **Settings → Pages → Build and deployment → Source**.

## Content notice

Project records, news stories, statistics, and chart values in this prototype are illustrative. Production content should be reviewed and replaced with verified municipal sources.

## Files used by the site

```text
index.html
library.html
news.html
insights.html
forum-pages.css
forum-pages.js
forum-icon-option-1.png
```
