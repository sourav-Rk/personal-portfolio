import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                alert("Failed to send message. Please try again.");
            });
    };

    return (
        <section id="contact" className="py-20 relative">
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-4 mb-16">
                   <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Get In Touch
                    </h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-neon-cyan/50 to-transparent rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        
                        <div className="space-y-6">
                            <a href="mailto:email@example.com" className="flex items-center gap-4 p-4 glass-card hover:border-neon-cyan/50 transition-colors group">
                                <div className="p-3 rounded-full bg-white/5 text-neon-cyan group-hover:scale-110 transition-transform">
                                    <FaEnvelope size={24} />
                                </div>
                                <div>
                                    <h4 className="text-gray-400 text-sm">Email</h4>
                                    <p className="text-white font-medium">souravrk08@gmail.com</p>
                                </div>
                            </a>
                            
                             <a href="#" className="flex items-center gap-4 p-4 glass-card hover:border-neon-pink/50 transition-colors group">
                                <div className="p-3 rounded-full bg-white/5 text-neon-pink group-hover:scale-110 transition-transform">
                                    <FaLinkedin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-gray-400 text-sm">LinkedIn</h4>
                                    <p className="text-white font-medium">www.linkedin.com/in/sourav-k-developer/</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <form ref={form} onSubmit={sendEmail} className="glass-card p-8 space-y-6">
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Name</label>
                            <input 
                                type="text" 
                                name="user_name" 
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                            />
                        </div>
                         <div>
                            <label className="block text-sm text-gray-400 mb-2">Email</label>
                            <input 
                                type="email" 
                                name="user_email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                            />
                        </div>
                         <div>
                            <label className="block text-sm text-gray-400 mb-2">Message</label>
                            <textarea 
                                name="message" 
                                required
                                rows="4"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === 'sending' || status === 'success'}
                            className={`w-full py-4 rounded-lg font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2
                                ${status === 'success' ? 'bg-green-500 text-black' : 'bg-gradient-to-r from-neon-cyan to-neon-pink text-black hover:opacity-90'}
                            `}
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : <><FaPaperPlane /> Send Message</>}
                        </button>
                    </form>
                </div>
            </motion.div>
            
            <footer className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Sourav</p>
            </footer>
        </section>
    );
};

export default Contact;
