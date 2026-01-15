import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import MovingBorderBtn from '../ui/MovingBorderBtn';


const Hero = () => {
    const roles = ["Full Stack Developer", "MERN Developer"];
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing effect logic
    useEffect(() => {
        const handleTyping = () => {
            const i = currentRole % roles.length;
            const fullText = roles[i];
            
            if (isDeleting) {
                setDisplayText(fullText.substring(0, displayText.length - 1));
            } else {
                setDisplayText(fullText.substring(0, displayText.length + 1));
            }

            if (!isDeleting && displayText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentRole(currentRole + 1);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 100 : 200);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRole, roles]);


    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 md:pt-0">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-neon-cyan text-xl font-mono">Hello, I am</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Sourav K
                    </h1>
                    <div className="text-2xl md:text-3xl text-neon-muted h-10">
                        I am a <span className="text-neon-pink font-semibold">{displayText}</span>
                        <span className="animate-pulse">|</span>
                    </div>
                    <p className="text-gray-400 max-w-lg leading-relaxed">
                        passionate about building scalable web applications and intuitive user interfaces. 
                        Let's build something futuristic together.
                    </p>
                    
                    <div className="flex gap-4 pt-4">
                        <MovingBorderBtn href="/assets/Sourav-Resume.pdf" download>
                            <span className="flex items-center gap-2"><FaDownload /> Resume</span>
                        </MovingBorderBtn>
                        <Link to="projects" smooth={true} offset={-50} className="neon-button neon-button-pink cursor-pointer">
                            View Projects
                        </Link>
                    </div>

                    <div className="flex gap-6 pt-6 text-2xl text-gray-400">
                        <a href="https://github.com/sourav-Rk" target="_blank" className="hover:text-neon-cyan transition-colors transform hover:scale-110"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/sourav-k-developer/" target="_blank" className="hover:text-neon-pink transition-colors transform hover:scale-110"><FaLinkedin /></a>
                        <a href="mailto:souravrk08@gmail.com" className="hover:text-white transition-colors transform hover:scale-110"><FaEnvelope /></a>

                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Glowing Circles */}
                        <div className="absolute inset-0 bg-neon-cyan rounded-full blur-[100px] opacity-20"></div>
                        <div className="absolute inset-4 border-2 border-neon-cyan rounded-full" style={{ animationDuration: '10s' }}></div>
                        {/* <div className="absolute inset-0 border-2 border-neon-pink rounded-full  flex items-center justify-center overflow-hidden" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                           
                        </div> */}
                        
                         {/* Actual Image Container */}
                        <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_20px_rgba(0,255,245,0.3)] bg-neon-bg-secondary">
                             {/* Placeholder if no image */}
                             <img src="/assets/sourav_profile_2.jpg" alt="Profile" className="w-full h-full object-cover opacity-100 hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
