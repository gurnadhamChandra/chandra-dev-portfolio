'use client';

import { useState } from 'react';
import portfolioData from '../../../data/portfolio';
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper';

const SOCIAL_ICONS = { GitHub: '⌨️', LinkedIn: '💼', Email: '✉️' };

export default function Contact() {
  const { personal, social } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { setErrors(v); return; }

    setStatus('sending');
    // EmailJS integration - replace with your service/template/public key
    try {
      // Simulating send for demo; replace with:
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY');
      await new Promise((res) => setTimeout(res, 1500));
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        eyebrow="GET IN TOUCH"
        title="Let's Work Together"
        subtitle="Open to Senior Full Stack, AI/ML Engineer, and Generative AI roles."
      />

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', maxWidth: 960, margin: '0 auto' }}
        className="contact-grid"
      >
        {/* Left: Info */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.3rem', color: '#f1f5f9', marginBottom: '1rem' }}>
            Ready to build something{' '}
            <span style={{ background: 'linear-gradient(135deg,#8b5cf6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              intelligent?
            </span>
          </h3>
          <p style={{ color: '#64748b', lineHeight: 1.75, fontSize: '0.88rem', marginBottom: '2rem' }}>
            I&apos;m actively exploring Senior Software Engineer and AI/ML Engineer roles. Whether you want to discuss a role, a project, or just connect — I&apos;d love to hear from you.
          </p>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
            <a href={`mailto:${personal.email}`} style={{ display: 'flex', gap: 12, alignItems: 'center', color: '#94a3b8', textDecoration: 'none', fontSize: '0.85rem' }}>
              <span style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✉️</span>
              {personal.email}
            </a>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', color: '#94a3b8', fontSize: '0.85rem' }}>
              <span style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📍</span>
              {personal.location}
            </div>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <p style={{ color: '#475569', fontSize: '0.72rem', fontFamily: 'var(--font-jetbrains-mono)', marginBottom: 4 }}>CONNECT WITH ME</p>
            {social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target={s.name !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 14px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  color: '#94a3b8',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                }}
              >
                <span>{SOCIAL_ICONS[s.name]}</span>
                {s.name}
                <span style={{ marginLeft: 'auto', color: '#475569' }}>↗</span>
              </a>
            ))}

            <a
              href={personal.resumeUrl}
              download
              className="btn-primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '10px 14px',
                borderRadius: 10,
                textDecoration: 'none',
                color: '#fff',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginTop: 4,
              }}
            >
              ↓ Download Resume
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="glass-card" style={{ borderRadius: 18, padding: '2rem' }}>
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <FormField label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="John Doe" />
              <FormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="john@company.com" />
            </div>
            <FormField label="Subject" name="subject" value={form.subject} onChange={handleChange} error={errors.subject} placeholder="AI Engineer Role at Acme" style={{ marginBottom: '1rem' }} />
            <FormField label="Message" name="message" value={form.message} onChange={handleChange} error={errors.message} placeholder="Hi Gurnadham, I came across your portfolio and would love to discuss..." textarea style={{ marginBottom: '1.5rem' }} />

            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'sending'}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: 10,
                fontFamily: 'var(--font-inter)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#fff',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                opacity: status === 'sending' ? 0.7 : 1,
                border: 'none',
              }}
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Sent!' : 'Send Message →'}
            </button>

            {status === 'success' && (
              <p style={{ color: '#34d399', fontSize: '0.82rem', textAlign: 'center', marginTop: 12 }}>
                ✓ Message sent! I&apos;ll get back to you within 24 hours.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#f87171', fontSize: '0.82rem', textAlign: 'center', marginTop: 12 }}>
                Something went wrong. Try emailing me directly at {personal.email}
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}

function FormField({ label, name, type = 'text', value, onChange, error, placeholder, textarea, style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      <label style={{ color: '#94a3b8', fontSize: '0.78rem', fontWeight: 500 }}>{label}</label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className="form-input"
          style={{ resize: 'vertical', minHeight: 100 }}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-input"
        />
      )}
      {error && <span style={{ color: '#f87171', fontSize: '0.72rem' }}>{error}</span>}
    </div>
  );
}
