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
        <section id="skills" className="relative overflow-hidden px-6 pt-8 pb-12 sm:pt-12 sm:pb-16">

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
                        className="mb-3 text-sm font-bold uppercase tracking-widest text-[#0C2B27]"
                    >
                        My toolkit
                    </p>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#0C2B27]">
                        Tech Stack
                    </h2>
                </motion.div>

                {/* ── Horizontal Scrolling Marquee ─────────────────────── */}
                <div className="relative flex w-full overflow-hidden mask-image-fade">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                        className="flex w-max gap-4 sm:gap-6 pr-4 sm:pr-6"
                    >
                        {[...skills, ...skills].map((skill, index) => (
                            <div
                                key={`${skill.name}-${index}`}
                                className="group flex cursor-pointer items-center gap-2 sm:gap-4 rounded-full bg-white px-3 sm:px-6 py-2 sm:py-4 text-[10px] sm:text-sm font-bold text-[#0C2B27] shadow-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg border-2 border-transparent hover:border-[#C4FF00] min-w-max"
                            >
                                <div className="flex h-6 w-6 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#0C2B27] transition-colors duration-300 group-hover:bg-[#C4FF00]">
                                    <skill.icon className="text-[12px] sm:text-lg text-[#C4FF00] transition-colors duration-300 group-hover:text-[#0C2B27]" />
                                </div>
                                <span className="whitespace-nowrap truncate">{skill.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
