# Mauricio Miño — portfolio design

Build an expressive, production-ready personal portfolio for engineering leaders and founders. The user delegated full creative and implementation control and requested advanced 3D animation, transitions, modern technology, and eventual Vercel deployment. Proceed locally; no public deployment in this first build.

## Direction

An editorial engineering studio: near-black charcoal, warm ivory, signal orange, oversized Space Grotesk, small IBM Plex Mono labels. A metallic, orange-accented 3D sculpture anchors the first viewport. Navigation and meaningful content stay immediately accessible. Motion enhances real content; no loading ceremony or scroll hijacking.

## Content

Use the supplied résumé and verified public profile material. Present Mauricio as a senior software engineer based in Argentina, currently at Bask Health. Show selected contributions at Bask Health, Nolte/Breeze, and Applica without invented metrics or attribution. Company/work visuals are original abstract representations, not screenshots of private software. Contact links use verified email, LinkedIn, and GitHub.

## Experience

One route: hero, selected work, experience, approach/stack, contact. Work entries open accessible native dialogs with contribution details and source/company links. Mobile navigation opens an accessible dialog. A motion toggle pauses decorative animation and is persisted locally. OS reduced motion is respected; text and interactions remain available without WebGL. No custom cursor, smooth-scroll interception, forms, or fake availability claim.

## Technical boundaries

Next.js App Router and TypeScript; React Three Fiber/Three.js for an isolated lazy-loaded client scene; GSAP for scoped progressive animation. Server-rendered copy, client enhancement only for motion and dialogs. Bundled local fonts. Responsive CSS. No remote asset dependencies in the 3D scene.

## Verification

Production build, TypeScript and ESLint. Browser tests cover navigation, keyboard dialog behavior, motion preferences, mobile overflow, and no-WebGL fallback. Inspect actual desktop and mobile pixels. Review code with an independent agent before completion. Default to zero explanatory comments.
