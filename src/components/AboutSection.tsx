"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative overflow-hidden px-6 pt-24 pb-8 md:pt-28 md:pb-12"
        >

            <div className="mx-auto max-w-6xl">
                {/* ── Section Label ───────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <p
                        className="mb-3 text-sm font-bold uppercase tracking-widest text-[#0C2B27]"
                    >
                        Get to know me
                    </p>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#0C2B27]">
                        About Me
                    </h2>
                </motion.div>

                {/* ── Content ──────────────────────── */}
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <h3
                            className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl sm:leading-snug text-[#0C2B27]"
                        >
                            Building Next-Gen Web Applications
                            <br className="hidden sm:block" />
                            <span className="text-[#0C2B27] inline-block mt-2 sm:mt-1 border-b-4 border-[#C4FF00]">with AI Integration</span>
                        </h3>

                        <div className="space-y-6 text-base leading-relaxed sm:text-lg text-[#0C2B27]/80 max-w-3xl mx-auto">
                            <p>
                                I am a <span className="font-bold text-[#0C2B27]">Full Stack Developer</span> with a specialized focus on
                                building <span className="font-bold text-[#0C2B27]">AI-powered tools</span> and applications.
                            </p>
                            <p>
                                My passion lies in bridging the gap between robust web
                                development and <span className="font-bold text-[#0C2B27]">artificial intelligence</span>. I don&apos;t just build
                                websites; I engineer intelligent web solutions that leverage
                                the power of AI to solve real-world problems.
                            </p>
                            <p>
                                Whether it&apos;s creating a custom AI tool from scratch or
                                seamlessly integrating advanced AI models into existing
                                platforms, I handle the entire stack. From backend logic to the
                                frontend interface, I ensure your AI features are not just
                                powerful, but accessible and user-friendly.
                            </p>
                        </div>

                        {/* ── Quick Stats ────────────────────── */}
                        <div className="mt-12 grid grid-cols-2 gap-4 max-w-md mx-auto">
                            {[
                                { value: "20+", label: "Projects" },
                                { value: "10+", label: "Technologies" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-3xl p-6 text-center transition-all duration-300 bg-white shadow-sm border-2 border-[#0C2B27]/5 hover:border-[#C4FF00] hover:-translate-y-1"
                                >
                                    <p
                                        className="text-3xl font-extrabold sm:text-4xl text-[#0C2B27]"
                                    >
                                        {stat.value}
                                    </p>
                                    <p
                                        className="mt-2 text-xs font-bold uppercase tracking-widest text-[#0C2B27]/60"
                                    >
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
