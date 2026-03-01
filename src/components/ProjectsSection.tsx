"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

/* ── Project Data ─────────────────────────────────── */
const projects = [
    {
        title: "AI Text to Speech Tool",
        description:
            "A professional AI-powered Text to Speech generator featuring 200+ neural voices, real-time synthesis, and MP3 download. Built with a modern, responsive UI.",
        tags: ["Next.js", "TypeScript", "AI", "Tailwind"],
        link: "https://text-to-speech-ai-tool.vercel.app/",
        github: "#",
    },
    {
        title: "AI Chat Application",
        description:
            "An intelligent conversational interface powered by GPT APIs, featuring streaming responses, chat history, and markdown rendering.",
        tags: ["React", "Node.js", "OpenAI", "Tailwind"],
        link: "#",
        github: "#",
    },
    {
        title: "Task Management App",
        description:
            "A collaborative project management tool with drag-and-drop Kanban boards, real-time updates, and team workspaces.",
        tags: ["Next.js", "Socket.io", "MongoDB", "Framer Motion"],
        link: "#",
        github: "#",
    },
    {
        title: "Portfolio Website",
        description:
            "A modern, responsive developer portfolio built with cutting-edge web technologies, smooth animations, and dark mode support.",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        link: "#",
        github: "#",
    },
    {
        title: "Fitness Tracker",
        description:
            "A mobile-first fitness application that tracks workouts, visualizes progress with charts, and provides personalized routines.",
        tags: ["React Native", "Firebase", "Chart.js"],
        link: "#",
        github: "#",
    },
    {
        title: "Real-time Dashboard",
        description:
            "A data visualization dashboard with live-updating charts, WebSocket feeds, and customizable widget layouts.",
        tags: ["React", "D3.js", "WebSocket", "Express"],
        link: "#",
        github: "#",
    },
];

/* ── Card Component ───────────────────────────────── */
function ProjectCard({
    project,
    index,
}: {
    project: (typeof projects)[0];
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 sm:p-7"
            style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--nav-border)",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                    "0 16px 48px rgba(124, 58, 237, 0.18)";
                e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.25)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--nav-border)";
            }}
        >
            {/* ── Top row: number + links ─────────────── */}
            <div className="mb-5 flex items-center justify-between">
                <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "var(--accent)" }}
                >
                    Project {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-3">
                    {project.github && (
                        <a
                            href={project.github}
                            aria-label="GitHub"
                            className="transition-colors duration-200 hover:text-[var(--accent)]"
                            style={{ color: "var(--muted)" }}
                        >
                            <Github size={18} />
                        </a>
                    )}
                    {project.link && (
                        <a
                            href={project.link}
                            aria-label="Live demo"
                            className="transition-colors duration-200 hover:text-[var(--accent)]"
                            style={{ color: "var(--muted)" }}
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>

            {/* ── Title ───────────────────────────────── */}
            <h3
                className="mb-3 text-lg font-bold tracking-tight sm:text-xl"
                style={{ color: "var(--foreground)" }}
            >
                {project.title}
            </h3>

            {/* ── Description ─────────────────────────── */}
            <p
                className="mb-6 flex-1 text-sm leading-relaxed sm:text-base"
                style={{ color: "var(--muted)" }}
            >
                {project.description}
            </p>

            {/* ── Tags ─────────────────────────────────── */}
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                            backgroundColor: "rgba(124, 58, 237, 0.12)",
                            color: "var(--accent)",
                            border: "1px solid rgba(124, 58, 237, 0.15)",
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

/* ── Section ──────────────────────────────────────── */
export default function ProjectsSection() {
    return (
        <section id="projects" className="relative overflow-hidden px-6 py-14 sm:py-20">
            {/* Ambient glow */}
            <div
                className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
                style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }}
            />

            <div className="mx-auto max-w-6xl">
                {/* ── Heading ──────────────────────────── */}
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
                        What I&apos;ve built
                    </p>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)",
                            }}
                        >
                            Projects
                        </span>
                    </h2>
                </motion.div>

                {/* ── Grid ─────────────────────────────── */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
