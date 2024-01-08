# Plan

## Deploy to gh-pages

```bash
npm run build
git add -f build/web
git commit -m "new version"
git subtree push --prefix build/web origin gh-pages
```
