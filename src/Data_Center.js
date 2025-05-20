import {
  FaUser,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCertificate,
  FaDatabase,
  FaCode,
  FaShieldAlt,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaGoogle,
  FaChrome,
} from "react-icons/fa";

import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSignal,
  SiSass,
  SiPug,
  SiReact,
  SiBootstrap,
  SiGithub,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiFramer,
  SiAxios,
  SiApifox,
  SiMysql,
  SiGit,
  SiVite,
  SiNpm,
  SiFigma,
  SiCanva,
} from "react-icons/si";

import zRevoLarge from "./assets/images/PortfolioTemplateV.webp";
import zRevoPh from "./assets/images/ZRevo_ph.webp";
import BakeoraLarge from "./assets/images/Bakeora_Large.webp";
import BakeoraPh from "./assets/images/Bakeora_Ph.webp";
import portfolioLarge from "./assets/images/PortfolioV1.webp";
import portfolioPh from "./assets/images/PortfolioV1-ph.webp";
import SpecialLarge from "./assets/images/SpecialDesign.webp";
import SpecialPh from "./assets/images/specialDesign_ph.webp";
import ZeroLarge from "./assets/images/animation.webp";
import ZeroPh from "./assets/images/animation_ph.webp";
import KasperLarge from "./assets/images/kasper.webp";
import KasperPh from "./assets/images/kasper_ph.webp";
import DevFolioLarge from "./assets/images/DevFolio_Large.webp";
import DevFolioPh from "./assets/images/DevFolio_Ph.webp";
import LeonLarge from "./assets/images/leonagency.webp";
import LeonPh from "./assets/images/leonagency_ph.webp";
import GPTLarge from "./assets/images/GPT_Ph.webp";
import GPTPh from "./assets/images/GPT_Large.webp";
import QuizLarge from "./assets/images/Country_Quiz_Large.webp";
import QuizPh from "./assets/images/Country_Quiz_Ph.webp";
import PropertyLarge from "./assets/images/Property_Large.webp";
import PropertyPh from "./assets/images/Property_Small.webp";
import RecipesLarge from "./assets/images/Recipes_Large.webp";
import RecipesPh from "./assets/images/Recipes_Small.jpg";

export const aboutInfo = [
  {
    id: "a1",
    name: "Name",
    value: "Mohamed ElSayed",
    icon: <FaUser />,
  },
  {
    id: "a2",
    name: "Birthday",
    value: "July 3, 2000",
    icon: <FaBirthdayCake />,
  },
  {
    id: "a3",
    name: "Phone",
    value: "+20 103 386 6796",
    icon: <FaPhoneAlt />,
  },

  {
    id: "a4",
    name: "Email",
    value: "moelsayed524@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    id: "a5",
    name: "Military Service",
    value: "Completed 3/2025",
    icon: <FaCertificate />,
  },
  {
    id: "a6",
    name: "Address",
    value: "10th of Ramadan, Sharkia, Egypt",
    icon: <FaMapMarkerAlt />,
  },
];

export const academic = [
  {
    id: "ac1",
    title: "Database Systems",
    titleIcon: <FaDatabase />,
    values: ["MySQL / Relational DB", "NoSQL Fundamentals"],
  },
  {
    id: "ac2",
    title: "Software Engineering",
    titleIcon: <FaCode />,
    values: ["Java OOP / Algorithms", "Data Structures"],
  },
  {
    id: "ac3",
    title: "Systems & Security",
    titleIcon: <FaShieldAlt />,
    values: ["Software Testing", "System Security"],
  },
];

export const links = [
  {
    id: "l1",
    icon: <FaGithub className="text-2xl" />,
    link: "https://github.com/MohamedEzz524",
    label: "Github",
  },
  {
    id: "l2",
    icon: <FaGoogle className="text-2xl" />,
    link: "mailto:moelsayed524@gmail.com?subject=Contact",
    label: "Google",
  },
  {
    id: "l3",
    icon: <FaLinkedin className="text-2xl" />,
    link: "https://www.linkedin.com/in/mohamed-elsayed-327b77244/",
    label: "Linkedin",
  },
  {
    id: "l4",
    icon: <FaTelegram className="text-2xl" />,
    link: "https://t.me/+201033866796",
    label: "Telegram",
  },
];

// skills
export const frontend = [
  { id: "fe1", icon: <SiHtml5 />, name: "HTML5" },
  { id: "fe2", icon: <SiCss3 />, name: "CSS3" },
  { id: "fe3", icon: <SiJavascript />, name: "JS (ES6+)" },
  { id: "fe4", icon: <SiTypescript />, name: "TypeScript" },
  { id: "fe5", icon: <SiReact />, name: "React" },
  { id: "fe6", icon: <SiReact />, name: "Router" },
  { id: "fe7", icon: <SiRedux />, name: "Redux" },
  { id: "fe8", icon: <SiFramer />, name: "Motion" },
  { id: "fe9", icon: <SiSignal />, name: "Signals" },
  { id: "fe10", icon: <SiApifox />, name: "REST APIs" },
  { id: "fe11", icon: <SiAxios />, name: "Axios" },
  { id: "fe12", icon: <SiTailwindcss />, name: "Tailwind" },
  { id: "fe13", icon: <SiBootstrap />, name: "Bootstrap" },
  { id: "fe14", icon: <SiSass />, name: "Sass" },
  { id: "fe15", icon: <SiPug />, name: "Pug" },
];

export const backend = [
  { id: "be1", icon: <SiMysql />, name: "MySQL" },
  {
    id: "be2",
    icon: <FaCode />,
    name: "DS",
  },
  {
    id: "be3",
    icon: <FaCode />,
    name: "Algorithms",
  },
  {
    id: "be4",
    icon: <FaCode />,
    name: "OOP",
  },
];

export const tools = [
  { id: "t1", icon: <SiGit />, name: "Git" },
  { id: "t2", icon: <SiGithub />, name: "GitHub" },
  { id: "t3", icon: <SiVite />, name: "Vite" },
  { id: "t4", icon: <SiNpm />, name: "npm" },
  { id: "t5", icon: <SiFigma />, name: "Figma" },
  { id: "t6", icon: <SiCanva />, name: "Canva" },
  { id: "t7", icon: <FaChrome />, name: "DevTools" },
];

// Projects
export const projects = [
  {
    id: "p1",
    large: zRevoLarge,
    small: zRevoPh,
    title: "Portfolio Reusable Template",
    desc: "A production-ready portfolio template built with React and Tailwind. Emphasizes scalability, reusable components, and smooth user experience with Intersection Observer integration.",
    tools: [
      "React",
      "Tailwind CSS",
      "Reusable Components",
      "Intersection Observer",
    ],
    link: "https://mohamedezz524.github.io/ZRevo-temp/",
    github: "https://github.com/MohamedEzz524/ZRevo-Code",
  },
  {
    id: "p2",
    large: BakeoraLarge,
    small: BakeoraPh,
    title: "Bakeora Baking Shop",
    desc: "A modern bakery website using React Router v6 with nested routing, search/hash navigation, and a dynamic blog. Built for performance, reusability, and seamless UX.",
    tools: [
      "React",
      "React Router v6",
      "Tailwind CSS",
      "Reusable Components",
      "Blog Integration",
      "Search Navigation",
    ],
    link: "https://mohamedezz524.github.io/Bakeora/",
    github: "https://github.com/MohamedEzz524/Bakeora-code",
  },
  {
    id: "p3",
    large: portfolioLarge,
    small: portfolioPh,
    title: "Portfolio V1",
    desc: "My first personal portfolio crafted with custom CSS and React. Features animations, section observers, and fully responsive layout to highlight my work.",
    tools: [
      "React",
      "Custom CSS",
      "Animations",
      "Responsive Layout",
      "Intersection Observer",
    ],
    link: "https://mohamedezz524.github.io/My-portfolio-v1/",
    github: "https://github.com/MohamedEzz524/My-portofolio-v1-code",
  },
  {
    id: "p4",
    large: SpecialLarge,
    small: SpecialPh,
    title: "Special Design",
    desc: "Interactive design project to apply JavaScript motion effects, theme toggling, and observer-based UX improvements.",
    tools: ["HTML5", "CSS3", "JavaScript", "Observer API", "Themes"],
    link: "https://mohamedezz524.github.io/Fourth-project/",
    github: "https://github.com/MohamedEzz524/Fourth-project",
  },
  {
    id: "p5",
    large: ZeroLarge,
    small: ZeroPh,
    title: "ELZero Training",
    desc: "Practice project focused on core JavaScript skills, DOM scripting, and interaction logic for dynamic content.",
    tools: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    link: "https://mohamedezz524.github.io/Third-project/",
    github: "https://github.com/MohamedEzz524/Third-project",
  },
  {
    id: "p6",
    large: GPTLarge,
    small: GPTPh,
    title: "GPT-3",
    desc: "Landing page concept inspired by GPT-3, designed to practice semantic HTML and clean responsive layout.",
    tools: ["HTML5", "CSS3", "Responsive Layout"],
    link: "https://mohamedezz524.github.io/GPT-3/",
    github: "https://github.com/MohamedEzz524/GPT-3",
  },
  {
    id: "p7",
    large: DevFolioLarge,
    small: DevFolioPh,
    title: "DevFolio",
    desc: "Bootstrap-based portfolio site to experiment with component structure, fast prototyping, and mobile-first design.",
    tools: ["HTML5", "Bootstrap", "Responsive Design"],
    link: "https://mohamedezz524.github.io/Fifth-project/",
    github: "https://github.com/MohamedEzz524/Fifth-project",
  },
  {
    id: "p8",
    large: KasperLarge,
    small: KasperPh,
    title: "Kasper",
    desc: "UI and layout training project with advanced CSS techniques, focusing on visual hierarchy and design clarity.",
    tools: ["HTML5", "CSS3", "Responsive Layout"],
    link: "https://mohamedezz524.github.io/Second-project/",
    github: "https://github.com/MohamedEzz524/Second-project",
  },
  {
    id: "p9",
    large: LeonLarge,
    small: LeonPh,
    title: "Leonagency",
    desc: "My first website project, built with semantic HTML and basic CSS. A simple static site to practice layout and design principles.",
    tools: ["HTML5", "CSS3", "Responsive Design"],
    link: "https://mohamedezz524.github.io/First-project/",
    github: "https://github.com/MohamedEzz524/First-project",
  },
];

export const recentWork = [
  {
    id: "rec1",
    title: "Recipes App",
    large: RecipesLarge,
    small: RecipesPh,
    desc: "A recipe browser built with dynamic category filters, keyword search, and sorting options by name or freshness. Features detailed views with YouTube integration, copy-to-clipboard functionality, and a favorites system stored locally.",
    tools: [
      "React",
      "REST API",
      "Dynamic Filters",
      "Search & Sort",
      "Local Storage",
      "Responsive UI",
    ],
    link: "https://mohamedezz524.github.io/Chefs_academy/",
    github: "https://github.com/MohamedEzz524/Chefs_academy",
  },
  {
    id: "rec2",
    title: "Country Quiz",
    large: QuizLarge,
    small: QuizPh,
    desc: "An interactive quiz app using real-time country data. Users navigate through questions, submit answers only after completion, and receive instant feedback with score and corrections.",
    tools: [
      "React",
      "API Integration",
      "Quiz Logic",
      "Answer Reveal",
      "User Flow Control",
      "Local Storage",
    ],
    link: "https://mohamedezz524.github.io/Country_quiz/",
    github: "https://github.com/MohamedEzz524/Country_quiz",
  },
  {
    id: "rec3",
    title: "Property Listing",
    large: PropertyLarge,
    small: PropertyPh,
    desc: "A responsive real estate listing platform featuring property filtering by location, superhost status, and property size. Users can explore, preview, and save favorite listings using persistent local storage.",
    tools: [
      "React",
      "REST API",
      "Multi-Criteria Filtering",
      "Favorites System",
      "Local Storage",
      "Responsive Layout",
    ],
    link: "https://mohamedezz524.github.io/Property_listing/",
    github: "https://github.com/MohamedEzz524/Property_listing",
  },
];
