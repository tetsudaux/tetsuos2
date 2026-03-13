import { PortfolioProject, QuickReply } from '@/app/types/chat';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '15',
    title: 'Herbolaria Ancestral',
    company: 'Headless Ecommerce',
    tags: [
      { type: 'code', label: 'Code' },
      { type: 'product', label: 'Product' },
      { type: 'ai', label: 'AI' },
    ],
    category: 'product',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop',
    caseStudy: {
      content: [
        { type: 'text-featured', value: 'Headless ecommerce built on Medusa.js with a self-managed VPS. Integrated Envia.com shipping APIs and implemented technical SEO.' },
        { type: 'link', href: 'https://herbolariaancestral.mx', label: 'Visit herbolariaancestral.mx' },
        { type: 'text', title: 'Phase 2 (in progress)', value: 'AI Conversational Chat Seller with custom conversational design — turning the storefront into an AI-driven shopping experience.' },
        { type: 'skills', title: 'Tech stack', items: [
          { icon: 'code', label: 'Medusa.js' },
          { icon: 'server', label: 'Self-managed VPS' },
          { icon: 'link', label: 'Envia.com API' },
          { icon: 'search', label: 'Technical SEO' },
          { icon: 'wand', label: 'AI Chat Seller' },
        ]},
      ],
    },
  },
  {
    id: '14',
    title: 'EmprendeIA',
    company: '1st Place — UTEL x Google Hackathon',
    tags: [
      { type: 'ai', label: 'AI' },
      { type: 'product', label: 'Product' },
      { type: 'design', label: 'Design' },
    ],
    category: 'product',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
    caseStudy: {
      content: [
        { type: 'text-featured', value: 'AI-powered modular platform for Mexican micro-entrepreneurs. Won 1st place at the UTEL x Google Hackathon.' },
        { type: 'text', title: 'The product', value: 'Designed the UX and prototyped in Firebase Studio with Google Gemini API integration. Four modules: digital identity, financial management, personalized learning paths, and marketing campaigns.' },
        { type: 'metrics', items: [
          { value: '50', label: 'User tests conducted' },
          { value: '72%', label: 'Rated 10/10' },
          { value: '84%', label: 'Found it easy to use' },
          { value: '68%', label: 'Willing to pay' },
        ]},
        { type: 'skills', title: 'Tools & technologies', items: [
          { icon: 'vector', label: 'Figma' },
          { icon: 'code', label: 'Firebase Studio' },
          { icon: 'wand', label: 'Google Gemini API' },
          { icon: 'users', label: 'User Testing' },
        ]},
      ],
    },
  },
  {
    id: '13',
    title: 'UX Designer',
    company: "D'Europe Muebles",
    tags: [
      { type: 'product', label: 'Product' },
      { type: 'design', label: 'Design' },
    ],
    category: 'product',
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&h=400&fit=crop',
    caseStudy: {
      content: [
        { type: 'text', title: 'Role', value: 'UX Designer — Oct 2025 to Present · On-site' },
        { type: 'text-featured', value: 'ERP/CRM UX design for a furniture retail company. Led user research, Figma prototyping, user flows, and built the Design System from scratch. Key project: mobile CRM app for in-store sales representatives.' },
        { type: 'text', title: 'Responsibilities', value: 'Conducted user interviews with sales reps and managers to identify pain points in the existing workflow. Designed end-to-end user flows for the ERP/CRM system. Created high-fidelity Figma prototypes validated through usability testing. Established the company\'s first Design System to ensure consistency across all digital touchpoints.' },
        { type: 'skills', title: 'Tools & methods', items: [
          { icon: 'vector', label: 'Figma' },
          { icon: 'layout', label: 'Design System' },
          { icon: 'users', label: 'User Interviews' },
          { icon: 'clipboard', label: 'Usability Testing' },
        ]},
      ],
    },
  },
  {
    id: '1',
    title: 'Content Creation',
    company: 'YouTube Channel',
    tags: [
      { type: 'video', label: 'Video' },
      { type: 'social-media', label: 'Social Media' },
    ],
    category: 'design',
    image: 'https://tetsuos.com/wp-content/uploads/2024/05/youtube-channel-thumbnail.png',
    caseStudy: {
      content: [
        { type: 'link', href: 'https://www.youtube.com/@nicoliense', label: 'View YouTube channel' },
        { type: 'skills', title: 'Tools used', items: [
          { icon: 'video', label: 'Premiere Pro' },
          { icon: 'wand', label: 'After Effects' },
          { icon: 'photo', label: 'Photoshop' },
          { icon: 'vector', label: 'Illustrator' },
        ]},
        { type: 'video', youtubeId: 'hMh8jDh_qQA', title: 'Featured video' },
      ],
    },
  },
  {
    id: '2',
    title: 'Graphic Designer',
    company: 'IQC',
    tags: [
      { type: 'design', label: 'Design' },
      { type: 'social-media', label: 'Social Media' },
   
    ],
    category: 'design',
    image: 'https://tetsuos.com/wp-content/uploads/2024/05/iqc-thumbnail.png',
    caseStudy: {
      content: [
        { type: 'text', title: 'Activities', value: 'Translating the ideas of the clients in graphics according to their needs. Designing business cards, catalogs, flyers, banners, mockups and videos for social media. ' },
        { type: 'gallery', images: [
          { src: '/assets/iqc1.webp', alt: 'IQC 1' },
          { src: '/assets/iqc2.webp', alt: 'IQC 2' },
          { src: '/assets/iqc3.webp', alt: 'IQC 3' },
          { src: '/assets/iqc4.webp', alt: 'IQC 4' },
          { src: '/assets/iqc5.webp', alt: 'IQC 5' },
          { src: '/assets/iqc6.webp', alt: 'IQC 6' },
          { src: '/assets/iqc7.webp', alt: 'IQC 7' },
          { src: '/assets/iqc8.webp', alt: 'IQC 8' },
        ]},
      ],
    },
  },
  {
    id: '3',
    title: 'Digital Designer',
    company: 'Elementia Materiales',
    tags: [
      { type: 'video', label: 'Video' },
      { type: 'design', label: 'Design' },
    ],
    category: 'design',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
  },
  // Archived: XX Studio (id '4') — not in CV, no case study
  {
    id: '5',
    title: 'Web Designer',
    company: 'Aprende Institute',
    tags: [
      { type: 'design', label: 'Design' },
      { type: 'code', label: 'Code' },
    ],
    category: 'design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    caseStudy: {
      content: [
        { type: 'text', title: 'Role', value: 'Web Designer · 2021–2023 · Remote/Hybrid' },
        { type: 'text-featured', value: 'Built responsive multimedia learning content for an online education platform. Designed interactive experiences that made complex subjects accessible and engaging for thousands of students across Latin America.' },
        { type: 'text', title: 'What I did', value: 'Created responsive course content using HTML and CSS with Articulate Rise as the authoring tool. Produced interactive H5P videos that boosted student engagement. Managed course deployment on Moodle, including LMS resource configuration and content customization for different programs.' },
        { type: 'skills', title: 'Tools & technologies', items: [
          { icon: 'code', label: 'HTML/CSS' },
          { icon: 'layout', label: 'Articulate Rise' },
          { icon: 'video', label: 'H5P Interactive Video' },
          { icon: 'server', label: 'Moodle LMS' },
          { icon: 'photo', label: 'Responsive Design' },
        ]},
      ],
    },
  },
  {
    id: '6',
    title: 'Graphic Designer',
    company: 'UCamp',
    tags: [{ type: 'design', label: 'Design' }],
    category: 'design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
    caseStudy: {
      content: [
        { type: 'text', title: 'Role', value: 'Graphic Designer · 2022–2023 · Remote' },
        { type: 'text-featured', value: 'Created visual materials for an online education platform — presentations, learning aids, and branded assets that supported the student experience across multiple programs.' },
        { type: 'text', title: 'What I did', value: 'Designed presentation decks for instructors and marketing teams. Produced student-facing learning materials including infographics, visual guides, and course collateral. Maintained brand consistency across all deliverables while adapting to different subject areas and audiences.' },
        { type: 'skills', title: 'Tools', items: [
          { icon: 'photo', label: 'Photoshop' },
          { icon: 'vector', label: 'Illustrator' },
          { icon: 'layout', label: 'Presentation Design' },
          { icon: 'wand', label: 'Visual Communication' },
        ]},
      ],
    },
  },
  {
    id: '7',
    title: 'Design & Marketing Jr.',
    company: 'NUNNCapital',
    tags: [
      { type: 'design', label: 'Design' },
      { type: 'social-media', label: 'Social Media' },
      { type: 'marketing', label: 'Marketing' },
    ],
    category: 'design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    caseStudy: {
      content: [
        { type: 'text', title: 'Role', value: 'Design & Marketing Jr. · 2023–2024 · Hybrid' },
        { type: 'text-featured', value: 'Drove inbound growth through visual design, content production, and ecommerce strategies — combining creative execution with data-driven marketing to scale organic reach across multiple channels.' },
        { type: 'metrics', items: [
          { value: '400', label: 'Blog visits/mo' },
          { value: '10K', label: 'Views/mo on TikTok & YouTube' },
        ]},
        { type: 'text', title: 'What I did', value: 'Executed the full inbound strategy: designed visual content for blog, TikTok, and YouTube. Produced short-form and long-form video. Developed ecommerce growth strategies that connected content to conversion. Owned the creative pipeline end-to-end — from ideation to published asset.' },
        { type: 'skills', title: 'Tools & skills', items: [
          { icon: 'photo', label: 'Visual Design' },
          { icon: 'video', label: 'Video Production' },
          { icon: 'chart', label: 'Growth Strategy' },
          { icon: 'search', label: 'SEO / Inbound' },
          { icon: 'layout', label: 'Ecommerce' },
        ]},
      ],
    },
  },
  {
    id: '8',
    title: 'Instructional Design & Programming',
    company: 'Consubanco',
    tags: [
      { type: 'design', label: 'Design' },
      { type: 'code', label: 'Code' },
      { type: 'product', label: 'Product' },
    ],
    category: 'product',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop',
    caseStudy: {
      content: [
        { type: 'text', title: 'Role', value: 'Instructional Design & Programming · Feb–Oct 2025 · Hybrid' },
        { type: 'text-featured', value: 'Designed LMS flows and built automation tools for a major Mexican bank — bridging the gap between internal systems and the learning platform used by sales teams nationwide.' },
        { type: 'text', title: 'What I did', value: 'Designed CornerStone LMS learning flows for onboarding and compliance training. Built an automation bot that extracted photos between internal systems and the LMS, eliminating manual work. Identified the need for a unified AI-driven platform to support sales teams — laying the groundwork for a future product initiative.' },
        { type: 'skills', title: 'Tools & technologies', items: [
          { icon: 'server', label: 'CornerStone LMS' },
          { icon: 'code', label: 'Automation Bot' },
          { icon: 'layout', label: 'Flow Design' },
          { icon: 'wand', label: 'AI Platform Discovery' },
          { icon: 'link', label: 'Systems Integration' },
        ]},
      ],
    },
  },
  {
    id: '9',
    title: 'AI Content Creation',
    company: 'Puerta Celeste',
    tags: [
      { type: 'ai', label: 'AI' },
      { type: 'video', label: 'Video' },
      { type: 'marketing', label: 'Marketing' },
    ],
    category: 'product',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    caseStudy: {
      content: [
        { type: 'text-featured', value: 'Monetized YouTube channel built from scratch as solo creator. Full ownership of the entire content pipeline — from strategy and scripting to SEO, editing, and algorithm-driven content curation.' },
        { type: 'link', href: 'https://www.youtube.com/@ExperienciaEspiritual', label: 'View YouTube channel' },
        { type: 'metrics', items: [
          { value: '156K+', label: 'Total views' },
          { value: '18.8K', label: 'Watch hours' },
          { value: '1,347', label: 'Subscribers' },
          { value: '265', label: 'Videos in 5 months' },
        ]},
        { type: 'text', title: 'Process', value: 'Curated a library of 500 videos down to 100 high-performing pieces using data-driven analysis. Leveraged AI tools to accelerate scripting, thumbnail generation, and SEO optimization — scaling output without sacrificing quality.' },
        { type: 'text', title: 'Result', value: 'Active ad revenue stream. Demonstrated that a single creator with AI-assisted workflows can match the output of a small production team.' },
        { type: 'skills', title: 'Tools & skills', items: [
          { icon: 'video', label: 'Premiere Pro' },
          { icon: 'wand', label: 'After Effects' },
          { icon: 'search', label: 'YouTube SEO' },
          { icon: 'wand', label: 'AI scripting' },
          { icon: 'chart', label: 'Analytics' },
          { icon: 'photo', label: 'Thumbnail design' },
        ]},
      ],
    },
  },
  {
    id: '10',
    title: 'AI Lead Magnet',
    company: 'The Old School Services',
    tags: [
      { type: 'ai', label: 'AI' },
      { type: 'product', label: 'Product' },
      { type: 'design', label: 'Design' },
    ],
    category: 'product',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    caseStudy: {
      content: [
        { type: 'text-featured', value: 'End-to-end UX design and API integrations for an AI-driven lead generation tool. Full product delivery — from user experience design to a functional, deployed product.' },
        { type: 'link', href: 'https://lm.theoldschool.services', label: 'Visit lm.theoldschool.services' },
        { type: 'text', title: 'What it does', value: 'An interactive AI-powered landing page that qualifies leads through conversational flows. Visitors engage with a guided experience instead of filling out a static form — increasing conversion and reducing drop-off.' },
        { type: 'text', title: 'My role', value: 'Owned the full product cycle: user research, UX design, prototyping, API integration, and deployment. Built with v0 by Vercel for rapid iteration from design to production.' },
        { type: 'skills', title: 'Tools & technologies', items: [
          { icon: 'vector', label: 'Figma' },
          { icon: 'code', label: 'v0 by Vercel' },
          { icon: 'wand', label: 'AI integration' },
          { icon: 'link', label: 'API design' },
          { icon: 'users', label: 'User research' },
          { icon: 'layout', label: 'Conversational UX' },
        ]},
      ],
    },
  },
  {
    id: '11',
    title: 'Nuhead — UX/UI Design',
    company: 'Crehana MicroDegree',
    tags: [
      { type: 'product', label: 'Product' },
      { type: 'design', label: 'Design' },
    ],
    category: 'product',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop',
    caseStudy: {
      content: [
        { type: 'text', title: 'Context', value: 'Final project for the Crehana MicroDegree in UX/UI Design (Sep–Dec 2022). End-to-end product design — from research to high-fidelity prototype.' },
        { type: 'text-featured', value: 'Nuhead is a math learning app designed to make practice dynamic and interactive. Users can solve exercises, connect with peer coaches, and track their progress — replacing the static, boring study methods that students struggle with.' },
        { type: 'text', title: 'The challenge', value: 'Math practice lacks dynamic, interactive methods. Students feel insecure about exams and need personalized support, but most apps only offer exercises without human connection.' },
        { type: 'text', title: 'Research & insights', value: 'Built empathy maps and user archetypes (15–20 year-old students in Mexico). Key findings: users need massive practice to feel confident, they value personalized methods, and they want to see all content before an exam. Benchmarked against Quizlet, Nibble, HelloTalk, and GoConqr.' },
        { type: 'text', title: 'Process', value: 'Ran two rounds of low-fidelity navigation pattern tests and two high-fidelity prototype iterations. Prototype 1 revealed users struggled with open-ended exercises — Prototype 2 introduced multiple-choice answers and topic quick-access, which tested significantly better. Users valued star ratings, coach profiles, and in-app chat for personalized help.' },
        { type: 'text', title: 'Solution', value: 'A mobile-first app (with responsive web version) featuring: subject browsing with quick filters, timed practice sessions with multiple-choice exercises, a coach directory with ratings and direct messaging, and a gamified dashboard showing streaks, achievements, and minutes practiced.' },
        { type: 'skills', title: 'Methods & tools', items: [
          { icon: 'vector', label: 'Figma' },
          { icon: 'users', label: 'User Research' },
          { icon: 'clipboard', label: 'Usability Testing' },
          { icon: 'layout', label: 'Wireframing' },
          { icon: 'photo', label: 'Visual Design' },
          { icon: 'wand', label: 'Prototyping' },
        ]},
      ],
    },
  },
  {
    id: '12',
    title: 'PensaDay — Product Management',
    company: 'Coderhouse Certificate',
    tags: [
      { type: 'product', label: 'Product' },
      { type: 'design', label: 'Design' },
      { type: 'ai', label: 'AI' },
    ],
    category: 'product',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop',
    caseStudy: {
      content: [
        { type: 'text-featured', value: 'PensaDay — a reflective journaling mobile app with guided questions and AI-powered behavior pattern detection. Designed end-to-end as the capstone project for the Coderhouse Product Management certificate.' },
        { type: 'text', title: 'The Problem', value: 'People recognize the value of daily self-reflection but struggle to maintain the habit. Common barriers include lack of time, absence of structure, and no feedback loop that makes the practice feel rewarding. Existing journaling apps either offer a blank page (intimidating) or gamified mood tracking (superficial).' },
        { type: 'text', title: 'The Solution', value: 'PensaDay guides users through short, structured reflection sessions with curated questions. An AI engine analyzes entries over time to surface behavioral patterns — giving users genuine insight instead of just a log. The app targets three core segments: busy professionals seeking work-life awareness, students building emotional intelligence, and independent creatives processing their inner world.' },
        { type: 'metrics', items: [
          { value: '3', label: 'User Personas Defined' },
          { value: '60%+', label: 'Target Retention (MVP)' },
          { value: '5K', label: 'Target Active Users' },
          { value: '+40', label: 'Target NPS Score' },
        ] },
        { type: 'text', title: 'User Personas', value: 'Laura — 32, Marketing Manager in CDMX. Needs quick reflection between meetings to manage stress and gain clarity. Daniel — 22, Psychology student in Barcelona. Uses journaling as a tool for academic and personal growth. Liliana — 40, independent artist in Patagonia. Seeks a private space to process emotions and find creative inspiration.' },
        { type: 'text', title: 'Competitive Analysis', value: 'Direct competitors: Daylio (mood tracking + micro-diary), Reflectly (AI journaling), Moodnotes (CBT-based mood journal). Indirect competitors: Headspace (mindfulness), Notion/Evernote (general note-taking). PensaDay differentiates through guided questioning combined with AI pattern recognition — bridging the gap between passive logging and active self-discovery.' },
        { type: 'text', title: 'Product Strategy', value: 'Freemium model — free daily reflections with limited history; premium unlocks AI pattern insights, unlimited history, and expert-curated question packs. Revenue streams include subscriptions, partnerships with mental health professionals, and B2B wellness programs. SWOT analysis identified AI personalization and guided structure as key strengths, with market education and user trust as primary challenges.' },
        { type: 'text', title: 'Roadmap & Execution', value: 'Phase 1 — Design (2 months): User research, personas, wireframes, visual design. Phase 2 — Development (4 months): Core app, question engine, AI integration. Phase 3 — Testing (2 months): Beta testing, iteration based on user feedback. Phase 4 — Optimization (2 months): Performance, retention features, premium conversion.' },
        { type: 'text', title: 'Product Management Artifacts', value: 'Full delivery included: Business Model Canvas, OKRs with measurable key results, user story mapping with epics and acceptance criteria, KPI framework (DAU, retention rate, session length, NPS), risk matrix with mitigation strategies, and a prioritized product backlog.' },
        { type: 'skills', title: 'Methods & Tools', items: [
          { icon: '📋', label: 'Product Strategy' },
          { icon: '🎯', label: 'OKRs & KPIs' },
          { icon: '👤', label: 'User Personas' },
          { icon: '🗺️', label: 'User Story Mapping' },
          { icon: '📊', label: 'Competitive Analysis' },
          { icon: '🧠', label: 'SWOT Analysis' },
          { icon: '📐', label: 'Business Model Canvas' },
          { icon: '⚠️', label: 'Risk Matrix' },
          { icon: '🤖', label: 'AI Integration' },
        ] },
      ],
    },
  },
];

export const initialReplies: QuickReply[] = [
  { id: 'ver-cv', label: 'View CV', icon: 'clipboard', section: 'cv', color: 'blue' },
  { id: 'ver-trabajo', label: 'View work', icon: 'layout', section: 'portfolio', color: 'red' },
  { id: 'hablemos', label: 'Let\u2019s talk', icon: 'messages', section: 'contact', color: 'green' },
];

export const cvReplies: QuickReply[] = [
  { id: 'ver-trabajo', label: 'View work', icon: 'layout', section: 'portfolio', color: 'red' },
  { id: 'hablemos', label: 'Let\u2019s talk', icon: 'messages', section: 'contact', color: 'green' },
  { id: 'ir-inicio', label: 'Go home', icon: 'home', section: 'welcome', color: 'blue' },
];

export const portfolioReplies: QuickReply[] = [
  { id: 'ver-cv', label: 'View CV', icon: 'clipboard', section: 'cv', color: 'blue' },
  { id: 'hablemos', label: 'Let\u2019s talk', icon: 'messages', section: 'contact', color: 'green' },
  { id: 'ir-inicio', label: 'Go home', icon: 'home', section: 'welcome', color: 'blue' },
];

export const contactReplies: QuickReply[] = [
  { id: 'ver-cv', label: 'View CV', icon: 'clipboard', section: 'cv', color: 'blue' },
  { id: 'ver-trabajo', label: 'View work', icon: 'layout', section: 'portfolio', color: 'red' },
  { id: 'ir-inicio', label: 'Go home', icon: 'home', section: 'welcome', color: 'blue' },
];

export const getRepliesForSection = (section: string): QuickReply[] => {
  switch (section) {
    case 'cv':
      return cvReplies;
    case 'portfolio':
      return portfolioReplies;
    case 'contact':
      return contactReplies;
    default:
      return initialReplies;
  }
};
