import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaPython, FaLinux, FaShieldAlt, FaGoogle, FaGitAlt } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiJenkins, SiBurpsuite, SiWireshark, SiGnubash, SiMysql, SiYaml, SiSnyk } from 'react-icons/si';

const Skills = () => {
    const skills = [
        {
            category: "Cloud",
            items: [
                { name: 'AWS', icon: <FaAws /> },
                { name: 'GCP', icon: <FaGoogle /> },
            ]
        },
        {
            category: "DevOps",
            items: [
                { name: 'Docker', icon: <FaDocker /> },
                { name: 'Kubernetes', icon: <SiKubernetes /> },
                { name: 'Terraform', icon: <SiTerraform /> },
                { name: 'Jenkins', icon: <SiJenkins /> },
                { name: 'Git', icon: <FaGitAlt /> },
            ]
        },
        {
            category: "DevSecOps",
            items: [
                { name: 'Snyk', icon: <SiSnyk /> },
                { name: 'Checkov', icon: <FaShieldAlt /> },
                { name: 'Trivy', icon: <FaShieldAlt /> },
                { name: 'SonarQube', icon: <FaShieldAlt /> },
            ]
        },
        {
            category: "Cybersecurity",
            items: [
                { name: 'Nmap', icon: <FaLinux /> },
                { name: 'Metasploit', icon: <FaShieldAlt /> },
                { name: 'Burp Suite', icon: <SiBurpsuite /> },
                { name: 'Wireshark', icon: <SiWireshark /> },
                { name: 'Nessus', icon: <FaShieldAlt /> },
            ]
        },
        {
            category: "Programming",
            items: [
                { name: 'Python', icon: <FaPython /> },
                { name: 'Bash', icon: <SiGnubash /> },
                { name: 'SQL', icon: <SiMysql /> },
                { name: 'YAML', icon: <SiYaml /> },
            ]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-electric-blue">Skills</span></h2>
                    <div className="w-20 h-1 bg-electric-blue mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-electric-blue/50 transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-2 group-hover:text-electric-blue transition-colors">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        variants={item}
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: 'rgba(0, 191, 255, 0.1)',
                                            borderColor: 'rgba(0, 191, 255, 0.5)'
                                        }}
                                        className="px-3 py-1.5 bg-black/40 rounded-full text-gray-300 text-sm border border-white/5 flex items-center gap-2 hover:text-electric-blue transition-all cursor-default"
                                    >
                                        <span className="text-electric-blue group-hover:animate-pulse">{skill.icon}</span>
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
