import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "VulnScan",
            description: "A Python-based vulnerability scanner that identifies common security loopholes in web applications. Features include port scanning, header analysis, and basic XSS detection.",
            tags: ["Python", "Socket Programming", "Requests", "Security"],
            github: "https://github.com/goliakash/Vulnscan",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "2048 Game on EKS",
            description: "Deployed the classic 2048 game on Amazon EKS (Elastic Kubernetes Service). Implemented using a microservices architecture with proper ingress controllers and load balancing.",
            tags: ["AWS EKS", "Kubernetes", "Docker", "DevOps"],
            github: "https://github.com/goliakash/2048-game",
            image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-cyber-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-electric-blue">Projects</span></h2>
                    <div className="w-20 h-1 bg-electric-blue mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-electric-blue/50 transition-all duration-300"
        >
            <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent z-10 opactiy-60"></div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-6 relative z-20">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/5 text-xs text-electric-blue rounded border border-electric-blue/20">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <a href={project.github} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <FaGithub /> GitHub
                    </a>
                    
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
