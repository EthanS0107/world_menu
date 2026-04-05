# Animation Reference — React Style Master

## Framer Motion Presets

### Entrance Variants

```jsx
export const variants = {
  // Fade up (most universal)
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  },
  
  // Fade in (subtle, for overlays/modals)
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }
  },
  
  // Scale pop (for cards, badges, tooltips)
  scalePop: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } }
  },
  
  // Slide from right (for side panels)
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
  },
  
  // Slide from left
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
  },
  
  // Stagger container
  stagger: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  },
  
  // Stagger fast
  staggerFast: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } }
  }
}
```

### Page Transition (App Router / React Router)

```jsx
const pageVariants = {
  initial: { opacity: 0, y: 8 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } }
}

// Wrap route content with:
<AnimatePresence mode="wait">
  <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="enter" exit="exit">
    {children}
  </motion.div>
</AnimatePresence>
```

### Scroll-linked Animations

```jsx
import { useScroll, useTransform, useSpring } from 'framer-motion'

function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  
  // Smooth spring
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  
  const y = useTransform(smooth, [0, 1], [60, -60])
  const opacity = useTransform(smooth, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  return (
    <section ref={ref}>
      <motion.div style={{ y, opacity }}>Content</motion.div>
    </section>
  )
}
```

### Hover & Tap Interactions

```jsx
// Standard button
<motion.button
  whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
  whileTap={{ y: 0, scale: 0.97 }}
  transition={{ duration: 0.15, ease: 'easeOut' }}
>
  Click me
</motion.button>

// Card with lift
<motion.div
  whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.2)' }}
  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
>
  Card content
</motion.div>

// Icon with rotation
<motion.div
  whileHover={{ rotate: 15, scale: 1.1 }}
  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
>
  <Icon />
</motion.div>
```

### Loading States

```jsx
// Skeleton shimmer
const shimmer = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: { duration: 2, ease: 'linear', repeat: Infinity }
  }
}

<motion.div
  {...shimmer}
  style={{
    background: 'linear-gradient(90deg, var(--bg-elevated) 25%, var(--bg-overlay) 50%, var(--bg-elevated) 75%)',
    backgroundSize: '200% 100%',
    borderRadius: 'var(--radius-md)',
    height: 20,
  }}
/>

// Pulsing dot loader
const pulse = {
  animate: { scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] },
  transition: { duration: 1, ease: 'easeInOut', repeat: Infinity }
}

function Loader() {
  return (
    <div style={{ display: 'flex', gap: 6 }}>
      {[0, 1, 2].map(i => (
        <motion.div key={i} {...pulse}
          transition={{ ...pulse.transition, delay: i * 0.15 }}
          style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }}
        />
      ))}
    </div>
  )
}
```

---

## CSS-Only Animations (No Framer Motion)

### Keyframes Library

```css
/* Core animations */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes scaleInSpring {
  0%   { opacity: 0; transform: scale(0.8); }
  60%  { transform: scale(1.04); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(32px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-32px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* Looping animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
}
@keyframes shimmer {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}
@keyframes borderGlow {
  0%, 100% { box-shadow: 0 0 12px rgba(99,102,241,0.3); }
  50%       { box-shadow: 0 0 24px rgba(99,102,241,0.6); }
}
@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Stagger Classes

```css
.animate-stagger > * {
  animation: fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.animate-stagger > *:nth-child(1)  { animation-delay: 0ms; }
.animate-stagger > *:nth-child(2)  { animation-delay: 80ms; }
.animate-stagger > *:nth-child(3)  { animation-delay: 160ms; }
.animate-stagger > *:nth-child(4)  { animation-delay: 240ms; }
.animate-stagger > *:nth-child(5)  { animation-delay: 320ms; }
.animate-stagger > *:nth-child(6)  { animation-delay: 400ms; }
.animate-stagger > *:nth-child(n+7){ animation-delay: 480ms; }
```
