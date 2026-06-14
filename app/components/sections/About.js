'use client';

import { useEffect, useRef, useState } from 'react';
import portfolioData from '../../../data/portfolio';
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper';

const ICONS = {
  Code2: '💻',
  Building2: '🏢',
  Brain: '🧠',
  Bot: '🤖',
  Rocket: '🚀',
};

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const numeric = parseInt(target);
          const duration = 1800;
          const steps = 60;
          const increment = numeric / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numeric) {
              setCount(numeric);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const { about, stats } = portfolioData;

  return (
    <SectionWrapper id="about">
      <SectionHeader
        eyebrow="MY JOURNEY"
        title="About Me"
        subtitle="From full-stack engineering to Generative AI — a story of continuous evolution."
      />

      {/* Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          marginBottom: '5rem',
        }}
        className="stats-grid"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="glass-card"
            style={{
              padding: '1.75rem',
              borderRadius: 16,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '2.5rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg,#8b5cf6,#06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.1,
                marginBottom: '0.5rem',
              }}
            >
              <Counter target={stat.value.replace('+', '')} suffix="+" />
            </div>
            <div style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 500 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
        {/* Center line */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 2,
            top: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, transparent, #8b5cf6 20%, #06b6d4 80%, transparent)',
            opacity: 0.4,
          }}
          aria-hidden="true"
        />

        {about.timeline.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent: isLeft ? 'flex-start' : 'flex-end',
        marginBottom: '2.5rem',
        position: 'relative',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : `translateX(${isLeft ? -40 : 40}px)`,
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        transitionDelay: `${index * 0.1}s`,
      }}
      className="timeline-item"
    >
      {/* Center dot */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          top: 20,
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: 'linear-gradient(135deg,#8b5cf6,#06b6d4)',
          zIndex: 2,
          boxShadow: '0 0 12px rgba(139,92,246,0.6)',
        }}
        aria-hidden="true"
      />

      <div
        className="glass-card"
        style={{
          width: 'calc(50% - 2.5rem)',
          padding: '1.25rem 1.5rem',
          borderRadius: 14,
          marginLeft: isLeft ? 0 : undefined,
          marginRight: isLeft ? undefined : 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <span style={{ fontSize: '1.3rem' }}>{ICONS[item.icon] || '⭐'}</span>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '0.7rem',
              color: '#8b5cf6',
              background: 'rgba(139,92,246,0.1)',
              padding: '2px 8px',
              borderRadius: 4,
            }}
          >
            {item.year}
          </span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '0.95rem', color: '#f1f5f9', marginBottom: 6 }}>
          {item.title}
        </h3>
        <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.6 }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}
