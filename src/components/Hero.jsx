import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-cyber-black to-cyber-black"></div>

                {/* Cyber Grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(to right, #00BFFF 1px, transparent 1px), linear-gradient(to bottom, #00BFFF 1px, transparent 1px)`,
                        backgroundSize: '4rem 4rem',
                        maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
                    }}
                ></div>

                {/* Animated blobs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-electric-blue font-medium tracking-wider mb-4 uppercase text-sm sm:text-base">
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
                        <span className="text-5xl sm:text-8xl font-bold text-white mb-6 tracking-tight">Goli Akash</span>
                    </h1>

                    <div className="text-xl sm:text-3xl text-gray-300 mb-8 h-[60px] sm:h-[80px]">
                        <TypeAnimation
                            sequence={[
                                'Devops Engineer',
                                2000,
                                'Cloud Engineer',
                                2000,
                                'DevSecOps Enthusiast',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-light"
                        />
                    </div>

                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
                        Designing secure, scalable cloud infrastructure and automating everything.
                        Building the bridge between development, operations, and security.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="px-8 py-3 bg-electric-blue text-black font-semibold rounded-full hover:bg-blue-400 transition-colors shadow-[0_0_20px_rgba(0,191,255,0.3)]"
                        >
                            View Projects
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/Resume_Akash.pdf"
                            download
                            className="px-8 py-3 border border-electric-blue text-electric-blue font-semibold rounded-full hover:bg-electric-blue/10 transition-colors flex items-center justify-center gap-2"
                        >
                            <FaDownload /> Download Resume
                        </motion.a>
                    </div>

                    <div className="mt-12 flex justify-center gap-6">
                        <SocialLink href="https://github.com/goliakash" icon={<FaGithub size={24} />} />
                        <SocialLink href="https://linkedin.com/in/goliakash" icon={<FaLinkedin size={24} />} />
                        <SocialLink href="mailto:goliakash710@gmail.com" icon={<FaEnvelope size={24} />} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon }) => (
    <motion.a
        whileHover={{ y: -5, color: '#00BFFF' }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 transition-colors cursor-pointer"
    >
        {icon}
    </motion.a>
);

export default Hero;
