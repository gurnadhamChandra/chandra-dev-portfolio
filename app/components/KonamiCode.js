'use client';

import { useEffect, useRef } from 'react';

const KONAMI = [
  'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
  'b','a',
];

export default function KonamiCode({ onActivate }) {
  const idx = useRef(0);
  const toastRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === KONAMI[idx.current]) {
        idx.current++;
        if (idx.current === KONAMI.length) {
          idx.current = 0;
          onActivate?.();
          showToast(toastRef);
        }
      } else {
        idx.current = 0;
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onActivate]);

  return (
    <div
      ref={toastRef}
      style={{
        position: 'fixed',
        top: 80,
        right: 20,
        zIndex: 99998,
        padding: '12px 20px',
        borderRadius: 12,
        background: 'rgba(139,92,246,0.9)',
        color: '#fff',
        fontFamily: 'var(--font-jetbrains-mono)',
        fontSize: '0.82rem',
        backdropFilter: 'blur(10px)',
        opacity: 0,
        transform: 'translateY(-10px)',
        transition: 'all 0.4s ease',
        pointerEvents: 'none',
        border: '1px solid rgba(255,255,255,0.2)',
      }}
      aria-live="polite"
    >
      🤖 AI MODE ACTIVATED
    </div>
  );
}

function showToast(ref) {
  if (!ref.current) return;
  ref.current.style.opacity = '1';
  ref.current.style.transform = 'translateY(0)';
  setTimeout(() => {
    if (!ref.current) return;
    ref.current.style.opacity = '0';
    ref.current.style.transform = 'translateY(-10px)';
  }, 2500);
}
