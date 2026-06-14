'use client';

import { useState, useEffect } from 'react';
import portfolioData from '../../data/portfolio';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 1.5rem',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(3,7,18,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(139,92,246,0.1)' : 'none',
      }}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontSize: '1.25rem',
          fontWeight: 700,
          background: 'linear-gradient(135deg,#8b5cf6,#06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          cursor: 'pointer',
          border: 'none',
          background: 'none',
          padding: 0,
        }}
        aria-label="Go to top"
      >
        <span style={{
          background: 'linear-gradient(135deg,#8b5cf6,#06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'var(--font-space-grotesk)',
          fontSize: '1.25rem',
          fontWeight: 700,
        }}>
          GC
        </span>
      </button>

      {/* Desktop links */}
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }}
        className="desktop-nav"
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-inter)',
            }}
          >
            {link.label}
          </button>
        ))}

        <a
          href={portfolioData.personal.resumeUrl}
          download
          className="btn-primary"
          style={{
            padding: '7px 18px',
            borderRadius: 8,
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#fff',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          Resume ↓
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="mobile-nav-toggle"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Toggle menu"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 8,
          color: '#f1f5f9',
          fontSize: '1.5rem',
        }}
      >
        {mobileOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            background: 'rgba(3,7,18,0.97)',
            backdropFilter: 'blur(20px)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            borderBottom: '1px solid rgba(139,92,246,0.15)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                color: activeSection === link.href.replace('#', '') ? '#a78bfa' : '#94a3b8',
                fontFamily: 'var(--font-inter)',
                fontSize: '1rem',
                fontWeight: 500,
                padding: '8px 0',
                borderBottom: '1px solid rgba(148,163,184,0.05)',
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={portfolioData.personal.resumeUrl}
            download
            style={{
              padding: '10px 18px',
              borderRadius: 8,
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#fff',
              textDecoration: 'none',
              textAlign: 'center',
              background: 'linear-gradient(135deg,#7c3aed,#8b5cf6)',
              marginTop: 8,
            }}
          >
            Download Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
