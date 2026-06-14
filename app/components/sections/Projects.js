'use client';

import { useState } from 'react';
import portfolioData from '../../../data/portfolio';
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper';

const PROJECT_ICONS = {
  Bot: '🤖',
  MessageSquare: '💬',
  Mic: '🎙️',
  FileCheck: '✅',
};

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(3,7,18,0.85)',
        backdropFilter: 'blur(12px)',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: 680,
          width: '100%',
          borderRadius: 20,
          padding: '2rem',
          maxHeight: '85vh',
          overflowY: 'auto',
          border: '1px solid rgba(139,92,246,0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: 8 }}>{project.emoji}</div>
            <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.4rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>
              {project.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tech-badge">{tag}</span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '1.5rem', padding: 4 }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Description */}
        <p style={{ color: '#94a3b8', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          {project.longDescription}
        </p>

        {/* Challenges */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, color: '#a78bfa', marginBottom: 12, fontSize: '0.9rem' }}>
            ⚡ Key Challenges Solved
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {project.challenges.map((c, i) => (
              <li key={i} style={{ display: 'flex', gap: 10, color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6 }}>
                <span style={{ color: '#8b5cf6', flexShrink: 0 }}>→</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Arch diagram placeholder */}
        <div
          style={{
            borderRadius: 12,
            padding: '1.5rem',
            background: 'rgba(139,92,246,0.05)',
            border: '1px solid rgba(139,92,246,0.1)',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}
        >
          <div style={{ color: '#475569', fontSize: '0.8rem', fontFamily: 'var(--font-jetbrains-mono)', marginBottom: 8 }}>ARCHITECTURE</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, flexWrap: 'wrap', color: '#8b5cf6', fontSize: '0.75rem', fontFamily: 'var(--font-jetbrains-mono)' }}>
            {project.tags.slice(0, 5).map((t, i) => (
              <span key={i}>
                [{t}]{i < Math.min(4, project.tags.length - 1) ? ' →' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '10px 20px', borderRadius: 8, color: '#fff', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}
          >
            GitHub →
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ padding: '10px 20px', borderRadius: 8, color: '#a78bfa', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="glass-card"
      style={{
        borderRadius: 18,
        overflow: 'hidden',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        position: 'relative',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, #8b5cf6, #06b6d4)`,
          opacity: hovered ? 1 : 0.4,
          transition: 'opacity 0.3s ease',
        }}
        aria-hidden="true"
      />

      {/* Featured badge */}
      {project.featured && (
        <div
          style={{
            position: 'absolute',
            top: 20,
            right: 16,
            padding: '3px 10px',
            borderRadius: 9999,
            background: 'rgba(139,92,246,0.2)',
            border: '1px solid rgba(139,92,246,0.4)',
            fontSize: '0.65rem',
            fontFamily: 'var(--font-jetbrains-mono)',
            color: '#a78bfa',
          }}
        >
          ⭐ FEATURED
        </div>
      )}

      <div style={{ padding: '1.5rem' }}>
        {/* Icon + title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1rem' }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'rgba(139,92,246,0.12)',
              border: '1px solid rgba(139,92,246,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease',
              ...(hovered ? { background: 'rgba(139,92,246,0.25)', borderColor: 'rgba(139,92,246,0.5)' } : {}),
            }}
          >
            {project.emoji}
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: '1rem',
              color: '#f1f5f9',
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: '1.25rem' }}>
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="tech-badge">{tag}</span>
          ))}
          {project.tags.length > 5 && (
            <span className="tech-badge" style={{ color: '#475569' }}>+{project.tags.length - 5}</span>
          )}
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span
            style={{
              fontSize: '0.78rem',
              color: hovered ? '#a78bfa' : '#64748b',
              transition: 'color 0.3s ease',
              fontFamily: 'var(--font-jetbrains-mono)',
            }}
          >
            View Details →
          </span>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              padding: '5px 12px',
              borderRadius: 6,
              border: '1px solid rgba(148,163,184,0.1)',
              color: '#64748b',
              textDecoration: 'none',
              fontSize: '0.72rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#a78bfa'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)'; }}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'AI/ML', 'Frontend', 'Enterprise'];
  const filterMap = {
    'AI/ML': ['RAG', 'LangChain', 'LLM', 'ChromaDB', 'FAISS', 'HuggingFace'],
    Frontend: ['Next.js', 'React.js', 'Redux'],
    Enterprise: ['RBAC', 'CBAC'],
  };

  const filtered = filter === 'All' ? projects : projects.filter((p) =>
    filterMap[filter]?.some((tag) => p.tags.some((t) => t.includes(tag) || tag.includes(t)))
  );

  return (
    <SectionWrapper id="projects" style={{ maxWidth: 1200 }}>
      <SectionHeader
        eyebrow="PORTFOLIO"
        title="Featured Projects"
        subtitle="A selection of AI-powered and enterprise applications I've built."
      />

      {/* Filter tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '8px 20px',
              borderRadius: 9999,
              border: '1px solid',
              borderColor: filter === f ? 'rgba(139,92,246,0.6)' : 'rgba(148,163,184,0.1)',
              background: filter === f ? 'rgba(139,92,246,0.15)' : 'transparent',
              color: filter === f ? '#a78bfa' : '#64748b',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.82rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
        }}
        className="projects-grid"
      >
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
