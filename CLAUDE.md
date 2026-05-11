# adambanerjee.com

Static GitHub Pages site. No build step — edit files and push to `main` to deploy.

## Workflow

**Always work directly on `main`.** There is no staging branch. `main` is the live site and GitHub Pages deploys from it automatically.

- Commit changes and push to `main`: `git push origin main`
- Do not use feature branches — changes on other branches will not appear on the live site.

## Files

- `index.html` — Home page
- `about.html` — About page
- `contact.html` — Contact / representation
- `standup.html` — Stand Up page
- `vo.html` — Voice-Over reels
- `studio.html` — Studio details
- `styles.css` — All styles (single clean file, no versioned overrides)
- `script.js` — Instagram iframe injection
