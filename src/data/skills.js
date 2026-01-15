import { FaReact, FaNodeJs, FaPython, FaDatabase, FaTools, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiNextdotjs, SiDocker, SiGit, SiPostman } from 'react-icons/si';

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: FaDatabase, color: "#F29111" },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ]
  }
];
