import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroSplash from './components/IntroSplash';
import ScrollProgress from './components/ScrollProgress';

function App() {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <>
            <ScrollProgress />
            <AnimatePresence>
                {showIntro && (
                    <IntroSplash onComplete={() => setShowIntro(false)} />
                )}
            </AnimatePresence>

            {!showIntro && (
                <motion.div
                    className="bg-cyber-black min-h-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <Navbar />
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Certifications />
                    <Contact />
                    <Footer />
                </motion.div>
            )}
        </>
    );
}

export default App;
