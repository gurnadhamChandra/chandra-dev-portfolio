import './globals.css';

export const metadata = {
  title: 'Gurnadham Chandra | Senior Software Engineer & AI/ML Engineer',
  description:
    'Senior Software Engineer with 5+ years of experience specializing in AI/ML, Generative AI, RAG systems, LangChain, and full-stack development with React.js and Next.js.',
  keywords:
    'Gurnadham Chandra, Senior Software Engineer, AI Engineer, ML Engineer, Generative AI, RAG, LangChain, HuggingFace, React.js, Next.js, Python, Bangalore',
  authors: [{ name: 'Gurnadham Chandra' }],
  openGraph: {
    title: 'Gurnadham Chandra | Senior Software Engineer & AI/ML Engineer',
    description: 'Building intelligent, scalable AI-powered applications with 5+ years of engineering experience.',
    type: 'website',
    locale: 'en_US',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Gurnadham Chandra',
              jobTitle: 'Senior Software Engineer',
              description: 'Senior Software Engineer specializing in AI/ML, Generative AI, and Full Stack Development',
              url: 'https://gurnadhamchandra.dev',
              sameAs: ['https://github.com/gurnadhamCh', 'https://linkedin.com/in/gurnadhamCh'],
              knowsAbout: ['Generative AI', 'RAG Systems', 'LangChain', 'React.js', 'Next.js', 'Python'],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
