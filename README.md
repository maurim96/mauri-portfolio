# Mauricio Miño — portfolio

A personal portfolio for Mauricio Miño, Lead Software Engineer at Bask Health. Charcoal, ivory, signal orange, an interactive chrome sculpture, original project artwork, and an editorial account of his work.

## Run locally

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open [localhost:3007](http://localhost:3007). Use the `localhost` hostname for the development server; Next.js blocks development resources requested from other origins by default.

## Verify

```sh
npm run typecheck
npm run lint
npm run format:check
npx playwright install chromium
npm test
npm run build
```

Playwright checks project dialogs and keyboard focus, motion preference persistence, OS reduced motion, mobile navigation, and the no-WebGL fallback. Tests reuse a server already running on port 3007 or start a development server.

For production locally, run `npm run build` and then `npm start`.

A ready-to-use GitHub Actions example is saved in `docs/verification-workflow.yml`. To enable it, add it as `.github/workflows/ci.yml` through a GitHub connection with workflow permissions. The current connection could publish application code but could not create workflows.

## Stack and structure

- Next.js 16 App Router, React 19, TypeScript.
- Three.js, React Three Fiber, and Drei for the separately loaded 3D scene.
- GSAP for scoped entrance and scroll animation; native anchor navigation and dialogs.
- Locally bundled Space Grotesk and IBM Plex Mono fonts; no third-party requests are required to render the site.
- `src/lib/content.ts`: project descriptions, career dates, links, and toolkit.
- `src/components/sculpture-scene.tsx`: mesh, lighting, camera, and pointer motion.
- `src/components/motion-provider.tsx`: persisted motion control and progressive animation.
- `src/components/project-visual.tsx`: original conceptual artwork, separate from private product screens.
- `src/app/globals.css`: layout, responsive rules, typography, and visual system.

Motion respects the operating system preference unless the visitor explicitly chooses otherwise. A manual toggle persists in local storage when available. The hero stops continuously rendering when it is off screen or the tab is hidden. A static sculpture replaces WebGL when it is unavailable. Meaningful copy is rendered on the server and never depends on an animation completing.

## Content sources

The user supplied the [résumé](https://docs.google.com/document/d/1SaJaLF93-_sKsc5UGep-4_N_8lyVBt6rhQqD1FP0Pv0/edit?tab=t.0) and [LinkedIn profile](https://www.linkedin.com/in/maurim96/). The résumé is not fully updated. The current lead role was confirmed directly by Mauricio and corroborated by the [Bask team page](https://bask.health/team). September 2024 is his company start date, not a claimed promotion date.

Project context is corroborated by the [Breeze case study](https://nolte.io/work/breeze-oral-care) and [Pilou case study](https://nolte.io/work/pilou). Contribution and technology descriptions come from the supplied résumé. Agency metrics are not presented as individual accomplishments. The project illustrations are original conceptual representations.

## Deploy to Vercel

Import this repository in Vercel, select the Next.js preset, and use Node.js 24. The default root directory and `npm run build` work without environment variables or additional services. No public deployment is included in this initial local build.
