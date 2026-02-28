"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

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
    const { theme, toggleTheme } = useTheme();
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
                { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
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
          transition-all duration-300
          ${scrolled ? "shadow-lg" : "shadow-none"}
        `}
                style={{
                    backgroundColor: "var(--nav-bg)",
                    backdropFilter: "blur(16px) saturate(180%)",
                    WebkitBackdropFilter: "blur(16px) saturate(180%)",
                    borderBottom: `1px solid var(--nav-border)`,
                }}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
                    {/* ── Logo ─────────────────────────────── */}
                    <a
                        href="#home"
                        id="navbar-logo"
                        className="group relative flex items-center gap-1.5 text-xl tracking-tight select-none sm:text-2xl"
                    >
                        <span
                            className="font-black text-[var(--accent)]"
                            style={{ fontFamily: "var(--font-geist-mono)" }}
                        >
                            {"<"}
                        </span>
                        <div className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-geist-sans)" }}>
                            <span
                                className="font-extrabold bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-80"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to right, #7c3aed 0%, #a78bfa 100%)",
                                }}
                            >
                                Muhammad
                            </span>
                            <span className="font-medium text-[var(--foreground)] transition-colors duration-300 group-hover:text-purple-500">
                                Mlahim
                            </span>
                        </div>
                        <span
                            className="font-black text-[var(--accent)]"
                            style={{ fontFamily: "var(--font-geist-mono)" }}
                        >
                            {"/>"}
                        </span>
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
                        group relative rounded-lg px-4 py-2 text-sm font-medium
                        transition-all duration-300 ease-out
                        hover:text-[var(--accent)]
                        hover:bg-[rgba(124,58,237,0.08)]
                        ${isActive ? "!text-[var(--accent)]" : ""}
                      `}
                                        style={{
                                            color: isActive ? "var(--accent)" : "var(--foreground)",
                                            backgroundColor: isActive ? "rgba(124, 58, 237, 0.08)" : undefined,
                                        }}
                                    >
                                        {link.label}
                                        <span
                                            className={`absolute bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full transition-all duration-300 ease-out ${isActive ? "w-1/2" : "w-0 group-hover:w-1/2"}`}
                                            style={{ backgroundColor: "var(--accent)" }}
                                        />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* ── Actions ──────────────────────────── */}
                    <div className="flex items-center gap-2">
                        {/* Theme Toggle */}
                        <button
                            id="theme-toggle"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="
                relative flex h-10 w-10 items-center justify-center
                rounded-xl transition-colors duration-200
                hover:bg-[var(--nav-border)]
                cursor-pointer
              "
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {theme === "dark" ? (
                                    <motion.span
                                        key="sun"
                                        initial={{ rotate: -90, scale: 0 }}
                                        animate={{ rotate: 0, scale: 1 }}
                                        exit={{ rotate: 90, scale: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="absolute"
                                    >
                                        <Sun size={20} className="text-amber-400" />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="moon"
                                        initial={{ rotate: 90, scale: 0 }}
                                        animate={{ rotate: 0, scale: 1 }}
                                        exit={{ rotate: -90, scale: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="absolute"
                                    >
                                        <Moon size={20} className="text-indigo-500" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>

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
                                        <X size={22} style={{ color: "var(--foreground)" }} />
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
                                        <Menu size={22} style={{ color: "var(--foreground)" }} />
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
                                backgroundColor: "var(--background)",
                                borderLeft: "1px solid var(--nav-border)",
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
                                            className="
                        flex items-center rounded-xl px-4 py-3
                        text-base font-medium transition-all duration-200
                        hover:bg-[var(--nav-border)] hover:text-[var(--accent)]
                      "
                                            style={{
                                                color: activeSection === link.href ? "var(--accent)" : "var(--foreground)",
                                                backgroundColor: activeSection === link.href ? "rgba(124, 58, 237, 0.08)" : undefined,
                                            }}
                                        >
                                            {link.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Bottom accent bar */}
                            <div className="mt-auto">
                                <div
                                    className="h-1 w-16 rounded-full"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(90deg, #7c3aed, #a78bfa, #c4b5fd)",
                                    }}
                                />
                                <p
                                    className="mt-3 text-xs"
                                    style={{ color: "var(--muted)" }}
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
