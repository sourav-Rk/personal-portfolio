import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../data/projects';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-20 relative">
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
                    <div className="h-1 flex-1 bg-gradient-to-r from-neon-green/50 to-transparent rounded-full"></div>
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
                                className="glass-card overflow-hidden group hover:border-neon-green/50 transition-all duration-500 cursor-pointer"
                                onClick={() => setSelectedProject(project)}
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
                                         <span className="text-white font-mono text-sm tracking-wider border border-neon-cyan px-4 py-2 rounded-full hover:bg-neon-cyan hover:text-black transition-all">
                                            View Details
                                         </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map((t, i) => (
                                            <span key={i} className="text-xs font-mono text-neon-cyan bg-neon-cyan/5 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="text-xs font-mono text-neon-cyan bg-neon-cyan/5 px-2 py-1 rounded">+{project.tech.length - 3}</span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </motion.div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-neon-bg-secondary border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:text-neon-cyan transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Content */}
                            <div className="flex flex-col md:flex-row">
                                {/* Image Section */}
                                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                                    <img 
                                        src={selectedProject.image} 
                                        alt={selectedProject.title} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Details Section */}
                                <div className="w-full md:w-1/2 p-8 space-y-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                                        <span className="text-neon-green text-sm font-mono border border-neon-green/30 px-3 py-1 rounded-full uppercase tracking-wider">
                                            {selectedProject.category}
                                        </span>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        {selectedProject.description}
                                    </p>

                                    <div>
                                        <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                            <span className="w-1 h-5 bg-neon-cyan rounded-full"></span>
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((t, i) => (
                                                <span key={i} className="text-sm font-mono text-neon-cyan bg-neon-cyan/5 border border-neon-cyan/20 px-3 py-1 rounded hover:bg-neon-cyan/10 transition-colors">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-6 mt-auto">
                                        <a 
                                            href={selectedProject.github} 
                                            target="_blank" 
                                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-white/10 hover:border-neon-green hover:bg-neon-green/10 hover:text-neon-green transition-all group"
                                        >
                                            <FaGithub className="text-xl" /> 
                                            <span className="font-semibold">Code</span>
                                        </a>
                                        <a 
                                            href={selectedProject.live} 
                                            target="_blank" 
                                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-neon-cyan text-black font-bold hover:shadow-[0_0_20px_rgba(0,255,245,0.4)] transition-all"
                                        >
                                            <FaExternalLinkAlt /> 
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
