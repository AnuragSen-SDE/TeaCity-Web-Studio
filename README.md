# Teacity Web Studio — Landing Page

Static React landing page for **Teacity Web Studio** (Anurag Sen, Dibrugarh).
Built with Vite + React. No backend, no database — deploy the `dist/` folder to any static host.

## Run locally

```bash
npm install
npm run dev      # dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## ✏️ Edit your content — only ONE file

**Everything you need to change lives in:**

```
src/content/siteConfig.js
```

| What to change | Where in siteConfig.js |
|---|---|
| WhatsApp number | `WHATSAPP_NUMBER` (format: `91` + 10-digit number) |
| Display phone number | `PHONE_NUMBER` |
| Default WhatsApp message | `DEFAULT_WA_MESSAGE` |
| **All section headings & body text** | `copy` object (hero, problem, businesses, packages, work, how, faq, cta) |
| Package prices / features | `packages` array |
| Maintenance & add-ons | `maintenance`, `addons` |
| Payment terms | `terms` |
| Business types shown | `businesses` |
| Sample projects / live link | `workSamples` (`url` for the makeup-artist sample) |
| How-it-works steps | `steps` |
| About text & photo | `about` |
| FAQ | `faqs` |
| Footer service areas | `footer` |
| SEO title/description/domain | `seo` (also update `index.html` meta + JSON-LD when your domain is live) |

## ⚠️ Placeholders to replace

1. **`WHATSAPP_NUMBER`** in `src/content/siteConfig.js` — ✅ set to your number (`919678833566`)
2. **`PHONE_NUMBER`** in `src/content/siteConfig.js` — ✅ set to your number (`+91 96788 33566`)
3. ~~**`SAMPLE_URL`**~~ — ✅ done: makeup-artist sample now points to `https://suparna-makeover.netlify.app` (in `workSamples` → `url`)
4. **About photo** — already set to `public/anurag.jpg`. To update it later, replace that file (any name works — just update `about.photo` in siteConfig)
5. **Logo** — currently `public/logo.webp` (used in header + footer) and `public/favicon.png`. To swap, replace those files (same names = no code changes needed)
6. **OG image** — replace `public/og-image.svg` with a 1200×630 JPG/PNG (`public/og-image.jpg`, update `seo.ogImage`)
7. **Domain** — in `src/content/siteConfig.js` (`seo.siteUrl`) AND in `index.html` (`canonical`, `og:url`, `og:image`, `twitter:image`, JSON-LD `url`/`telephone`)

## Deploy (when you're ready)

Static host (Netlify / Vercel / Cloudflare Pages / GitHub Pages):

```bash
npm run build
# upload the dist/ folder, or connect the repo and set build command: npm run build, publish dir: dist
```
