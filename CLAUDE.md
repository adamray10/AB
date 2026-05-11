# adambanerjee.com

Static GitHub Pages site. No build step — edit files and push to `main` to deploy.

## Workflow

**Always work directly on `main`.** There is no staging branch. `main` is the live site and GitHub Pages deploys from it automatically.

- Commit changes and push to `main`
- Do not use feature branches — changes on other branches will not appear on the live site.

## File structure

Pages live in **subdirectories** so URLs are clean (no `.html` extension):

- `index.html` — Home page (`/`)
- `vo/index.html` — Voice-Over page (`/vo`)
- `standup/index.html` — Stand Up page (`/standup`)
- `about/index.html` — About page (`/about`)
- `contact/index.html` — Contact page (`/contact`)
- `studio/index.html` — Studio page (`/studio`)
- `styles.css` — All styles (single file, no versioned overrides)
- `script.js` — Instagram iframe injection

Do NOT create flat `.html` files at the root for these pages — they belong in their subdirectory.
