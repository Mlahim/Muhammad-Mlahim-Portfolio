"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Full Stack Developer", "ML Engineer"];

export default function HeroSection() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative flex min-h-[70vh] flex-col items-center justify-start overflow-hidden px-6 pt-24 text-center sm:pt-32"
        >
            {/* ── Ambient background glow blobs ──────────── */}
            <div
                className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full opacity-20 blur-[100px]"
                style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
            />
            <div
                className="pointer-events-none absolute -bottom-32 -right-32 h-[380px] w-[380px] rounded-full opacity-15 blur-[100px]"
                style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 70%)" }}
            />

            {/* ── Avatar ────────────────────────────────── */}
            <div className="relative mb-8">
                {/* Glow ring behind avatar */}
                <div
                    className="absolute -inset-3 rounded-full opacity-40 blur-xl"
                    style={{
                        background: "linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #a78bfa 100%)",
                    }}
                />
                {/* Avatar container */}
                <div
                    className="relative h-36 w-36 overflow-hidden rounded-full sm:h-44 sm:w-44"
                    style={{
                        border: "3px solid rgba(124, 58, 237, 0.4)",
                        boxShadow: "0 0 40px rgba(124, 58, 237, 0.2)",
                    }}
                >
                    {/* Profile Image */}
                    <Image
                        src="/avatar.jpg"
                        alt="Muhammad Mlahim"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* ── Greeting ──────────────────────────────── */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="mb-2 text-lg font-medium tracking-tight sm:text-xl"
                style={{ color: "var(--muted)" }}
            >
                Hi, I&apos;m
            </motion.p>

            {/* ── Name ─────────────────────────────────────── */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
            >
                <span
                    className="bg-clip-text text-transparent"
                    style={{
                        backgroundImage:
                            "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)",
                    }}
                >
                    Muhammad Mlahim
                </span>
            </motion.h1>

            {/* ── Rotating Role ─────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-6 flex items-center gap-2 text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl"
                style={{ color: "var(--foreground)" }}
            >
                <span>I&apos;m</span>
                <span className="inline-block h-[1.3em] overflow-hidden align-bottom">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={roles[roleIndex]}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="inline-block bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)",
                            }}
                        >
                            {roles[roleIndex]}
                        </motion.span>
                    </AnimatePresence>
                </span>
            </motion.div>

            {/* ── Subtitle ───────────────────────────────── */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-10 max-w-lg text-base leading-relaxed sm:text-lg"
                style={{ color: "var(--muted)" }}
            >
                Crafting beautiful, performant digital experiences with modern
                technologies and thoughtful design.
            </motion.p>

            {/* ── Buttons ────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col gap-4 sm:flex-row"
            >
                {/* Primary — "My Work" with glow */}
                <a
                    href="#projects"
                    id="hero-btn-primary"
                    className="hero-glow-btn group relative inline-flex h-13 items-center justify-center gap-2 rounded-full px-8 text-sm font-semibold text-white transition-all duration-300 sm:text-base"
                    style={{
                        background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)",
                    }}
                >
                    <span className="relative z-10">My Work</span>
                    <svg
                        className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>

                {/* Secondary — "Contact" */}
                <a
                    href="#contact"
                    id="hero-btn-secondary"
                    className="inline-flex h-13 items-center justify-center rounded-full px-8 text-sm font-semibold transition-all duration-300 sm:text-base"
                    style={{
                        color: "var(--foreground)",
                        border: "1.5px solid var(--nav-border)",
                        backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--nav-border)";
                        e.currentTarget.style.color = "var(--foreground)";
                    }}
                >
                    Contact
                </a>
            </motion.div>

        </section>
    );
}
