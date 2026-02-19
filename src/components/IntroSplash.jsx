import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const IntroSplash = ({ onComplete }) => {
    useEffect(() => {
        // Total duration for the soft rise intro is ~1.6s
        const timer = setTimeout(() => {
            onComplete();
        }, 1600);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cyber-black overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <div className="text-center">
                {/* Name - Slides up and fades in */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1] // Apple-style quintic ease out
                    }}
                    className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-[0.2em]"
                >
                    Goli Akash
                </motion.h1>

                {/* Optional subtle tagline fade */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.4,
                        ease: "easeOut"
                    }}
                    className="mt-4 text-electric-blue/70 text-xs sm:text-sm tracking-[0.5em] uppercase font-light"
                >
                    DevOps Engineer
                </motion.p>
            </div>
        </motion.div>
    );
};

export default IntroSplash;
