import { ProjectCardProps } from "../components/types";

export const skills: string[] = [
  "ReactJS",
  "Node.js",
  "REST API",
  "NextJS",
  "Express",
  "MongoDB",
  "Mono-repo",
  "Storybook"
];


export const projects: ProjectCardProps[] = [
  {
    title: 'Nelicat',
    description: 'A lovely landing page for a cat hotel made with Next.js.',
    github: '/images/logo-single-1.png',
    link: 'https://www.nelicat.com',
    index: 0, 
  },
  {
    title: 'NFT Vault',
    description: 'An online store with full payment integration and product management.',
    github: 'https://github.com/kristof-z',
    index: 1, 
  },
  {
    title: 'Session meter',
    description: 'An online store with full payment integration and product management.',
    github: 'https://github.com/kristof-z',
    index: 2, 
  },
  {
    title: 'DeSaved',
    description: 'An online store with full payment integration and product management.',
    github: 'https://github.com/kristof-z',
    index: 3,
  },
];


export const likes: string[] = [
  "intuitive UI",
  "to explore",
  "seamless UX",
  "to build",
  "modularity",
];
