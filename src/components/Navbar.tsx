"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

/* ─── Framer Motion Variants ────────────────────── */
const mobileMenuVariants: Variants = {
    closed: {
        x: "100%",
        transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
        x: 0,
        transition: { type: "spring", stiffness: 300, damping: 30 },
    },
};

const linkVariants = {
    closed: { opacity: 0, x: 40 },
    open: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 24,
            delay: 0.08 * i,
        },
    }),
};

const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
};

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

    // Track scroll for elevated shadow
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Intersection Observer to detect active section
    useEffect(() => {
        const sectionIds = ["home", "about", "projects", "skills", "contact"];
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${id}`);
                    }
                },
                { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        // Strict fallback for Home when at the absolute top
        const handleScrollTopFallback = () => {
            if (window.scrollY < 100) {
                setActiveSection("#home");
            }
        };
        window.addEventListener("scroll", handleScrollTopFallback, { passive: true });

        return () => {
            observers.forEach((o) => o.disconnect());
            window.removeEventListener("scroll", handleScrollTopFallback);
        };
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            <nav
                id="main-navbar"
                className={`
          fixed top-0 left-0 right-0 z-50
          transition-colors duration-300
          ${scrolled && !mobileOpen ? "bg-[#0C2B27] shadow-lg" : "bg-transparent"}
        `}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
                    {/* ── Logo ─────────────────────────────── */}
                    <a
                        href="#home"
                        id="navbar-logo"
                        className={`group relative flex items-center gap-3 text-xl tracking-tight select-none sm:text-2xl transition-opacity duration-300 ${mobileOpen ? "opacity-0 md:opacity-100" : "opacity-100"}`}
                    >
                        {/* Geometric 'M' Monogram */}
                        <div className="relative flex h-10 w-10 items-center justify-center bg-[#0C2B27] overflow-hidden rounded shadow-sm border border-[#C4FF00]/20">
                            <span className="absolute inset-0 flex items-center justify-center font-bold text-[#F6F6F2] font-sans text-xl">
                                M
                            </span>
                            <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-[#C4FF00]" />
                        </div>
                        {/* Text Logo */}
                        <div className="flex flex-col leading-none uppercase" style={{ fontFamily: "var(--font-sans)" }}>
                            <span className="text-[1.1rem] font-extrabold text-[#F6F6F2] tracking-widest">
                                Muhammad
                            </span>
                            <span className="text-[0.75rem] font-bold text-[#C4FF00] tracking-widest mt-0.5">
                                Mlahim
                            </span>
                        </div>
                    </a>

                    {/* ── Desktop Links ────────────────────── */}
                    <ul className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href;
                            return (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={`
                        group relative rounded-lg px-4 py-2 text-sm font-bold tracking-wide
                        transition-colors duration-300 ease-out
                        hover:text-[#C4FF00]
                        ${isActive ? "text-[#C4FF00]" : "text-[#F6F6F2]"}
                      `}
                                    >
                                        {link.label}
                                        <span
                                            className={`absolute bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full transition-all duration-300 ease-out ${isActive ? "w-1/2" : "w-0 group-hover:w-1/2"}`}
                                            style={{ backgroundColor: "#C4FF00" }}
                                        />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* ── Actions ──────────────────────────── */}
                    <div className="flex items-center gap-4">
                        {/* CTA Button */}
                        <a
                            href="#contact"
                            className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#C4FF00] text-[#0C2B27] text-sm font-bold tracking-wide transition-transform hover:-translate-y-0.5"
                        >
                            Hire Me
                        </a>



                        {/* Mobile Hamburger */}
                        <button
                            id="mobile-menu-toggle"
                            onClick={() => setMobileOpen((o) => !o)}
                            aria-label="Toggle mobile menu"
                            className="
                relative z-50 flex h-10 w-10 items-center justify-center
                rounded-xl transition-colors duration-200
                hover:bg-[var(--nav-border)]
                md:hidden
                cursor-pointer
              "
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {mobileOpen ? (
                                    <motion.span
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute"
                                    >
                                        <X size={22} style={{ color: "#F6F6F2" }} />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute"
                                    >
                                        <Menu size={22} style={{ color: "#F6F6F2" }} />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </nav>

            {/* ── Mobile Slide-in Menu ─────────────────── */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop overlay */}
                        <motion.div
                            key="overlay"
                            variants={overlayVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed inset-0 z-40 bg-black/50 md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Slide-in panel */}
                        <motion.div
                            key="mobile-panel"
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="
                fixed top-0 right-0 z-40 flex h-full w-72
                flex-col pt-24 pb-8 px-8
                md:hidden
              "
                            style={{
                                backgroundColor: "#0C2B27",
                                borderLeft: "1px solid rgba(196, 255, 0, 0.1)",
                            }}
                        >
                            <ul className="flex flex-col gap-2">
                                {navLinks.map((link, i) => (
                                    <motion.li
                                        key={link.href}
                                        custom={i}
                                        variants={linkVariants}
                                        initial="closed"
                                        animate="open"
                                    >
                                        <a
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={`
                        flex items-center rounded-xl px-4 py-3
                        text-base font-bold transition-all duration-200
                        hover:bg-[#0C2B27] hover:text-[#C4FF00]
                        ${activeSection === link.href ? "text-[#C4FF00] bg-[#0C2B27]" : "text-[#F6F6F2]"}
                      `}
                                        >
                                            {link.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Bottom accent bar */}
                            <div className="mt-auto">
                                <div
                                    className="h-1 w-16 rounded-full bg-[#C4FF00]"
                                />
                                <p
                                    className="mt-3 text-xs"
                                    style={{ color: "#F6F6F2" }}
                                >
                                    © 2026 Mlahim. All rights reserved.
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Spacer to offset fixed navbar */}
            <div className="h-16" />
        </>
    );
}
