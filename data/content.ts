/** Edit this file to add, remove or reorder jobs, projects and skills. The layout adapts automatically. */
export type Job = {
  when: string;
  place: string;
  role: string;
  org: string;
  pts: string[];
};
export type Project = {
  name: string;
  cat: string;
  m: "wave" | "grid" | "split" | "dots";
  sum: string;
  stack: string[];
  out: string;
  what: string;
  ctx: string;
  built: string[];
  role?: string;
  img?: string;
  live?: string;
  code?: string;
};
export type SkillGroup = {
  title: string;
  note: string;
  core: string[];
  hands: string[];
};
export type Impact = { v: string; l: string; s: string };
export type Intro = { t: string; d: string };
export type Offer = { t: string; d: string; p: string };
export type Content = {
  jobs: Job[];
  projects: Project[];
  skills: SkillGroup[];
  impact: Impact[];
  offers: Offer[];
  intro: Intro[];
};
export const DATA: Content = {
  jobs: [
    {
      when: "Oct – Nov 2024",
      place: "Noida",
      role: "Full Stack Intern",
      org: "Bharat Cloud Web Services",
      pts: [
        "Built a quick-commerce web app on the MERN stack.",
        "WhatsApp API OTP verification, cart and order management.",
        "Payment processing and real-time product listing updates over REST.",
      ],
    },
    {
      when: "Dec 2024 – Mar 2025",
      place: "Noida",
      role: "Full Stack Intern",
      org: "MetaGeeks Technologies",
      pts: [
        "MERN modules for content-management and e-commerce platforms.",
        "REST APIs for a headless CMS; seller management and payment integration.",
        "API and schema discussions with senior developers, code reviews, manual testing.",
      ],
    },
    {
      when: "Apr 2025 – Present",
      place: "Noida",
      role: "Full Stack Developer",
      org: "Digital Night Owl",
      pts: [
        "Build and maintain production apps in React, Next.js, Node, Express and MongoDB.",
        "REST APIs and integrations with Twilio, LiveKit, Gemini and Sarvam AI.",
        "Real-time features with Socket.io and WebRTC; data modelling, debugging and deployment.",
      ],
    },
  ],
  projects: [
    // {
    //   name: "Zavigo",
    //   cat: "AI voice calling agent",
    //   m: "wave",
    //   sum: "A real-time voice agent that handles hotel-booking calls.",
    //   stack: [
    //     "Node.js",
    //     "Twilio",
    //     "LiveKit",
    //     "Sarvam AI",
    //     "Gemini API",
    //     "WebRTC",
    //     "AWS",
    //   ],
    //   out: "About 30% lower response latency after moving the call pipeline to LiveKit (reported).",
    //   what: "An AI voice agent that automates hotel-booking conversations over live phone calls.",
    //   ctx: "Booking calls were handled manually. The agent takes live calls through telephony, understands speech, reasons about the request and replies by voice.",
    //   built: [
    //     "Twilio-based telephony and live call flows.",
    //     "Sarvam AI for speech-to-text and text-to-speech.",
    //     "Gemini API for conversational reasoning and tool/function calling.",
    //     "Migrated the real-time call pipeline to LiveKit’s WebRTC infrastructure.",
    //   ],
    //   img: "/images/projects/zavigo.png",
    //   live: "https://zavigo.space",
    //   code: "",
    // },
    // {
    //   name: "Ashirwad CRM",
    //   cat: "Real estate / construction CRM and ERP",
    //   m: "grid",
    //   sum: "One interface serving eight organisational roles, with flat inventory tracking.",
    //   stack: ["React.js", "Node.js", "MongoDB", "AWS", "RBAC"],
    //   out: "60% less manual inventory-tracking overhead (reported).",
    //   what: "A single role-based CRM/ERP for a real estate and construction business.",
    //   ctx: "Admin, HR, finance, site engineers, vendors and others needed different views and permissions without separate codebases.",
    //   built: [
    //     "One panel serving 8 user roles via role-specific views and permissions.",
    //     "Conditional rendering instead of per-role codebases.",
    //     "Inventory tracking for flats across 10 projects or towers.",
    //   ],
    //   img: "/images/projects/ashirwad.png",
    //   live: "https://ccms1.netlify.app",
    //   code: "",
    // },
    // {
    //   name: "Zakkuu",
    //   cat: "AI product image enhancement",
    //   m: "split",
    //   sum: "Turns raw phone photos into studio-style product images inside a seller panel.",
    //   stack: [
    //     "React.js",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "Gemini API",
    //     "AWS",
    //   ],
    //   out: "90% less manual photo-editing time across 5 seller accounts (reported).",
    //   what: "An AI feature in an e-commerce seller panel that enhances product photos.",
    //   ctx: "Sellers spent a lot of time manually editing phone photos before listing products.",
    //   built: [
    //     "Gemini API integrated into the seller panel.",
    //     "Upload, enhancement and listing-update pipeline.",
    //     "Panel UI and backend, deployed for 5 seller accounts.",
    //   ],
    //   img: "/images/projects/zakkuu.png",
    //   live: "https://zakkuu.com",
    //   code: "",
    // },
    // {
    //   name: "Sports Livv",
    //   cat: "Real-time cricket scoring backend",
    //   m: "dots",
    //   sum: "Ball-by-ball score updates synced across every connected client.",
    //   stack: ["Node.js", "Express.js", "Socket.io", "Render"],
    //   out: "Sub-second score updates (reported).",
    //   what: "A backend that broadcasts live cricket match state to connected clients.",
    //   ctx: "Many clients must see the same score at the same moment.",
    //   built: [
    //     "Socket.io event architecture for match-state changes.",
    //     "Ball-by-ball update flow synchronised across clients.",
    //   ],
    // },
    // {
    //   name: "Meet Me All",
    //   cat: "Video conferencing app",
    //   m: "dots",
    //   sum: "Video meetings with screen sharing, chat and host-controlled access.",
    //   stack: [
    //     "React.js",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "WebRTC",
    //     "mediasoup",
    //     "Socket.io",
    //   ],
    //   out: "",
    //   what: "A browser-based video conferencing application.",
    //   ctx: "Real-time media and meeting state have to stay coordinated between participants.",
    //   built: [
    //     "Video conferencing and screen sharing.",
    //     "In-meeting chat.",
    //     "Host-controlled participant access.",
    //     "mediasoup/WebRTC for media, Socket.io for coordination.",
    //   ],
    //   img: "/images/projects/meetmeall.png",
    //   live: "https://meetmeall.com",
    //   code: "",
    // },
    // {
    //   name: "OneBanking",
    //   cat: "AI-banking marketing site and waitlist",
    //   m: "split",
    //   sum: "An animated marketing site and gamified early-access flow for a German startup.",
    //   stack: ["React.js", "Node.js", "Express.js", "MongoDB", "GSAP", "AWS"],
    //   out: "10,000+ waitlist signups (reported).",
    //   what: "The marketing website and waitlist for a German AI-banking startup.",
    //   ctx: "The startup needed to capture early-access interest.",
    //   built: [
    //     "GSAP-driven interactive animations.",
    //     "Gamified registration and lead capture.",
    //     "Frontend, backend and deployment.",
    //   ],
    //   img: "/images/projects/onebanking.png",
    //   live: "https://onebanking.app",
    //   code: "",
    // },
    {
      name: "Study Notion",
      cat: "Multi-role EdTech platform",
      m: "grid",
      sum: "Courses, paid enrolment and progress tracking for students and instructors.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Render"],
      out: "",
      what: "An EdTech platform with separate student and instructor experiences.",
      ctx: "Learners and instructors need different flows around the same courses.",
      built: [
        "Separate student and instructor authentication.",
        "Course and lecture management.",
        "Paid enrolment and learning progress tracking.",
        "Instructor analytics dashboard.",
      ],
      img: "/images/projects/studynotion.png",
      live: "https://study-notion-2492.onrender.com",
      code: "https://github.com/SagarSharma656/Study-Notion",
    },
  ],
  skills: [
    {
      title: "Frontend — what users see",
      note: "Interfaces, dashboards and forms.",
      core: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux Toolkit",
        "Context API",
      ],
      hands: ["MUI"],
    },
    {
      title: "Backend — the logic behind it",
      note: "APIs, login and live updates.",
      core: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Socket.io",
        "WebRTC",
        "Authentication",
      ],
      hands: ["NestJS", "Microservices", "API Gateway"],
    },
    {
      title: "Databases — where data lives",
      note: "Storing and querying application data.",
      core: ["MongoDB", "Redis", "Firebase"],
      hands: ["PostgreSQL", "SQL", "Elasticsearch", "Prisma", "TypeORM"],
    },
    {
      title: "AI & integrations — connecting services",
      note: "Voice, language models and payments.",
      core: [
        "Gemini API",
        "OpenAI API",
        "Sarvam AI (speech)",
        "LLM tool calling",
        "Twilio",
        "LiveKit",
        "Razorpay",
      ],
      hands: [],
    },
    {
      title: "Cloud & DevOps — getting it live",
      note: "Deploying and running applications.",
      core: [
        "AWS (EC2, S3, Route 53, IAM)",
        "Docker",
        "Jenkins",
        "Terraform",
        "Linux",
        "Nginx",
      ],
      hands: [],
    },
    {
      title: "Everyday tools & creative code",
      note: "Day-to-day tools, plus what this site is built with.",
      core: ["Git", "GitHub", "Postman", "Agile/Scrum", "GSAP"],
      hands: ["Three.js", "GLSL shaders", "ScrollTrigger"],
    },
  ],
  impact: [
    {
      v: "30%",
      l: "lower voice-response latency",
      s: "After moving to LiveKit",
    },
    { v: "60%", l: "less manual inventory tracking", s: "Ashirwad CRM" },
    {
      v: "90%",
      l: "less photo-editing time",
      s: "Across many seller accounts",
    },
    { v: "10,000+", l: "waitlist signups", s: "On marketing site" },
  ],
  offers: [
    {
      t: "Build complete products",
      d: "From database schema to React screens to deployment.",
      p: "Study Notion",
    },
    {
      t: "Add AI to real workflows",
      d: "Voice, language models and image tools inside working products.",
      p: "",
    },
    {
      t: "Ship real-time features",
      d: "Live calls, chat, video and score updates that stay in sync.",
      p: "",
    },
    {
      t: "Take apps live",
      d: "Deploy on AWS or Render, debug production issues, keep things running.",
      p: "All my projects",
    },
  ],
  intro: [
    {
      t: "AI voice calling agents",
      d: "Software that answers phone calls, understands what the caller says and replies by voice. Built for hotel bookings.",
    },
    {
      t: "Real-time applications",
      d: "Apps that update instantly for everyone at the same time, with no need to refresh the page.",
    },
    {
      t: "Video conferencing apps",
      d: "Online meetings with screen sharing, chat and host control over who can join.",
    },
    {
      t: "CRM and ERP business systems",
      d: "CRM/ERP software where admin, HR, finance and site teams each see only what they need.",
    },
  ],
};
