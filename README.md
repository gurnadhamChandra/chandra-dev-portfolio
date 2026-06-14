# Gurnadham Chandra — Portfolio

> Premium AI/ML & Full Stack Engineer Portfolio · Built with Next.js 15

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss)
![Deployment](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

## ✨ Features

- **Futuristic AI-inspired design** — dark mode, glassmorphism, neon glows
- **Custom animated cursor** with hover states
- **Particle neural network** background
- **Typing animation** cycling through roles
- **Scroll-triggered** section reveals
- **Interactive project cards** with detail modals
- **Animated skill bars** and stat counters
- **Expandable experience** timeline
- **Contact form** with EmailJS integration
- **Konami code Easter egg** (↑↑↓↓←→←→BA) toggles AI Mode
- **Loading screen** with GC initials
- **SEO optimized** with JSON-LD structured data
- **Single data file** — update `data/portfolio.js` for all content

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
```

Open [http://localhost:3000](http://localhost:3000)
Open [https://chandra-portfolio-steel.vercel.app/](https://chandra-portfolio-steel.vercel.app/)

## 📧 EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create a service and email template
3. Copy your **Service ID**, **Template ID**, and **Public Key**
4. Create `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

5. In `app/components/sections/Contact.js`, replace the simulated send:

```js
import emailjs from '@emailjs/browser';

// Replace the simulated call with:
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
);
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

### Netlify

```bash
npm run build
# Deploy the `out/` folder to Netlify
```

### GitHub Pages

Update `next.config.mjs`:
```js
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
};
```

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   ├── ui/
│   │   │   └── SectionWrapper.js    # Scroll-triggered fade wrapper
│   │   ├── sections/
│   │   │   ├── Hero.js              # Landing with typing effect
│   │   │   ├── About.js             # Timeline + stat counters
│   │   │   ├── Skills.js            # Animated skill bars
│   │   │   ├── Projects.js          # Cards with modals
│   │   │   ├── Experience.js        # Expandable timeline
│   │   │   ├── Certifications.js    # Cert cards + education
│   │   │   └── Contact.js           # EmailJS form
│   │   ├── Cursor.js                # Custom animated cursor
│   │   ├── Footer.js
│   │   ├── KonamiCode.js            # Easter egg
│   │   ├── LoadingScreen.js         # GC initials loader
│   │   ├── Navbar.js                # Scroll-aware navigation
│   │   ├── ParticleBackground.js    # Neural network canvas
│   │   └── ScrollProgress.js        # Progress bar
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── data/
│   └── portfolio.js                 # ← ALL content lives here
└── public/
    └── Gurnadham_Chandra_Resume.pdf
```

## 🎨 Updating Content

**All portfolio data lives in `data/portfolio.js`.** Edit this single file to update:
- Personal info, social links, resume URL
- Hero titles and bio
- Skills and proficiency levels
- Projects with descriptions, tags, challenges
- Work experience with highlights
- Certifications and education

## 🐣 Easter Egg

Type the **Konami Code**: `↑ ↑ ↓ ↓ ← → ← → B A` to activate AI Mode (hue-shift effect).

## 📄 License

MIT — free to use and adapt for your own portfolio.
