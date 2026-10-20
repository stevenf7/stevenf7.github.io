# Hi, this is my personal website!

My name is Ji Yuan "Steven" Feng, I am a robotics engineer at NVIDIA, building the next generation simulation platforms for training and deploying sophisticated robots.

This repo contains the source code to my personal website.

Checkout my site at: https://stevenf7.github.io/

## Tech Stack

- [Astro](https://astro.build/) static site generator with [React](https://react.dev/) islands for the interactive parts
- SCSS + Bootstrap for styling, with light and dark themes
- English and Chinese (`?lang=zh`) content, all stored in `src/data.js`

## Development

Requires Node.js 22 or newer (Node 24 LTS recommended, matching CI).

To install dependencies:
```bash
npm install
```

To run it locally (http://localhost:4321):
```bash
npm run dev
```

To build for production (output goes to `dist/`):
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
  pages/        # Routes: index.astro, resume.astro, 404.astro
  layouts/      # BaseLayout.astro: <head>/SEO, theme + language init, navbar, background
  components/   # .astro = static HTML sections, .jsx = hydrated React islands
  contexts/     # Language and theme state shared across islands
  scripts/      # Small client script for scroll reveals, video autoplay, language-aware links
  styles/, css/ # SCSS stylesheets
  images/       # Images, videos, and resume.pdf
  data.js       # All site content (English + Chinese)
  media.js      # Image/video maps referenced by the `media` keys in data.js
public/         # Files copied as-is to the site root (e.g. robots.txt)
tests/
  unit/         # Vitest content checks for data.js
  e2e/          # Playwright smoke tests against the production build
```

## Testing

Content checks (about 1 second) verify `src/data.js`: every bilingual field has both English and Chinese text, every `media` key points to a real file, links are valid URLs, and modal entries have the fields they need.
```bash
npm test
```

Smoke tests build the site and load it in headless Chromium (desktop and mobile). They check that every section renders and hydrates with no console errors, Chinese mode, the language and theme toggles, the Education modal, the resume PDF, and the mobile navbar.
```bash
npx playwright install chromium   # one-time browser download
npm run test:e2e
```

## Deployment

This site is automatically deployed using GitHub Actions (`.github/workflows/deploy.yml`). When you push to the `production` branch, it will:

1. Install dependencies with `npm ci`
2. Run the content tests
3. Build the Astro site into `dist/`
4. Deploy `dist/` to GitHub Pages

To redeploy without pushing new code, open **Actions > Build and Deploy to GitHub Pages > Run workflow** on GitHub and choose the `production` branch (or run `gh workflow run deploy.yml --ref production`).

The repo's **Settings > Pages > Source** must be set to **GitHub Actions**. The optional `GATSBY_GA_MEASUREMENT_ID` repository secret is passed to the build as `PUBLIC_GA_MEASUREMENT_ID` to enable Google Analytics.

## Quality Assurance

### Pull Request Checks
Every Pull Request automatically triggers a check (`.github/workflows/pr-check.yml`) that:
- Installs dependencies from `package-lock.json`
- Runs the content tests
- Builds the Astro site
- Runs the Playwright smoke tests (the HTML report is uploaded as an artifact if they fail)

## License

The source code is available under the MIT License. My photos, videos, resume, and written content (bio, experience, project, and publication descriptions) are **all rights reserved** and may not be reused without permission. If you fork this repo for your own site, replace that content with your own. See [`LICENSE`](LICENSE) for details.
