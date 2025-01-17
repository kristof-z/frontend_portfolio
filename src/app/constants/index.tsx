import { ProjectCardProps } from "../components/types";

export const skills: string[] = [
  "React",
  "Node.js",
  "REST API",
  "NextJS",
  "Express",
  "MongoDB"
];

const NELICAT_LINK = 'https://www.nelicat.com';
const WRNFT_LINK = 'https://frontend-wrnft.vercel.app/';
const TAB_SESSION_LINK_GITHUB = 'https://github.com/kristof-z/tab-session';
const TAILWIND_REACT_MODAL_LINK_GITHUB = 'https://github.com/kristof-z/react-modal-tailwind';
const TAILWIND_REACT_MODAL_LINK = 'https://www.npmjs.com/package/react-modal-tailwind';

export const GITHUB_LINK = 'https://github.com/kristof-z'
export const EMAIL = 'contact@kristofzorko.com'

export const projects: ProjectCardProps[] = [
  {
    title: 'Tailwind React Modal',
    description: 'A flexible and customizable modal component library utilizing Redux.',
    github: TAILWIND_REACT_MODAL_LINK_GITHUB,
    link: TAILWIND_REACT_MODAL_LINK,
    index: 0, 
  },
  {
    title: 'Nelicat',
    description: 'SEO Optimized Next.js App',
    link: NELICAT_LINK,
    index: 1, 
  },
  {
    title: 'wrNFT',
    description: 'React App utilizing Framer Motion',
    link: WRNFT_LINK,
    index: 2, 
  },

  {
    title: 'Tab Session',
    description: 'Chrome extension that tracks browser session time.',
    github: TAB_SESSION_LINK_GITHUB,
    index: 3, 
  }
];


export const likes: string[] = [
  "intuitive UI",
  "to explore",
  "seamless UX",
  "to build",
  "modularity",
];

