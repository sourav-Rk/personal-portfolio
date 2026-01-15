import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiRedis,
  SiSocketdotio,
  SiWebrtc,
  SiStripe,
  SiRazorpay,
  SiDocker,
  SiGit,
  SiPostman,
} from "react-icons/si";

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    ],
  },

  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#EDEDED" },

      // Real-time
      { name: "WebSockets", icon: SiWebrtc, color: "#00FFF5" }, // best suitable icon
      { name: "Socket.IO", icon: SiSocketdotio, color: "#FFFFFF" },
    ],
  },

  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: FaDatabase, color: "#F29111" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },

  {
    category: "Tools & Services",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },

      // Payment
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
      { name: "Razorpay", icon: SiRazorpay, color: "#0C2451" },
      { name: "Payment Gateways", icon: SiStripe, color: "#FF2EEA" },
    ],
  },
];
