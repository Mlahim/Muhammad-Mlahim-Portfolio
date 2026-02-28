"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative overflow-hidden px-6 py-14 sm:py-20"
        >
            {/* Ambient glow */}
            <div
                className="pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-10 blur-[120px]"
                style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
            />

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
                        className="mb-3 text-sm font-medium uppercase tracking-[0.25em]"
                        style={{ color: "var(--accent)" }}
                    >
                        Get to know me
                    </p>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)",
                            }}
                        >
                            About Me
                        </span>
                    </h2>
                </motion.div>

                {/* ── 2-Column Grid ──────────────────────── */}
                <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
                    {/* ── Left: Text ───────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="order-2 md:order-1"
                    >
                        <h3
                            className="mb-5 text-2xl font-bold tracking-tight sm:text-3xl"
                            style={{ color: "var(--foreground)" }}
                        >
                            Building Next-Gen Web Applications
                            <br />
                            <span style={{ color: "var(--accent)" }}>with AI Integration</span>
                        </h3>

                        <div className="space-y-4 text-base leading-relaxed sm:text-lg">
                            <p style={{ color: "var(--muted)" }}>
                                I am a <span className="font-semibold" style={{ color: "var(--accent)" }}>Full Stack Developer</span> with a specialized focus on
                                building <span className="font-semibold" style={{ color: "var(--accent)" }}>AI-powered tools</span> and applications.
                            </p>
                            <p style={{ color: "var(--muted)" }}>
                                My passion lies in bridging the gap between robust web
                                development and <span className="font-semibold" style={{ color: "var(--accent)" }}>artificial intelligence</span>. I don&apos;t just build
                                websites; I engineer intelligent web solutions that leverage
                                the power of AI to solve real-world problems.
                            </p>
                            <p style={{ color: "var(--muted)" }}>
                                Whether it&apos;s creating a custom AI tool from scratch or
                                seamlessly integrating advanced AI models into existing
                                platforms, I handle the entire stack. From backend logic to the
                                frontend interface, I ensure your AI features are not just
                                powerful, but accessible and user-friendly.
                            </p>
                        </div>

                        {/* ── Quick Stats ────────────────────── */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {[
                                { value: "20+", label: "Projects" },
                                { value: "10+", label: "Technologies" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl p-4 text-center transition-colors duration-300"
                                    style={{ backgroundColor: "var(--card-bg)" }}
                                >
                                    <p
                                        className="text-2xl font-bold sm:text-3xl"
                                        style={{ color: "var(--accent)" }}
                                    >
                                        {stat.value}
                                    </p>
                                    <p
                                        className="mt-1 text-xs font-medium uppercase tracking-wider sm:text-sm"
                                        style={{ color: "var(--muted)" }}
                                    >
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right: Image ─────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="order-1 flex justify-center md:order-2"
                    >
                        <div className="relative">
                            {/* Glow behind image */}
                            <div
                                className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)",
                                }}
                            />

                            {/* Decorative border frame */}
                            <div
                                className="absolute -right-4 -bottom-4 h-full w-full rounded-3xl"
                                style={{
                                    border: "2px solid var(--accent)",
                                    opacity: 0.2,
                                }}
                            />

                            {/* Image container */}
                            <div
                                className="relative h-[400px] w-full max-w-[320px] overflow-hidden rounded-3xl md:h-[480px] md:max-w-[380px]"
                                style={{
                                    boxShadow: "0 20px 60px rgba(124, 58, 237, 0.2)",
                                    border: "1px solid rgba(124, 58, 237, 0.3)",
                                }}
                            >


                                {/* Profile Image */}
                                <Image
                                    src="/image_with_bd.png"
                                    alt="Muhammad Mlahim - About Me"
                                    width={400}
                                    height={500}
                                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
