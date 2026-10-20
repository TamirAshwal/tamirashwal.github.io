# tamirashwal.github.io

My portfolio site: https://tamirashwal.github.io

Built with Vite and React. `.github/workflows/deploy.yml` builds and deploys it to GitHub Pages on every push to `main`.

## Editing content

- Profile, links and About text: `src/data/profile.js`
- Projects: `src/data/projects.js` (fields are documented at the top of the file)
- Images: `public/images/<project>/`, referenced from `projects.js`
- CV: `public/Tamir_Ashwal_CV.pdf`

## Local development

```
npm install
npm run dev     # dev server
npm run lint
npm run build   # production build in dist/
```
