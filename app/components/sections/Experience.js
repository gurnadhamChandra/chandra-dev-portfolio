'use client';

import { useEffect, useRef, useState } from 'react';
import portfolioData from '../../../data/portfolio';
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper';

const EXP_ICONS = {
  Brain: '🧠',
  Building2: '🏢',
  Code2: '💻',
};

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(index === 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        gap: '1.5rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-40px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        transitionDelay: `${index * 0.15}s`,
        position: 'relative',
      }}
    >
      {/* Left: icon column */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            background: 'rgba(139,92,246,0.1)',
            border: '2px solid rgba(139,92,246,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            flexShrink: 0,
          }}
        >
          {EXP_ICONS[exp.icon] || '💼'}
        </div>
        {index < portfolioData.experience.length - 1 && (
          <div
            style={{
              width: 2,
              flex: 1,
              marginTop: 8,
              background: 'linear-gradient(to bottom, rgba(139,92,246,0.4), rgba(139,92,246,0.05))',
              minHeight: 60,
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Right: content */}
      <div
        className="glass-card"
        style={{ flex: 1, borderRadius: 16, marginBottom: '2rem', overflow: 'hidden' }}
      >
        {/* Top bar */}
        <div
          style={{
            height: 2,
            background: `linear-gradient(90deg, #8b5cf6, #06b6d4)`,
            opacity: 0.6,
          }}
          aria-hidden="true"
        />

        <div style={{ padding: '1.5rem' }}>
          {/* Header */}
          <div
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', cursor: 'pointer' }}
            onClick={() => setExpanded((v) => !v)}
          >
            <div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: '#f1f5f9', fontSize: '1rem', marginBottom: 4 }}>
                {exp.role}
              </h3>
              <p style={{ color: '#8b5cf6', fontWeight: 600, fontSize: '0.87rem', marginBottom: 4 }}>{exp.company}</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ color: '#64748b', fontSize: '0.75rem', fontFamily: 'var(--font-jetbrains-mono)' }}>📅 {exp.period}</span>
                <span style={{ color: '#64748b', fontSize: '0.75rem', fontFamily: 'var(--font-jetbrains-mono)' }}>📍 {exp.location}</span>
              </div>
            </div>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                fontSize: '1.1rem',
                padding: '0 4px',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
              aria-label={expanded ? 'Collapse' : 'Expand'}
            >
              ▾
            </button>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: expanded ? '1.25rem' : 0 }}>
            {exp.tags.map((tag) => (
              <span key={tag} className="tech-badge">{tag}</span>
            ))}
          </div>

          {/* Expandable highlights */}
          <div
            style={{
              maxHeight: expanded ? 500 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.4s ease',
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, paddingTop: expanded ? 8 : 0 }}>
              {exp.highlights.map((h, hi) => (
                <li
                  key={hi}
                  style={{
                    display: 'flex',
                    gap: 10,
                    color: '#94a3b8',
                    fontSize: '0.83rem',
                    lineHeight: 1.65,
                  }}
                >
                  <span style={{ color: '#8b5cf6', flexShrink: 0, marginTop: 1 }}>▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <SectionWrapper id="experience">
      <SectionHeader
        eyebrow="CAREER"
        title="Work Experience"
        subtitle="Building enterprise systems and AI applications across high-growth tech companies."
      />

      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        {experience.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
