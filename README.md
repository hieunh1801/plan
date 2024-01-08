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
npm run build
git add -f dist
git commit -m "v1.1"
git subtree push --prefix dist origin gh-pages
```
