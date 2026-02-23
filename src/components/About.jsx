import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaShieldAlt, FaCode } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 bg-cyber-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About <span className="text-electric-blue">Me</span></h2>
                    <div className="w-20 h-1 bg-electric-blue mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-200 mb-6">
                            Cloud & DevOps Engineer | <span className="text-blue-400">DevSecOps Enthusiast</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            I’m <span className="text-white font-semibold">Goli Akash</span>, I'm<span className="text-white font-semibold"></span> Passionate about building <span className="text-white font-semibold">secure, scalable, and efficient cloud solutions</span>. My interest in technology goes beyond writing code — I’m deeply curious about how systems operate behind the scenes and how they can be optimized and secured for real-world environments.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            I have hands-on experience with <span className="text-white font-semibold">AWS services</span>, <span className="text-white font-semibold">DevOps tools</span>, and <span className="text-white font-semibold">cybersecurity fundamentals</span>, and I enjoy working on projects that combine <span className="text-white font-semibold">automation, monitoring, and infrastructure security</span>. My focus is on <span className="text-white font-semibold">Cloud Security and DevSecOps</span>, where I aim to design systems that are not only high-performing but secure by design.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Through projects, labs, and self-driven exploration, I constantly refine my skills in <span className="text-white font-semibold">cloud architecture, security practices</span>, and <span className="text-white font-semibold">emerging technologies like AI integration</span> in cloud environments.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        <FeatureCard
                            icon={<FaServer className="text-electric-blue" size={30} />}
                            title="Cloud Infrastructure"
                            description="Architecting and managing scalable AWS environments using IaC."
                        />
                        <FeatureCard
                            icon={<FaShieldAlt className="text-electric-blue" size={30} />}
                            title="DevSecOps"
                            description="Integrating security practices into the CI/CD pipeline."
                        />
                        <FeatureCard
                            icon={<FaCode className="text-electric-blue" size={30} />}
                            title="Automation"
                            description="Automating repetitive tasks with Python and Bash scripting."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <motion.div
        whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
        className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm flex items-start gap-4 transition-all"
    >
        <div className="p-3 bg-black/30 rounded-lg">
            {icon}
        </div>
        <div>
            <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    </motion.div>
);

export default About;
