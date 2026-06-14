'use client';

import { useEffect, useRef, useState } from 'react';
import portfolioData from '../../../data/portfolio';

const CODE_SNIPPETS = [
  { text: 'const rag = new RAGPipeline()', pos: { top: '15%', right: '3%' } },
  { text: 'await llm.generate(prompt)', pos: { top: '55%', right: '2%' } },
  { text: 'embeddings = model.encode(docs)', pos: { bottom: '25%', left: '3%' } },
  { text: 'vectorStore.similarity_search(q)', pos: { top: '75%', right: '5%' } },
];

function TypeWriter({ strings, speed = 80, pause = 1800 }) {
  const [text, setText] = useState('');
  const [strIdx, setStrIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[strIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setStrIdx((i) => (i + 1) % strings.length);
    }

    setText(current.substring(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, strIdx, strings, speed, pause]);

  return (
    <span>
      {text}
      <span
        style={{
          display: 'inline-block',
          width: 2,
          height: '1em',
          background: '#8b5cf6',
          marginLeft: 2,
          verticalAlign: 'text-bottom',
          animation: 'blink 1s step-end infinite',
        }}
      />
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </span>
  );
}

function NeuralNetCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width = 300;
    const H = canvas.height = 320;

    const layers = [[3, 4, 3], [4, 5, 4], [3, 4, 3]];
    const LAYER_X = [40, 120, 200, 280];
    const nodes = [];

    layers.forEach((layer, li) => {
      const n = layer[0];
      const spacing = H / (n + 1);
      for (let ni = 0; ni < n; ni++) {
        nodes.push({
          x: LAYER_X[li],
          y: spacing * (ni + 1),
          layer: li,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    });

    // Output nodes
    const outN = 2;
    const outSpacing = H / (outN + 1);
    for (let ni = 0; ni < outN; ni++) {
      nodes.push({ x: LAYER_X[3], y: outSpacing * (ni + 1), layer: 3, pulse: Math.random() * Math.PI * 2 });
    }

    let t = 0;
    let animId;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.02;

      // Connections
      const layerNodes = [0, 1, 2, 3].map((l) => nodes.filter((n) => n.layer === l));
      for (let li = 0; li < layerNodes.length - 1; li++) {
        for (const a of layerNodes[li]) {
          for (const b of layerNodes[li + 1]) {
            const alpha = 0.08 + 0.06 * Math.sin(t + a.pulse);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const node of nodes) {
        const pulse = 0.5 + 0.5 * Math.sin(t + node.pulse);
        const r = 5 + pulse * 2;
        const alpha = 0.5 + 0.5 * pulse;

        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 2);
        grad.addColorStop(0, `rgba(139,92,246,${alpha})`);
        grad.addColorStop(1, 'rgba(139,92,246,0)');

        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 2, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${0.7 + 0.3 * pulse})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', maxWidth: 300, opacity: 0.85 }}
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  const { hero, personal, social } = portfolioData;

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 1.5rem 2rem',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,50,255,0.12), transparent)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Floating code snippets */}
      {CODE_SNIPPETS.map((s, i) => (
        <div
          key={i}
          className="code-snippet"
          style={{
            position: 'absolute',
            ...s.pos,
            animation: `float ${5 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
            opacity: 0.5,
            zIndex: 1,
          }}
          aria-hidden="true"
        >
          <span className="keyword">const </span>
          {s.text.split('=')[0]}
          {s.text.includes('=') && (
            <>
              <span style={{ color: '#f1f5f9' }}>=</span>
              <span className="function"> {s.text.split('=')[1]}</span>
            </>
          )}
        </div>
      ))}

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
        className="hero-grid"
      >
        {/* Left: Text content */}
        <div>
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              borderRadius: 9999,
              background: 'rgba(139,92,246,0.1)',
              border: '1px solid rgba(139,92,246,0.25)',
              marginBottom: '1.5rem',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-jetbrains-mono)',
              color: '#a78bfa',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8b5cf6', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
            Available for AI/ML Roles
          </div>

          {/* Greeting */}
          <p
            style={{
              color: '#94a3b8',
              fontSize: '1.1rem',
              marginBottom: '0.5rem',
              fontFamily: 'var(--font-space-grotesk)',
            }}
          >
            {hero.greeting}
          </p>

          {/* Name */}
          <h1
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #f1f5f9 30%, #a78bfa 70%, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {hero.name} {hero.emoji}
          </h1>

          {/* Typing roles */}
          <div
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
              fontWeight: 600,
              color: '#8b5cf6',
              marginBottom: '1.5rem',
              minHeight: '2rem',
              fontFamily: 'var(--font-space-grotesk)',
            }}
          >
            <TypeWriter strings={hero.roles} />
          </div>

          {/* Bio */}
          <p
            style={{
              color: '#94a3b8',
              lineHeight: 1.75,
              fontSize: '0.95rem',
              marginBottom: '2.5rem',
              maxWidth: 520,
            }}
          >
            {hero.bio}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <a
              href={personal.resumeUrl}
              download
              className="btn-primary"
              style={{
                padding: '12px 24px',
                borderRadius: 10,
                fontWeight: 600,
                fontSize: '0.9rem',
                color: '#fff',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              ↓ Download Resume
            </a>

            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost"
              style={{
                padding: '12px 24px',
                borderRadius: 10,
                fontWeight: 600,
                fontSize: '0.9rem',
                color: '#a78bfa',
                cursor: 'pointer',
                fontFamily: 'var(--font-inter)',
              }}
            >
              View Projects →
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost"
              style={{
                padding: '12px 24px',
                borderRadius: 10,
                fontWeight: 600,
                fontSize: '0.9rem',
                color: '#94a3b8',
                cursor: 'pointer',
                fontFamily: 'var(--font-inter)',
              }}
            >
              Contact Me
            </button>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ color: '#475569', fontSize: '0.75rem', fontFamily: 'var(--font-jetbrains-mono)' }}>FIND ME ON</span>
            {social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target={s.name !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  color: '#64748b',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  padding: '6px 12px',
                  borderRadius: 6,
                  border: '1px solid rgba(148,163,184,0.1)',
                  transition: 'all 0.3s ease',
                  background: 'rgba(15,23,42,0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#a78bfa';
                  e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#64748b';
                  e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)';
                }}
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            position: 'relative',
          }}
          className="hero-visual"
        >
          {/* Avatar circle */}
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#8b5cf6,#06b6d4)',
              padding: 3,
              animation: 'float 6s ease-in-out infinite',
              boxShadow: '0 0 40px rgba(139,92,246,0.4)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'linear-gradient(135deg,#1e1b4b,#0f172a)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
              }}
            >
              🤖
            </div>
          </div>

          {/* Neural net visualization */}
          <NeuralNetCanvas />

          {/* Floating stats */}
          <div
            style={{
              position: 'absolute',
              top: '5%',
              left: '-10%',
              padding: '10px 16px',
              borderRadius: 10,
              background: 'rgba(15,23,42,0.8)',
              border: '1px solid rgba(139,92,246,0.2)',
              backdropFilter: 'blur(10px)',
              animation: 'float 7s ease-in-out infinite',
              animationDelay: '1s',
            }}
            aria-hidden="true"
          >
            <div style={{ fontSize: '0.6rem', color: '#64748b', fontFamily: 'var(--font-jetbrains-mono)', marginBottom: 2 }}>RAG Pipeline</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#a78bfa' }}>✓ Active</div>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '10%',
              right: '-5%',
              padding: '10px 16px',
              borderRadius: 10,
              background: 'rgba(15,23,42,0.8)',
              border: '1px solid rgba(6,182,212,0.2)',
              backdropFilter: 'blur(10px)',
              animation: 'float 8s ease-in-out infinite',
              animationDelay: '2s',
            }}
            aria-hidden="true"
          >
            <div style={{ fontSize: '0.6rem', color: '#64748b', fontFamily: 'var(--font-jetbrains-mono)', marginBottom: 2 }}>Experience</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#06b6d4' }}>5+ Years</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: '#475569',
          fontSize: '0.7rem',
          fontFamily: 'var(--font-jetbrains-mono)',
          animation: 'float 2.5s ease-in-out infinite',
        }}
        aria-hidden="true"
      >
        <span>SCROLL</span>
        <div style={{ width: 20, height: 32, border: '1px solid rgba(148,163,184,0.2)', borderRadius: 10, display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
          <div style={{ width: 3, height: 8, borderRadius: 2, background: '#8b5cf6', animation: 'scrollDot 2s ease-in-out infinite' }} />
        </div>
        <style>{`@keyframes scrollDot{0%{transform:translateY(0);opacity:1}100%{transform:translateY(12px);opacity:0}}`}</style>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
