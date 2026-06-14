'use client';

import portfolioData from '../../../data/portfolio';
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper';

const CERT_ICONS = {
  Award: '🏆',
  Code2: '💻',
  Brain: '🧠',
  BarChart3: '📊',
};

export default function Certifications() {
  const { certifications, education } = portfolioData;

  return (
    <SectionWrapper id="certifications">
      <SectionHeader
        eyebrow="CREDENTIALS"
        title="Certifications & Learning"
        subtitle="Continuous growth through structured learning and hands-on experimentation."
      />

      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '4rem' }}
        className="cert-grid"
      >
        {certifications.map((cert, i) => (
          <CertCard key={i} cert={cert} delay={i * 80} />
        ))}
      </div>

      {/* Currently learning banner */}
      <div
        className="glass-card"
        style={{
          borderRadius: 16,
          padding: '1.75rem 2rem',
          border: '1px solid rgba(6,182,212,0.2)',
          background: 'rgba(6,182,212,0.04)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ fontSize: '2.5rem' }}>🎯</div>
        <div>
          <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: '#f1f5f9', marginBottom: 6 }}>
            Currently Focusing On
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6 }}>
            Advanced AI Engineering — LLM fine-tuning, agentic systems, multimodal AI, and building production-ready AI pipelines.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
            {['LLM Fine-tuning', 'Agentic AI', 'Multimodal AI', 'AI Pipelines', 'Model Evaluation'].map((t) => (
              <span key={t} className="tech-badge" style={{ borderColor: 'rgba(6,182,212,0.25)', color: '#06b6d4' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div
        className="glass-card"
        style={{
          borderRadius: 16,
          padding: '1.5rem 2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ fontSize: '2rem' }}>🎓</div>
        <div>
          <p style={{ color: '#64748b', fontSize: '0.72rem', fontFamily: 'var(--font-jetbrains-mono)', marginBottom: 4 }}>EDUCATION</p>
          <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: '#f1f5f9', marginBottom: 4 }}>
            {education.degree}
          </h3>
          <p style={{ color: '#8b5cf6', fontSize: '0.87rem', fontWeight: 500 }}>
            {education.institution} &nbsp;·&nbsp;
            <span style={{ color: '#64748b', fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.78rem' }}>{education.period}</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}

function CertCard({ cert, delay }) {
  return (
    <div
      className="glass-card"
      style={{
        borderRadius: 16,
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        animation: 'float 7s ease-in-out infinite',
        animationDelay: `${delay}ms`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: 'rgba(139,92,246,0.1)',
            border: '1px solid rgba(139,92,246,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            flexShrink: 0,
          }}
        >
          {CERT_ICONS[cert.icon] || '🏅'}
        </div>
        <div>
          <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, color: '#f1f5f9', fontSize: '0.9rem', lineHeight: 1.3 }}>
            {cert.title}
          </h3>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 4 }}>
            <span style={{ color: '#8b5cf6', fontSize: '0.78rem', fontWeight: 600 }}>{cert.issuer}</span>
            <span style={{ color: '#475569', fontSize: '0.72rem', fontFamily: 'var(--font-jetbrains-mono)' }}>{cert.year}</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
        {cert.skills.map((s) => (
          <span key={s} className="tech-badge" style={{ fontSize: '0.65rem' }}>{s}</span>
        ))}
      </div>
    </div>
  );
}
