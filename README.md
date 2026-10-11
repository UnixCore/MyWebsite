# Francesco Altomare — personal website

A single-page site for recruiters: who I am, my experience, a showroom of personal projects, contacts and the CV download.

- **Stack:** React 19, TypeScript, Vite, CSS Modules. No UI framework, no tracking, no external requests (fonts are self-hosted).
- **Light and dark mode:** follows the OS by default; the toggle remembers the visitor's choice.
- **Content lives in data files** under `src/content/`. You never need to touch a component to change what the page says.
- **Ships as static files**, so it runs on any free static host or on your own server with Docker.

```
┌ header: pipeline navigation (about ── experience ── projects ── contact), theme toggle, CV
├ #about       intro, photo, story, certifications, education, hard skills, soft skills
├ #experience  timeline grouped by employer, expandable details
├ #projects    cards → detail dialog with gallery, full description, stack, links
└ #contact     LinkedIn, email, WhatsApp, Instagram + CV download
```

The navigation is drawn like a DAG run: sections you have scrolled past turn green (succeeded), the one on screen is amber (running), the rest are queued.

---

## Quick start

Requires Node.js 22+.

```bash
npm install
npm run dev        # http://localhost:5173 — draft projects are visible here
npm run check      # typecheck + lint + format check + tests
npm run build      # production build in dist/
npm run preview    # serve dist/ locally
```

Or with Docker only (no Node needed):

```bash
docker compose up -d --build   # http://localhost:8080
```

---

## Editing the content

| What you want to change                  | File                                                        |
| ---------------------------------------- | ----------------------------------------------------------- |
| Name, role line, intro, story, interests | `src/content/profile.ts`                                    |
| Hard and soft skills                     | `src/content/skills.ts`                                     |
| Experience (employers and roles)         | `src/content/experience.ts`                                 |
| Certifications and education             | `src/content/education.ts`                                  |
| Contacts and CV file                     | `src/content/contacts.ts`                                   |
| Projects                                 | `src/content/projects/*.ts` (one file per project)          |
| Photo                                    | `public/images/francesco.jpg` + `.webp`                     |
| CV                                       | `public/cv/Francesco-Altomare-CV.pdf`                       |
| Page title, description, social preview  | `index.html`                                                |
| Colours and fonts                        | `src/styles/global.css` (tokens at the top, light and dark) |

After editing, run `npm test`: it checks dates, required fields, safe links and that every image and the CV actually exist.

### Add a new experience

Open `src/content/experience.ts` and copy a role object inside `roles` (or a whole employer). Dates use `YYYY-MM`. Use `end: 'present'` for a current role, or leave `end` out if unknown. Order does not matter: everything is sorted newest-first.

```ts
{
  title: 'Data Engineer — New project',
  start: '2027-01',
  end: 'present',
  sector: 'Banking',
  summary: 'One or two sentences, always visible.',
  details: ['Optional paragraph shown with "Show details".'],
  tech: ['PySpark', 'Databricks'],
},
```

### Add a new project

1. Copy `src/content/projects/_template.ts` to `src/content/projects/my-project.ts`.
2. Put screenshots in `public/projects/my-project/` (WebP, about 1600×1000, under 300 KB each). The first image is the card cover.
3. Fill in the fields and remove `draft: true` (or set it to `false`).

That's it: the file is picked up automatically. `draft: true` projects show only in `npm run dev`, so you can preview before publishing. `featured: true` pins a project first.

Delete `example-project.ts` and `public/projects/example-project/` once you have a real project.

Deep link to a project: `https://your-site/#project-my-project`.

### Update the CV

Replace `public/cv/Francesco-Altomare-CV.pdf` (keep the name, or update `cv.href` in `contacts.ts`) and change `cv.updated`.

### Change the photo

Strip location metadata before publishing (phone photos contain GPS data). For example:

```bash
magick input.jpg -auto-orient -resize 800x1000^ -gravity north -extent 800x1000 -strip -quality 82 public/images/francesco.jpg
magick public/images/francesco.jpg -quality 78 public/images/francesco.webp
```

---

## Deployment

The build output (`dist/`) is plain static files. Pick one:

### Your own server (Docker)

```bash
git clone <your-repo> && cd <your-repo>
VITE_SITE_URL=https://your-domain.example docker compose up -d --build
```

- The image is multi-stage: Node builds the site, then an **unprivileged nginx** (non-root, port 8080) serves it.
- `docker-compose.yml` runs it read-only, with all Linux capabilities dropped, `no-new-privileges` and memory/CPU limits.
- Health check: `GET /healthz`.
- Put HTTPS in front of it. `deploy/Caddyfile.example` gives you automatic Let's Encrypt certificates with Caddy; then uncomment the HSTS header in `deploy/nginx/security-headers.conf` (or set it in Caddy as in the example).
- To update: `git pull && docker compose up -d --build`.

### GitHub Pages (free)

1. Push to GitHub. In the repo: **Settings → Pages → Source: GitHub Actions**.
2. `.github/workflows/deploy-pages.yml` builds and publishes on every push to `main`.
3. For a custom domain or a `username.github.io` repo, add a repository variable `BASE_PATH` = `/`. Add `SITE_URL` with the public URL for social previews.

GitHub Pages cannot send custom headers, so the Content-Security-Policy is not applied there. Netlify, Cloudflare Pages and the Docker image do apply it.

### Netlify or Cloudflare Pages (free)

Connect the repository. Build command `npm run build`, output directory `dist`, Node 22. `netlify.toml` already configures Netlify. Security headers come from `public/_headers`, which both read.

---

## Security and quality

- **Strict Content-Security-Policy:** only same-origin scripts, styles, fonts and images; no inline scripts (the theme bootstrap is the external `public/theme-init.js`), no framing, no form posts. Same rules in `deploy/nginx/security-headers.conf` and `public/_headers`. Keep them in sync.
- Plus `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`, COOP/CORP, and `server_tokens off`.
- External links use `rel="noopener noreferrer"`; tests enforce it and allow only `https:` / `mailto:` URLs in content.
- No third-party requests: fonts are bundled via Fontsource, there is no analytics.
- The photo is stripped of EXIF/GPS metadata.
- CI (`.github/workflows/ci.yml`): typecheck, lint (oxlint), Prettier, tests (Vitest + Testing Library), build, `npm audit`, then builds the Docker image and smoke-tests it (health, page, CSP header).
- Dependabot keeps npm packages, the Docker base images and GitHub Actions up to date.
- Accessibility: skip link, landmarks, visible keyboard focus, native `<dialog>` for project details (focus trap, Esc to close), `prefers-reduced-motion` respected, alt text required by tests.

## Project structure

```
├── .github/              CI, GitHub Pages deploy, Dependabot
├── deploy/               nginx config, security headers, Caddy example
├── public/               static files copied as-is (photo, CV, project images, robots.txt, _headers)
├── src/
│   ├── content/          ← all the text and data of the site
│   │   └── projects/     ← one file per project
│   ├── components/       Header, Section, ProjectCard, ProjectDialog, Icon
│   ├── sections/         About, Experience, Projects, Contact
│   ├── hooks/            useTheme, useScrollSpy
│   ├── lib/              date formatting
│   ├── styles/           global tokens and base styles
│   └── test/             content validation and UI tests
├── Dockerfile
├── docker-compose.yml
└── netlify.toml
```
