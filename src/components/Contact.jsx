import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Replace these with your actual EmailJS service ID, template ID, and public key
        // You can sign up for free at https://www.emailjs.com/
        const SERVICE_ID = 'service_f78ik27';
        const TEMPLATE_ID = 'template_d9t6omj';
        const PUBLIC_KEY = '3UjvHzQ-344SKKC66';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                alert("Failed to send message. Please try again.");
            });
    };

    return (
        <section id="contact" className="py-20 bg-[#0a0a0a] relative">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-electric-blue/5 to-transparent pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In <span className="text-electric-blue">Touch</span></h2>
                    <div className="w-20 h-1 bg-electric-blue mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                        <p className="text-gray-400 mb-8">
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:goliakash710@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-electric-blue transition-colors">
                                <FaEnvelope size={20} />
                                <span>goliakash710@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/in/goli-akash-02382b245" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-electric-blue transition-colors">
                                <FaLinkedin size={20} />
                                <span>LinkedIn Profile</span>
                            </a>
                            <a href="https://github.com/goliakash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-electric-blue transition-colors">
                                <FaGithub size={20} />
                                <span>GitHub Profile</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        ref={form}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-electric-blue text-white transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-electric-blue text-white transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-electric-blue text-white transition-colors resize-none"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full py-3 ${status === 'sending' ? 'bg-gray-600' : 'bg-electric-blue'} text-black font-semibold rounded-lg hover:bg-blue-400 transition-colors shadow-lg shadow-blue-500/20`}
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
