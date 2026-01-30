# Agent Instructions - TaxWala.ai Technical Guide

> Comprehensive technical documentation for AI agents working on this codebase. This file contains every technical detail, pattern, and convention used in the project.

## Project Foundation

### Framework Stack
- **Astro 5.16.15**: Static site generator with component islands architecture
- **React 19.2.3**: UI library for interactive components (client-side only)
- **TypeScript**: Strict mode enabled, no JSX syntax allowed
- **Tailwind CSS 3.x**: Delivered via npm
- **Build Tool**: Astro CLI with Vite bundler

### TypeScript Configuration
```typescript
// tsconfig.json is configured with:
- strict: true
- noImplicitAny: true
- strictNullChecks: true
- strictFunctionTypes: true
- strictBindCallApply: true
- strictPropertyInitialization: true
- noImplicitThis: true
- alwaysStrict: true

// CRITICAL RULES:
- Never use 'any' type
- All function parameters must have explicit types
- All function return types must be explicit
- All component props must use interface definitions
- Use 'unknown' instead of 'any' when type is truly unknown
```

### No JSX Syntax Rule
All React components are written in pure TypeScript using React.FC pattern:

```typescript
// ❌ WRONG - JSX syntax
export default function Component() {
  return <div>Content</div>;
}

// ✅ CORRECT - Pure TypeScript
export const Component: React.FC = () => {
  return <div>Content</div>;
};

// ✅ CORRECT - With props
interface ComponentProps {
  title: string;
  count: number;
}

export const Component: React.FC<ComponentProps> = ({ title, count }) => {
  return <div>{title}: {count}</div>;
};
```

## File Structure and Organization

### Directory Layout
```
/Users/soni/work/elitale/taxwala-react/
├── public/                          # Static assets, served at root
│   ├── llm.txt                     # Concise project overview
│   ├── llm-full.txt                # Complete documentation
│   ├── llms.txt                    # Product-focused for LLMs
│   ├── agent.txt                   # This file - technical guide
│   └── favicon.svg, favicon.ico    # Site icons
├── src/
│   ├── components/                 # React components (.tsx)
│   │   ├── icons/                  # SVG icon components
│   │   │   ├── ClockIcon.tsx
│   │   │   ├── CalendarIcon.tsx
│   │   │   ├── [... 18 more icons]
│   │   │   └── index.ts           # Barrel export
│   │   ├── Navigation.tsx          # Fixed header
│   │   ├── HeroSection.tsx         # Hero with video
│   │   ├── VideoModal.tsx          # YouTube modal
│   │   ├── ProblemSection.tsx      # Problem statement
│   │   ├── HowItWorksSection.tsx   # 3-step process
│   │   ├── BenefitsSection.tsx     # 6 benefits
│   │   ├── TrustSection.tsx        # Testimonials
│   │   ├── FAQSection.tsx          # FAQ accordion
│   │   ├── TeamSection.tsx         # Team profiles
│   │   ├── GuaranteeSection.tsx    # Trust guarantee badges
│   │   ├── FinalCTASection.tsx     # Final CTA
│   │   ├── StickyCTA.tsx           # Floating button
│   │   ├── Footer.tsx              # Site footer
│   │   ├── TaxwalaPage.tsx         # Main orchestrator
│   │   └── index.ts                # Component barrel export
│   ├── hooks/
│   │   └── index.ts                # Custom React hooks
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   ├── constants/
│   │   └── config.ts               # Configuration constants
│   ├── layouts/
│   │   └── BaseLayout.astro        # HTML root layout
│   └── pages/
│       └── index.astro             # Main page
├── astro.config.mjs                # Astro configuration
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
└── tailwind.config.mjs             # Tailwind config (not used with CDN)
```

### File Naming Conventions

#### Components
- **Format**: PascalCase with `.tsx` extension
- **Pattern**: `{ComponentName}.tsx`
- **Examples**: `Navigation.tsx`, `HeroSection.tsx`, `VideoModal.tsx`
- **Rule**: One component per file, file name matches component name

#### Icon Components
- **Format**: PascalCase with `Icon` suffix and `.tsx` extension
- **Pattern**: `{Name}Icon.tsx`
- **Examples**: `ClockIcon.tsx`, `ArrowRightIcon.tsx`, `CheckCircleIcon.tsx`
- **Location**: Must be in `src/components/icons/` directory
- **Export**: Must be exported from `src/components/icons/index.ts`

#### Hooks
- **Format**: camelCase starting with `use`
- **Pattern**: `use{Purpose}.tsx` or grouped in `index.ts`
- **Examples**: `useScrollDetection`, `useModalControl`
- **Location**: `src/hooks/index.ts`
- **Export**: Named exports only

#### Types
- **Format**: PascalCase for interfaces
- **Pattern**: `{Name}` or `{Name}Props`
- **Examples**: `NavLink`, `BenefitItem`, `HeroSectionProps`
- **Location**: `src/types/index.ts`
- **Convention**: Use `interface` not `type` for object shapes

#### Constants
- **Format**: UPPER_SNAKE_CASE for constants, camelCase for objects
- **Pattern**: `CONSTANT_NAME` or `configObject`
- **Examples**: `API_CONFIG`, `TAILWIND_COLORS`, `CONTENT`
- **Location**: `src/constants/config.ts`

#### Astro Files
- **Format**: lowercase with `.astro` extension
- **Pattern**: `{name}.astro`
- **Examples**: `index.astro`, `BaseLayout.astro`
- **Location**: Pages in `src/pages/`, Layouts in `src/layouts/`

## Import Patterns and Rules

### Import Order
Always follow this order:
```typescript
// 1. External libraries (React, etc.)
import React, { useState, useEffect } from "react";

// 2. Type imports (with 'type' keyword)
import type { NavLink, BenefitItem } from "../types";

// 3. Component imports
import { VideoModal } from "./VideoModal";

// 4. Icon imports (from barrel)
import { ClockIcon, ArrowRightIcon } from "./icons";

// 5. Hook imports
import { useScrollDetection, useModalControl } from "../hooks";

// 6. Constant imports
import { API_CONFIG, CONTENT } from "../constants/config";
```

### Type vs Module Imports

#### Type-Only Imports
Use `import type` for TypeScript interfaces and types:
```typescript
// ✅ CORRECT - Type-only import
import type { NavLink } from "../types";
import type { BenefitItem, TeamMember } from "../types";

// ❌ WRONG - Regular import for types
import { NavLink } from "../types";
```

#### Module Imports
Use regular imports for components, hooks, constants:
```typescript
// ✅ CORRECT - Regular imports
import { Navigation } from "./Navigation";
import { ClockIcon } from "./icons";
import { useScrollDetection } from "../hooks";
import { API_CONFIG } from "../constants/config";
```

### Barrel File Imports
Always import from barrel files (index.ts), never direct files:
```typescript
// ✅ CORRECT - Barrel import
import { ClockIcon, ArrowRightIcon } from "./icons";

// ❌ WRONG - Direct import
import { ClockIcon } from "./icons/ClockIcon";
```

### Relative Path Rules
- Same directory: `import { Component } from "./Component"`
- Parent directory: `import { Component } from "../Component"`
- Types: `import type { Type } from "../types"`
- Never use absolute paths like `@/components` (not configured)

## Component Development Patterns

### Basic Component Structure
```typescript
/**
 * Component Name
 * Brief description of what this component does
 */

import React from "react";
import type { PropsInterface } from "../types";

interface ComponentNameProps {
  prop1: string;
  prop2: number;
  prop3?: boolean; // Optional prop
}

export const ComponentName: React.FC<ComponentNameProps> = ({ 
  prop1, 
  prop2, 
  prop3 = false // Default value
}) => {
  // State (if needed)
  const [state, setState] = React.useState<string>("");

  // Effects (if needed)
  React.useEffect(() => {
    // Effect logic
  }, [dependency]);

  // Handlers
  const handleClick = () => {
    // Handler logic
  };

  return (
    <section className="tailwind-classes">
      {/* JSX content */}
    </section>
  );
};
```

### Subcomponent Pattern
Create subcomponents within the same file for component-specific UI:
```typescript
// Main component
export const MainComponent: React.FC = () => {
  return (
    <div>
      <SubComponent1 title="Hello" />
      <SubComponent2 count={5} />
    </div>
  );
};

// Subcomponent interfaces
interface SubComponent1Props {
  title: string;
}

interface SubComponent2Props {
  count: number;
}

// Subcomponents (not exported)
const SubComponent1: React.FC<SubComponent1Props> = ({ title }) => (
  <div>{title}</div>
);

const SubComponent2: React.FC<SubComponent2Props> = ({ count }) => (
  <div>{count}</div>
);
```

### State Management Pattern
```typescript
// ✅ CORRECT - Explicit type
const [count, setCount] = React.useState<number>(0);
const [text, setText] = React.useState<string>("");
const [isOpen, setIsOpen] = React.useState<boolean>(false);
const [items, setItems] = React.useState<string[]>([]);

// ✅ CORRECT - Inferred from initial value (when obvious)
const [count, setCount] = React.useState(0); // number inferred
const [text, setText] = React.useState(""); // string inferred

// ❌ WRONG - No type or initial value
const [data, setData] = React.useState(); // Implicit 'any'
```

### Event Handler Pattern
```typescript
// Click handlers
const handleClick = () => {
  // No event needed
};

const handleClickWithEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  // Handler logic
};

// Input handlers
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value;
  setState(value);
};

// Form handlers
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // Submit logic
};

// Generic handlers
const handleToggle = (index: number) => {
  // Toggle logic with parameter
};
```

## Icon Component Creation

### Icon File Structure
```typescript
/**
 * Icon Name Icon Component
 * Brief description of what this icon represents
 */

import React from "react";

interface IconNameIconProps {
  className?: string; // Always optional with default
}

export const IconNameIcon: React.FC<IconNameIconProps> = ({ 
  className = "w-6 h-6" // Default size
}) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M..." />
  </svg>
);
```

### SVG Attribute Rules
- Use `className` not `class`
- Use `fill="currentColor"` to inherit text color
- Use `stroke="currentColor"` for outlined icons
- Common viewBox values: `"0 0 20 20"` or `"0 0 24 24"`
- Always include `strokeLinecap="round"` and `strokeLinejoin="round"` for stroked icons

### Icon Types
**Filled Icons** (solid):
```typescript
export const StarIcon: React.FC<StarIconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921..." />
  </svg>
);
```

**Outlined Icons** (stroke):
```typescript
export const MenuIcon: React.FC<MenuIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
```

### Adding New Icons Checklist
1. Create file in `src/components/icons/{Name}Icon.tsx`
2. Follow icon component structure (interface + export)
3. Add to `src/components/icons/index.ts` barrel export
4. Use descriptive name with `Icon` suffix
5. Set appropriate default className size
6. Test import in a component: `import { NewIcon } from "./icons";`

### Icons vs Images
**Use Icon Components when:**
- SVG-based vector graphics
- Need to change color with text color (currentColor)
- Simple shapes and symbols
- UI elements (arrows, checks, close buttons)

**Use Image tags when:**
- Photos or complex graphics
- Raster images (PNG, JPG, WebP)
- External images from CDN
- User-generated content

```typescript
// Icon component usage
<ClockIcon className="w-8 h-8 text-blue-500" />

// Image tag usage
<img src="/image.jpg" alt="Description" className="w-full h-auto" />
<img src="https://cdn.example.com/photo.jpg" alt="User" className="w-12 h-12 rounded-full" />
```

## Custom Hooks Development

### Hook Structure
```typescript
/**
 * Hook Name
 * Description of what this hook does and when to use it
 */

export function useHookName(param: ParamType): ReturnType {
  const [state, setState] = React.useState<StateType>(initialValue);

  React.useEffect(() => {
    // Effect logic
    
    // Cleanup
    return () => {
      // Cleanup logic
    };
  }, [dependencies]);

  // Return value or object
  return state;
  // OR
  return { state, setState, helper };
}
```

### Existing Hooks

#### useScrollDetection
```typescript
/**
 * Detects when user scrolls past a threshold
 * @param threshold - Pixel value to trigger visibility (default: 800)
 * @returns boolean - true if scrolled past threshold
 */
export function useScrollDetection(threshold: number = 800): boolean {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isVisible;
}

// Usage:
const isStickyVisible = useScrollDetection(800);
```

#### useModalControl
```typescript
/**
 * Manages modal open/close state with side effects
 * - Prevents body scroll when modal is open
 * - Closes modal on Escape key press
 * - Cleans up on unmount
 */
export function useModalControl() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return { isOpen, setIsOpen, open, close };
}

// Usage:
const { isOpen, open, close } = useModalControl();
```

#### useRevealOnScroll
```typescript
/**
 * Adds scroll reveal animation to elements with .reveal-on-scroll class
 * Uses Intersection Observer API for performance
 */
export function useRevealOnScroll(): void {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

// Usage in TaxwalaPage:
useRevealOnScroll();
```

#### useSmoothScroll
```typescript
/**
 * Enables smooth scrolling for all anchor links (href="#...")
 * Prevents default behavior and uses scrollIntoView
 */
export function useSmoothScroll(): void {
  React.useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}

// Usage in TaxwalaPage:
useSmoothScroll();
```

## useGTMTracking Hook

### Purpose
Centralized Google Tag Manager tracking interface for all user interactions. This hook provides methods to track button clicks, form submissions, section views, video plays, modal interactions, and external link clicks.

### Import
```typescript
import { useGTMTracking } from '@/hooks';
```

### Methods

#### trackButtonClick(buttonName: string, section?: string)
Track CTA button clicks across the page.
```typescript
const { trackButtonClick } = useGTMTracking();

// In button click handler
const handleJoinWaitlist = () => {
  trackButtonClick('Join Waitlist', 'hero');
  // ... button action
};
```

#### trackFormSubmit(formName: string, additionalData?: Record<string, any>)
Track form submissions with optional metadata.
```typescript
const { trackFormSubmit } = useGTMTracking();

const handleFormSubmit = (data: any) => {
  trackFormSubmit('contact_form', { fields: Object.keys(data) });
};
```

#### trackSectionView(sectionName: string)
Track when sections come into view via ScrollTrigger or IntersectionObserver.
```typescript
const { trackSectionView } = useGTMTracking();
trackSectionView('pricing');
```

#### trackVideoPlay(videoId: string, videoTitle: string)
Track video play interactions.
```typescript
const { trackVideoPlay } = useGTMTracking();
videoRef.addEventListener('play', () => trackVideoPlay('video123', 'TaxWala Demo'));
```

#### trackModalOpen(modalName: string) / trackModalClose(modalName: string)
Track modal lifecycle events.
```typescript
const { trackModalOpen, trackModalClose } = useGTMTracking();

const handleOpenModal = () => {
  trackModalOpen('video_modal');
  setIsOpen(true);
};

const handleCloseModal = () => {
  trackModalClose('video_modal');
  setIsOpen(false);
};
```

#### trackExternalLink(url: string, linkText: string)
Track external link clicks.
```typescript
const { trackExternalLink } = useGTMTracking();

const handleExternalLink = (url: string, text: string) => {
  trackExternalLink(url, text);
  window.open(url, '_blank');
};
```

### Event Structure
All events automatically include:
- `timestamp`: ISO 8601 timestamp of the event
- `section_name`: Context of where the event occurred (default: 'general')
- Event-specific metadata (buttonName, formName, videoId, etc.)

### Critical Rules
⚠️ **IMPORTANT: ALL BUTTONS AND INTERACTIVE ELEMENTS MUST USE THIS HOOK FOR ANALYTICS**
- Use `useGTMTracking` on every possible page and section to capture user behavior across the entire website.
- Every CTA button must call `trackButtonClick()` with section context
- Form submissions must call `trackFormSubmit()`
- Video interactions must call `trackVideoPlay()`
- Modal interactions must call `trackModalOpen()` / `trackModalClose()`
- External links must call `trackExternalLink()`
- This is a mandatory requirement for all future interactive components

### GTM Configuration
GTM script is injected in `BaseLayout.astro` with placeholder ID `GTM-XXXXXXX`. Replace with actual Google Tag Manager ID when available.

## Type Definitions

### Interface vs Type
**Always use `interface` for:**
- Component props
- Object shapes
- Data structures
- Extensible types

```typescript
// ✅ CORRECT
interface NavLink {
  label: string;
  href: string;
}

interface ComponentProps {
  title: string;
  items: NavLink[];
}

// ❌ WRONG (use interface instead)
type NavLink = {
  label: string;
  href: string;
}
```

**Use `type` only for:**
- Union types
- Intersection types
- Type aliases for primitives

```typescript
// ✅ CORRECT - Union type
type Status = "pending" | "success" | "error";

// ✅ CORRECT - Intersection
type ExtendedProps = BaseProps & AdditionalProps;
```

### Existing Type Interfaces

#### NavLink
```typescript
export interface NavLink {
  label: string;  // Display text
  href: string;   // Link URL (can be anchor like "#benefits")
}

// Usage:
const navLinks: NavLink[] = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
];
```

#### BenefitItem
```typescript
export interface BenefitItem {
  title: string;           // Benefit headline
  description: string;     // Detailed description
  iconBackground: string;  // Tailwind class for icon bg (e.g., "bg-gold/20")
  iconColor: string;       // Tailwind class for icon color (e.g., "text-gold")
}

// Usage:
const benefit: BenefitItem = {
  title: "Lifetime Free Access",
  description: "Beta users get TaxWala.ai free forever.",
  iconBackground: "bg-gold/20",
  iconColor: "text-gold",
};
```

#### TeamMember
```typescript
export interface TeamMember {
  name: string;       // Full name
  role: string;       // Job title
  bio: string;        // Biography/description
  subtitle: string;   // Credentials or additional info
  image: string;      // Image URL (Unsplash or local)
  badgeColor: string; // Tailwind class for badge (e.g., "bg-primary")
}
```

#### GuaranteeItem
```typescript
export interface GuaranteeItem {
  title: string;           // Guarantee badge headline
  description: string;     // Trust message description
  iconBackground: string;  // Tailwind class for icon bg (e.g., "bg-blue-100")
  iconColor: string;       // Tailwind class for icon color (e.g., "text-blue-600")
}

// Usage:
const guaranteeBadge: GuaranteeItem = {
  title: "CA Reviewed Filings",
  description: "Every filing reviewed by qualified Chartered Accountants",
  iconBackground: "bg-blue-100",
  iconColor: "text-blue-600",
};
```

#### Testimonial
```typescript
export interface Testimonial {
  name: string;  // Customer name
  role: string;  // Job title/company
  quote: string; // Testimonial text
  image: string; // Avatar URL
}
```

#### FAQItem
```typescript
export interface FAQItem {
  question: string; // FAQ question
  answer: string;   // FAQ answer
}
```

#### ScrollState
```typescript
export interface ScrollState {
  isVisible: boolean; // Whether element is visible
}
```

### Creating New Types
```typescript
// 1. Add to src/types/index.ts
export interface NewType {
  property1: string;
  property2: number;
  property3?: boolean; // Optional property
}

// 2. Import in component with 'type' keyword
import type { NewType } from "../types";

// 3. Use in component
const data: NewType = {
  property1: "value",
  property2: 42,
};
```

## Styling with Tailwind CSS

### Tailwind Setup
- Delivered via CDN (not npm package)
- Configuration injected inline in BaseLayout.astro
- Custom colors defined: primary, gold, background, foreground
- Full Tailwind v3 utility classes available

### Custom Color Configuration
```javascript
// In BaseLayout.astro <script is:inline>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          50: '#E6F0FF',
          100: '#CCE1FF',
          200: '#99C3FF',
          300: '#66A5FF',
          400: '#3387FF',
          500: '#0066FF',
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },
        gold: {
          DEFAULT: '#FFD700',
          50: '#FFFEF5',
          100: '#FFFBEB',
          200: '#FFF5CC',
          300: '#FFEFAD',
          400: '#FFE98F',
          500: '#FFD700',
          600: '#CCAC00',
          700: '#998100',
          800: '#665600',
          900: '#332B00',
        },
        background: '#FAFAFA',
        foreground: '#1a1a1a',
      }
    }
  }
}
```

### Using Custom Colors
```typescript
// Primary color
<div className="bg-primary text-white">
<div className="text-primary-600">
<div className="border-primary-200">

// Gold color
<div className="bg-gold text-white">
<div className="text-gold-700">

// Background/Foreground
<div className="bg-background text-foreground">
```

### Responsive Design Pattern
```typescript
// Mobile-first approach
<div className="
  px-4           // Mobile: 1rem padding
  md:px-6        // Tablet: 1.5rem padding
  lg:px-8        // Desktop: 2rem padding
  
  text-2xl       // Mobile: 1.5rem font
  md:text-4xl    // Tablet: 2.25rem font
  lg:text-6xl    // Desktop: 3.75rem font
  
  grid-cols-1    // Mobile: 1 column
  md:grid-cols-2 // Tablet: 2 columns
  lg:grid-cols-3 // Desktop: 3 columns
">
```

### Common Utility Patterns
```typescript
// Container with max width
<div className="max-w-7xl mx-auto px-6">

// Centered content
<div className="flex items-center justify-center">

// Card styling
<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">

// Gradient backgrounds
<div className="bg-gradient-to-br from-primary to-purple-600">

// Hover effects
<button className="bg-primary hover:bg-blue-700 transition-all hover:scale-105">

// Responsive flex
<div className="flex flex-col md:flex-row gap-4">
```

### Animation Classes
Custom animations defined in BaseLayout.astro:
```css
.animate-fade-in          // Fade in animation
.animate-fade-in-up       // Fade in from bottom
.reveal-on-scroll         // Scroll trigger animation
.receipt-animation        // Floating receipt
.arrow-animation          // Moving arrow
.ai-bars-animation        // Animated bars
.checkmark-animation      // Popping checkmark
.play-button-pulse        // Pulsing play button
.cta-button               // CTA button with hover
```

## Astro-Specific Patterns

### BaseLayout Structure
```astro
---
// Frontmatter (JavaScript/TypeScript)
const { title, description } = Astro.props;
---
<!doctype html>
<html lang="en">
  <head>
    <!-- Meta tags -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script is:inline>
      // Inline scripts need is:inline directive
      tailwind.config = { /* config */ }
    </script>
  </head>
  <body>
    <slot /> <!-- Page content goes here -->
    <slot name="scripts" /> <!-- Named slot for scripts -->
  </body>
</html>
```

### Page Component Pattern
```astro
---
// src/pages/index.astro
import BaseLayout from "../layouts/BaseLayout.astro";
import { TaxwalaPage } from "../components/TaxwalaPage";

const title = "TaxWala.ai - AI-Powered Tax Automation | Private Beta";
const description = "Join the invite-only beta...";
---
<BaseLayout title={title} description={description}>
  <TaxwalaPage client:load />
  
  <Fragment slot="scripts">
    <script src="https://tally.so/widgets/embed.js"></script>
  </Fragment>
</BaseLayout>
```

### Client Directives
```astro
<!-- Hydrate immediately on page load -->
<Component client:load />

<!-- Hydrate when visible in viewport -->
<Component client:visible />

<!-- Hydrate when browser is idle -->
<Component client:idle />

<!-- Only render on client, not during build -->
<Component client:only="react" />

<!-- Don't hydrate at all (static only) -->
<Component />
```

### Script Directives
```astro
<!-- Process with bundler (default) -->
<script>
  console.log("Bundled script");
</script>

<!-- Inline as-is, no processing -->
<script is:inline>
  console.log("Inline script");
</script>

<!-- Hoist to document head -->
<script hoist>
  console.log("Hoisted script");
</script>
```

## Component Communication Patterns

### Props Down Pattern
```typescript
// Parent component
export const ParentComponent: React.FC = () => {
  const [state, setState] = useState<string>("value");
  
  return (
    <ChildComponent 
      value={state} 
      onChange={setState}
    />
  );
};

// Child component
interface ChildComponentProps {
  value: string;
  onChange: (newValue: string) => void;
}

export const ChildComponent: React.FC<ChildComponentProps> = ({ 
  value, 
  onChange 
}) => {
  return (
    <input 
      value={value} 
      onChange={(e) => onChange(e.target.value)} 
    />
  );
};
```

### Callback Props Pattern
```typescript
// Parent manages state
const Parent: React.FC = () => {
  const handleClick = (id: number) => {
    console.log("Clicked:", id);
  };

  return <Child onItemClick={handleClick} />;
};

// Child calls callback
interface ChildProps {
  onItemClick: (id: number) => void;
}

const Child: React.FC<ChildProps> = ({ onItemClick }) => {
  return (
    <button onClick={() => onItemClick(123)}>
      Click me
    </button>
  );
};
```

### Modal Pattern (Used in TaxwalaPage)
```typescript
// Main component manages modal state
export const TaxwalaPage: React.FC = () => {
  const { isOpen, open, close } = useModalControl();
  const videoId = "dQw4w9WgXcQ";

  return (
    <>
      <HeroSection
        isModalOpen={isOpen}
        onModalOpen={open}
        onModalClose={close}
        videoId={videoId}
      />
      <VideoModal 
        isOpen={isOpen} 
        onClose={close} 
        videoId={videoId} 
      />
    </>
  );
};
```

## Error Handling Patterns

### Type-Safe Error Handling
```typescript
// ✅ CORRECT - Typed error
try {
  const data = await fetchData();
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unknown error", error);
  }
}

// ❌ WRONG - Implicit any
try {
  const data = await fetchData();
} catch (error) {
  console.error(error.message); // error is 'any'
}
```

### Optional Chaining
```typescript
// ✅ CORRECT - Safe property access
const userName = user?.profile?.name ?? "Guest";
const itemCount = items?.length ?? 0;

// Array methods
const firstItem = items?.at(0) ?? null;
```

## Performance Considerations

### React.memo for Expensive Components
```typescript
export const ExpensiveComponent: React.FC<Props> = React.memo(({ data }) => {
  // Expensive rendering logic
  return <div>{/* Complex UI */}</div>;
});
```

### useMemo for Expensive Calculations
```typescript
const sortedItems = React.useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);
```

### useCallback for Stable Function References
```typescript
const handleClick = React.useCallback((id: number) => {
  // Handler logic
}, [dependency]);
```

### Example from VideoModal
```typescript
// Memoize video URL to avoid recalculation
const videoSrc = React.useMemo(
  () => `https://www.youtube.com/embed/${videoId}`,
  [videoId]
);
```

## Testing Considerations

### Component Testing Pattern (Not Implemented Yet)
```typescript
// Future pattern for testing
import { render, screen } from "@testing-library/react";
import { ComponentName } from "./ComponentName";

describe("ComponentName", () => {
  it("renders correctly", () => {
    render(<ComponentName prop="value" />);
    expect(screen.getByText("value")).toBeInTheDocument();
  });
});
```

## Git and Version Control

### Commit Message Convention
```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
test: Add tests
chore: Update dependencies
```

### Branch Naming
```
feature/component-name
fix/bug-description
refactor/area-name
docs/documentation-update
```

## Common Pitfalls and Solutions

### Problem: Component not rendering
**Solution**: Check that component is wrapped with `client:load` in Astro file

### Problem: Tailwind classes not working
**Solution**: Verify inline Tailwind config in BaseLayout.astro, check for typos in class names

### Problem: Icon not displaying
**Solution**: 
1. Check icon is exported from `src/components/icons/index.ts`
2. Verify import uses barrel file: `import { Icon } from "./icons"`
3. Check `className` prop is passed and includes size classes

### Problem: TypeScript errors
**Solution**:
1. Ensure all props have interface definitions
2. Check return types are explicit
3. Verify imports use `import type` for type-only imports
4. Run `npx tsc --noEmit` to check all types

### Problem: State not updating
**Solution**:
1. Check useState is called with proper initial value
2. Verify state setter is called correctly
3. Ensure dependencies in useEffect are correct
4. Check for accidental state mutations (use spread operator)

### Problem: Animation not working
**Solution**:
1. Verify `useRevealOnScroll()` is called in TaxwalaPage
2. Check element has `reveal-on-scroll` class
3. Confirm CSS animations are defined in BaseLayout.astro

## Building and Deployment

### Development
```bash
npm install       # Install dependencies
npm run dev       # Start dev server (localhost:4321)
```

### Production Build
```bash
npm run build     # Build static site
npm run preview   # Preview production build locally
```

### Build Output
```
dist/
├── index.html           # Generated HTML
├── _astro/              # Bundled JS/CSS
├── llm.txt              # Copied from public/
├── llm-full.txt         # Copied from public/
├── llms.txt             # Copied from public/
├── agent.txt            # This file
└── [other assets]       # Images, fonts, etc.
```

### Deployment Targets
- **Netlify**: Drop dist/ folder or connect Git
- **Vercel**: Connect Git repository
- **Cloudflare Pages**: Connect Git or upload dist/
- **GitHub Pages**: Push dist/ to gh-pages branch

## Environment and Configuration

### No Environment Variables
This project doesn't use environment variables. All configuration is in `src/constants/config.ts`.

### Tally Form Integration
```typescript
// Button with Tally attributes
<button
  data-tally-open="wgxDQB"           // Form ID
  data-tally-emoji-text="🚀"         // Emoji
  data-tally-emoji-animation="wave"  // Animation
>
  Join Waitlist
</button>

// Script loaded in index.astro
<script src="https://tally.so/widgets/embed.js"></script>
```

### Analytics Integration
```typescript
// Rocket.new scripts in BaseLayout.astro
<script type="module" is:inline async 
  src="https://static.rocket.new/rocket-web.js?_cfg=...">
</script>
```

## Code Quality Checklist

Before committing code, verify:
- [ ] All TypeScript types are explicit (no `any`)
- [ ] All imports use correct pattern (type vs regular)
- [ ] Component follows naming convention (PascalCase.tsx)
- [ ] Props have interface definition
- [ ] Icons imported from barrel file
- [ ] Responsive classes for all breakpoints
- [ ] JSDoc comments on complex functions
- [ ] No console.log statements (use console.error for errors only)
- [ ] Tailwind classes follow mobile-first approach
- [ ] Event handlers have proper types
- [ ] useEffect dependencies are correct

## Documentation Files Overview

### llms.txt - Product Discovery File
**Purpose**: Standard LLM discovery file for AI assistants to understand the product without technical details

**Location**: `/public/llms.txt`

**What to Include**:
- **Product Identity**: Clear explanation of what TaxWala.ai is and its mission
- **Problem Statement**: Pain points the product solves (time, money, stress, manual work)
- **Solution Overview**: How the product helps in simple terms (3-step process)
- **Use Cases**: Real-world scenarios where users benefit (e-commerce, freelancers, startups, agencies)
- **User Testimonials**: Real feedback showing impact and results
- **Trust Signals**: Security, privacy, beta benefits without technical jargon
- **FAQs**: User-facing questions and answers

**What NOT to Include**:
- ❌ Framework or technology stack details
- ❌ Component architecture or code patterns
- ❌ API endpoints or technical specifications
- ❌ TypeScript interfaces or type definitions
- ❌ Build commands or deployment instructions
- ❌ Git workflows or development processes

**Update Triggers**:
- Product features change
- New use cases emerge
- Beta program details updated
- Testimonials added or updated
- Pricing or availability changes
- FAQs updated based on user questions

### llm.txt - Technical Overview
**Purpose**: Concise technical overview for AI systems working with the codebase

**Location**: `/public/llm.txt`

**What to Include**:
- Tech stack summary
- Component list
- Available hooks
- Type definitions
- Basic development commands
- File structure overview

### llm-full.txt - Comprehensive Documentation
**Purpose**: Complete technical documentation for deep AI analysis

**Location**: `/public/llm-full.txt`

**What to Include**:
- Detailed component documentation with props
- Complete hook implementations
- Type interfaces with examples
- SOLID principles application
- Animation patterns
- Responsive design patterns
- Performance optimizations
- Troubleshooting guides

### agent.md - This File
**Purpose**: Living documentation for AI agents working on the codebase

**Location**: `/agent.md` (root directory)

**Critical Rule**: **ALWAYS UPDATE THIS FILE** when making code changes

## Agent Lifecycle & Update Protocol

### 🚨 MANDATORY UPDATE RULE 🚨
**Every single code change MUST update agent.md accordingly**

This is not optional. This is a critical requirement. Future agents depend on accurate information.

### When to Update agent.md

#### ✅ ALWAYS Update When:
1. **New Component Created**
   - Add component to directory layout
   - Document component purpose and props
   - Add usage examples
   - Update component count

2. **New Hook Added**
   - Document hook signature
   - Explain purpose and use cases
   - Provide usage examples
   - Add to hooks section

3. **New Type/Interface Created**
   - Add interface definition
   - Explain each property
   - Show usage examples
   - Update types section

4. **Pattern Changed**
   - Update pattern documentation
   - Add migration notes if breaking
   - Update examples throughout file
   - Add to changelog section

5. **New Icon Created**
   - Add to icons list
   - Update icon count
   - Document any special props
   - Update barrel export info

6. **Configuration Changed**
   - Update configuration section
   - Document new settings
   - Explain impact on development
   - Update related examples

7. **New Dependency Added**
   - Update framework stack section
   - Document version number
   - Explain why it was added
   - Add usage patterns if needed

8. **File Structure Changed**
   - Update directory layout
   - Update file paths in examples
   - Document new organization
   - Update import patterns

9. **Build Process Changed**
   - Update build commands
   - Document new scripts
   - Update deployment section
   - Add troubleshooting if needed

10. **Bug Fix with Pattern Change**
    - Document the bug
    - Explain the fix
    - Add to common pitfalls
    - Update best practices

### How to Update agent.md

#### Step-by-Step Process:
1. **Make your code changes first**
2. **Identify affected sections** in agent.md
3. **Update all relevant sections** simultaneously
4. **Add changelog entry** at bottom of file
5. **Update version number** if significant
6. **Update "Last Updated" timestamp**
7. **Verify consistency** across all examples

#### Update Format:
```markdown
## Changelog

### [Version X.X.X] - YYYY-MM-DD
#### Added
- New feature or component added
- New pattern introduced

#### Changed
- Modified existing pattern
- Updated configuration

#### Fixed
- Bug fix that affects documentation
- Corrected outdated information

#### Deprecated
- Old pattern no longer recommended

#### Removed
- Deleted component or pattern
```

### Quality Checklist for Updates

Before considering update complete:
- [ ] All code examples reflect current patterns
- [ ] All file paths are accurate
- [ ] All component names match actual files
- [ ] All type definitions are current
- [ ] Import patterns are up-to-date
- [ ] Version numbers are correct
- [ ] Changelog entry is added
- [ ] No contradicting information exists
- [ ] Examples are tested mentally for accuracy
- [ ] Cross-references are updated

### Documentation Synchronization

When updating agent.md, consider if other docs need updates:
- **llms.txt**: Update if product features change
- **llm.txt**: Update if tech stack or components change
- **llm-full.txt**: Update with detailed technical changes
- **ARCHITECTURE.md**: Update if architecture patterns change
- **SVG_REFACTORING.md**: Update if icon patterns change

## Future Agent Instructions

### When Adding New Features
1. **Read this file completely first**
2. Check existing patterns in similar components
3. Follow TypeScript strict mode rules
4. Update type definitions if needed
5. Add new icons to icons folder with proper pattern
6. Test locally with `npm run dev`
7. Verify build with `npm run build`
8. **⚠️ CRITICAL: Update agent.md with new feature details**
9. Update llms.txt if user-facing feature
10. Update llm.txt and llm-full.txt if technical change

### When Fixing Bugs
1. **Read this file completely first**
2. Identify the component/hook/type involved
3. Check imports and exports
4. Verify TypeScript types
5. Test in isolation
6. Check for side effects in useEffect
7. Verify event handler types
8. **⚠️ CRITICAL: Update agent.md if bug reveals pattern issue**
9. Add to "Common Pitfalls" section if applicable

### When Refactoring
1. **Read this file completely first**
2. Maintain existing interfaces (don't break API)
3. Keep component single responsibility
4. Extract reusable logic to hooks
5. Move shared types to types/index.ts
6. **⚠️ CRITICAL: Update agent.md with all pattern changes**
7. Update code examples throughout this file
8. Add migration notes if breaking changes
9. Update version number appropriately

### Before Finishing Any Task
**Final Checklist**:
- [ ] All code changes are complete and tested
- [ ] agent.md is updated with all relevant changes
- [ ] Changelog entry is added to agent.md
- [ ] All documentation files are synchronized
- [ ] No outdated information remains
- [ ] Future agents will understand the changes

---

**Last Updated**: January 30, 2026  
**Maintained By**: AI Agents working on TaxWala.ai  
**Version**: 1.3.0

**Update Protocol**: This file MUST be updated with every code change. No exceptions.

---

## Changelog

### [1.3.0] - 2026-01-30
#### Added
- Zoho SalesIQ chat widget integration with AIRobot component
- Custom chat trigger functionality - robot click opens Zoho widget
- Auto-hide on chat window close functionality
- TypeScript declarations for Zoho SalesIQ API (window.$zoho.salesiq)
- Event listener for chatwindow.close event to hide widget
- Robot click handler with keyboard accessibility (Enter/Space keys)
- Pointer-events-auto and cursor-pointer classes for clickable robot

#### Changed
- AIRobot component now controls Zoho chat widget visibility
- Default Zoho chat button hidden by default
- Robot acts as custom chat widget trigger with improved UX
- Enhanced TypeScript types with optional chaining for Zoho API
- Improved initialization with retry logic (50 attempts, 100ms interval)

#### Technical Details
- Zoho widget hidden on page load using floatbutton.visible("hide") and floatwindow.visible("hide")
- Click handler shows widget using visible("show") method
- Event binding uses window.$zoho.salesiq.ready() callback with chatwindow.close listener
- All Zoho API calls protected with optional chaining (?.) for type safety
- No type errors, fully TypeScript compliant

### [1.2.0] - 2026-01-26
#### Added
- GuaranteeSection component with 4 trust badges (CA Reviewed, User Approval, Tax Notice, Free Beta)
- guaranteeBadges array in content.ts with badge data (title, description, iconBg, iconColor)
- GuaranteeItem interface documentation for guarantee badge structure
- Component positioned between TeamSection and FinalCTASection to reduce signup hesitation
- Mobile-first responsive grid (2x2 on mobile, 4-column on desktop)
- Staggered reveal animations (0.1s delay per badge)
- Trust color scheme (blue/green/purple/gray) with matching icon containers

#### Changed
- Updated component count and directory layout to include GuaranteeSection
- Enhanced conversion funnel with pre-CTA trust signals

### [1.1.0] - 2026-01-24
#### Added
- Complete documentation lifecycle and update protocol
- Mandatory update rules for all code changes
- Documentation files overview (llms.txt, llm.txt, llm-full.txt, agent.md)
- llms.txt content guidelines (what to include/exclude)
- Step-by-step update process for agent.md
- Quality checklist for documentation updates
- Documentation synchronization guidelines
- Changelog section with versioning

#### Changed
- Enhanced "Future Agent Instructions" with mandatory update steps
- Added update checkpoints to all workflow sections
- Emphasized critical importance of keeping agent.md current

### [1.0.0] - 2026-01-24
#### Added
- Initial comprehensive technical documentation
- All framework and TypeScript configuration details
- Component patterns and icon creation guidelines
- Import patterns and type definitions
- Styling with Tailwind CSS
- Custom hooks documentation
- Performance considerations
- Common pitfalls and solutions
