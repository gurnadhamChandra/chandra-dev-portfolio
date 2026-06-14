import portfolioData from '../../data/portfolio';

export default function Footer() {
  const { personal, social } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(139,92,246,0.1)',
        padding: '2.5rem 1.5rem',
        background: 'rgba(3,7,18,0.8)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg,#8b5cf6,#06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: 4,
            }}
          >
            Gurnadham Chandra
          </div>
          <p style={{ color: '#475569', fontSize: '0.78rem' }}>
            Senior Software Engineer · AI/ML Engineer · Bangalore, India
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target={s.name !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                color: '#475569',
                textDecoration: 'none',
                fontSize: '0.78rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#a78bfa')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              {s.name}
            </a>
          ))}
        </div>

        <p style={{ color: '#334155', fontSize: '0.72rem', fontFamily: 'var(--font-jetbrains-mono)' }}>
          © {year} · Built with Next.js 15 · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
