# Plan

## Deploy to gh-pages

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/plan/", //  --> add this base
  plugins: [react()],
});
```

```bash
nvm use 20
npm run build

git add .
git add -f dist
git commit -m "v1.2"
git subtree push --prefix dist origin gh-pages
```
