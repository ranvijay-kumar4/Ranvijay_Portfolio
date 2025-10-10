import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitAlt, FaFigma, FaJava, FaNode, FaRobot } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks, SiTailwindcss, SiJavascript, SiCplusplus, SiMysql, SiPhp, SiCanva, SiGooglecloud, SiTypescript, SiNextdotjs, SiRedux, SiMui, SiExpress, SiMongodb, SiSocketdotio, SiVercel, SiNetlify, SiVite, SiPostgresql, SiOpenai, SiGooglegemini, SiPerplexity } from "react-icons/si";
import { DiVisualstudio, DiDatabase } from "react-icons/di";
import { TbBrandCpp, TbSparkles, TbRobot, TbBrain, TbSearch } from "react-icons/tb";
import { BiServer, BiLock, BiCheckCircle, BiCode, BiGitBranch, BiData, BiNetworkChart, BiBrain, BiTrophy } from "react-icons/bi";
import { MdOutlineComputer, MdOutlineStorage, MdAutoAwesome } from "react-icons/md";
import { HiSparkles, HiLightBulb } from "react-icons/hi";
import { RiRobot2Fill, RiSparklingFill } from "react-icons/ri";
import { PiCursorClick } from "react-icons/pi";

// Icon mapping for dynamic icon rendering
export const iconComponents = {
  // Social Media Icons
  leetcode: SiLeetcode,
  gfg: SiGeeksforgeeks,
  codechef: SiCodechef,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
  
  // Languages
  "C++": TbBrandCpp,
  "Java": FaJava,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "C": SiCplusplus,
  "SQL": SiMysql,
  "PostgreSQL": SiPostgresql,
  "PHP": SiPhp,
  
  // Frontend Technologies
  "HTML5": FaHtml5,
  "CSS3": FaCss3Alt,
  "Bootstrap": FaBootstrap,
  "Tailwind CSS": SiTailwindcss,
  "React.js": FaReact,
  "Next.js": SiNextdotjs,
  "Redux Toolkit": SiRedux,
  "Material UI": SiMui,
  
  // Backend Technologies
  "Node.js": FaNode,
  "Express.js": SiExpress,
  "JWT Authentication": BiLock,
  "Zod validation": BiCheckCircle,
  "MongoDB": SiMongodb,
  "REST API": BiServer,
  "Socket.io": SiSocketdotio,
  
  // Development Tools
  "Figma": FaFigma,
  "Canva": SiCanva,
  "VS Code": DiVisualstudio,
  "Hostinger": BiServer,
  "GitHub": FaGithub,
  "Vercel": SiVercel,
  "Netlify": SiNetlify,
  "Vite": SiVite,
  "Version Control": BiGitBranch,
  
  // Core Subjects
  "Data Structures (C++)": BiData,
  "Algorithms (C++)": BiCode,
  "OOPs": BiCode,
  "Operating System": MdOutlineComputer,
  "Computer Networks": BiNetworkChart,
  "DBMS": MdOutlineStorage,
  
  // AI Tools
  "Cursor AI": PiCursorClick,
  "ChatGPT": SiOpenai,
  "DeepSeek": RiSparklingFill,
  "GitHub Copilot": RiRobot2Fill,
  "V0 by Vercel": MdAutoAwesome,
  "Gamma AI": HiLightBulb,
  "Perplexity AI": SiPerplexity,
  "Gemini AI": SiGooglegemini,
};

// Get icon component by name
export const getIconComponent = (iconName) => {
  return iconComponents[iconName] || FaGithub; // Default fallback
};

