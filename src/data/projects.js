export const PROJECT_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend' },
];

export const projects = [
  {
    id: 'hiresensei',
    featured: true,
    badge: 'Featured · Full-Stack + AI',
    cats: ['fullstack', 'ai'],
    title: 'HireSensei AI',
    subtitle: 'AI-Powered Recruitment & Placement Platform · 2026',
    summary:
      'Placement platform for students, recruiters, TPOs and admins with JWT auth and role-based access; AI layer in progress.',
    description:
      'Architected a full-stack recruitment and placement platform connecting students, recruiters, companies, and colleges using React.js, TypeScript, Node.js, Express.js, MongoDB, and Mongoose. Implemented secure JWT authentication and role-based access control across Student, Recruiter, TPO, and Admin roles, with bcrypt password hashing, Zod validation, and protected REST APIs. Building the AI engineering layer with LLM-based resume analysis, RAG-based retrieval over placement and job knowledge, and ML-assisted candidate-job matching.',
    note: 'The AI layer (resume analysis, RAG, candidate matching) is still under development.',
    highlights: [
      { value: '4', label: 'Roles with RBAC' },
      { value: 'JWT', label: 'Secure auth + bcrypt' },
      { value: 'Zod', label: 'Validated REST APIs' },
    ],
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'REST APIs'],
    github: 'https://github.com/FaheemNazir1/HireSensei-AI',
    live: 'https://hire-sensei-ai.vercel.app/',
    image: '/hiresensei.png',
  },
  {
    id: 'paperpilot',
    featured: true,
    badge: 'New · Full-Stack Research Tool',
    cats: ['fullstack'],
    title: 'PaperPilot',
    subtitle: 'Scientific Paper Library for Literature Reviews · 2026',
    summary:
      'Private, per-user library for scientific PDFs with Google sign-in, a FastAPI backend and verified-token isolation.',
    description:
      "A scientific paper library for literature reviews. Researchers sign in with Google (Firebase Authentication), upload PDFs to a private per-user library, then search, inspect metadata and delete their papers. The FastAPI backend verifies Firebase ID tokens on every request and derives ownership from the token, never from the client, so other users' papers return 404. Uploads are validated for type and size, and page count plus embedded title/author are extracted into SQLite. A separate Demo Library keeps example papers apart from real uploads. The backend also ships PyMuPDF-based text extraction, cleaning and section-detection services, ready for upcoming analysis features.",
    note: 'AI features (chat, paper comparison, research-gap detection, literature-review generation, RAG) are planned and not implemented yet.',
    highlights: [
      { value: 'Google', label: 'Firebase sign-in' },
      { value: '25 MB', label: 'Default upload limit' },
      { value: '404', label: 'Cross-user isolation' },
      { value: 'RAG', label: 'Planned AI pipeline' },
    ],
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Firebase Auth', 'SQLite', 'PyMuPDF', 'Python'],
    github: 'https://github.com/FaheemNazir1/PaperPilot',
    live: 'https://paperpilot-eta.vercel.app',
    image: '/paperpilot.png',
  },
  {
    id: 'farm2market',
    cats: ['ai', 'fullstack'],
    title: 'Farm2Market',
    subtitle: 'AI-Enabled Agri-Commerce Platform · 2025',
    summary: 'Marketplace with an ML fruit-quality classifier and a price-prediction model for fairer crop pricing.',
    description:
      'Engineered a full-stack agri-commerce marketplace integrating a machine learning-based fruit quality classifier and a data-driven price-prediction model to support fair, informed crop pricing. Built and integrated an image-analysis pipeline to assess produce freshness and grade, applying ML inference within a production-style full-stack application.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning', 'Computer Vision', 'Full-Stack Web'],
    github: 'https://github.com/FaheemNazir1/Farm2Market',
    live: 'https://farm2market-one.vercel.app/',
    image: '/farm2market.png',
  },
  {
    id: 'cinesuggest',
    cats: ['fullstack', 'ai'],
    title: 'CineSuggest',
    subtitle: 'AI Movie Recommendation System · 2025',
    summary: 'Content-based movie recommendations with friend chat, bookmarks, ratings and taste profiles.',
    description:
      'A personalized movie recommendation platform utilizing content-based filtering algorithms. Features social friend chat, interactive bookmarking, sharing, ratings, and user taste profile management.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'JavaScript', 'Recommendation Systems'],
    github: 'https://github.com/FaheemNazir1/CineSuggest',
    live: 'https://cinesuggest-alpha.vercel.app/',
    image: '/cinesuggest.png',
  },
  {
    id: 'cinenews',
    cats: ['ai'],
    title: 'Cine News',
    subtitle: 'AI-Powered News Verification Platform · 2026',
    summary: 'News aggregation with Hugging Face NLP models for source credibility and claim verification.',
    description:
      'An AI-driven news verification and aggregation portal using Hugging Face NLP models to analyze source credibility, verify claim authenticity, and perform domain reputation analysis.',
    tech: ['Python', 'NLP', 'Hugging Face', 'Machine Learning', 'REST APIs'],
    github: 'https://github.com/FaheemNazir1/News/tree/main/new-AI-project',
    live: 'https://verinews-app.vercel.app/',
    image: '/news_ai.png',
  },
  {
    id: 'incredible-india',
    cats: ['frontend'],
    title: 'Incredible India',
    subtitle: 'Interactive Cultural Showcase Website · 2024',
    summary: 'Travel and heritage portal with state-wise itinerary planners and seasonal travel estimators.',
    description:
      'An interactive cultural and travel portal showcasing Indian heritage, landmarks, and travel routes with state-wise itinerary planners and seasonal travel estimators.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/FaheemNazir1/incredible-india',
    live: 'https://incredible-india-amber.vercel.app/',
    image: '/incredible_india.png',
  },
];
