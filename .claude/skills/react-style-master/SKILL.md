---
name: react-style-master
description: >
  Craft stunning, modern, production-grade React applications with elite-level styling,
  fluid animations, and flawless visual consistency. Use this skill whenever the user asks
  to build, style, redesign, or polish ANY React component, page, dashboard, landing page,
  UI kit, or app — even if they just say "make it look good", "add animations", "modern style",
  "clean design", or similar. Trigger also for requests involving Tailwind, Framer Motion,
  CSS-in-JS, styled-components, or any React UI library. If the user shows code and wants
  it improved visually — use this skill immediately.
---

# React Style Master

Produce React applications that look like they were designed by a senior product designer
and engineered by a senior frontend developer. Every pixel intentional. Every animation purposeful.
Every spacing unit part of a system.

---

## Phase 1 — Design Intention (before writing a single line of code)

Ask yourself (or the user if unclear):

1. **What is this UI for?** (app, landing page, dashboard, component, form, etc.)
2. **What emotion should it evoke?** (trust, energy, calm, premium, playful, focus...)
3. **What's the primary action?** (click, scroll, fill, explore...)
4. **Dark or light?** (default: dark feels modern; light feels clean — choose intentionally)
5. **What's the ONE visual element people will remember?**

Commit to a clear aesthetic direction before coding. Never start with "default" styling.

---

## Phase 2 — Design System Setup

Every React project must establish a coherent design system **first**.

### 2.1 — Token System (CSS Variables or JS constants)

```css
:root {
  /* Spacing scale (8px base) */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-24: 6rem;     /* 96px */

  /* Type scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.15);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.2);
  --shadow-glow: 0 0 40px rgba(VAR_ACCENT, 0.35);

  /* Transitions */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
  --duration-enter: 600ms;
}
```

### 2.2 — Color Palette Rules

- **NEVER** use more than 1 accent color (+ its tints/shades)
- **Primary neutral** = 80–90% of the UI
- **Accent** = 5–10%, used for CTAs, highlights, borders on hover
- **Semantic** = success (#22c55e), warning (#f59e0b), error (#ef4444)

**Dark theme skeleton:**
```css
--bg-base: #0a0a0f;
--bg-surface: #111118;
--bg-elevated: #1a1a24;
--bg-overlay: #22222e;

--text-primary: #f0f0f8;
--text-secondary: #9090a8;
--text-muted: #505065;

--border-subtle: rgba(255,255,255,0.06);
--border-default: rgba(255,255,255,0.1);
--border-strong: rgba(255,255,255,0.2);

--accent: #6366f1;         /* example: indigo */
--accent-light: #818cf8;
--accent-dark: #4f46e5;
--accent-bg: rgba(99,102,241,0.12);
```

**Light theme skeleton:**
```css
--bg-base: #f8f8fc;
--bg-surface: #ffffff;
--bg-elevated: #f0f0f8;

--text-primary: #0f0f1a;
--text-secondary: #555570;
--text-muted: #aaaacc;

--border-subtle: rgba(0,0,0,0.04);
--border-default: rgba(0,0,0,0.08);
--border-strong: rgba(0,0,0,0.15);

--accent: #4f46e5;
--accent-light: #6366f1;
--accent-bg: rgba(79,70,229,0.08);
```

### 2.3 — Typography System

**Rules:**
- Maximum 2 font families per project (display + body, or just one excellent choice)
- Line-height: 1.1–1.2 for headings, 1.5–1.7 for body
- Letter-spacing: -0.02em to -0.04em for large headings, 0 to +0.01em for body
- **NEVER** use Arial, Roboto, or system-ui as primary font
- Load from Google Fonts or use a CDN-available font

**Font pairings that work:**

| Display | Body | Vibe |
|---------|------|------|
| Sora | DM Sans | Modern, tech |
| Clash Display | Satoshi | Bold, editorial |
| Cabinet Grotesk | Inter (only if Satoshi not avail.) | Clean, product |
| Fraunces | Lato | Premium, editorial |
| Space Grotesk | Outfit | Futuristic |
| Playfair Display | Source Sans 3 | Luxury, elegant |

```css
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

body {
  font-family: 'DM Sans', sans-serif;
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--text-primary);
}

h1, h2, h3, .display {
  font-family: 'Sora', sans-serif;
  letter-spacing: -0.03em;
  line-height: 1.1;
}
```

---

## Phase 3 — Layout & Structure

### 3.1 — Grid System

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

/* Responsive */
@media (max-width: 768px) {
  .container { padding: 0 var(--space-4); }
}
```

**Layout rules:**
- Use CSS Grid for page-level layouts
- Use Flexbox for component-level alignment
- **NEVER** use fixed pixel widths for containers — always % or max-width
- Consistent vertical rhythm: all vertical spacing should be multiples of 8px
- Section padding: `--space-24` top/bottom on desktop, `--space-12` on mobile

### 3.2 — Visual Hierarchy

Every screen needs exactly **3 levels of importance:**
1. **Hero / primary action** — biggest, most contrast, first seen
2. **Supporting content** — medium, guides the eye downward
3. **Tertiary / metadata** — small, muted, doesn't compete

If everything stands out, nothing does.

### 3.3 — Spacing Laws

- Between related elements: `--space-2` to `--space-4`
- Between sections of a component: `--space-6` to `--space-8`
- Between page sections: `--space-16` to `--space-24`
- **NEVER** use arbitrary pixel values like `margin: 13px` or `padding: 7px`
- All spacing is from the token scale

---

## Phase 4 — Animation System

Animations must feel **physical, intentional, and fast**. Never decorative-only.

### 4.1 — Animation Principles

| Principle | Rule |
|-----------|------|
| Duration | UI feedback: 150ms. Transitions: 250ms. Entrances: 400–600ms. Never > 800ms |
| Easing | Enter: ease-out. Exit: ease-in. Spring: cubic-bezier(0.34,1.56,0.64,1) |
| Purpose | Every animation must communicate something (state change, hierarchy, progress) |
| Performance | Always animate `transform` and `opacity` only. Never animate `height`, `width`, `top`, `left` directly |
| Respect | Always honor `prefers-reduced-motion` |

### 4.2 — With Framer Motion (preferred)

```jsx
import { motion, AnimatePresence } from 'framer-motion'

// Standard entrance
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}

// Stagger container
const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
}

// Spring pop
const springPop = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
}

// Usage
<motion.div variants={stagger} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={fadeUp}>{item.content}</motion.div>
  ))}
</motion.div>
```

### 4.3 — With CSS (when no Framer Motion)

```css
/* Entrance animations */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(32px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* Stagger utility */
.stagger > * { animation: fadeUp 0.5s var(--ease-out) both; }
.stagger > *:nth-child(1) { animation-delay: 0ms; }
.stagger > *:nth-child(2) { animation-delay: 80ms; }
.stagger > *:nth-child(3) { animation-delay: 160ms; }
.stagger > *:nth-child(4) { animation-delay: 240ms; }
.stagger > *:nth-child(5) { animation-delay: 320ms; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 4.4 — Micro-interactions Checklist

Every interactive element must have:
- [ ] `transition` on hover (color, border, shadow, scale)
- [ ] Active/pressed state (scale down: `scale(0.97)`)
- [ ] Focus-visible state (outline with accent color, 2px offset)
- [ ] Loading state if async
- [ ] Disabled state (opacity: 0.4, cursor: not-allowed)

```css
/* Button micro-interaction template */
.btn {
  transition: all var(--duration-fast) var(--ease-out);
  transform-origin: center;
}
.btn:hover { 
  transform: translateY(-1px); 
  box-shadow: var(--shadow-md);
}
.btn:active { 
  transform: translateY(0) scale(0.97); 
}
.btn:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
```

---

## Phase 5 — Component Patterns

### 5.1 — Cards

```jsx
// Glassmorphism card
<div style={{
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 'var(--radius-xl)',
  padding: 'var(--space-8)',
  transition: 'all var(--duration-base) var(--ease-out)',
  // hover: borderColor to accent, shadow glow
}} />

// Solid elevated card
<div style={{
  background: 'var(--bg-surface)',
  border: '1px solid var(--border-subtle)',
  borderRadius: 'var(--radius-lg)',
  padding: 'var(--space-6)',
  boxShadow: 'var(--shadow-sm)',
}} />
```

### 5.2 — Buttons

```jsx
// Primary CTA
<button style={{
  background: 'var(--accent)',
  color: '#fff',
  padding: 'var(--space-3) var(--space-6)',
  borderRadius: 'var(--radius-md)',
  fontWeight: 600,
  fontSize: 'var(--text-sm)',
  letterSpacing: '0.01em',
  border: 'none',
  cursor: 'pointer',
}} />

// Ghost / outline
<button style={{
  background: 'transparent',
  color: 'var(--text-primary)',
  border: '1px solid var(--border-default)',
  padding: 'var(--space-3) var(--space-6)',
  borderRadius: 'var(--radius-md)',
}} />

// Icon button
<button style={{
  width: 40, height: 40,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  borderRadius: 'var(--radius-md)',
  background: 'var(--bg-elevated)',
  border: '1px solid var(--border-subtle)',
}} />
```

### 5.3 — Form Inputs

```css
.input {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  color: var(--text-primary);
  font-size: var(--text-sm);
  width: 100%;
  transition: border-color var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-fast) var(--ease-out);
}
.input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-bg);
}
.input::placeholder { color: var(--text-muted); }
```

### 5.4 — Navigation

```jsx
// Sticky nav with blur
<nav style={{
  position: 'sticky', top: 0, zIndex: 50,
  backdropFilter: 'blur(20px)',
  background: 'rgba(10,10,15,0.8)',
  borderBottom: '1px solid var(--border-subtle)',
  padding: 'var(--space-4) 0',
}}>
  <div className="container" style={{
    display: 'flex', alignItems: 'center', justifyContent: 'space-between'
  }}>
    {/* Logo | Nav links | CTA */}
  </div>
</nav>
```

### 5.5 — Hero Sections

```jsx
// Full-width hero with gradient mesh background
<section style={{
  minHeight: '100vh',
  display: 'flex', flexDirection: 'column',
  alignItems: 'center', justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: 'var(--space-24) var(--space-6)',
}}>
  {/* Gradient orbs */}
  <div style={{
    position: 'absolute', top: '20%', left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600, height: 600,
    background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
    pointerEvents: 'none',
  }} />
  
  {/* Badge / eyebrow */}
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
    background: 'var(--accent-bg)',
    border: '1px solid rgba(99,102,241,0.3)',
    borderRadius: 'var(--radius-full)',
    padding: 'var(--space-1) var(--space-4)',
    fontSize: 'var(--text-xs)',
    color: 'var(--accent-light)',
    fontWeight: 500,
    marginBottom: 'var(--space-6)',
  }}>
    ✦ Your eyebrow text
  </div>
  
  {/* Headline */}
  <h1 style={{
    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
    fontWeight: 800,
    letterSpacing: '-0.04em',
    lineHeight: 1.05,
    marginBottom: 'var(--space-6)',
    maxWidth: 900,
  }}>
    Your <span style={{ color: 'var(--accent-light)' }}>bold</span> headline here
  </h1>
  
  {/* Subheadline */}
  <p style={{
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: 'var(--text-secondary)',
    maxWidth: 600,
    lineHeight: 1.6,
    marginBottom: 'var(--space-10)',
  }}>
    Supporting copy that explains value clearly.
  </p>
  
  {/* CTA group */}
  <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
    {/* Primary CTA + Secondary CTA */}
  </div>
</section>
```

---

## Phase 6 — Visual Effects & Atmosphere

### 6.1 — Background Techniques

```css
/* Gradient mesh */
.bg-mesh {
  background: 
    radial-gradient(ellipse at 20% 50%, rgba(120,40,200,0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(60,100,240,0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 60% 80%, rgba(20,180,120,0.08) 0%, transparent 50%),
    var(--bg-base);
}

/* Noise texture overlay */
.bg-noise::before {
  content: '';
  position: absolute; inset: 0;
  background-image: url("data:image/svg+xml,..."); /* base64 noise */
  opacity: 0.03;
  pointer-events: none;
}

/* Grid pattern */
.bg-grid {
  background-image: 
    linear-gradient(var(--border-subtle) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px);
  background-size: 48px 48px;
}

/* Dot pattern */
.bg-dots {
  background-image: radial-gradient(var(--border-default) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### 6.2 — Gradient Text

```css
.gradient-text {
  background: linear-gradient(135deg, var(--accent-light) 0%, #a78bfa 50%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### 6.3 — Glow Effects

```css
/* Accent glow on hover */
.glow-hover:hover {
  box-shadow: 0 0 0 1px var(--accent), 0 0 20px rgba(99,102,241,0.4);
}

/* Inset glow */
.glow-inset {
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), var(--shadow-md);
}

/* Text glow */
.text-glow {
  text-shadow: 0 0 20px rgba(99,102,241,0.6);
}
```

### 6.4 — Animated Gradient Border

```css
@keyframes borderRotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-border {
  background: linear-gradient(270deg, #6366f1, #8b5cf6, #60a5fa, #34d399);
  background-size: 300% 300%;
  animation: borderRotate 4s ease infinite;
  padding: 1px;
  border-radius: var(--radius-lg);
}
.gradient-border-inner {
  background: var(--bg-surface);
  border-radius: calc(var(--radius-lg) - 1px);
  padding: var(--space-6);
}
```

---

## Phase 7 — Responsive Design

**Breakpoints:**
```css
/* Mobile-first */
/* xs: 0–480px — single column, stacked, large touch targets */
/* sm: 481–768px — still mobile, slightly wider */
/* md: 769–1024px — tablet, 2-column possible */
/* lg: 1025–1280px — desktop, full layout */
/* xl: 1281px+ — wide desktop, max-width container kicks in */

@media (max-width: 768px) { /* tablet and below */ }
@media (max-width: 480px) { /* mobile only */ }
```

**Responsive rules:**
- `clamp()` for font sizes: `clamp(min, preferred, max)`
- `clamp()` for spacing on heroes: `clamp(3rem, 8vw, 6rem)`
- Stack horizontally-laid elements vertically on mobile
- Touch targets minimum 44×44px
- Never horizontal scroll on mobile
- Test padding on smallest screens

---

## Phase 8 — React-Specific Patterns

### 8.1 — Component Architecture

```
src/
├── components/
│   ├── ui/           # Primitives: Button, Input, Card, Badge
│   ├── layout/       # Header, Footer, Sidebar, Container
│   └── sections/     # Hero, Features, Pricing, CTA
├── styles/
│   ├── tokens.css    # All CSS variables
│   ├── globals.css   # Reset + base styles
│   └── animations.css
└── hooks/
    ├── useScrollAnimation.js
    └── useMediaQuery.js
```

### 8.2 — Scroll Animation Hook

```jsx
import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect() // animate once
      }
    }, { threshold: 0.15, ...options })
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  return [ref, inView]
}

// Usage
function Section() {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(24px)',
      transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)'
    }}>
      Content
    </div>
  )
}
```

### 8.3 — Tailwind Setup (if using Tailwind)

Always extend the config with the design tokens:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        accent: { DEFAULT: '#6366f1', light: '#818cf8', dark: '#4f46e5' },
        surface: { base: '#0a0a0f', elevated: '#111118', overlay: '#1a1a24' },
      },
      animation: {
        'fade-up': 'fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fadeIn 0.4s ease both',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both',
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'none' } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        scaleIn: { from: { opacity: 0, transform: 'scale(0.9)' }, to: { opacity: 1, transform: 'none' } },
      },
    },
  },
}
```

---

## Phase 9 — Quality Checklist

Before declaring a UI finished, verify every point:

### Visual Consistency
- [ ] All colors from the token system (no hardcoded `#fff`, `gray`, `black`)
- [ ] All spacing from the scale (no arbitrary px values)
- [ ] Typography scale respected (no arbitrary `font-size` values)
- [ ] Border-radius consistent (from token system)
- [ ] Shadows consistent (from token system)

### Animation Quality
- [ ] Page-load entrance animation on hero content
- [ ] Scroll-triggered animations on all main sections
- [ ] Every button/link has hover + active state
- [ ] Every form input has focus state
- [ ] No janky/jumpy transitions (verify: only transform + opacity animated)
- [ ] `prefers-reduced-motion` respected

### Layout & Responsiveness
- [ ] No overflow/horizontal scroll on any viewport
- [ ] Consistent padding on mobile (min 16px sides)
- [ ] Font sizes readable on mobile (min 14px body)
- [ ] Touch targets ≥ 44px
- [ ] Container max-width respected
- [ ] Visual hierarchy maintained on mobile

### Polish
- [ ] Loading states for async operations
- [ ] Empty states styled (not just blank)
- [ ] Error states styled
- [ ] Focus states visible and styled (accessibility)
- [ ] No orphaned text in headings on small viewports (use `text-wrap: balance`)
- [ ] Images have `alt` text and correct `object-fit`

---

## Anti-Patterns — NEVER Do These

| ❌ Wrong | ✅ Right |
|----------|----------|
| `color: gray` | `color: var(--text-secondary)` |
| `margin: 13px` | `margin: var(--space-3)` (12px) |
| Animating `height` | Animate `transform: scaleY()` |
| `font-family: Arial` | Use a Google Font from the approved pairings |
| Purple gradient on white | Choose a deliberate, unique palette |
| No hover states | All interactive elements have hover + active |
| Fixed pixel widths | `%`, `max-width`, `clamp()` |
| `z-index: 9999` | Structured z-index scale (10, 20, 30, 40, 50) |
| `!important` | Fix specificity properly |
| Animating on scroll with JS polling | Use `IntersectionObserver` |
| Every element the same visual weight | 3-level hierarchy: primary / secondary / tertiary |
| Spacing that "looks about right" | Every value from the 8px token scale |

---

## Quick Reference: Library Imports

```jsx
// Framer Motion
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

// Lucide icons (lightweight, consistent)
import { ArrowRight, Check, X, ChevronDown } from 'lucide-react'

// clsx for conditional classes
import clsx from 'clsx'

// If Tailwind + cn utility
import { cn } from '@/lib/utils'
```

---

## Final Reminder

> **A great UI is not the sum of its effects — it's the coherence of its intention.**

Every spacing unit, color choice, animation curve, and font weight is a micro-decision. The difference between a forgettable UI and an extraordinary one is whether those decisions form a unified system or are scattered, arbitrary choices.

Execute with intention. Test on real viewports. Trust the system.
