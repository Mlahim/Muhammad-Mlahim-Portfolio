"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
    "I'm a Software Engineer",
    "I'm a Full Stack Developer",
    "I'm a Software Engineer",
    "I'm a Full Stack Developer"
];

const nameText = "MUHAMMAD MLAHIM";

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedName, setDisplayedName] = useState("");

    // Typewriter effect (Name only, loops every 5 seconds)
    useEffect(() => {
        let typingInterval: NodeJS.Timeout;
        let timeoutId: NodeJS.Timeout;

        const startTyping = () => {
            setDisplayedName("");
            let i = 0;
            
            typingInterval = setInterval(() => {
                if (i <= nameText.length) {
                    setDisplayedName(nameText.slice(0, i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                    // Wait 5 seconds before rewriting
                    timeoutId = setTimeout(() => {
                        startTyping();
                    }, 5000);
                }
            }, 100); // Type speed
        };

        startTyping();

        return () => {
            clearInterval(typingInterval);
            clearTimeout(timeoutId);
        };
    }, []);

    // Carousel interval
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % skills.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative flex flex-col items-center pt-20 sm:pt-32"
            style={{ background: "radial-gradient(ellipse at center 60%, rgba(196,255,0,0.05) 0%, transparent 60%), linear-gradient(180deg, #0C2B27 0%, #0C2B27 40%, #0e3527 100%)" }}
        >
            {/* ── Main Text Stack ─────────────────────────────── */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center w-full pb-10 sm:pb-16">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.7 }}
                    className="mb-8 w-full max-w-4xl mx-auto flex flex-col items-center justify-center font-black tracking-tighter"
                >
                    <div className="mb-2 sm:mb-4 text-[24px] sm:text-5xl lg:text-6xl text-white/90">
                        Hi, I&apos;m
                    </div>
                    <div 
                        className="mb-1 text-[8vw] sm:text-[6vw] lg:text-[5.5rem] xl:text-[6.5rem] leading-none text-white flex items-center justify-center font-black whitespace-nowrap"
                        style={{ minHeight: "1.2em" }}
                    >
                        {displayedName}
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                            className="inline-block w-2 h-[0.85em] ml-2 sm:ml-4 bg-[#C4FF00] align-middle shadow-[0_0_12px_rgba(196,255,0,1)]"
                        />
                    </div>
                </motion.div>

                {/* ── Vertical Scrolling Carousel ───────────────── */}
                <div className="relative h-[80px] sm:h-[90px] w-full flex justify-center mb-6 overflow-hidden">
                    <AnimatePresence>
                        {[0, 1].map((offset) => {
                            const itemIndex = currentIndex + offset;
                            const text = skills[itemIndex % skills.length];

                            // Target states explicitly for "Active" (offset 0) and "Incoming" (offset 1)
                            const yTarget = offset === 0 ? 0 : 40;
                            const opacTarget = offset === 0 ? 1 : 0.6;
                            const scaleTarget = offset === 0 ? 1 : 0.95;
                            const zTarget = offset === 0 ? 30 : 20;

                            return (
                                <motion.div
                                    key={itemIndex}
                                    initial={{ y: offset === 0 ? 40 : 80, opacity: 0, scale: 0.9 }}
                                    animate={{ y: yTarget, opacity: opacTarget, scale: scaleTarget, zIndex: zTarget }}
                                    exit={{ y: -40, opacity: 0, scale: 1.05, zIndex: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="absolute w-full origin-center"
                                >
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide text-white">
                                        {text}
                                    </h2>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* ── Premium Gradient Divider ──────────────────── */}
                <div className="w-full flex justify-center mb-10 sm:mb-12 mt-4">
                    <div className="h-[2px] w-[60%] max-w-[500px] bg-gradient-to-r from-transparent via-[#C4FF00] to-transparent shadow-[0_0_20px_rgba(196,255,0,0.7)] opacity-70" />
                </div>
            </div>

            {/* ── Ambient glow behind card ─────────────────── */}
            <div
                className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[80%] max-w-[800px] opacity-60 blur-[100px]"
                style={{ background: "radial-gradient(ellipse at bottom, #1e6d50 0%, transparent 70%)", zIndex: 15 }}
            />

            {/* ── Floating White Card ──────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="relative z-20 w-full max-w-4xl px-4 sm:px-6 -mb-10 sm:-mb-14"
            >
                <div className="flex flex-col items-center justify-center rounded-[2rem] bg-white p-8 sm:p-14 shadow-2xl text-center">
                    <p className="mb-10 max-w-2xl text-xl sm:text-2xl leading-relaxed text-[#0C2B27] font-medium">
                        Building next-gen <span className="font-extrabold text-[#0C2B27]">web applications</span> with <span className="font-extrabold text-[#0C2B27]">AI integrations</span> to solve real-world problems.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto justify-center">
                        <a
                            href="#projects"
                            className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-[#C4FF00] px-10 text-sm font-bold uppercase tracking-widest text-[#0C2B27] transition-all duration-300 hover:shadow-[0_4px_24px_rgba(196,255,0,0.4)] hover:-translate-y-0.5"
                        >
                            My Work
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-[#0C2B27] px-10 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:shadow-[0_4px_24px_rgba(12,43,39,0.3)] hover:-translate-y-0.5"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
