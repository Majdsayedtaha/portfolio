import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  angularjs,
  ngrx,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  bootstrap,
  csharp,
  dotnet,
  material,
  graphql,
  pigGame,
  codersArena,
  yssr,
  ruknAlhilal,
  gyoumu,
  kaitai,
  space,
  remocolla,
  yssrLogo,
  smartWorks,
  aleppoUniversity,
  acm,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

const dar_aman = new URL("../assets/projects/dar_aman.png", import.meta.url)
  .href;
const cra = new URL("../assets/projects/cra.png", import.meta.url).href;
const aha_mobile = new URL("../assets/projects/aha_mobile.png", import.meta.url)
  .href;

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "content",
    title: "Content",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angularjs,
  },
  {
    name: "Redux Toolkit",
    icon: ngrx,
  },
  {
    name: "Material UI",
    icon: material,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET",
    icon: dotnet,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Smart Works",
    icon: smartWorks,
    iconBg: "#333333",
    date: "Oct 2024 - Present",
    description: [
      "Successfully delivered 5+ web applications for government and private clients, improving user interaction by 30%",
      "Implemented AI solutions: Launched chatbots and process automation, reducing manual processes by 40% and enhancing response times by 25%",
      "Deployed enterprise solutions: Successfully installed and integrated Visitor and Inventory Management Systems for 10+ clients, boosting operational efficiency by 20%",
      "IT strategy consulting: Provided IT consultancy to 4 major clients, optimizing their system integrations and reducing operational costs by 10%",
      "Security systems setup: Implemented security systems for 6+ companies, improving access control and reducing security breaches by 50%",
      "IT support management: Managed support contracts for 5+ clients, ensuring 95% SLA compliance and cutting IT costs by 25%",
    ],
  },
  {
    title: "Senior Front-end Developer",
    company_name: "YSSR",
    icon: yssrLogo,
    iconBg: "#333333",
    date: "Mar 2024 - Oct 2024",
    description: [
      "Successfully set up and deployed a production-ready version of the YSSR ERP/CRM system, resulting in high customer satisfaction with 80% approval rate",
      "Facilitated efficient management of labor data, customer data, contracts, and related services, improving workflow by over 50%",
      "Led initiatives that significantly enhanced productivity, completing tasks in three-quarters of the time previously required and reducing errors by a third",
      "Spearheaded integration of YSSR with the financial system, contributing to 10% improvement in employee workflows",
      "Implemented YSSR's task management module, improving communication efficiency and reducing coordination time by 25%",
    ],
  },
  {
    title: "Junior Backend Developer - Mid Frontend Developer",
    company_name: "RemoColla Ltd",
    icon: remocolla,
    iconBg: "#333333",
    date: "Jan 2022 - Mar 2024",
    description: [
      "Collaborated effectively within cross-functional Agile teams, achieving full integration of front-end development with the project lifecycle",
      "Analyzed requirements for 10+ Gyoumu ERP modules including Users, Employees, Projects, Knowledge Base, Invoices, Customers, Sales, and Kaitai",
      "Tested 300+ features, debugged 500+ errors, and troubleshooted 100+ issues",
      "Performed routine maintenance and optimizations, enhancing system performance by 20%",
      "Translated UI/UX designs into functional and responsive interfaces, ensuring seamless user experiences across all devices",
      "Integrated 50+ interfaces with APIs and databases to ensure seamless functionality",
    ],
  },
  {
    title: "Junior Front-end Developer",
    company_name: "RemoColla Ltd",
    icon: remocolla,
    iconBg: "#333333",
    date: "Jan 2021 - Jan 2022",
    description: [
      "Led front-end development of an e-commerce platform called Electro-Market, increasing user retention by 30%",
      "Built a dashboard for Aphamea Pharmaceutical Company to manage products, representatives, and customer orders, saving 50% of routine operations",
      "Designed and implemented a custom CSS framework that reduced development time for new features by 50%",
      "Optimized SEO by implementing best practices in HTML structure and metadata, leading to 25% increase in organic traffic",
      "Collaborated with marketing teams to develop interactive landing pages, resulting in 15% increase in conversion rates",
    ],
  },
];

const projects = [
  {
    id: "project-1",
    name: "AHA - Abu Dhabi Heritage Authority",
    description:
      "Comprehensive web and mobile platform for administering AHA operations, personnel, companies, events, financial processes, exhibitions, and regulatory compliance across all sectors.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
    ],
    image: aha_mobile,
    repo: "",
    demo: "",
  },
  {
    id: "project-2",
    name: "CRA - Camel Race Association",
    description:
      "UAE Camel Racing Federation app providing news, event access, race registrations, real-time results, and premium media coverage for camel racing enthusiasts.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: cra,
    repo: "",
    demo: "https://play.google.com/store/apps/details?id=ae.CRA.Mobile.App&hl=en_US",
  },
  {
    id: "project-3",
    name: "DAR AMAN",
    description:
      "A national digital platform dedicated to regulating and streamlining the arms sector through innovative e-services including registration, marketplace, exchanges, shooting championships, and exhibition licensing.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
    ],
    image: dar_aman,
    repo: "",
    demo: "",
  },
  {
    id: "project-4",
    name: "Gyoumu Cloud",
    description: `A massive Japanese Business Management & ITSM platform processing 1000+ daily transactions with advanced automation and AI integration.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: gyoumu,
    repo: "",
    demo: "",
  },
  {
    id: "project-5",
    name: "Kaitai",
    description:
      "Advanced Vehicle Management System with real-time tracking, maintenance scheduling, and compliance management for Japanese business standards.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: kaitai,
    repo: "",
    demo: "",
  },
  {
    id: "project-6",
    name: "YSSR",
    description:
      "Comprehensive CRM Platform with customer management, labor operations, invoicing, and advanced reporting capabilities.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
    ],
    image: yssr,
    repo: "https://github.com/Majdsayedtaha/yssr.git",
    demo: "https://8264-58682.el-alt.com",
  },
  {
    id: "project-7",
    name: "Rukn Alhilal",
    description:
      "Professional cleaning services platform with service booking, team management, and customer communication features for UAE market.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: ruknAlhilal,
    repo: "",
    demo: "https://rukenalhilal.com",
  },
  {
    id: "project-8",
    name: "Pig Game",
    description:
      "Interactive turn-based game where players roll dice to accumulate points with modern UI/UX and smooth animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pigGame,
    repo: "https://github.com/Majdsayedtaha/pig_game",
    demo: "https://majdsayedtaha.github.io/pig_game/",
  },
  {
    id: "project-9",
    name: "Coders Arena",
    description:
      "Showcase of advanced CSS styling with stunning visuals, animations, and professional web design techniques.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: codersArena,
    repo: "https://github.com/Majdsayedtaha/Coders-Arena",
    demo: "https://majdsayedtaha.github.io/Coders-Arena/",
  },
];

export { services, technologies, experiences, projects };
