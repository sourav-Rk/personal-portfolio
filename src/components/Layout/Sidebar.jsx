import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaGraduationCap, FaCode, FaProjectDiagram, FaEnvelope, FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const navItems = [
  { name: 'Home', to: 'home', icon: FaHome },
  { name: 'About', to: 'about', icon: FaUser },
  { name: 'Education', to: 'education', icon: FaGraduationCap },
  { name: 'Skills', to: 'skills', icon: FaCode },
  { name: 'Projects', to: 'projects', icon: FaProjectDiagram },
  { name: 'Contact', to: 'contact', icon: FaEnvelope },
];

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button onClick={toggle} className="text-neon-cyan text-2xl p-2 bg-neon-bg-secondary rounded-full border border-neon-cyan shadow-neon-cyan">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar Container */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 h-full w-64 bg-neon-bg-secondary/90 backdrop-blur-md border-r border-slate-800 z-40 md:translate-x-0 md:flex flex-col justify-between p-6 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:block`}
        // Override the animate prop for desktop if needed, usually CSS handles responsiveness better for visibility, 
        // but since we want animation on mobile, we can use a media query check or just CSS for display.
        // Better: standard CSS for desktop fixed, mobile motion.
        style={{ transform: "none" }} // Reset transform for desktop via CSS class usually, but framer motion inline styles might conflict.
      >
        {/* We need to handle mobile vs desktop separately or conditionally. 
           Let's rely on CSS classes: md:translate-x-0 for static desktop. 
           But Framer Motion 'animate' might override. 
           Let's use a simpler approach: Mobile overlay + Desktop static sidebar.
        */}
      </motion.aside>
      
      {/* Re-implementing correctly below */}
    </>
  );
};

// Better implementation:
const SidebarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when clicking a link (mobile)
    const handleLinkClick = () => setIsOpen(false);

    const sidebarContent = (
      <div className="flex flex-col h-full">
        <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white tracking-widest uppercase">
                Sourav<span className="text-neon-cyan"> .</span>
            </h1>
            <p className="text-sm text-neon-muted mt-2">Full Stack Developer</p>
        </div>

        <nav className="flex-1">
            <ul className="space-y-4">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            activeClass="active-nav" // We need to define this class in CSS
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            onSetActive={() => {}}
                            onClick={handleLinkClick}
                            className="flex items-center gap-4 text-neon-muted hover:text-neon-cyan cursor-pointer p-2 rounded-lg transition-all group"
                        >
                             <span className="text-xl group-hover:drop-shadow-[0_0_5px_rgba(0,255,245,0.8)] transition-all">{<item.icon />}</span>
                             <span className="text-sm font-medium tracking-wide uppercase group-hover:text-white transition-colors">{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>

        <div className="mt-8 flex justify-center gap-4">
            <a href="https://github.com/sourav-Rk" target="_blank" className="text-neon-muted hover:text-neon-green text-xl transition-colors hover:drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sourav-k-developer/" target="_blank" className="text-neon-muted hover:text-neon-cyan text-xl transition-colors hover:drop-shadow-[0_0_5px_rgba(0,255,245,0.8)]"><FaLinkedin /></a>
        </div>
      </div>
    );

    return (
        <>
             {/* Mobile Toggle */}
            <div className="fixed top-4 right-4 z-50 md:hidden">
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="text-neon-cyan text-2xl p-2 bg-neon-bg-secondary rounded-md border border-neon-cyan/30 shadow-[0_0_10px_rgba(0,255,245,0.2)]">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Sidebar (Motion) */}
             <motion.div 
                className={`fixed top-0 left-0 h-full w-64 bg-neon-bg-secondary/95 backdrop-blur-xl border-r border-white/10 z-40 p-6 md:hidden`}
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? 0 : "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {sidebarContent}
            </motion.div>


            {/* Desktop Sidebar (Static) */}
            <div className="hidden md:flex flex-col fixed top-0 left-0 h-full w-64 bg-neon-bg-secondary border-r border-white/5 p-6 z-40">
                {sidebarContent}
            </div>
        </>
    );
};

export default SidebarComponent;
