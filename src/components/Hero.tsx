import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" style={{ position: 'relative', width: '100%', minHeight: '100svh', height: '100vh', overflow: 'hidden' }}>
      <img
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        src={`${import.meta.env.BASE_URL}cosetta-hero.jpg`}
        alt="Fresh Italian panini at Cosetta"
        fetchPriority="high"
      />

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(10,22,36,0.25), rgba(10,22,36,0.58))',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        padding: '0 24px',
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(3rem, 7vw, 6.5rem)',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            maxWidth: '900px',
            margin: 0,
          }}
        >
          Cosetta<br /><em style={{ fontStyle: 'italic' }}>Paninoteca &amp; Pizzeria</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          style={{
            marginTop: '24px',
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '480px',
            lineHeight: 1.6,
          }}
        >
          Italian comfort in the heart of Fairfield. Panini, pizza, and espresso — made for your everyday table.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href="https://order.toasttab.com/online/cosetta-paninoteca-1560-post-rd"
            style={{
              padding: '14px 28px', textDecoration: 'none',
              borderRadius: '999px',
              background: '#fff',
              color: '#000',
              fontSize: '14px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.9)')}
            onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
          >
            Order Online
          </a>
          <a href="https://www.cosetta.net/menu"
            style={{
              padding: '14px 28px', textDecoration: 'none',
              borderRadius: '999px',
              background: 'transparent',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.35)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            View Menu
          </a>
        </motion.div>
      </div>
    </section>
  )
}
