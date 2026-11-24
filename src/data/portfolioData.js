export const portfolioData = {
  personal: {
    name: "Suhaas Nandulamattam",
    shortName: "Suhaas N.",
    tagline: "Building intelligent systems for the real world.",
    bio: "I'm Suhaas Nandulamattam, a Computer Engineering student at K.J. Somaiya School of Engineering building full-stack applications, AI-powered systems, and practical software solutions.",
    role: "COMPUTER ENGINEERING • FULL-STACK • AI/ML",
    location: "Mumbai, IN",
    institution: "KJSSE '28",
    statusText: "Currently building • learning • experimenting",
    academicEmail: "suhaas.n@somaiya.edu",
    personalEmail: "suhaasn2006@gmail.com",
    avatarUrl: "/suhaas-portrait.jpg",
    githubUrl: "https://github.com/TheDarkKnightSujo",
    linkedinUrl: "https://linkedin.com/in/suhaas-nandulamattam-b51838332/",
    codechefUrl: "https://codechef.com/users/suhaasn61000",
    certificatesUrl: "https://drive.google.com/drive/folders/1oaRrNRR34jRPUfuTSmjNL8jIvwym4KWL?usp=sharing",
    resumeUrl: "/Suhaas_Nandulamattam_2026.pdf"
  },
  stats: [
    {
      label: "CURRENT CGPA",
      value: "9.69",
      subtext: "Top-tier academic track"
    },
    {
      label: "DEGREE TIMELINE",
      value: "2024–2028",
      subtext: "B.Tech Computer Engg (KJSSE)"
    },
    {
      label: "PREVIOUS INTERN",
      value: "YOTTA",
      highlight: true,
      subtext: "Platform Eng (June–July '25)"
    },
    {
      label: "ENGINEERING BASE",
      value: "Mumbai, IN",
      subtext: "IST (UTC +5:30)"
    }
  ],
  about: {
    quote: "“I like understanding the entire system — not just one layer of it.”",
    quoteSubtext: "From spatial indexing queries at the datastore layer to rendering zero-jank interfaces on clients, my sweet spot is bridging raw logic and real utility.",
    paragraphs: [
      "I am a Computer Engineering student who looks at software through an architectural lens. Rather than treating code as disconnected scripts, I focus on the cohesion between frontend components, high-throughput microservices, distributed persistence layers, and specialized machine learning pipelines.",
      "My work spans full-stack web and mobile development, asynchronous REST/cron systems, database schema architecture (PostgreSQL, PostGIS, MySQL), and deploying purpose-tuned LLMs for cognitive verification tasks. Whether optimizing multi-room allocation logic during my internship at Yotta or calculating dynamic battery degradation curves for EV routes, I focus on building reliable software with mathematical grounding."
    ],
    philosophy: [
      {
        step: "01 // IDEA",
        title: "Problem decomposition",
        desc: "Mathematical bounds and invariant formulation"
      },
      {
        step: "02 // ARCH",
        title: "Data flow topology",
        desc: "Latency constraints, caching layers & schema design"
      },
      {
        step: "03 // CODE",
        title: "Clean typed logic",
        desc: "Modular architecture, spatial indexing & robust harnesses"
      },
      {
        step: "04 // SYSTEM",
        title: "Reliable execution",
        desc: "E2E async processing, telemetry & active monitoring"
      }
    ]
  },
  experience: [
    {
      company: "YOTTA",
      role: "PLATFORM ENGINEERING INTERN",
      location: "Mumbai, India",
      period: "June 2025 – July 2025",
      isCurrent: false,
      description: "Developed a comprehensive, enterprise full-stack Meeting Room Booking System engineered to manage high-volume corporate room reservations, recurring series meetings, real-time participant availability, automated minutes capture, and multi-location asset governance.",
      tags: ["React.js", "Axios", "Node.js", "Express.js", "Sequelize", "MySQL", "JWT"],
      projectLink: "https://github.com/TheDarkKnightSujo/MeetingRoomBookingSystem"
    },
    {
      company: "SWDC KJSSE",
      role: "AI/ML, MERN & QA ENGINEER",
      location: "Online / Mumbai",
      period: "October 2025 – June 2026",
      isCurrent: true,
      description: "Engineering full-stack MERN workflows, evaluating AI/ML models, and conducting comprehensive software testing protocols for internal institutional software suites across student and administrative infrastructure.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Python", "Model QA"],
      projectLink: null
    }
  ],
  flagshipProject: {
    id: "evrify",
    title: "EVrify",
    tagline: "Intelligent EV route planning & station reliability",
    badge: "FLAGSHIP",
    buildStatus: "BUILD_STABLE // 2025",
    description: "An end-to-end intelligent electric vehicle route planning and station reliability web application designed to solve charger unreliability, queue latency, and degraded charging performance for long-distance EV travel across India.",
    repoUrl: "https://github.com/TheDarkKnightSujo",
    corridor: "NH48 (MUMBAI → PUNE → GOA)",
    state: "VERIFIED_RELIABLE",
    pillars: [
      {
        number: "1",
        title: "Spatial Routing",
        icon: "explore",
        desc: "Integrated OpenRouteService API with PostGIS spatial geometry queries in Neon PostgreSQL, cached through an Upstash Redis low-latency layer."
      },
      {
        number: "2",
        title: "Battery Intelligence",
        icon: "battery_charging_full",
        desc: "Dynamic battery degradation curves modeling battery thermal loss based on live weather data fetched from Open-Meteo."
      },
      {
        number: "3",
        title: "AI Reliability",
        icon: "psychology",
        desc: "Automated multi-source scraper feeding community reviews into Groq API / LLaMA 3 scheduled via GitHub Actions Cron for sentiment scoring."
      },
      {
        number: "4",
        title: "AI RC Verification",
        icon: "document_scanner",
        desc: "Gemini 1.5 Flash Vision OCR parsing uploaded Indian Vehicle Registration Certificates to reliably assign verified EV owner badges."
      },
      {
        number: "5",
        title: "Community & Media Pipeline",
        icon: "forum",
        colSpan: 2,
        desc: "Real-time corridor trip updates, station reviews, image uploads, and authenticated profiles powered by Firebase Auth, Cloudinary CDN, and FastAPI asynchronous handlers."
      }
    ],
    tech: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "PostGIS", "Redis", "Groq LLaMA 3", "Gemini Vision"]
  },
  secondaryProjects: [
    {
      id: "civilsetu",
      badge: "SIH PROJECT",
      icon: "location_city",
      title: "CivilSetu",
      description: "Crowdsourced Civic Issue Reporting and Resolution System enabling citizen engagement, geotagged complaints, and real-time municipal workflow response tracking.",
      tags: ["Flask", "Supabase", "REST API", "React Native"],
      link: null
    },
    {
      id: "tictactoe",
      badge: "PERSONAL PROJECT",
      icon: "grid_4x4",
      title: "Dynamic Tic-Tac-Toe",
      description: "A dynamic Tic-Tac-Toe web game built using React.js with customizable grid sizes and intelligent mathematical winner detection evaluating board invariants for arbitrary N-dimensions.",
      tags: ["React.js", "Algorithms", "Vite"],
      interactiveDemo: true,
      link: null
    },
    {
      id: "meeting-rooms",
      badge: "YOTTA PROJECT",
      icon: "meeting_room",
      title: "Meeting Room System",
      description: "Full-stack meeting room management and reservation suite supporting JWT authentication, recurring schedules, multi-location resource allocation, and timeline calendars.",
      tags: ["Node.js", "Express", "MySQL", "Sequelize"],
      link: "https://github.com/TheDarkKnightSujo/MeetingRoomBookingSystem"
    }
  ],
  systemLayers: [
    { layer: "LAYER 01", title: "Frontend", tech: "React • TS • Tailwind" },
    { layer: "LAYER 02", title: "Backend", tech: "FastAPI • Node • Express" },
    { layer: "LAYER 03", title: "Data", tech: "PostgreSQL • PostGIS • Redis" },
    { layer: "LAYER 04", title: "AI + APIs", tech: "Groq • Gemini • ORS" }
  ],
  skillCategories: [
    {
      category: "Programming",
      icon: "code",
      skills: ["Python", "JavaScript", "C++", "Java", "C", "HTML5 / CSS3"]
    },
    {
      category: "Frontend",
      icon: "devices",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Axios", "Responsive UI"]
    },
    {
      category: "Backend",
      icon: "dns",
      skills: ["FastAPI", "Node.js", "Express.js", "RESTful APIs", "Cron Jobs"]
    },
    {
      category: "Databases",
      icon: "database",
      skills: ["PostgreSQL", "PostGIS", "MySQL", "Redis", "Supabase", "Sequelize"]
    },
    {
      category: "AI / Machine Learning",
      icon: "smart_toy",
      skills: ["Groq API", "LLaMA 3", "Gemini 1.5 Flash", "OpenRouteService", "Open-Meteo"]
    },
    {
      category: "Tools & Cloud",
      icon: "build",
      skills: ["Git / GitHub", "Firebase Auth", "Cloudinary", "Postman", "GitHub Actions"]
    }
  ],
  certifications: [
    {
      issuer: "DEEPLEARNING.AI / COURSERA",
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle: "Machine Learning Foundations"
    },
    {
      issuer: "IBM",
      title: "Developing Front-End Apps with React",
      subtitle: "React Architecture & State"
    },
    {
      issuer: "IBM",
      title: "Introduction to HTML, CSS, & JavaScript",
      subtitle: "Web Platform Standards"
    },
    {
      issuer: "META",
      title: "Version Control",
      subtitle: "Git Branches & CI Workflows"
    },
    {
      issuer: "META",
      title: "Programming in Python",
      subtitle: "Pythonic Paradigms & Data Structures"
    },
    {
      issuer: "META",
      title: "Introduction to Back-End Development",
      subtitle: "HTTP, Routing & DB Schemas"
    }
  ],
  socials: [
    {
      name: "GitHub",
      username: "@TheDarkKnightSujo",
      label: "CODE REPOSITORY",
      icon: "code",
      url: "https://github.com/TheDarkKnightSujo"
    },
    {
      name: "LinkedIn",
      username: "in/suhaas-nandulamattam",
      label: "PROFESSIONAL PROFILE",
      icon: "share",
      url: "https://linkedin.com/in/suhaas-nandulamattam-b51838332/"
    },
    {
      name: "CodeChef",
      username: "@suhaasn61000",
      label: "ALGORITHMIC PRACTICE",
      icon: "data_object",
      url: "https://codechef.com/users/suhaasn61000"
    }
  ]
};

