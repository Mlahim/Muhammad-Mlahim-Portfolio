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
                            <span className="text-[#0C2B27] inline-block mt-2 sm:mt-1 border-b-4 border-[#C4FF00]">with AI & DevOps Engineering</span>
                        </h3>

                        <div className="space-y-6 text-base leading-relaxed sm:text-lg text-[#0C2B27]/80 max-w-3xl mx-auto">
                            <p>
                                I am a versatile <span className="font-bold text-[#0C2B27]">Software Engineer, Full Stack Developer & DevOps Engineer</span> with a passion for architecting scalable applications and intelligent AI-powered solutions.
                            </p>
                            <p>
                                My expertise spans the entire software lifecycle—from engineering dynamic frontend interfaces and robust MERN backends to containerizing workloads with <span className="font-bold text-[#0C2B27]">Docker</span> and building streamlined <span className="font-bold text-[#0C2B27]">CI/CD pipelines</span> for seamless releases.
                            </p>
                            <p>
                                By bridging full-stack development, artificial intelligence, and cloud operations, I don&apos;t just build web tools—I deploy resilient, high-availability cloud environments (Vercel, Render, Microsoft Azure) engineered to perform and scale effortlessly under load.
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
