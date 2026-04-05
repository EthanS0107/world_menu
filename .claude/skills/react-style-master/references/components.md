# Component Patterns — React Style Master

## Complete Component Examples

### Button Component (production-ready)

```jsx
import { motion } from 'framer-motion'
import clsx from 'clsx'

const variants = {
  primary: {
    background: 'var(--accent)',
    color: '#fff',
    border: 'none',
  },
  secondary: {
    background: 'var(--bg-elevated)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-default)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-subtle)',
  },
  danger: {
    background: 'rgba(239,68,68,0.1)',
    color: '#f87171',
    border: '1px solid rgba(239,68,68,0.3)',
  },
}

const sizes = {
  sm: { padding: 'var(--space-2) var(--space-4)', fontSize: 'var(--text-xs)' },
  md: { padding: 'var(--space-3) var(--space-6)', fontSize: 'var(--text-sm)' },
  lg: { padding: 'var(--space-4) var(--space-8)', fontSize: 'var(--text-base)' },
}

export function Button({ variant = 'primary', size = 'md', children, icon, loading, disabled, ...props }) {
  return (
    <motion.button
      whileHover={!disabled ? { y: -1, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' } : {}}
      whileTap={!disabled ? { y: 0, scale: 0.97 } : {}}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      style={{
        ...variants[variant],
        ...sizes[size],
        borderRadius: 'var(--radius-md)',
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        fontFamily: 'inherit',
        letterSpacing: '0.01em',
        transition: 'all 150ms ease',
        flexShrink: 0,
      }}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Spinner size={14} /> : icon}
      {children}
    </motion.button>
  )
}
```

### Card Component

```jsx
export function Card({ children, hoverable = false, glass = false, padding = 'md', ...props }) {
  const paddings = { sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' }
  
  const baseStyle = {
    borderRadius: 'var(--radius-xl)',
    padding: paddings[padding],
    border: '1px solid var(--border-subtle)',
    transition: 'all 250ms cubic-bezier(0.16,1,0.3,1)',
  }
  
  const glassStyle = glass ? {
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  } : {
    background: 'var(--bg-surface)',
    boxShadow: 'var(--shadow-sm)',
  }
  
  const hoverStyle = hoverable ? {
    cursor: 'pointer',
  } : {}
  
  return (
    <motion.div
      whileHover={hoverable ? {
        y: -4,
        boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
        borderColor: 'var(--border-default)',
      } : {}}
      style={{ ...baseStyle, ...glassStyle, ...hoverStyle }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
```

### Badge Component

```jsx
export function Badge({ children, variant = 'default', dot = false }) {
  const styles = {
    default: { background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border-subtle)' },
    accent:  { background: 'var(--accent-bg)',   color: 'var(--accent-light)',   border: '1px solid rgba(99,102,241,0.3)' },
    success: { background: 'rgba(34,197,94,0.1)',  color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' },
    warning: { background: 'rgba(245,158,11,0.1)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.3)' },
    error:   { background: 'rgba(239,68,68,0.1)',  color: '#f87171', border: '1px solid rgba(239,68,68,0.3)' },
  }
  
  return (
    <span style={{
      ...styles[variant],
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: 'var(--space-1) var(--space-3)',
      borderRadius: 'var(--radius-full)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: '0.02em',
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', opacity: 0.8 }} />}
      {children}
    </span>
  )
}
```

### Input Component

```jsx
export function Input({ label, error, hint, icon, ...props }) {
  const [focused, setFocused] = useState(false)
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      {label && (
        <label style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-primary)' }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        {icon && (
          <span style={{
            position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)',
            color: focused ? 'var(--accent)' : 'var(--text-muted)',
            transition: 'color 150ms ease',
          }}>
            {icon}
          </span>
        )}
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            background: 'var(--bg-elevated)',
            border: `1px solid ${error ? 'rgba(239,68,68,0.5)' : focused ? 'var(--accent)' : 'var(--border-default)'}`,
            borderRadius: 'var(--radius-md)',
            padding: icon ? 'var(--space-3) var(--space-4) var(--space-3) var(--space-10)' : 'var(--space-3) var(--space-4)',
            color: 'var(--text-primary)',
            fontSize: 'var(--text-sm)',
            fontFamily: 'inherit',
            boxShadow: focused ? `0 0 0 3px ${error ? 'rgba(239,68,68,0.12)' : 'var(--accent-bg)'}` : 'none',
            transition: 'all 150ms ease',
            outline: 'none',
          }}
          {...props}
        />
      </div>
      {(error || hint) && (
        <p style={{
          fontSize: 'var(--text-xs)',
          color: error ? '#f87171' : 'var(--text-muted)',
        }}>
          {error || hint}
        </p>
      )}
    </div>
  )
}
```

### Modal / Dialog

```jsx
export function Modal({ open, onClose, title, children }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
            }}
          />
          
          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{
              position: 'fixed', top: '50%', left: '50%', zIndex: 50,
              transform: 'translate(-50%, -50%)',
              width: '90%', maxWidth: 560,
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-8)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
              <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, letterSpacing: '-0.02em' }}>{title}</h2>
              <button onClick={onClose} style={{ /* close button styles */ }}>✕</button>
            </div>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
```

### Toast Notification

```jsx
export function Toast({ message, type = 'info', onClose }) {
  const types = {
    info:    { icon: 'ℹ', color: 'var(--accent)', bg: 'var(--accent-bg)' },
    success: { icon: '✓', color: '#4ade80', bg: 'rgba(34,197,94,0.1)' },
    error:   { icon: '✕', color: '#f87171', bg: 'rgba(239,68,68,0.1)' },
    warning: { icon: '⚠', color: '#fbbf24', bg: 'rgba(245,158,11,0.1)' },
  }
  const t = types[type]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
        background: 'var(--bg-elevated)',
        border: `1px solid ${t.color}30`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-4)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        minWidth: 280, maxWidth: 420,
      }}
    >
      <span style={{ color: t.color, fontSize: 'var(--text-lg)' }}>{t.icon}</span>
      <p style={{ flex: 1, fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{message}</p>
      <button onClick={onClose} style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)' }}>✕</button>
    </motion.div>
  )
}
```

### Skeleton Loader

```jsx
function Skeleton({ width = '100%', height = 20, borderRadius = 'var(--radius-md)' }) {
  return (
    <div style={{
      width, height, borderRadius,
      background: 'linear-gradient(90deg, var(--bg-elevated) 25%, var(--bg-overlay) 50%, var(--bg-elevated) 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s linear infinite',
    }} />
  )
}

// Card skeleton
function CardSkeleton() {
  return (
    <div style={{ padding: 'var(--space-6)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
        <Skeleton width={40} height={40} borderRadius="50%" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Skeleton width="60%" height={14} />
          <Skeleton width="40%" height={12} />
        </div>
      </div>
      <Skeleton height={12} style={{ marginBottom: 8 }} />
      <Skeleton width="80%" height={12} />
    </div>
  )
}
```

---

## Layout Patterns

### Bento Grid

```jsx
function BentoGrid({ items }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridAutoRows: '200px',
      gap: 'var(--space-4)',
    }}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          style={{
            gridColumn: item.wide ? 'span 2' : 'span 1',
            gridRow: item.tall ? 'span 2' : 'span 1',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-6)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {item.content}
        </motion.div>
      ))}
    </div>
  )
}
```

### Feature Grid

```jsx
function FeatureGrid({ features }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--space-6)',
      }}
    >
      {features.map((feature, i) => (
        <motion.div key={i} variants={fadeUp} style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-6)',
          transition: 'border-color 250ms ease, box-shadow 250ms ease',
        }}
        whileHover={{ borderColor: 'var(--border-default)', boxShadow: 'var(--shadow-md)' }}>
          <div style={{
            width: 48, height: 48,
            background: 'var(--accent-bg)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 'var(--space-4)',
            color: 'var(--accent-light)',
          }}>
            {feature.icon}
          </div>
          <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
            {feature.title}
          </h3>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {feature.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}
```

### Stats Section

```jsx
function StatsGrid({ stats }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
      gap: '1px',
      background: 'var(--border-subtle)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
    }}>
      {stats.map((stat, i) => (
        <div key={i} style={{
          background: 'var(--bg-surface)',
          padding: 'var(--space-8)',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: 'var(--text-4xl)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            background: 'linear-gradient(135deg, var(--accent-light), var(--text-primary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 'var(--space-2)',
          }}>
            {stat.value}
          </div>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
```
