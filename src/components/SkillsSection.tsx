"use client";

import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaFigma, FaPython, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiHuggingface, SiFastapi, SiFlask, SiNextdotjs, SiVercel, SiRender } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

const skillCategories = [
    {
        title: "Frontend Development",
        skills: [
            { name: "HTML", icon: FaHtml5 },
            { name: "CSS", icon: FaCss3Alt },
            { name: "JavaScript", icon: FaJsSquare },
            { name: "React.js", icon: FaReact },
            { name: "React Native", icon: TbBrandReactNative },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Figma", icon: FaFigma },
        ]
    },
    {
        title: "Backend & Database",
        skills: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
            { name: "Python", icon: FaPython },
            { name: "FastAPI", icon: SiFastapi },
            { name: "Flask", icon: SiFlask },
            { name: "MongoDB", icon: SiMongodb },
        ]
    },
    {
        title: "AI & Cloud DevOps",
        skills: [
            { name: "Git", icon: FaGitAlt },
            { name: "GitHub", icon: FaGithub },
            { name: "Docker", icon: FaDocker },
            { name: "Hugging Face", icon: SiHuggingface },
            { name: "Microsoft Azure", icon: VscAzure },
            { name: "Vercel", icon: SiVercel },
            { name: "Render", icon: SiRender },
        ]
    }
];

export default function SkillsSection() {
    return (
        <section id="skills" className="relative overflow-hidden px-6 pt-8 pb-12 sm:pt-12 sm:pb-16 bg-[#F6F6F2]">
            <div className="mx-auto max-w-6xl">
                {/* ── Heading ──────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#0C2B27]">
                        My toolkit
                    </p>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#0C2B27]">
                        Tech Stack
                    </h2>
                </motion.div>

                {/* ── Category Grid ────────────────────── */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="rounded-[2rem] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-transparent hover:border-[#0C2B27]/10"
                        >
                            <h3 className="mb-6 text-xl font-extrabold tracking-tight text-[#0C2B27] border-b-4 border-[#0C2B27] pb-2 inline-block">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group flex cursor-default items-center gap-2 rounded-full bg-[#F6F6F2] px-3 py-2 text-xs sm:text-sm font-bold text-[#0C2B27] transition-all duration-300 hover:bg-[#0C2B27] hover:text-white hover:scale-105"
                                    >
                                        <skill.icon className="text-base sm:text-lg text-[#0C2B27] transition-colors duration-300 group-hover:text-[#C4FF00]" />
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
