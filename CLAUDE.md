# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

munimchacha.com is a landing page for an AI-powered tax automation service targeting Indian businesses. The site is built with Astro 5, React 19, and Tailwind CSS 4, featuring:
- Single-page architecture with animated page-flip sections
- Multiple analytics integrations (Google Analytics, Meta Pixel, PostHog)
- Sentry error monitoring with Spotlight debugging
- Zoho chatbot integration
- SEO optimization (sitemap, robots.txt, social meta tags)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:4321)
npm run dev

# Build for production (runs type checking + build)
npm run build

# Preview production build
npm run preview

# Type checking only
astro check

# Run Astro CLI commands
npm run astro -- [command]
```

## Architecture

### Component Structure

The application uses a hybrid Astro + React architecture:

- **Astro Pages** (`src/pages/`): File-based routing. Currently single page (`index.astro`)
- **Astro Layouts** (`src/layouts/`): `BaseLayout.astro` provides HTML shell with SEO meta tags, analytics scripts, and font loading
- **React Components** (`src/components/`): All UI components are React with client-side hydration via `client:load`

### Main Application Flow

1. `index.astro` imports `BaseLayout.astro` and `TaxwalaPage.tsx`
2. `TaxwalaPage.tsx` is the main React orchestrator that:
   - Initializes custom hooks for scroll detection, modal control, smooth scrolling, and reveal animations
   - Renders all sections wrapped in `PageFlipSection` components with staggered delays
   - Manages global state (modal visibility, sticky CTA visibility)
3. Individual section components (`HeroSection`, `BenefitsSection`, etc.) are self-contained with their own styling and content

### Key Directories

- `src/components/`: All React components
  - `analytics/`: Astro components for analytics scripts (PostHog, Google, Meta)
  - `bot/`: Zoho chatbot integration
  - `icons/`: SVG icon components
  - Section components (e.g., `HeroSection.tsx`, `BenefitsSection.tsx`)
- `src/hooks/`: Custom React hooks (`useScrollDetection`, `useModalControl`, `useGTMTracking`, etc.)
- `src/types/`: TypeScript interfaces and types
- `src/constants/`: Configuration constants (Tally form ID, colors, API config, content)
- `src/layouts/`: Astro layout templates
- `src/styles/`: Global CSS and Tailwind imports
- `public/`: Static assets (images, Lottie animations, scripts)

### TypeScript Configuration

- Path aliases configured in `tsconfig.json`:
  - `@components/*` → `./src/components/*`
  - `@layouts/*` → `./src/layouts/*`
- Strict TypeScript mode enabled via Astro's strict config
- JSX configured for React 19 with automatic JSX runtime

### Styling Approach

- **Tailwind CSS 4** via Vite plugin (not PostCSS)
- Custom theme in `tailwind.config.mjs`:
  - Primary color palette (blue)
  - Gold accent colors
  - Custom animations (fade-in, fade-in-up, float)
  - Extended spacing and border radius values
- Global styles in `src/styles/global.css`
- Component styles use Tailwind utility classes exclusively

### Analytics Integration

Multiple tracking systems are integrated:
- **Google Analytics** (`google.astro`) - Loaded in `<head>`
- **Google Pixel** (`google-pixel.astro`) - Loaded in `<body>`
- **Meta/Facebook Pixel** (`facebook.astro`) - Loaded in `<head>`
- **PostHog** (`posthog.astro`) - Loaded in `<head>`

All analytics components are Astro files with inline scripts. The `useGTMTracking` hook provides methods to track events (button clicks, form submissions, section views, video plays, modal interactions, external links) with automatic fallback to Meta Pixel for custom events.

### Custom Hooks

Located in `src/hooks/index.ts`:
- `useScrollDetection(threshold)`: Detects when user scrolls past threshold (default 800px)
- `useModalControl()`: Manages modal open/close state with body scroll lock and ESC key handling
- `useRevealOnScroll()`: IntersectionObserver-based reveal animations for `.reveal-on-scroll` elements
- `useSmoothScroll()`: Handles smooth scrolling for anchor links
- `useGTMTracking()`: Provides tracking methods for Google Analytics and Meta Pixel

### State Management

No external state management library. State is managed through:
- React hooks (`useState`, `useEffect`) in components
- Props drilling from `TaxwalaPage.tsx` to child components
- Custom hooks for shared behavior

## Important Notes

- **Hydration**: React components must use `client:load` directive in Astro files for client-side interactivity
- **Third-party scripts**: Tally form embed and data injector scripts are loaded via `<script is:inline>` in the "scripts" slot
- **Analytics**: `window.gtag` and `window.fbq` are declared globally in `src/env.d.ts` and `src/hooks/index.ts`
- **Constants**: Update `src/constants/config.ts` for beta spots, waitlist counts, form URLs, etc.
- **SEO**: Site URL is configured in `astro.config.mjs` as `https://munimchacha.com`
- **Type checking**: The build command includes `astro check` for type validation before building
