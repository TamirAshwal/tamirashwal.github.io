# Portfolio site — tamirashwal.github.io

Personal portfolio site, linked from my CV. Shows my projects with short descriptions, images, and links to their GitHub repos.

## Stack and deployment

- Vite + React (JavaScript, not TypeScript)
- Deployed to GitHub Pages at https://tamirashwal.github.io
- `.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`

## Git rule (strict)

I handle all git myself. Do NOT run any git commands: no add, commit, push, pull, branch, checkout, reset, or stash. Only edit files. When you finish a chunk of work, tell me which files changed and suggest a commit message.

## Do not modify

- `.github/workflows/deploy.yml`
- The `base` setting in `vite.config.js` — the site is served from the root, so it must stay `'/'`

## Design direction

- Formal and professional, but pleasant to look at
- Elegant and modern, with lots of whitespace — not dense or cluttered
- Restrained palette: warm ivory base with a soft sand band behind Projects, a teal accent, clay intro highlights and one colour per project; strong typography (one or two Google Fonts max)
- Subtle hover states and transitions only; no flashy animations. The one exception: project rows fade in gently once on scroll (off under reduced motion)
- Fully responsive — recruiters often open links on their phone
- Accessible: semantic HTML, alt text on images, good contrast, visible focus states
## Design rules (anti-template)
- Never use: gradients, gradient text, glassmorphism, emoji, decorative icons,
  Inter/Roboto/Arial, 3-column feature card grids, generic marketing copy
  ("passionate", "innovative", "cutting-edge", etc.).
- Fonts: Source Serif 4 for headings, IBM Plex Sans for text. Nothing else.
- Colors: only the tokens defined in :root in src/index.css. Teal for links, focus rings and buttons;
  a pale clay for the intro highlights. Each project picks one colour from the project palette
  (its number, tags, link hovers and the pale tint behind its media).
- Layout: prefer asymmetry, generous whitespace and strong type hierarchy over boxes and cards.
  If /design-refs exists, follow those reference screenshots.
- Radius: 4px everywhere. Shadows: none unless asked. No hover lift effects (a slight image zoom inside its frame is fine).
- Before finishing any UI task: if you have a browser/screenshot tool, screenshot the page;
  otherwise ask me for a screenshot. List every element that looks like a generic
  AI template, and fix them.

## Page structure

Single page. No React Router — GitHub Pages returns 404 on deep links.

1. Hero: name, one-line title, short intro, links (GitHub, LinkedIn, email, CV download)
2. Projects: full-width rows, one per project, separated by hairline rules (no boxed cards). Image on one side, text on the other (title, 1–2 sentence description, tech tags, GitHub link), alternating sides row to row and stacking on mobile; 1–3 images per project, and clicking an image opens a larger view
3. Short About section
4. Footer with contact links

## Code conventions

- All content lives in data files (`src/data/projects.js`, `src/data/profile.js`) so projects can be added or edited without touching components
- Images go in `public/images/` and are referenced from the data files
- Plain CSS (CSS modules or one well-organized stylesheet); no UI frameworks or heavy dependencies
- No leftover Vite boilerplate (logos, counter, default CSS)
- Before saying a task is done, run `npm run lint` and `npm run build` and fix any errors

## Content

Don't invent details about me or my projects. Use clearly marked placeholders (e.g. `TODO: project description`) and ask me for the real content.
