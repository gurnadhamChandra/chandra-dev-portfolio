const portfolioData = {
  personal: {
    name: "Gurnadham Chandra",
    initials: "GC",
    title: "Senior Software Engineer",
    location: "Bangalore, India",
    email: "gurnadham19@gmail.com",
    phone: "+91-966679769",
    github: "https://github.com/gurnadhamCh",
    linkedin: "https://linkedin.com/in/gurnadhamCh",
    resumeUrl: "/Gurnadham_Chandra_Resume.pdf",
  },

  hero: {
    greeting: "Hi, I'm",
    name: "Gurnadham Chandra",
    emoji: "👋",
    roles: [
      "Senior Software Engineer",
      "AI/ML & Generative AI Engineer",
      "Full Stack Developer",
      "RAG & LLM Application Builder",
    ],
    bio: "I build intelligent, scalable, AI-powered applications that combine modern frontend engineering with cutting-edge Generative AI technologies. With 5+ years of software engineering experience and hands-on expertise in RAG systems, LangChain, Hugging Face, and LLM integrations, I transform complex business problems into elegant digital solutions.",
  },

  stats: [
    { value: "5+", label: "Years Experience", suffix: "" },
    { value: "10+", label: "Enterprise Projects", suffix: "" },
    { value: "4+", label: "AI Applications Built", suffix: "" },
    { value: "20+", label: "Technologies Mastered", suffix: "" },
  ],

  about: {
    description:
      "I'm a Senior Software Engineer with a passion for building intelligent systems. My journey started with full-stack development, building enterprise-grade React applications, and has evolved into creating cutting-edge AI-powered solutions using RAG, LangChain, and LLMs.",
    timeline: [
      {
        year: "2020",
        title: "Started as Associate Developer",
        description:
          "Began my career at Armorize Technology Solutions, building responsive UIs and integrating backend APIs with Java and JavaScript.",
        icon: "Code2",
      },
      {
        year: "2022",
        title: "Senior Software Engineer at SLK",
        description:
          "Joined SLK Software, building an enterprise document verification portal that reduced processing time by 90%. Led frontend architecture decisions.",
        icon: "Building2",
      },
      {
        year: "2023",
        title: "Deep Dive into AI/ML",
        description:
          "Started exploring Generative AI, RAG systems, and LLMs. Built personal projects with LangChain, HuggingFace, FAISS, and ChromaDB.",
        icon: "Brain",
      },
      {
        year: "2024",
        title: "Built RBAC RAG Chatbot",
        description:
          "Created a personal project — an AI-powered document Q&A platform with role-based access control, multi-channel retrieval, and context-aware responses.",
        icon: "Bot",
      },
      {
        year: "2025",
        title: "AI Engineer at NSEIT",
        description:
          "Currently at Nusummit Technologies (NSEIT), developing the Siddhi AI Chatbot — an enterprise RAG-based solution for policy document understanding with guardrails and CBAC.",
        icon: "Rocket",
      },
    ],
  },

  skills: [
    {
      category: "Frontend",
      color: "from-blue-500 to-cyan-500",
      icon: "Monitor",
      items: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Redux Toolkit", level: 88 },
        { name: "RTK Query", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Material UI", level: 88 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Jest", level: 78 },
      ],
    },
    {
      category: "Backend",
      color: "from-violet-500 to-purple-500",
      icon: "Server",
      items: [
        { name: "Python", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "Node.js", level: 82 },
        { name: "REST APIs", level: 92 },
      ],
    },
    {
      category: "AI / Machine Learning",
      color: "from-pink-500 to-rose-500",
      icon: "Brain",
      items: [
        { name: "Generative AI", level: 82 },
        { name: "RAG Systems", level: 85 },
        { name: "LangChain", level: 83 },
        { name: "Hugging Face", level: 80 },
        { name: "Prompt Engineering", level: 88 },
        { name: "FAISS", level: 78 },
        { name: "ChromaDB", level: 80 },
        { name: "NLP Fundamentals", level: 75 },
        { name: "LLM Integration", level: 85 },
      ],
    },
    {
      category: "Database & Tools",
      color: "from-emerald-500 to-teal-500",
      icon: "Database",
      items: [
        { name: "PostgreSQL", level: 80 },
        { name: "SQL", level: 82 },
        { name: "Git / GitHub", level: 92 },
        { name: "Azure Boards", level: 75 },
        { name: "Jira", level: 80 },
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "RBAC-Based RAG Chatbot",
      featured: true,
      emoji: "🤖",
      description:
        "An AI-powered document question-answering platform with Role-Based Access Control. Delivers secure, channel-specific document retrieval and context-aware AI responses.",
      longDescription:
        "Built a full-stack AI chatbot platform combining Next.js frontend with a Python/FastAPI backend. The system uses LangChain to orchestrate RAG pipelines, with FAISS and ChromaDB for vector storage. RBAC ensures users only access documents relevant to their role, while HuggingFace embeddings power semantic search.",
      tags: [
        "LangChain",
        "HuggingFace",
        "FAISS",
        "ChromaDB",
        "Next.js",
        "FastAPI",
        "RAG",
        "RBAC",
      ],
      color: "from-violet-600 to-purple-800",
      challenges: [
        "Implementing multi-tenant RBAC with channel-based document isolation",
        "Optimizing vector search latency for real-time responses",
        "Prompt engineering for context-aware, hallucination-free answers",
      ],
      github: "https://github.com/gurnadhamChandra/RBAC_RAG_ChATBOT",
      demo: null,
      icon: "Bot",
    },
    {
      id: 2,
      title: "SPACEX DATA SCIENCE CAPSTONE PROJECT",
      featured: true,
      emoji: "💬",
      description:
        "IBM Data Science Capstone Project - SpaceX Falcon 9 landing Prediction using Python, SQL, data visualization, and machine learning models.",
      longDescription:
        "A comprehensive data science project analyzing SpaceX Falcon 9 landing outcomes. Utilized Python for data cleaning and preprocessing, SQL for data querying, and various machine learning models to predict landing success. Visualized insights with Matplotlib and Seaborn.",
      tags: [
        "Python",
        "SQL",
        "Machine Learning",
        "Data Visualization",
        "Matplotlib",
        "Seaborn"
      ],
      
      color: "from-blue-600 to-cyan-800",
      challenges: [
        "Designing RBAC logic that maps agent codes to business channels",
        "Building effective guardrails for out-of-domain query handling",
        "Ensuring accurate policy retrieval with minimal hallucination",
      ],
      github: "https://github.com/gurnadhamChandra/spacex-data-science-capstone",
      demo: null,
      icon: "MessageSquare",
    },
    {
      id: 3,
      title: "AI Voice Agent",
      featured: false,
      emoji: "🎙️",
      description:
        "Real-time conversational AI voice agent with LiveKit integration, Groq LLM, ChromaDB RAG, speech-to-text, text-to-speech, and Voice Activity Detection.",
      longDescription:
        "A cutting-edge voice AI system designed for customer support. Uses LiveKit for real-time audio streaming, Groq for ultra-fast LLM inference, and ChromaDB for knowledge retrieval. Features VAD to handle natural conversation pauses and interruptions.",
      tags: ["LiveKit", "Groq LLM", "ChromaDB", "RAG", "STT", "TTS", "VAD"],
      color: "from-emerald-600 to-teal-800",
      challenges: [
        "Achieving sub-500ms end-to-end latency for natural conversation",
        "Integrating VAD with LiveKit for seamless turn-taking",
        "Building RAG that works within voice conversation constraints",
      ],
      github: "https://github.com/gurnadhamChandra/AI-VOICE-AGENT",
      demo: null,
      icon: "Mic",
    },
    {
      id: 4,
      title: "TF-IDF Search Engine",
      featured: false,
      emoji: "✅",
      description:
        "High-performance TF-IDF search engine for efficient document retrieval.",
      longDescription:
        "A high-performance search engine utilizing TF-IDF for efficient document retrieval. Designed to handle large-scale document indexing and searching with optimal performance.",
      tags: ["Python", "TF-IDF", "Search Engine", "Information Retrieval", "NLP", "Scikit-learn", "NumPy" ,"Pandas"],
      color: "from-orange-600 to-red-800",
      challenges: [
        "Optimizing TF-IDF vectorization for large document corpora",
        "Implementing efficient search algorithms for fast retrieval",
        "Handling edge cases in text preprocessing and tokenization",
      ],
      github: "https://github.com/gurnadhamChandra/TF-IDF",
      demo: null,
      icon: "FileCheck",
    },
  ],

  experience: [
    {
      company: "Nusummit Technologies (NSEIT)",
      role: "Senior Software Engineer",
      period: "June 2025 – Present",
      location: "Bangalore, India",
      color: "from-violet-500 to-purple-600",
      icon: "Brain",
      highlights: [
        "Developed the Siddhi AI Chatbot using RAG to provide context-aware responses from policy documents",
        "Implemented Channel-Based Access Control (CBAC) validating user identity via agent codes",
        "Designed guardrail mechanisms to handle out-of-domain queries and ensure secure information retrieval",
        "Built the plan creation module with dynamic premium calculation and PDF generation",
        "Led frontend development for the insurance quote and rider selection workflows",
      ],
      tags: ["Python", "RAG", "LangChain", "Next.js", "React", "FastAPI", "CBAC"],
    },
    {
      company: "SLK Software (SLK Group)",
      role: "Senior Software Engineer",
      period: "Nov 2022 – June 2025",
      location: "Bangalore, India",
      color: "from-blue-500 to-cyan-600",
      icon: "Building2",
      highlights: [
        "Built enterprise document verification portal reducing processing time by 90%",
        "Designed document upload and categorization workflows for multiple process types",
        "Implemented data highlighting, editing, and validation to maintain record integrity",
        "Optimized document review workflows with advanced viewing and interaction capabilities",
        "Led frontend architecture decisions and mentored junior developers",
      ],
      tags: ["React.js", "Next.js", "Redux Toolkit", "RTK Query", "REST APIs"],
    },
    {
      company: "Armorize Technology Solutions",
      role: "Associate Application Developer",
      period: "Nov 2020 – Oct 2022",
      location: "Bangalore, India",
      color: "from-emerald-500 to-teal-600",
      icon: "Code2",
      highlights: [
        "Developed responsive user interfaces using Java, JavaScript, HTML, and CSS",
        "Integrated frontend components with backend REST APIs",
        "Contributed to UI component library and design system",
        "Participated in code reviews and maintained code quality standards",
        "Debugged and resolved complex frontend issues across browsers",
      ],
      tags: ["JavaScript", "HTML", "CSS", "Java", "REST APIs"],
    },
  ],

  certifications: [
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM",
      year: "2026",
      icon: "Award",
      color: "from-blue-500 to-indigo-600",
      skills: ["Python", "Data Analysis", "Machine Learning", "Data Visualization", "Pandas", "NumPy"],
      credentialUrl: "#",
    },
    {
      title: "Python for Data Analysis",
      issuer: "IBM",
      year: "2025",
      icon: "Code2",
      color: "from-yellow-500 to-orange-600",
      skills: ["Python", "Pandas", "NumPy", "Data Wrangling"],
      credentialUrl: "#",
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "IBM",
      year: "2025",
      icon: "Brain",
      color: "from-violet-500 to-purple-600",
      skills: ["Supervised Learning", "Model Evaluation", "scikit-learn"],
      credentialUrl: "#",
    },
    {
      title: "Data Visualization",
      issuer: "IBM",
      year: "2025",
      icon: "BarChart3",
      color: "from-emerald-500 to-teal-600",
      skills: ["Matplotlib", "Seaborn", "Plotly", "Dashboards"],
      credentialUrl: "#",
    },
  ],

  education: {
    degree: "BTech Civil Engineering",
    institution: "VVIT",
    period: "2016 – 2020",
  },

  social: [
    {
      name: "GitHub",
      url: "https://github.com/gurnadhamCh",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/gurnadhamCh",
      icon: "Linkedin",
    },
    {
      name: "Email",
      url: "mailto:gurnadham19@gmail.com",
      icon: "Mail",
    },
  ],
};

export default portfolioData;
