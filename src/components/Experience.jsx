import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    // Placeholder data - user can update this later
    const experiences = [
        {
            title: "Cloud Engineer",
            company: "CoreXtech IT Services Pvt. Ltd.",
            period: "July 2025 – September 2025",
            description: "Deployed scalable AWS/Azure infrastructure solutions using Terraform and CloudFormation, Configured CI/CD pipelines with Jenkins and GitHub Actions, Monitored cloud resources using CloudWatch and Azure Monitor to optimize costs and performance."
        },
    ];

    return (
        <section id="experience" className="py-20 bg-[#0a0a0a]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional <span className="text-electric-blue">Experience</span></h2>
                    <div className="w-20 h-1 bg-electric-blue mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l border-gray-700 ml-4 md:ml-0">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="mb-10 ml-6 md:ml-8"
                        >
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-electric-blue rounded-full -left-3 ring-8 ring-black">
                            </span>
                            <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-electric-blue/30 transition-all">
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                                    {exp.title}
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                                        {exp.company}
                                    </span>
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{exp.period}</time>
                                <p className="mb-4 text-base font-normal text-gray-400">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
