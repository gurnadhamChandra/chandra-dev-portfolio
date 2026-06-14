'use client';

import { useEffect, useRef, useState } from 'react';
import portfolioData from '../../../data/portfolio';
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper';

const CATEGORY_ICONS = { Frontend: '🖥️', Backend: '⚙️', 'AI / Machine Learning': '🧠', 'Database & Tools': '🗄️' };

function SkillBar({ name, level, color, delay = 0 }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setAnimate(true), delay); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} style={{ marginBottom: '0.875rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-jetbrains-mono)', color: '#64748b' }}>
          {animate ? `${level}%` : '0%'}
        </span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color.split(' ')[1]}, ${color.split(' ')[3]})`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;
  const [active, setActive] = useState(null);

  return (
    <SectionWrapper id="skills">
      <SectionHeader
        eyebrow="TECHNICAL EXPERTISE"
        title="Skills & Technologies"
        subtitle="A curated toolkit built across 5+ years of engineering and AI development."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
        }}
        className="skills-grid"
      >
        {skills.map((cat, ci) => (
          <div
            key={ci}
            className="glass-card"
            style={{
              borderRadius: 18,
              padding: '1.75rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={() => setActive(ci)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Category header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: `linear-gradient(135deg, ${cat.color.replace('from-', '').replace(' to-', ', ').replace(/-500/g, '').replace(/-600/g, '')})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  background: active === ci
                    ? `linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.3))`
                    : `rgba(139,92,246,0.1)`,
                  border: '1px solid rgba(139,92,246,0.2)',
                  transition: 'all 0.3s ease',
                }}
              >
                {CATEGORY_ICONS[cat.category] || '⚡'}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: '#f1f5f9', fontSize: '1rem' }}>
                  {cat.category}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.75rem' }}>{cat.items.length} technologies</p>
              </div>
            </div>

            {/* Skill bars */}
            <div>
              {cat.items.map((skill, si) => (
                <SkillBar
                  key={si}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={si * 80}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
