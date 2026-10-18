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
public/         # Files copied as-is to the site root (e.g. robots.txt)
```

## Deployment

This site is automatically deployed using GitHub Actions (`.github/workflows/deploy.yml`). When you push to the `production` branch, it will:

1. Install dependencies with `npm ci`
2. Build the Astro site into `dist/`
3. Deploy `dist/` to GitHub Pages

To redeploy without pushing new code, open **Actions > Build and Deploy to GitHub Pages > Run workflow** on GitHub and choose the `production` branch (or run `gh workflow run deploy.yml --ref production`).

The repo's **Settings > Pages > Source** must be set to **GitHub Actions**. The optional `GATSBY_GA_MEASUREMENT_ID` repository secret is passed to the build as `PUBLIC_GA_MEASUREMENT_ID` to enable Google Analytics.

## Quality Assurance

### Pull Request Checks
Every Pull Request automatically triggers a build check (`.github/workflows/pr-check.yml`) to ensure:
- Dependencies install correctly from `package-lock.json`
- Astro builds successfully
- No breaking changes are introduced
