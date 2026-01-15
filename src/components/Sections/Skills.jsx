import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

const Skills = () => {
    return (
        <section id="skills" className="py-20">
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-4 mb-16">
                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Technical Skills
                    </h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-neon-cyan/50 to-transparent rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((category, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="glass-card p-6 md:p-8 neon-border-hover"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2 inline-block">
                                {category.category}
                            </h3>
                            
                            <div className="flex flex-wrap gap-4">
                                {category.items.map((skill, sIdx) => (
                                    <div 
                                        key={sIdx} 
                                        className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-colors cursor-default group"
                                    >
                                        <span className="text-xl group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all" style={{ color: skill.color }}>
                                            <skill.icon />
                                        </span>
                                        <span className="text-gray-300 group-hover:text-white font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
