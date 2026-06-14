'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [phase, setPhase] = useState(0); // 0=show, 1=shrink, 2=hidden

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1400);
    const t2 = setTimeout(() => setPhase(2), 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 2) return null;

  return (
    <div
      className="loading-screen"
      style={{
        opacity: phase === 1 ? 0 : 1,
        transition: 'opacity 0.7s ease',
      }}
      aria-label="Loading"
    >
      <div style={{ textAlign: 'center' }}>
        {/* Outer ring */}
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            border: '2px solid transparent',
            background: 'linear-gradient(#030712,#030712) padding-box, linear-gradient(135deg,#8b5cf6,#06b6d4) border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            animation: 'spin 2s linear infinite',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 6,
              borderRadius: '50%',
              background: 'rgba(139,92,246,0.08)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '1.75rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg,#8b5cf6,#06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              zIndex: 1,
            }}
          >
            GC
          </span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '0.75rem',
            color: '#475569',
            letterSpacing: '0.15em',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        >
          INITIALIZING...
        </p>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%,100% { opacity:0.4; }
          50% { opacity:1; }
        }
      `}</style>
    </div>
  );
}
