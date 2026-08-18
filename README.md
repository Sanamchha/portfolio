# Sanam Suwal — Portfolio Website

Professional portfolio for a Senior QA Automation Engineer in healthcare analytics.

**Live site:** [sanamsuwal.com.np](https://sanamsuwal.com.np)

## Tech Stack

- [Astro](https://astro.build/) — static site generator
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [TypeScript](https://www.typescriptlang.org/) — type safety

## Quick Start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to dist/
npm run preview  # preview production build
```

## Updating Content

All content lives in JSON files under `src/data/`:

| File | What to edit |
|------|-------------|
| `profile.json` | Name, title, tagline, contact info, summary |
| `skills.json` | Skill categories and items |
| `experience.json` | Job history (newest first) |
| `projects.json` | Featured case studies and other projects |
| `education.json` | Degree and training list |

After editing, run `npm run dev` to preview, then commit and push to deploy.

## CV / Resume

Place your latest CV at:

```
public/Sanam_Suwal_Senior_QA_Automation_CV_2026.pdf
```

Update the `cvPath` field in `src/data/profile.json` if the filename changes.

## Deployment (Cloudflare Pages)

Connected to GitHub: **Sanamchha/portfolio** — pushes to `main` auto-deploy.

### Cloudflare Pages build settings

| Setting | Value |
|---------|-------|
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `22` |

### Custom domains

Add in Cloudflare Pages → your project → **Custom domains**:

- `sanamsuwal.com.np`
- `www.sanamsuwal.com.np`

### DNS (Mercantile / .np registrar)

**Recommended:** Point domain nameservers to Cloudflare (Cloudflare dashboard gives you two NS records). Then custom domains work automatically with HTTPS.

**If keeping Mercantile DNS only:**

| Type | Name | Value |
|------|------|---------|
| CNAME | `www` | `<project-name>.pages.dev` |
| CNAME | `@` | `<project-name>.pages.dev` |

Replace `<project-name>` with your Pages subdomain after the first deploy.

## Project Structure

```
portfolio/
├── public/           # Static assets (CV, favicon, robots.txt)
├── src/
│   ├── components/   # Astro UI components
│   ├── data/         # JSON content files
│   ├── layouts/      # Page layouts
│   ├── pages/        # Routes
│   └── styles/       # Global CSS
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## License

Private — all rights reserved.
