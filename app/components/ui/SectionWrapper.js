'use client';

import { useEffect, useRef, useState } from 'react';

export default function SectionWrapper({ id, children, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      style={{
        padding: '6rem 1.5rem',
        maxWidth: 1200,
        margin: '0 auto',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        ...style,
      }}
    >
      {children}
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
      {eyebrow && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '5px 14px',
            borderRadius: 9999,
            background: 'rgba(139,92,246,0.08)',
            border: '1px solid rgba(139,92,246,0.2)',
            marginBottom: '1rem',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-jetbrains-mono)',
            color: '#a78bfa',
            letterSpacing: '0.08em',
          }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className="section-heading gradient-text"
        style={{ marginBottom: subtitle ? '1rem' : 0 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: '#64748b', maxWidth: 560, margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
