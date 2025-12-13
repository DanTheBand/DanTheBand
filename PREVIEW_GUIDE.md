# How to Preview Your Vite Site

**Always use the Vite preview server to view your site as it will appear in production.**

## Quick Steps

1. **Build your project:**
   ```sh
   pnpm run build
   ```
2. **Start the preview server:**
   ```sh
   pnpm run preview
   ```
3. **Open your browser to:**
   http://localhost:4173
   (or the URL shown in your terminal)

---

- Do **not** use "Live Server" or open the HTML file directly for Vite/React apps.
- The preview server serves the built files from `dist/public` and shows your app as it will be deployed.

## One-liner (build & preview)

You can add this script to your `package.json` for convenience:

```json
"scripts": {
  "build-preview": "pnpm run build && pnpm run preview"
}
```

Then run:

```sh
pnpm run build-preview
```

---

If you have any issues, always check the terminal output for the correct preview URL.
