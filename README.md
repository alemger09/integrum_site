# Integrum — STEM Racing

The official website for Team Integrum, a STEM Racing (F1 in Schools) team from Almaty, Kazakhstan.

## Stack

- **Frontend:** Next.js + React
- **Language:** TypeScript
- **Backend / API:** Node.js
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Styling:** Tailwind CSS
- **Auth / DB hosting:** Supabase
- **Deployment:** Vercel

This repository currently ships the marketing site with **Vite + React + TypeScript + Tailwind CSS v4** and **Framer Motion**; the list above is the target platform stack for the full product.

## Scripts

```bash
npm install        # install dependencies
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check + production build to /dist
npm run preview    # preview the production build
npm run lint       # ESLint
```

## Structure

```
src/
├── App.tsx                 # composes the page
├── index.css               # Tailwind v4 theme tokens + custom animations
├── components/             # Hero, Navbar, About, Mission, Team, ...
└── data/content.ts         # all copy & team info in one place
public/assets/              # logo + team photos
```

## Brand palette

Inspired by the new sparkle logo:

| Token            | Hex       | Use                       |
| ---------------- | --------- | ------------------------- |
| `--color-bg`     | `#0a0612` | Page background           |
| `--color-bg-2`   | `#0f0920` | Alternating sections      |
| `--color-surface`| `#1a1130` | Cards                     |
| `--color-primary`| `#c7b3ff` | Logo lavender, accents    |
| `--color-primary-bright` | `#b59cff` | Highlights        |
| `--color-primary-deep`   | `#7c3aed` | Gradients & CTAs  |
| `--color-text`           | `#f3eefe` | Body copy         |

The old static build is preserved under `_backup/` for reference.
