// src/data/projects.ts
export type ProjectType = "iOS" | "Mobile" | "Web";
export type ProjectFilter = "All" | ProjectType;
export type Project = {
  id: string;
  title: string;
  type: ProjectType;
  summary: string;
  stack: string[];
  tags?: string[];
  featured?: string;
  details?: string[];
  links: {
    github?: string;
    websites?: string[];
  };
};

export const allTags = [
  "Mobility",
  "Health",
  "Business",
  "Games",
  "Maps",
  "Education",
  "Cloud",
] as const;

export const projects: Project[] = [
  {
    id: "autopop",
    title: "AutoPop / SelectApp",
    type: "Mobile",
    summary:
      "Mobility and assistance ecosystem spanning iOS, Flutter, web, backend services and AWS.",
    stack: ["Swift", "SwiftUI", "Flutter", "Node.js", "AWS"],
    tags: ["Mobility", "Maps", "Cloud"],
    links: {},
    details: [
      "Critical authentication, mapping and geolocation flows across mobile and web.",
      "REST/WebSockets, MySQL/RDS, feature flags, canary releases, smoke tests and rollback workflows.",
    ],
  },
  {
    id: "imob",
    title: "IMOB Platform",
    type: "Web",
    summary: "Full-stack platform with authentication, user management and AWS infrastructure.",
    stack: ["AWS Cognito", "CloudFormation", "AWS CLI", "CI/CD"],
    tags: ["Business", "Cloud"],
    links: {},
    details: [
      "Authentication and user management with Amazon Cognito and infrastructure as code.",
      "Automated validation, smoke tests and backend/deployment troubleshooting.",
    ],
  },
  {
    id: "onemedia",
    title: "OneMedia",
    type: "Web",
    summary: "Modular digital platform with dashboards and integrations for OOH media operations.",
    stack: ["Next.js", "React", "Tailwind", "Firebase"],
    tags: ["Business"],
    links: {},
    details: [
      "Full-stack product development and operational dashboards.",
      "Google Maps, Instagram, WhatsApp Business and payment integrations.",
    ],
  },
  {
    id: "genika",
    title: "Genika",
    type: "iOS",
    summary:
      "iOS/watchOS app using SwiftUI and HealthKit to visualize routine and health indicators.",
    stack: ["SwiftUI", "HealthKit", "Core Data", "CloudKit"],
    tags: ["Health"],
    links: { github: "https://github.com/DouglasiOSDeveloper/genika" },
    details: [
      "HealthKit data ingestion and local persistence.",
      "CloudKit synchronization and an Apple Watch companion experience.",
    ],
  },
  {
    id: "dizcarta",
    title: "Dizcarta",
    type: "iOS",
    summary: "Cooperative card game built with SwiftUI/Core Data from education-focused research.",
    stack: ["SwiftUI", "Core Data", "Xcode Cloud", "DocC"],
    tags: ["Games", "Education"],
    links: { github: "https://github.com/DouglasiOSDeveloper/dizcarta" },
    details: [
      "Offline-first persistence with Core Data.",
      "Xcode Cloud pipeline and DocC documentation.",
    ],
  },
  {
    id: "wwdc22-ssc",
    title: "Swift Student Challenge 2022",
    type: "iOS",
    summary:
      "Interactive Swift Playgrounds experience developed for the 2022 Swift Student Challenge.",
    stack: ["Swift", "Playgrounds", "UIKit"],
    tags: ["Education"],
    featured: "Swift Student Challenge • 2022",
    links: {
      github: "https://github.com/DouglasiOSDeveloper/wwdc22-ssc",
      websites: ["https://www.wwdcscholars.com/s/1FECEDDF-94B5-47FB-8D0D-6585A95470A0/2022"],
    },
    details: [
      "Chapter-based learning content with interactive challenges.",
      "Developed with Xcode Playgrounds within the Apple Developer Academy.",
    ],
  },
  {
    id: "beauty-platform",
    title: "White-Label Beauty Platform",
    type: "Web",
    summary:
      "Web platform for salons and barbershops with catalog, scheduling, e-commerce and admin dashboard.",
    stack: ["Next.js", "Firebase", "Tailwind", "Mercado Pago"],
    tags: ["Business"],
    links: { github: "https://github.com/AgenciaThifi/wl_salao_barbearia" },
    details: [
      "Responsive booking and service-management flows.",
      "Payment and communication integrations with Mercado Pago and WhatsApp.",
    ],
  },
  {
    id: "falaubs",
    title: "FalaUBS",
    type: "Web",
    summary:
      "Django app for public health units with vaccine search, geolocation and online scheduling.",
    stack: ["Django", "Python", "HTML", "JavaScript"],
    tags: ["Health", "Maps"],
    links: { github: "https://github.com/DouglasiOSDeveloper/falaubs" },
    details: [
      "Category filters and mobile-optimized vaccine search.",
      "Nearby-unit geolocation and digital appointment scheduling.",
    ],
  },
  {
    id: "iss-tracker",
    title: "ISS Tracker",
    type: "iOS",
    summary: "Real-time ISS tracking on a map using Apple location frameworks.",
    stack: ["Swift", "CoreLocation", "MapKit"],
    tags: ["Maps", "Education"],
    links: { github: "https://github.com/DouglasiOSDeveloper/iss-tracker" },
    details: [
      "Real-time map positioning with CoreLocation and MapKit.",
      "Protocol-oriented design and delegates.",
    ],
  },
  {
    id: "hybris",
    title: "Hybris",
    type: "iOS",
    summary: "Casual horror-themed iPhone game with Game Center integration.",
    stack: ["Swift", "UIKit", "GameKit", "Game Center"],
    tags: ["Games"],
    links: { github: "https://github.com/DouglasiOSDeveloper/hybris" },
    details: ["Built with UIKit and GameKit.", "Competitive scoring and Game Center integration."],
  },
  {
    id: "stretch-quest",
    title: "Stretch Quest",
    type: "iOS",
    summary: "Posture and flexibility app with RPG-inspired progression and animations.",
    stack: ["SwiftUI", "UIKit"],
    tags: ["Health"],
    links: { github: "https://github.com/DouglasiOSDeveloper/stretch-quest" },
    details: [
      "Hybrid UIKit/SwiftUI interface.",
      "Gamified stretching routines with progression mechanics.",
    ],
  },
];
