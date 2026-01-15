import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../data/projects';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-20">
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-4 mb-12">
                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Featured Projects
                    </h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-neon-pink/50 to-transparent rounded-full"></div>
                </div>


                {/* Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="glass-card overflow-hidden group hover:border-neon-pink/50 transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                    />
                                    {/* Overlay Links */}
                                    <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                                        <a href={project.github} target='_blank' className="p-3 bg-white/10 rounded-full hover:bg-neon-cyan hover:text-black transition-colors"><FaGithub size={20} /></a>
                                        <a href={project.live} target='_blank' className="p-3 bg-white/10 rounded-full hover:bg-neon-pink hover:text-black transition-colors"><FaExternalLinkAlt size={20} /></a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-mono text-neon-cyan bg-neon-cyan/5 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;
