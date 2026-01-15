import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaLightbulb } from 'react-icons/fa';

const About = () => {
    const cards = [
        {
            icon: FaCode,
            title: "Frontend Development",
            desc: "Building responsive, interactive UIs using React, Tailwind, and Modern JavaScript.",
            color: "text-neon-cyan"
        },
        {
            icon: FaServer,
            title: "Backend Systems",
            desc: "Developing robust APIs and database architectures with Node.js and MongoDB.",
            color: "text-neon-pink"
        },
        {
            icon: FaLightbulb,
            title: "Problem Solving",
            desc: "Efficient algorithms and clean code practices optimized for performance.",
            color: "text-yellow-400"
        }
    ];

    return (
        <section id="about" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-4 mb-12">
                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        About Me
                    </h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-neon-cyan/50 to-transparent rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 text-gray-300 leading-relaxed mb-16">
                    <p>
                        I am a dedicated Full Stack Developer with a passion for creating digital experiences that live on the internet. 
                        My journey started with a curiosity for how websites work, which quickly turned into a career obsession.
                        <br /><br />
                        I specialize in the MERN stack (MongoDB, Express, React, Node.js) and enjoy working with modern tools like Next.js and Tailwind CSS.
                    </p>
                    <p>
                        Beyond coding, I am a continuous learner, always keeping up with the latest trends in web development. 
                        I believe in the power of clean design and efficient code to solve real-world problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {cards.map((card, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="glass-card p-6 flex flex-col items-center text-center gap-4 neon-border-hover"
                        >
                            <span className={`text-4xl ${card.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}>
                                <card.icon />
                            </span>
                            <h3 className="text-xl font-bold text-white">{card.title}</h3>
                            <p className="text-sm text-gray-400">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
