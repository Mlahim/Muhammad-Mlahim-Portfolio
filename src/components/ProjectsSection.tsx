"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ── Project Data ─────────────────────────────────── */
const projects = [
    {
        title: "SavourFiesta",
        description:
            "A full-stack MERN based online food ordering website featuring a dynamic menu, real-time cart management, secure checkout, and intuitive user navigation.",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        link: "https://savourfiesta-webapplication.vercel.app/",
        image: "",
    },
    {
        title: "AI Text to Speech Tool",
        description:
            "A professional AI-powered Text to Speech generator featuring 200+ neural voices, real-time synthesis, and MP3 download. Built with a modern, responsive UI.",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        link: "https://text-to-speech-ai-tool.vercel.app/",
        image: "/tts-preview.png",
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
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#0C2B27] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(196,255,0,0.2)] border-2 border-[#0C2B27] hover:border-[#C4FF00]"
        >
            <div>
                <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C4FF00]/80">
                        Project {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-2 text-white/40 transition-all duration-300 group-hover:text-[#C4FF00]">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">View Project</span>
                        <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                </div>

                <h3 className="mb-3 text-xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-[#C4FF00]">
                    {project.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-[#d1d5db]">
                    {project.description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 relative z-20">
                {project.tags.slice(0, 3).map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-[10px] sm:text-[11px] font-bold text-[#0C2B27] bg-[#F6F6F2] transition-colors duration-300 group-hover:bg-[#C4FF00]"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Overlay Link */}
            {project.link && project.link !== "#" && (
                <a href={project.link} target="_blank" rel="noreferrer" className="absolute inset-0 z-10">
                    <span className="sr-only">View {project.title}</span>
                </a>
            )}
        </motion.div>
    );
}

/* ── Section ──────────────────────────────────────── */
export default function ProjectsSection() {
    return (
        <section id="projects" className="relative overflow-hidden px-6 py-8 sm:py-12">

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
                        className="mb-3 text-sm font-bold uppercase tracking-widest text-[#0C2B27]"
                    >
                        What I&apos;ve built
                    </p>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#0C2B27]">
                        Recent Projects
                    </h2>
                </motion.div>

                {/* ── Grid ─────────────────────────────── */}
                <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
