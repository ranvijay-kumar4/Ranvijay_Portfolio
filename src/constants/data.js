// =====================================================
// PROPRIETARY AND CONFIDENTIAL
// Copyright (c) 2025 Ranvijay Kumar
// All Rights Reserved
// 
// Project Data Configuration
// Owner: ranvijay-kumar4
// Email: ranvijaykumar4405@gmail.com
// 
// NOTICE: This file contains proprietary information.
// Unauthorized copying or use is strictly prohibited.
// =====================================================
export const projects = [
  {
    id: 1,
    title: "CodeSync – Real-Time Collaborative Code Editor",
    description: "Engineered a real-time web-based code editor enabling multiple users to collaborate, write, and execute code simultaneously within unique coding rooms. Supports interactive programming sessions for learning, interviews, and remote teamwork with live synchronization, JWT authentication, and multi-language code execution via Piston API.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "CodeMirror", "JWT", "Zod", "Piston API", "Tailwind CSS"],
    link: "https://real-time-code-editor-2-1h4l.onrender.com/",
    image: "codeSync.png",
    featured: true,
  },
  {
    id: 2,
    title: "Telecommunication Marketing Agency",
    description: "Noida-based telecommunication firm dealing in Bulk SMS, Voice Services, and Email Services.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    link: "https://www.savshka.com/",
    image: "savshka.png",
  },
  {
    id: 3,
    title: "Comprehensive Digital Agency",
    description: "A complete digital marketing agency offering web solutions, branding, and online promotions.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma"],
    link: "https://adcliq360.com/",
    image: "adcliq360.png",
  },
  {
    id: 4,
    title: "Home Interior Company",
    description: "A modern and stylish home interior design website showcasing projects and services.",
    technologies: ["React.js", "Tailwind CSS", "Canva", "JavaScript"],
    link: "https://greenandyoung.in/",
    image: "greenandyoung.png",
  },
  {
    id: 5,
    title: "GitHub Explorer",
    description: "An interactive web app to explore GitHub user profiles and repositories, built with React and Tailwind CSS.",
    technologies: ["React.js", "Tailwind CSS", "Axios", "GitHub API"],
    link: "https://github.com/ranvijay-kumar4/Explorer",
    image: "githubexplorer.png",
  },
];

// Skills Data
export const skills = [
  {
    id: 1,
    category: "Languages",
    skills: [
      { name: "C++", color: "text-blue-500", hoverColor: "group-hover:text-blue-300" },
      { name: "Java", color: "text-red-500", hoverColor: "group-hover:text-red-300" },
      { name: "JavaScript", color: "text-yellow-400", hoverColor: "group-hover:text-yellow-200" },
      { name: "TypeScript", color: "text-blue-600", hoverColor: "group-hover:text-blue-400" },
      { name: "C", color: "text-blue-700", hoverColor: "group-hover:text-blue-400" },
      { name: "SQL", color: "text-blue-500", hoverColor: "group-hover:text-blue-300" },
      { name: "PostgreSQL", color: "text-blue-400", hoverColor: "group-hover:text-blue-200" },
      { name: "PHP", color: "text-purple-500", hoverColor: "group-hover:text-purple-300" },
    ],
  },
  {
    id: 2,
    category: "Frontend Technologies",
    skills: [
      { name: "HTML5", color: "text-orange-500", hoverColor: "group-hover:text-orange-300" },
      { name: "CSS3", color: "text-blue-500", hoverColor: "group-hover:text-blue-300" },
      { name: "Bootstrap", color: "text-purple-600", hoverColor: "group-hover:text-purple-400" },
      { name: "Tailwind CSS", color: "text-teal-400", hoverColor: "group-hover:text-teal-200" },
      { name: "React.js", color: "text-cyan-400", hoverColor: "group-hover:text-cyan-200" },
      { name: "Next.js", color: "text-white", hoverColor: "group-hover:text-gray-300" },
      { name: "Redux Toolkit", color: "text-purple-500", hoverColor: "group-hover:text-purple-300" },
      { name: "Material UI", color: "text-blue-400", hoverColor: "group-hover:text-blue-200" },
    ],
  },
  {
    id: 3,
    category: "Backend Technologies",
    skills: [
      { name: "Node.js", color: "text-green-500", hoverColor: "group-hover:text-green-300" },
      { name: "Express.js", color: "text-gray-400", hoverColor: "group-hover:text-gray-200" },
      { name: "JWT Authentication", color: "text-pink-500", hoverColor: "group-hover:text-pink-300" },
      { name: "Zod validation", color: "text-blue-500", hoverColor: "group-hover:text-blue-300" },
      { name: "MongoDB", color: "text-green-600", hoverColor: "group-hover:text-green-400" },
      { name: "REST API", color: "text-orange-400", hoverColor: "group-hover:text-orange-200" },
      { name: "Socket.io", color: "text-gray-300", hoverColor: "group-hover:text-white" },
    ],
  },
  {
    id: 4,
    category: "Development Tools",
    skills: [
      { name: "Figma", color: "text-pink-500", hoverColor: "group-hover:text-pink-300" },
      { name: "Canva", color: "text-blue-400", hoverColor: "group-hover:text-blue-200" },
      { name: "VS Code", color: "text-blue-500", hoverColor: "group-hover:text-blue-300" },
      { name: "Hostinger", color: "text-purple-400", hoverColor: "group-hover:text-purple-200" },
      { name: "GitHub", color: "text-white", hoverColor: "group-hover:text-gray-300" },
      { name: "Vercel", color: "text-white", hoverColor: "group-hover:text-gray-300" },
      { name: "Netlify", color: "text-teal-400", hoverColor: "group-hover:text-teal-200" },
      { name: "Vite", color: "text-purple-500", hoverColor: "group-hover:text-purple-300" },
      { name: "Version Control", color: "text-orange-500", hoverColor: "group-hover:text-orange-300" },
    ],
  },
  {
    id: 5,
    category: "Core Subjects",
    skills: [
      { name: "Data Structures (C++)", color: "text-blue-400", hoverColor: "group-hover:text-blue-200" },
      { name: "Algorithms (C++)", color: "text-cyan-400", hoverColor: "group-hover:text-cyan-200" },
      { name: "OOPs", color: "text-green-400", hoverColor: "group-hover:text-green-200" },
      { name: "Operating System", color: "text-yellow-400", hoverColor: "group-hover:text-yellow-200" },
      { name: "Computer Networks", color: "text-purple-400", hoverColor: "group-hover:text-purple-200" },
      { name: "DBMS", color: "text-pink-400", hoverColor: "group-hover:text-pink-200" },
    ],
  },
  {
    id: 6,
    category: "AI Tools",
    skills: [
      { name: "Cursor", color: "text-blue-400", hoverColor: "group-hover:text-blue-200" },
      { name: "ChatGPT", color: "text-green-400", hoverColor: "group-hover:text-green-200" },
      { name: "DeepSeek", color: "text-purple-400", hoverColor: "group-hover:text-purple-200" },
      { name: "GitHub Copilot", color: "text-cyan-400", hoverColor: "group-hover:text-cyan-200" },
      { name: "V0", color: "text-white", hoverColor: "group-hover:text-gray-300" },
      { name: "Gamma", color: "text-pink-400", hoverColor: "group-hover:text-pink-200" },
      { name: "Perplexity", color: "text-indigo-400", hoverColor: "group-hover:text-indigo-200" },
      { name: "Gemini", color: "text-blue-500", hoverColor: "group-hover:text-blue-300" },
    ],
  },
];

// Coding Profiles Data
export const codingProfiles = [
  {
    id: 1,
    name: "LeetCode",
    url: "https://leetcode.com/u/ranvijay-kumar4/",
    hoverBg: "hover:bg-[#FFA116]",
    icon: "leetcode",
  },
  {
    id: 2,
    name: "Geeks for Geeks",
    url: "https://www.geeksforgeeks.org/user/ranvijay_kumar4/",
    hoverBg: "hover:bg-[#2F8D46]",
    icon: "gfg",
  },
  {
    id: 3,
    name: "CodeChef",
    url: "https://www.codechef.com/users/ranvijay_kumar",
    hoverBg: "hover:bg-[#5B4638]",
    icon: "codechef",
  },
  {
    id: 4,
    name: "Github",
    url: "https://github.com/ranvijay-kumar4",
    hoverBg: "hover:bg-black",
    icon: "github",
  },
];

// Social Links Data
export const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://linkedin.com/in/ranvijay-kumar4/",
    hoverBg: "hover:bg-[#0077B5]",
    icon: "linkedin",
  },
  {
    id: 2,
    name: "X (Twitter)",
    url: "https://x.com/ranvijay_kumar4",
    hoverBg: "hover:bg-[#1DA1F2]",
    icon: "twitter",
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://instagram.com/ranvijay_kumar4/",
    hoverBg: "hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    icon: "instagram",
  },
];

// Personal Info
export const personalInfo = {
  name: "Ranvijay Kumar",
  email: "ranvijay9399@gmail.com",
  phone: "+919399688140",
  roles: [
    "Software Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Web Developer",
  ],
  description: "Full Stack Developer with expertise in MERN stack, building scalable web applications with modern technologies. Proficient in React.js, Node.js, Express.js, MongoDB, and TypeScript with a strong foundation in Data Structures, Algorithms, and System Design.",
};

// Education Data
export const education = {
  degree: "Bachelor of Technology in Information Technology",
  institution: "Jabalpur Engineering College, Jabalpur",
  duration: "2022 - 2026",
};

// Experience Data
export const experiences = [
  {
    id: 1,
    position: "Software Developer Intern",
    company: "MBG Card India Pvt. Ltd.",
    duration: "Sep 2025 - Present",
    location: "Jabalpur, Madhya Pradesh",
    type: "Onsite",
    achievements: [
      "Contributed to developing and maintaining scalable web applications, technologies using MERN, ensuring responsive and efficient performance.",
      "Assisted in designing and implementing modular, reusable components and RESTful APIs, enhancing code maintainability and system scalability.",
      "Collaborated with the development team in an Agile environment, participating in code reviews, debugging, and feature integration for production-ready solutions.",
    ],
  },
  {
    id: 2,
    position: "Web Developer Intern",
    company: "Savshka Communications Pvt. Ltd.",
    duration: "May 2024 - Aug 2024",
    location: "Noida, Uttar Pradesh",
    type: "Onsite",
    achievements: [
      "Built and deployed a production-ready, responsive website using HTML5, CSS3, JavaScript, PHP, Tailwind CSS, React.js, and Bootstrap, ensuring accessibility and device compatibility.",
      "Implemented reusable, SEO optimized components and interactive content sections, improving load time by 30% and boosting discoverability on search engines.",
      "Collaborated directly with business stakeholders to translate requirements into scalable frontend architecture, ensuring cross-browser compatibility and mobile-first performance optimization.",
    ],
  },
];

// Achievements Data
export const achievements = [
  {
    id: 1,
    category: "Problem Solving",
    title: "400+ DSA Problems Solved",
    description: "Solved 400+ Data Structures and Algorithms problems on platforms like LeetCode, GeeksforGeeks, and CodeChef, demonstrating strong problem-solving skills and algorithmic thinking.",
    icon: "code",
    gradient: "from-blue-400 via-cyan-400 to-teal-400",
    bgGradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
    borderColor: "border-blue-500/30",
    hoverBorder: "hover:border-cyan-400/60",
    shadowColor: "hover:shadow-cyan-500/30",
    iconBg: "from-blue-500/30 to-cyan-500/30",
    statColor: "from-blue-400 to-cyan-400",
    highlights: [
      "LeetCode: Active problem solver",
      "GeeksforGeeks: Regular contributor",
      "CodeChef: Competitive programmer",
    ],
  },
  {
    id: 2,
    category: "Hackathon",
    title: "Under Top 25 at DPBH 2023, IIT BHU",
    description: "Secured rank under Top 25 among 200+ teams at Dark Pattern Buster Hackathon (DPBH) 2023, IIT BHU. Collaborated with the Ministry of Consumer Affairs, Government of India on deceptive UI/UX patterns. Selected for Smart India Hackathon (SIH) 2023, representing Jabalpur Engineering College in a national-level product engineering competition.",
    icon: "trophy",
    gradient: "from-amber-400 via-orange-400 to-red-400",
    bgGradient: "from-amber-500/10 via-orange-500/10 to-red-500/10",
    borderColor: "border-amber-500/30",
    hoverBorder: "hover:border-orange-400/60",
    shadowColor: "hover:shadow-orange-500/30",
    iconBg: "from-amber-500/30 to-orange-500/30",
    statColor: "from-yellow-400 to-orange-400",
    highlights: [
      "Within top 25 among 200+ teams",
      "Collaboration with IIT BHU and Ministry of Consumer Affairs (Government of India)",
      "Selected for SIH 2023",
      "National-level competition",
    ],
  },
  {
    id: 3,
    category: "Event Management",
    title: "PRAHAAR Coding Contest - Founder & Organizer",
    description: "Conceptualized and executed the PRAHAAR Coding Contest at Jabalpur Engineering College, attracting 100+ participants. Successfully secured sponsorships, managed end-to-end logistics, and awarded internships and tech prizes to winners. Enhanced JEC's reputation as a hub for tech talent and innovation.",
    icon: "event",
    gradient: "from-purple-400 via-fuchsia-400 to-pink-400",
    bgGradient: "from-purple-500/10 via-fuchsia-500/10 to-pink-500/10",
    borderColor: "border-purple-500/30",
    hoverBorder: "hover:border-fuchsia-400/60",
    shadowColor: "hover:shadow-fuchsia-500/30",
    iconBg: "from-purple-500/30 to-pink-500/30",
    statColor: "from-purple-400 to-pink-400",
    highlights: [
      "100+ participants engaged",
      "Secured multiple sponsorships",
      "Awarded internships & prizes",
      "End-to-end event execution",
    ],
  },
  {
    id: 4,
    category: "Leadership",
    title: "Student Leadership & Representation",
    description: "Served as Event Management Head at KaarwaaN.JEC, organizing 5+ social outreach events for community impact. Appointed as Branch Representative, Class Representative, and Hostel Representative across three consecutive batches, advocating for academic excellence and student welfare initiatives.",
    icon: "leadership",
    gradient: "from-emerald-400 via-green-400 to-teal-400",
    bgGradient: "from-emerald-500/10 via-green-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/30",
    hoverBorder: "hover:border-green-400/60",
    shadowColor: "hover:shadow-green-500/30",
    iconBg: "from-emerald-500/30 to-teal-500/30",
    statColor: "from-green-400 to-teal-400",
    highlights: [
      "Event Management Head - KaarwaaN.JEC",
      "Active Member (Manak Mitra) - Bureau of Indian Standards (Government of India), Nagpur division",
      "5+ social outreach events organized",
      "Representative across 3 batches",
      "Academic & student welfare advocacy",
    ],
  },
];

// Navigation Links
export const navLinks = [
  { id: 1, name: "Home", path: "/", hash: "#home" },
  { id: 2, name: "About", path: "/about", hash: "#about" },
  { id: 3, name: "Education", path: "/education", hash: "#education" },
  { id: 4, name: "Experience", path: "/experience", hash: "#experience" },
  { id: 5, name: "Projects", path: "/projects", hash: "#projects" },
  { id: 6, name: "Achievements", path: "/achievements", hash: "#achievements" },
  { id: 7, name: "Contact", path: "/contact", hash: "#contact" },
];

