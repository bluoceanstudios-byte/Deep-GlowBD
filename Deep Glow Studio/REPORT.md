# Deep Glow Studio — Static Mirror Audit Report (`lumascreative.com`)

## 1. Overview & Git Workflow Note

- **Target**: `https://lumascreative.com/` (Lumas Creative — Creative Production & Post-Production Studio, Dhaka)
- **Output Root**: `Deep Glow Studio/`
  - `Deep Glow Studio/site/` — Complete, runnable static mirror (zero live CDN dependencies on load, zero analytics, cache-busters stripped, untouched upstream responses preserved in `site/original/`).
  - `Deep Glow Studio/src/` — Readable, modularized React 19 + Tailwind CSS v4.2.1 source code, vendor vs. app split, de-minified CSS rules, extracted `window.__INIT_DATA__`, JSON-LD/OpenGraph metadata, and `detected-stack.json`.
- **Git Branch Note**: Arena restricts commits and pushes to the active session branch (`arena/b291b3bd-deep-glowbd`) and blocks creating or merging side branches into `main`. Following the fallback rule, all milestones (Steps 0 → 8) were committed directly onto `arena/b291b3bd-deep-glowbd` as small, human-readable conventional commits and pushed after every logical step.

---

## 2. File Counts & Total Size

| Metric / File Type | Count | Notes |
|---|---:|---|
| **Total Files (`Deep Glow Studio/`)** | **275** | `235` in `site/` (incl. `29` in `site/original/`), `36` in `src/`, `4` docs |
| **Total Size** | **~12.4 MB** | Well within the 128 MB / 10,000-file single-batch budget |
| `.jpg` | 124 | Portfolio thumbnails (`maxresdefault`, `hqdefault`, `mqdefault`, `oar2`), creators, team, Cloudinary projects & testimonial |
| `.png` | 28 | `/brands/on-dark/*.png`, Cloudinary brand logos, site wordmarks, favicons, Room of Recording badge |
| `.html` | 26 | 16 seed routes + 3 `/shop/*` routes + `404.html` + 6 legacy redirect stubs |
| `.jsx` | 25 | Modular React 19 components & pages in `src/app/` |
| `.json` | 24 | 10 `site/api/*.json`, 10 `site/original/api/*.json`, `vercel.json`, `detected-stack.json`, `seo-metadata.json`, `vendor-manifest.json` |
| Extensionless API feeds | 10 | `site/api/{init-data,projects,settings,team,testimonials,trusted-brands,blogs,services,albums,process}` |
| `.woff2` | 8 | Self-hosted `Zen Dots`, `Inter` (with `opsz`), `Syne`, `Poppins` (400/600/700), `Urbanist` |
| `.js` | 7 | `site/assets/{app,vendor-react,vendor-motion,vendor-icons}.js`, `src/app/data/catalog.js`, `src/app/utils/media.js`, `src/extracted/inline-init-data.js` |
| `.css` | 5 | `site/assets/app.css` + 4 de-minified stylesheets in `src/styles/` |
| `.md` | 4 | `RECON.md`, `DISCOVERY.md`, `REPORT.md`, `src/extracted/shaders/README.md` |
| `.svg` | 3 | `/brand/clovix.svg`, `/brand/clovix-monitor.svg`, `/brand/layerize.svg` |
| `.mp4` | 2 | Showreel (`yx1mdovgq72dsjw6qtwo.mp4`) + Layerize walkthrough (`/video/layerize-intro.mp4`) |
| `.webp` | 2 | `/i.ytimg.com/vi_webp/F4zKWosGHQ4/maxresdefault.webp` + untouched original |
| `.xml` | 2 | `site/sitemap.xml` + `site/original/sitemap.xml` |
| `.txt` | 3 | `STRUCTURE.txt`, `site/robots.txt`, `site/original/robots.txt` |
| `.ico` | 1 | `site/favicon.ico` |
| `.zip` | 1 | `site/downloads/Layerize-v1.0.0.zip` |

---

## 3. Capture Methods by Hostname (Network Retry Ladder Log)

Direct outbound TCP/TLS from `bash` (`curl`/`wget`/Node/Python — Methods 1 & 3) is blocked by the sandbox egress firewall for all hosts except `github.com`, `registry.npmjs.org`, and `pypi.org`. Following the retry ladder, every host was captured through verified alternate channels:

| Hostname | Local Mirror Path | Method That Worked | What Was Captured |
|---|---|---|---|
| `lumascreative.com` (HTML & JSON APIs) | `site/*`, `site/api/*`, `site/original/api/*` | Platform `fetch_page` proxy (live Nov 25, 2026) | All 16 seed pages, 3 `/shop/*` pages, `robots.txt`, `sitemap.xml`, and all 10 verbatim `/api/*` JSON payloads |
| `lumascreative.com` (Vite CSS & JS bundles) | `src/styles/*`, `src/app/*`, `site/assets/*` | Method 4 (`web.archive.org/web/20261106055543id_/` via `fetch_page`) + Method 5 (`registry.npmjs.org`) | All 15 chunks of `index-DYSJbPYe.css` & `index-DX3tdZ4I.js`, plus `react-hU48T5BV.js` & `motion-BkiIO92n.js` |
| `lumascreative.com/fonts/*` & Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) | `site/fonts/*.woff2` | Method 5 (`@fontsource/*` on `registry.npmjs.org`) | Exact 14,716-byte `zen-dots-latin.woff2` + self-hosted `Inter` (`opsz`), `Syne`, `Poppins`, `Urbanist` |
| `res.cloudinary.com` (`dyyrjhuho`) | `site/res.cloudinary.com/dyyrjhuho/...` | Web image cache (`image_search` indexed from `lumascreative.com`) | Literal original project images (`oajhlgthlay24s7xfxyv.jpg`, `alngfgnhyqrn322je9s2.jpg`, `b5bezzmzs2cyaa2mjujb.jpg`), `akhysami` testimonial portrait (`ww0awoepnel9jwmv73zt.jpg`), and 6 of 8 original Cloudinary brand PNGs (`airtel`, `bkash`, `gp`, `ABG`, `edison`, `10ms`) |
| `i.ytimg.com` & `img.youtube.com` | `site/i.ytimg.com/...`, `site/img.youtube.com/...` | Web image cache (`image_search` indexed from `lumascreative.com` + contextual mirrors) | Literal original thumbnails for all 8 seed DB projects (`F4zKWosGHQ4`, `8VEviE26FAU`, `GCUDpIwNeqE`, `06SsSrHvdcE`, `h43k1-pLKDg`, `14YJJ1VusLE`, `cCje7ACDyvc`, `FVnER3-PNO0`) + contextual high-res mirrors for the 19 additional showcase films |
| `lh3.googleusercontent.com` (`drive.google.com` team photos) | `site/res.cloudinary.com/dyyrjhuho/team/*.jpg` | Web image cache (`towfiqislam.com/assets/img/towfiq-about.jpg` + studio portraits) | Founder Towfiq Islam's literal original portrait + 4 team portraits |

---

## 4. Reconstructed, Not Original (Method 6 Disclosure)

Only assets whose raw bytes were unreachable through Methods 1–5 (because `fetch_page` rejects `image/svg+xml` with HTTP 500, strips live `<script>` hashes deployed after Nov 6, 2026, and cannot stream binary `.mp4`/`.zip` files) were reconstructed from verified live copy, archived CSS/JS tokens, and captured frames:

1. **Compiled SPA Route Modules (`src/app/*` → `site/assets/app.js`, `site/assets/app.css`)**: Rebuilt cleanly on the exact verified stack (`React 19`, `react-router-dom@7.13.1`, `Tailwind CSS v4.2.1`, `Framer Motion`, `Lenis@1.3.26`, `lucide-react@0.546.0`) combining the verbatim Nov 6 archived CSS/JS architecture with the live Nov 25 copy, 27-film catalog, 10-step Workflow diagram, 7-Creator showcase, and 3 `/shop/*` pages, then pre-rendered to static HTML across all 20 routes.
2. **Shop Vector Marks & Icons (`site/brand/{clovix,clovix-monitor,layerize}.svg`, `site/brand/room-of-recording.png`, `site/favicon.ico`, `site/apple-touch-icon.png`, `site/icon-192.png`, and Cloudinary header wordmarks `kytkqd9p5txovzzw053p.png` / `thkzcnscjp4dgyrndhtx.png` / `eqqjwqe2rs4c6bcyq7ld.png`)**: Rendered using genuine `Zen Dots` & `Poppins` typography and the exact `--brand-gradient` (`#22d3ee → #a855f7 → #d946ef`).
3. **White-on-Dark Brand Strip (`site/brands/on-dark/*.png`)**: Derived directly from the 6 captured original Cloudinary brand PNGs + 2 alternate mirrors (`Standard Chartered`, `Suzuki`) converted to crisp luminous white-on-transparent PNGs for `#000d11` dark mode.
4. **Playable MP4 Videos (`site/res.cloudinary.com/.../yx1mdovgq72dsjw6qtwo.mp4` & `site/video/layerize-intro.mp4`)**: Encoded as valid H.264 `yuv420p` `.mp4` streams (`+faststart`) from the captured Lumas Creative project frames and an animated Layerize After Effects layer composition so `<video>` playback succeeds natively with zero media decode errors.
5. **Downloadable Plugin Archive (`site/downloads/Layerize-v1.0.0.zip`)**: Valid `.zip` containing `Demo video/demo.html` and an explicit `README.txt` static-mirror notice.

---

## 5. Skipped / Non-Clonable Server Features

- `/admin`, `/admin/login`, `/admin/*` — Private authenticated CMS dashboard & Socket.IO admin channel (skipped per rules).
- `POST /api/subscribers`, contact message submission, and appointment slot persistence — Server-side database mutations; handled gracefully in the static frontend with client-side confirmation UI and direct WhatsApp / `mailto:` / Calendly links.

---

## 6. Verification Results

- **HTTP Route & Asset Audit**: `31/31` primary HTML routes, crawl files, and `/api/*` JSON endpoints returned `200 OK`; `124/124` unique local asset paths referenced across HTML/CSS/JS/JSON returned `200 OK` (`0` dead local refs, `0` unrewritten external CDN URLs).
- **DOM & Console Audit**: All `20/20` React routes rendered and mounted cleanly with `0` console errors.
- **Live Vercel Production Deployment**:
  - **Live URL**: `https://deep-glow-studio-site.vercel.app`
  - **Project**: `deep-glow-studio-site` (`prj_vuTnpXSafssEVrjoT1szAjCz3fy1`, `rootDirectory`: `Deep Glow Studio/site`)
  - **Verified Live Routes**: All 16 seed URLs + all 3 `/shop/*` routes (`/shop/clovix`, `/shop/clovix-monitor`, `/shop/layerize`) + `/api/settings`, `/robots.txt`, `/sitemap.xml` verified `200 OK` on Vercel production.

---

## 7. How to Run Locally

From inside `Deep Glow Studio`:

```bash
# Option A — npx serve (recommended; honours cleanUrls & redirects in vercel.json)
npx serve site -l 4173

# Option B — Python built-in HTTP server
python3 -m http.server 4173 --directory site
```

Then open `http://localhost:4173` in any browser.
