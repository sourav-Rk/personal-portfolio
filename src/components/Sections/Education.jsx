import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const educationData = [
        {
            year: "2024 - 2026",
            degree: "MERN Full-stack development program",
            school: "Brototype",
            desc: "One-year full-stack program specializing in MERN stack development.Focused on scalable backend design and production-grade deployment"
        },
        {
            year: "2021 - 2024",
            degree: "B.Sc in Computer Science",
            school: "Kannur University,Kerala",
            desc: "Major in Computer Science"
        },
        {
            year: "2019 - 2021",
            degree: "HSC",
            school: "AKGSGHSS Peralassery, Kerala",
            desc: "Major in ComputerScience"
        }
    ];

    return (
        <section id="education" className="py-20">
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-4 mb-16">
                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Education
                    </h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-neon-pink/50 to-transparent rounded-full"></div>
                </div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-12">
                    {educationData.map((item, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-12 group">
                             {/* Neon Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-neon-bg border-2 border-neon-cyan rounded-full group-hover:bg-neon-cyan group-hover:shadow-[0_0_10px_#00FFF5] transition-all"></div>
                            
                            <div className="space-y-2">
                                <span className="text-neon-cyan font-mono text-sm tracking-widest">{item.year}</span>
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-neon-pink transition-colors">{item.degree}</h3>
                                <div className="text-gray-400 font-medium">{item.school}</div>
                                <p className="text-sm text-gray-500 max-w-2xl">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
