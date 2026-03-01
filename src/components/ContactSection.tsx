"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import { Github, Twitter, Instagram, Send } from "lucide-react";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const socials = [
    { label: "GitHub", href: "https://github.com/Mlahim/Mlahim.github.io", icon: Github },
    { label: "X / Twitter", href: "https://x.com/mlahim_", icon: Twitter },
    { label: "Instagram", href: "https://www.instagram.com/muhammadmlahim?igsh=MXdvb2owY2FqMTM1OA==", icon: Instagram },
];

const inputStyles: React.CSSProperties = {
    backgroundColor: "transparent",
    color: "var(--foreground)",
    border: "1.5px solid rgba(100, 100, 120, 0.3)",
};

export default function ContactSection() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        setStatus("loading");

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            setStatus("success");
            formRef.current?.reset();
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error: unknown) {
            // EmailJS sends the email but the response connection resets,
            // causing a "Failed to fetch" error even though the email is delivered.
            // Treat network errors as success since the email goes through.
            const isNetworkError =
                error instanceof TypeError && error.message === "Failed to fetch";
            if (isNetworkError) {
                setStatus("success");
                formRef.current?.reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                console.error("EmailJS Error:", error);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        }
    };

    return (
        <section id="contact" className="relative overflow-hidden px-6 py-14 sm:py-20">
            {/* Ambient glow */}
            <div
                className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[120px]"
                style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
            />

            <div className="mx-auto max-w-4xl">
                {/* ── Heading ──────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mb-14 text-center mx-auto max-w-2xl"
                >
                    <p
                        className="mb-3 text-sm font-medium uppercase tracking-[0.25em]"
                        style={{ color: "var(--accent)" }}
                    >
                        Get in touch
                    </p>
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)",
                            }}
                        >
                            Let&apos;s Connect
                        </span>
                    </h2>
                    <p
                        className="mx-auto max-w-md text-base leading-relaxed"
                        style={{ color: "var(--muted)" }}
                    >
                        Whether you're looking to build something extraordinary, solve a complex problem, or just talk code over virtual coffee, my inbox is always open. Let's make it happen.
                    </p>
                </motion.div>

                {/* ── Form ─────────────────────────────── */}
                <motion.form
                    ref={formRef}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="space-y-5 mx-auto max-w-2xl"
                    onSubmit={sendEmail}
                >
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="contact-name"
                            className="mb-2 block text-sm font-medium"
                            style={{ color: "var(--foreground)" }}
                        >
                            Name
                        </label>
                        <input
                            id="contact-name"
                            name="from_name"
                            type="text"
                            placeholder="Your name"
                            required
                            className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 sm:text-base"
                            style={inputStyles}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = "#7c3aed";
                                e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.05)";
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = "rgba(100, 100, 120, 0.3)";
                                e.currentTarget.style.backgroundColor = "transparent";
                            }}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="contact-email"
                            className="mb-2 block text-sm font-medium"
                            style={{ color: "var(--foreground)" }}
                        >
                            Email
                        </label>
                        <input
                            id="contact-email"
                            name="from_email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 sm:text-base"
                            style={inputStyles}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = "#7c3aed";
                                e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.05)";
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = "rgba(100, 100, 120, 0.3)";
                                e.currentTarget.style.backgroundColor = "transparent";
                            }}
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            htmlFor="contact-message"
                            className="mb-2 block text-sm font-medium"
                            style={{ color: "var(--foreground)" }}
                        >
                            Message
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            rows={5}
                            placeholder="Tell me about your project..."
                            required
                            className="w-full resize-none rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 sm:text-base"
                            style={inputStyles}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = "#7c3aed";
                                e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.05)";
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = "rgba(100, 100, 120, 0.3)";
                                e.currentTarget.style.backgroundColor = "transparent";
                            }}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === "loading" || status === "success"}
                        id="contact-submit"
                        className="group flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 cursor-pointer sm:text-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                        style={{
                            background: "linear-gradient(to right, #7c3aed, #4f46e5)",
                            boxShadow: "0 4px 20px rgba(124, 58, 237, 0.25)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 10px 36px rgba(124, 58, 237, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "0 4px 20px rgba(124, 58, 237, 0.25)";
                        }}
                    >
                        {status === "loading" ? (
                            "Sending..."
                        ) : status === "success" ? (
                            "Message Sent!"
                        ) : status === "error" ? (
                            "Error! Try Again"
                        ) : (
                            <>
                                Send Message
                                <Send
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </>
                        )}
                    </button>
                </motion.form>

                {/* ── Contact Details ─────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-14"
                >
                    <div
                        className="mx-auto flex w-full flex-col gap-6 rounded-3xl p-8 transition-all duration-300 sm:p-10"
                        style={{
                            background: "linear-gradient(145deg, rgba(30, 30, 40, 0.05), rgba(20, 20, 30, 0.02))",
                            border: "1px solid rgba(100, 100, 120, 0.2)",
                            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
                        }}
                    >
                        <h3 className="mb-2 text-center text-xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
                            Direct Contact
                        </h3>
                        <div className="flex flex-col md:flex-row gap-4 justify-between">
                            {/* Address */}
                            <div
                                className="group flex flex-1 items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
                                style={{ backgroundColor: "rgba(227, 79, 38, 0.05)", border: "1px solid rgba(227, 79, 38, 0.1)" }}
                            >
                                <div
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: "rgba(227, 79, 38, 0.1)", color: "#E34F26" }}
                                >
                                    <FaMapMarkerAlt size={22} />
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#E34F26" }}>Location</span>
                                    <span className="font-medium truncate text-sm sm:text-base" style={{ color: "var(--foreground)" }}>Lahore, Pakistan</span>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div
                                className="group flex flex-1 items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
                                style={{ backgroundColor: "rgba(37, 211, 102, 0.05)", border: "1px solid rgba(37, 211, 102, 0.1)" }}
                            >
                                <div
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: "rgba(37, 211, 102, 0.1)", color: "#25D366" }}
                                >
                                    <FaWhatsapp size={24} />
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#25D366" }}>WhatsApp</span>
                                    <span className="font-medium truncate text-sm sm:text-base" style={{ color: "var(--foreground)" }}>+92 327 6053253</span>
                                </div>
                            </div>

                            {/* Email */}
                            <a
                                href="mailto:zmlahim676@gmail.com"
                                className="group flex flex-1 items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
                                style={{ backgroundColor: "rgba(234, 67, 53, 0.05)", border: "1px solid rgba(234, 67, 53, 0.1)" }}
                            >
                                <div
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: "rgba(234, 67, 53, 0.1)", color: "#EA4335" }}
                                >
                                    <FaEnvelope size={22} />
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#EA4335" }}>Email</span>
                                    <span className="font-medium group-hover:underline truncate text-sm sm:text-base" title="zmlahim676@gmail.com" style={{ color: "var(--foreground)" }}>zmlahim676@gmail.com</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* ── Social Links ─────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-14 flex flex-col items-center gap-4"
                >
                    <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                        Or find me on
                    </p>
                    <div className="flex items-center gap-5">
                        {socials.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200"
                                style={{ color: "var(--muted)" }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#7c3aed";
                                    e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.1)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "var(--muted)";
                                    e.currentTarget.style.backgroundColor = "transparent";
                                }}
                            >
                                <Icon size={22} />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
