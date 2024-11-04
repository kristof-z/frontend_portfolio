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

const NELICAT_LINK = 'https://www.nelicat.com';
const WRNFT_LINK = 'https://frontend-wrnft.vercel.app/';
const TAB_SESSION_LINK_GITHUB = 'https://github.com/kristof-z/tab-session'
export const GITHUB_LINK = 'https://github.com/kristof-z'
export const EMAIL = 'contact@kristofzorko.com'

export const projects: ProjectCardProps[] = [
  {
    title: 'Nelicat',
    description: 'A lovely landing page for a cat hotel made with Next.js.',
    link: NELICAT_LINK,
    index: 0, 
  },
  {
    title: 'wrNFT',
    description: 'wrNFT is a demo application that showcases the concept of NFT wrapping. This project illustrates how users can wrap their existing NFTs into a new format, adding an additional layer of functionality, flexibility, or metadata to their assets.',
    link: WRNFT_LINK,
    index: 1, 
  },
  {
    title: 'Tab Session',
    description: 'Simple chrome extension that tracks browser session time and individual tab session time, helping users manage their browsing habits and productivity.',
    github: TAB_SESSION_LINK_GITHUB,
    index: 2, 
  }
];


export const likes: string[] = [
  "intuitive UI",
  "to explore",
  "seamless UX",
  "to build",
  "modularity",
];

