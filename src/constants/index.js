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
  nestjs,
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
  aleppoUniversity,
  acm,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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
    name: "material",
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
    name: "Nest Js",
    icon: nestjs,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Entry-level",
    company_name: "Simple native web projects",
    icon: aleppoUniversity,
    iconBg: "#333333",
    date: "Jan 2020 - Jan 2021",
  },
  // {
  //   title: "Training Workshop",
  //   company_name: "ICPC ACM",
  //   icon: acm,
  //   iconBg: "#333333",
  //   date: "Jan 2022 - Mar 2022",
  // },
  {
    title: "Front-end Developer",
    company_name: "RemoColla",
    icon: remocolla,
    iconBg: "#333333",
    date: "Jan 2021 - Mar 2024",
  },
  {
    title: "Senior Front-end Developer",
    company_name: "YSSR",
    icon: yssrLogo,
    iconBg: "#333333",
    date: "April 2023 - April 2024",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Gyoumu Cloud",
    description: `A huge Japanese platform providing tools for Business Management, ITSM, and more.`,
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
    image: gyoumu,
    repo: "",
    demo: "",
  },
  {
    id: "project-2",
    name: "Kaitai",
    description:
      "Vehicle management system, streamlining operations conforming to Japanese standards.",
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
    id: "project-3",
    name: "YSSR",
    description:
      "YSSR is a CRM platform provides services to manage all thing related to customers & labors.",
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
    image: yssr,
    repo: "https://github.com/Majdsayedtaha/yssr.git",
    demo: "https://8264-58682.el-alt.com",
  },
  {
    id: "project-4",
    name: "Rukn Alhilal",
    description: "Ruken Al Hilal is a UAE-based offering cleaning services.",
    tags: [
      {
        name: "ًWordPress",
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
    id: "project-5",
    name: "Pig Game",
    description:
      "A turn-based game where players roll a die to accumulate points.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
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
    id: "project-6",
    name: "Coders Arena",
    description: "Dive into a world of stunning visuals crafted with pure CSS!",
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
