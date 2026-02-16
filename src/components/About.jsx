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
                            Cloud Engineer & <span className="text-blue-400">Security Enthusiast</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            I am a passionate Cloud Engineer and DevSecOps enthusiast dedicated to building secure, scalable, and resilient infrastructure. My journey involves orchestrating containerized applications, automating deployment pipelines, and ensuring security at every layer of the stack.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            With a deep understanding of cloud platforms and security protocols, I strive to bridge the gap between development and operations while prioritizing the integrity and availability of systems.
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
