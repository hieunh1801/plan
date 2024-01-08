# Plan

## Deploy to gh-pages

```bash
npm run build
git add -f dist
git commit -m "v1.0"
git subtree push --prefix dist origin gh-pages
```
