# Portfolio implementation plan

**Goal:** Ship a distinctive local portfolio with real content, interactive 3D, accessible motion, and a clean Vercel-ready build.

**Architecture:** Server-rendered portfolio sections with narrow client islands for motion, dialogs, and the 3D sculpture. Static factual content lives in one typed module.

**Tech stack:** Next.js 16, React 19, TypeScript, React Three Fiber 9, Drei 10, Three.js, GSAP 3, Playwright.

**Spec:** `docs/superpowers/specs/2026-10-02-portfolio-design.md`

## Global constraints

- No invented accomplishments, dates, metrics, availability, or private product screenshots.
- Local first; Vercel configuration uses the default Next.js preset.
- Visible copy without animation; reduced motion and no-WebGL fallback.
- No comments that restate code.

## Review focus

- Keyboard-only users can open, navigate, and dismiss dialogs, with focus restored.
- Motion preference persists and OS reduced-motion disables automatic movement.
- A narrow screen fits without horizontal scroll.
- Missing WebGL leaves the complete site usable and the sculpture fallback visible.
- Production output uses no runtime secrets or private source data.

## Task 1 — Working portfolio and factual story

- [x] Install compatible stable dependencies and configure Next.js.
- [x] Write browser acceptance tests for real visitor journeys before implementing interactions.
- [x] Create `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`.
- [x] Create `src/lib/content.ts` with verified roles, projects, and contact links.
- [x] Implement navigation, work dialogs, experience, and contact.

## Task 2 — Sculpture and motion

- [x] Implement `src/components/sculpture-scene.tsx` as a bounded independent scene with no network asset requests.
- [x] Implement `src/components/sculpture.tsx` with lazy loading, WebGL error fallback, visibility pausing, and reduced-motion support.
- [x] Implement `src/components/motion-provider.tsx` with a persisted pause preference.
- [x] Scope GSAP entrance and scroll effects; keep content visible before initialization.

## Task 3 — Reviewable handoff

- [x] Verify production build, typecheck, lint, browser acceptance tests.
- [x] Inspect desktop and mobile screenshots and correct visual issues.
- [x] Request independent code review and fix material findings.
- [x] Audit added comment lines and record content sources in README.
- [x] Commit a clean implementation on `codex/portfolio-experience` and leave a working local preview.

## Verification record

Production build, typecheck, ESLint, and formatting passed. All eight Playwright tests passed against the production server. Desktop and mobile pixels were inspected in Chromium and the Codex browser. Independent review has no material open findings. Added application code contains no comments.
