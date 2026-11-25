# STEP 2 — EXHAUSTIVE DISCOVERY MANIFEST (`lumascreative.com`)

## Summary Counts (Verified Before Downloading)

| Category | Verified Count | Notes |
|---|---:|---|
| Seed HTML Routes (`lumascreative.com`) | 16 | All 16 return `200 OK` |
| Additional Discovered Public HTML Routes | 3 | `/shop/clovix`, `/shop/clovix-monitor`, `/shop/layerize` (`200 OK`) |
| Fallback / Error Route | 1 | `/404.html` (`NotFoundPage` catch-all `*`) |
| Verified Redirect Routes | 5 | `/services` → `/#workflow`; `/design-projects`, `/work`, `/portfolio` → `/projects`; `/blog` → `/blogs`; `/photo-albums` → `/` |
| Auth-Walled / Skipped Routes | 2 | `/admin`, `/admin/login` (private CMS — skipped per rules) |
| Crawl & Sitemap Files | 2 | `/robots.txt`, `/sitemap.xml` (`200 OK`) |
| Public Anonymous API JSON Feeds | 10 | `/api/init-data`, `/api/projects`, `/api/testimonials`, `/api/blogs`, `/api/settings`, `/api/team`, `/api/trusted-brands`, `/api/services`, `/api/albums`, `/api/process` (`200 OK`) |
| Archived Original Bundles (`web.archive.org`) | 4 | `index-DYSJbPYe.css`, `index-DX3tdZ4I.js`, `react-hU48T5BV.js`, `motion-BkiIO92n.js` (`200 OK`) |
| Font Assets (`.woff2`) | 5 | `/fonts/zen-dots-latin.woff2` + self-hosted `Inter`, `Syne`, `Poppins`, `Urbanist` |
| First-Party Media / Icons / Downloads (`lumascreative.com`) | 24 | 3 favicons/icons, 8 `/brands/on-dark/*.png`, 7 `/creators/*.jpg`, 4 `/brand/*`, 1 `/video/layerize-intro.mp4`, 1 `/downloads/Layerize-v1.0.0.zip` |
| External Assets — `res.cloudinary.com` (`dyyrjhuho`) | 25 | 3 site logos/favicon, 1 showreel `.mp4` + 1 poster `.jpg`, 6 project images (raw + `w_1000`), 1 testimonial portrait (raw + `g_face`), 8 brand logos, 5 team `image/fetch` portraits |
| External Assets — `i.ytimg.com` & `img.youtube.com` | 63 | 27 `mqdefault.jpg` marquee thumbs, 28 `maxresdefault.jpg` / `oar2.jpg` / `.webp` / `hqdefault.jpg` thumbs across 28 unique video IDs, plus 4 `img.youtube.com` thumbs |
| **Total Verified Clonable URLs** | **153** | Excluding 5 redirects and 2 auth-walled admin routes |

---

## 2a. HTML Pages & Routes

### Seed URLs (16 — all `200 OK`, verified via `fetch_page`)
1. `https://lumascreative.com/` → `site/index.html`
2. `https://lumascreative.com/projects` → `site/projects/index.html`
3. `https://lumascreative.com/about` → `site/about/index.html`
4. `https://lumascreative.com/blogs` → `site/blogs/index.html`
5. `https://lumascreative.com/contact` → `site/contact/index.html`
6. `https://lumascreative.com/privacy-policy` → `site/privacy-policy/index.html`
7. `https://lumascreative.com/terms-conditions` → `site/terms-conditions/index.html`
8. `https://lumascreative.com/refund-policy` → `site/refund-policy/index.html`
9. `https://lumascreative.com/projects/cmv4cmutf0000o10u2f9amm5m` → `site/projects/cmv4cmutf0000o10u2f9amm5m/index.html`
10. `https://lumascreative.com/projects/cmp3nmpws0003m90uqjj2d769` → `site/projects/cmp3nmpws0003m90uqjj2d769/index.html`
11. `https://lumascreative.com/projects/cmp34utkk0001m90ubfml7xvc` → `site/projects/cmp34utkk0001m90ubfml7xvc/index.html`
12. `https://lumascreative.com/projects/cmp3p0cp20004m90u0bemyne2` → `site/projects/cmp3p0cp20004m90u0bemyne2/index.html`
13. `https://lumascreative.com/projects/cmp351q190002m90upstyq8ei` → `site/projects/cmp351q190002m90upstyq8ei/index.html`
14. `https://lumascreative.com/projects/cmp3pcv660005m90uqr5lrzyq` → `site/projects/cmp3pcv660005m90uqr5lrzyq/index.html`
15. `https://lumascreative.com/projects/cmp3pezzw0006m90uxnfvmj7r` → `site/projects/cmp3pezzw0006m90uxnfvmj7r/index.html`
16. `https://lumascreative.com/projects/cmp3pgiix0007m90uq47eevkx` → `site/projects/cmp3pgiix0007m90uq47eevkx/index.html`

### Discovered Public Routes Beyond Seed List (3 + `404.html`)
17. `https://lumascreative.com/shop/clovix` (`200 OK`) → `site/shop/clovix/index.html`
18. `https://lumascreative.com/shop/clovix-monitor` (`200 OK`) → `site/shop/clovix-monitor/index.html`
19. `https://lumascreative.com/shop/layerize` (`200 OK`) → `site/shop/layerize/index.html`
20. `https://lumascreative.com/404` (`404` catch-all SPA view) → `site/404.html`

### Verified Redirects & Non-Clonable Routes
- `/services` → redirects to `/#workflow`
- `/design-projects`, `/work`, `/portfolio` → redirect to `/projects`
- `/blog` → redirects to `/blogs`
- `/photo-albums` → redirects to `/`
- `/admin`, `/admin/login`, `/admin/*` → auth-walled private CMS (`Not clonable — requires server authentication`)
- `/shop`, `/shop/shortcuts`, `/shop/room-of-recording`, `/manifest.json`, `/manifest.webmanifest` → verified `404`

---

## 2b & 2c. Crawl Files, Public API Feeds, Bundles, Fonts & Media

### Crawl & Public API JSON Feeds (`lumascreative.com`)
- `/robots.txt` (`200 OK`)
- `/sitemap.xml` (`200 OK`)
- `/api/init-data` (`200 OK`)
- `/api/projects` (`200 OK`)
- `/api/testimonials` (`200 OK`)
- `/api/blogs` (`200 OK`, `[]`)
- `/api/settings` (`200 OK`)
- `/api/team` (`200 OK`)
- `/api/trusted-brands` (`200 OK`)
- `/api/services` (`200 OK`, `[]`)
- `/api/albums` (`200 OK`, `[]`)
- `/api/process` (`200 OK`, `[]`)

### Bundles (`lumascreative.com/assets/*` via Wayback `20261106055543id_`)
- `/assets/index-DYSJbPYe.css` (`200 OK`)
- `/assets/index-DX3tdZ4I.js` (`200 OK`)
- `/assets/react-hU48T5BV.js` (`200 OK`)
- `/assets/motion-BkiIO92n.js` (`200 OK`)

### Fonts
- `/fonts/zen-dots-latin.woff2` (`200 OK` in Wayback CDX; `Zen Dots` 400 Latin)
- `/fonts/inter-latin.woff2` (`Inter` variable Latin)
- `/fonts/syne-latin.woff2` (`Syne` variable Latin)
- `/fonts/poppins-latin-600.woff2` & `/fonts/poppins-latin-700.woff2` (`Poppins` Latin)
- `/fonts/urbanist-latin.woff2` (`Urbanist` variable Latin)

### First-Party Images, Icons, Video & Downloads (`lumascreative.com`)
- `/favicon.ico`, `/apple-touch-icon.png`, `/icon-192.png`
- `/brands/on-dark/airtel.png`
- `/brands/on-dark/bkash.png`
- `/brands/on-dark/grameenphone.png`
- `/brands/on-dark/bashundhara.png`
- `/brands/on-dark/edison.png`
- `/brands/on-dark/standard-chartered.png`
- `/brands/on-dark/suzuki.png`
- `/brands/on-dark/10-minute-school.png`
- `/creators/rafsan-the-chotobhai.jpg`
- `/creators/ayman-sadiq.jpg`
- `/creators/munzereen-shahid.jpg`
- `/creators/khalid-farhan.jpg`
- `/creators/sohag360.jpg`
- `/creators/enayet-chowdhury.jpg`
- `/creators/nafees-salim.jpg`
- `/brand/clovix.svg`
- `/brand/clovix-monitor.svg`
- `/brand/layerize.svg`
- `/brand/room-of-recording.png`
- `/video/layerize-intro.mp4`
- `/downloads/Layerize-v1.0.0.zip`

### External Host: `res.cloudinary.com` (rewritten to `/res.cloudinary.com/...`)
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1778341652/lumas-portfolio/settings/thkzcnscjp4dgyrndhtx.png`
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1778341660/lumas-portfolio/settings/kytkqd9p5txovzzw053p.png`
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1778341678/lumas-portfolio/settings/eqqjwqe2rs4c6bcyq7ld.png`
- `/res.cloudinary.com/dyyrjhuho/video/upload/v1778341527/lumas-portfolio/settings/yx1mdovgq72dsjw6qtwo.mp4`
- `/res.cloudinary.com/dyyrjhuho/video/upload/so_0,f_jpg,q_auto,w_1280/v1778341527/lumas-portfolio/settings/yx1mdovgq72dsjw6qtwo.jpg`
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1781353371/lumas-portfolio/projects/oajhlgthlay24s7xfxyv.jpg` (+ `q_auto,f_auto,c_limit,w_1000`)
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1781353637/lumas-portfolio/projects/alngfgnhyqrn322je9s2.jpg` (+ `q_auto,f_auto,c_limit,w_1000`)
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1781353678/lumas-portfolio/projects/b5bezzmzs2cyaa2mjujb.jpg` (+ `q_auto,f_auto,c_limit,w_1000`)
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1784744034/lumas-portfolio/testimonials/ww0awoepnel9jwmv73zt.jpg` (+ `q_auto,f_auto,w_800,h_1000,c_fill,g_face`)
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1778359042/lumas-portfolio/brands/xpunbiq1dfwnxbiwsfss.png`
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1778359047/lumas-portfolio/brands/blp5zqjzfhn9g8d8utg1.png`
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1778359065/lumas-portfolio/brands/vwetkbn8ncvaz7r0aun1.png`
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1778359069/lumas-portfolio/brands/vlfoiyecqoffaq47fvtb.png`
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1778676831/lumas-portfolio/brands/qpqprjj0wmtnlbuyeoqs.png`
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1778359077/lumas-portfolio/brands/ptyzyswosfagbuu9coqp.png`
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1778359081/lumas-portfolio/brands/sqjsvgofgx65nddsx5xr.png`
- `/res.cloudinary.com/dyyrjhuho/image/upload/v1778359261/lumas-portfolio/brands/peelfseqdc4xrm2vy33r.png`
- `/res.cloudinary.com/dyyrjhuho/image/fetch/q_auto,f_auto,w_800,h_1000,c_fill,g_face/https%3A%2F%2Flh3.googleusercontent.com%2Fd%2F1TO79V0FtUdr8gdCen4fE-CgJrgLtqmhi` (mapped cleanly to local `/res.cloudinary.com/dyyrjhuho/team/towfiq-islam.jpg`)
- `/res.cloudinary.com/dyyrjhuho/image/fetch/q_auto,f_auto,w_800,h_1000,c_fill,g_face/https%3A%2F%2Flh3.googleusercontent.com%2Fd%2F13M3kYDoPKS5mfBmsIfyp3c7LAuaA4o28` (mapped cleanly to local `/res.cloudinary.com/dyyrjhuho/team/saad-alam.jpg`)
- `/res.cloudinary.com/dyyrjhuho/image/fetch/q_auto,f_auto,w_800,h_1000,c_fill,g_face/https%3A%2F%2Flh3.googleusercontent.com%2Fd%2F16RTJlR6MJFEVuPfdHWtI-Wuz-MeonUQo` (mapped cleanly to local `/res.cloudinary.com/dyyrjhuho/team/tawhid-nafis.jpg`)
- `/res.cloudinary.com/dyyrjhuho/image/fetch/q_auto,f_auto,w_800,h_1000,c_fill,g_face/https%3A%2F%2Flh3.googleusercontent.com%2Fd%2F1yTA6KoQoG5XmYwwIusRjdM_9taFXZtWW` (mapped cleanly to local `/res.cloudinary.com/dyyrjhuho/team/mahmudur-rahman.jpg`)
- `/res.cloudinary.com/dyyrjhuho/image/fetch/q_auto,f_auto,w_800,h_1000,c_fill,g_face/https%3A%2F%2Flh3.googleusercontent.com%2Fd%2F1tjqLGnhwFmxv1Yu8_SzUMniGUZMmnEco` (mapped cleanly to local `/res.cloudinary.com/dyyrjhuho/team/fahim-rahman.jpg`)

### External Hosts: `i.ytimg.com` & `img.youtube.com` (28 Video IDs)
- Portfolio Films & Reels (27 IDs — `mqdefault.jpg` + `maxresdefault.jpg` / `oar2.jpg` / `.webp`):
  `F4zKWosGHQ4`, `6kSI2jibr54`, `DulCkPSyoiA`, `-1QX281mWa0`, `pY_O4SLRJxc`, `_lpFw_GafVs`, `hYv-kSucOhA`, `F6UsIoS68nM`, `GsgM_bOHdaw`, `BB3tYr6ePyc`, `RawhF1jMdbo`, `14YJJ1VusLE`, `06SsSrHvdcE`, `8VEviE26FAU`, `Xed_6fVqQOc`, `7jvcC7KyzNM`, `cCje7ACDyvc`, `FVnER3-PNO0`, `Xqa-lPwGrhE`, `vzouVjO8_q8`, `e8ajt0hNFEU`, `0rbMNifHzOA`, `h43k1-pLKDg`, `GCUDpIwNeqE`, `kSiEonKp1_4`, `8eJ3eBdsZj4`, `6kzfAk8ZdQQ`
- Video Testimonial (1 ID):
  `UahN80sIbE8` (`/i.ytimg.com/vi/UahN80sIbE8/maxresdefault.jpg`)
- `img.youtube.com` thumbnails (4 IDs):
  `GCUDpIwNeqE`, `h43k1-pLKDg`, `cCje7ACDyvc`, `FVnER3-PNO0` (`/img.youtube.com/vi/<id>/maxresdefault.jpg`)
