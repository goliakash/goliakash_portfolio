import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-cyber-black py-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Goli Akash. All rights reserved.
                </div>

                <div className="flex space-x-6">
                    <SocialIcon href="https://github.com/goliakash" icon={<FaGithub />} />
                    <SocialIcon href="https://linkedin.com/in/goliakash" icon={<FaLinkedin />} />
                    <SocialIcon href="#" icon={<FaTwitter />} />
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-electric-blue transition-colors text-xl"
    >
        {icon}
    </a>
);

export default Footer;
