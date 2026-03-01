"use client";

import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaFigma, FaPython } from "react-icons/fa";
import { SiExpress, SiMongodb, SiHuggingface, SiFastapi, SiFlask, SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#E0E0E0" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#E34F26" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "Flask", icon: SiFlask, color: "#4DB6AC" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
    { name: "Figma", icon: FaFigma, color: "#F24E1E" },
];

/* ── Variants ─────────────────────────────────────── */
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.07,
        },
    },
};

const pillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 350,
            damping: 20,
        },
    },
};

export default function SkillsSection() {
    return (
        <section id="skills" className="relative overflow-hidden px-6 py-14 sm:py-20">
            {/* Ambient glow */}
            <div
                className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-10 blur-[120px]"
                style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
            />

            <div className="mx-auto max-w-4xl">
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
                        My toolkit
                    </p>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)",
                            }}
                        >
                            Tech Stack
                        </span>
                    </h2>
                </motion.div>

                {/* ── Skill Pills ─────────────────────── */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={pillVariants}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: `0 0 24px ${skill.color}40`,
                                borderColor: `${skill.color}80`,
                            }}
                            className="flex cursor-default items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 sm:text-base"
                            style={{
                                backgroundColor: `${skill.color}15`,
                                border: `1px solid ${skill.color}30`,
                            }}
                        >
                            <skill.icon className="text-xl" style={{ color: skill.color }} />
                            <span>{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
