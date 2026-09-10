# website

Static site for [Soulful Stories](https://github.com/soulfulstories1/website), deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages setup

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually). The site will be published at:

   **https://soulfulstories1.github.io/website/**

## Build locally (same as CI)

```bash
GITHUB_PAGES=true npm run build
```

Static files are written to the `out/` directory.
