export const METADATA = {
  author: "Shubh Porwal",
  title: "Portfolio | Shubh Porwal",
  description:
    "Shubh Porwal is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubhporwal24",
  keywords: [
    "Shubh Porwal",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Passionate about applied AI 🤖",
  "Incoming intern at AWS and Tesla 🚀",
  "Exploring tech opportunities ahead 💼",
];



export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: shubhporwal73@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/shubhporwal/",
  },
  {
    name: "github",
    url: "https://github.com/shubh73",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/shubhii73/",
  },
  {
    name: "twitter",
    url: "https://x.com/shubhporwal24",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "C++",
    "python",
    "Go",
    "nodejs",
    "docker",
    "sql",
    "git",
    "figma",
    "vscode",
  
    
  ],
  librariesAndFrameworks: [
    "react",
    "django",
    "nextjs",
    "pytorch",
    "scikitlearn",
    "bootstrap",
    "materialui",
  ],
  databases: ["mysql", "postgresql"],
  other: ["git", "jira", "confluence", "aws", "azure"],
};

export const PROJECTS = [
  {
    name: "Tutorium",
    image: "/projects/tutorium.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Tutor directory app using React + Django + AWS ☁️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://tutrio.org",
    tech: ["react", "django", "aws", "materialui","postgresql"],
  },
  {
    name: "Energy Theft Detection",
    image: "/projects/nsf.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Federated learning defense system for energy theft detection ⚡",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://drive.google.com/file/d/1KzCu_tcpMEPy-Qkd4xRzu6nL1w5MJLY5/view?usp=sharing",
    tech: ["python", "pytorch", "numpy", "matplotlib", "pandas"],
  },
  {
    name: "Amazon Web Service",
    image: "/projects/aws-logo.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Summer 2025 (AWS SageMaker) — Coming Soon",
    gradient: ["#000066", "#6699FF"],
    // url: "https://shubh73-inshorts.netlify.app/",
    tech: ["python", "git", "aws"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "Fall 2025 (Service Engineering) — Coming Soon",
    gradient: ["#142D46", "#2E4964"],
    // url: "https://github.com/shubh73/tesla",
    tech: ["html","jira", "confluence", "git"],
  },
];


export const WORK_CONTENTS = {
  // DUKAAN: [
  //   {
  //     title: "National Science Foundation",
  //     description:
  //       "Dukaan is a platform that enables businesses to launch their online stores at ease.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Revolutionizing commerce, one click at a time
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Transformation",
  //     description:
  //       "Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Senior Frontend Engineer
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Evolution",
  //     description:
  //       "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Frontend Engineer
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Optimization",
  //     description:
  //       "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Frontend Engineer Intern
  //       </div>
  //     ),
  //   },
  // ],
  DUKAAN: [
    {
      title: "National Science Foundation",
      description:
        "NSF REU program focused on secure federated learning and energy theft detection using smart meter datasets.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Advancing AI for secure energy systems ⚡
        </div>
      ),
    },
    {
      title: "Defense Strategy",
      description:
        "Designed and evaluated cosine similarity defenses to reduce the impact of poisoning attacks in federated multi-label classifiers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          ML Security Intern
        </div>
      ),
    },
    {
      title: "Research Impact",
      description:
        "Reduced attack success rate by 47% using privacy-preserving model comparison. Presented findings at a university-level research conference.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Undergraduate Researcher
        </div>
      ),
    },
    {
      title: "Collaboration",
      description:
        "Worked with PhDs and grad students to apply deep learning (TCN) to real-world smart grid data in a secure, decentralized setup.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          REU Participant
        </div>
      ),
    },
  ],
  
  // AVIATE: [
  //   {
  //     title: "Amazon Web Services",
  //     description:
  //       "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Finding the right job isn&apos;t fate, it&apos;s navigation
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Innovation",
  //     description:
  //       "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Frontend Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
  AVIATE: [
    {
      title: "Amazon Web Services",
      description:
        "Incoming Technical Writing Intern on the SageMaker team, focused on improving developer-facing documentation for AI and ML tools.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Empowering builders through clear documentation ⚙️
        </div>
      ),
    },
    {
      title: "Inference Focus",
      description:
        "Expected to contribute to documentation for SageMaker Inference endpoints, helping developers deploy and scale ML models efficiently.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Technical Writing Intern
        </div>
      ),
    },
  ],
  
  // SPACENOS: [
  //   {
  //     title: "Spacenos",
  //     description:
  //       "A dynamic startup dedicated to creating innovative products that make the world a better place.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         We build apps that solve problems for the next billion people
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Trailblazing",
  //     description:
  //       "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Web Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
  SPACENOS: [
    {
      title: "Tesla",
      description:
        "Incoming Technical Editor Intern on the Service Engineering team, supporting diagnostic procedures and service documentation.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Innovating clarity for complex systems ⚡
        </div>
      ),
    },
    {
      title: "Service Impact",
      description:
        "Will contribute to internal tooling and write procedures used by technicians, improving communication between engineering and service teams.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Technical Editor Intern
        </div>
      ),
    },
  ],
  
};

export const GTAG = "G-5HCTL2TJ5W";
