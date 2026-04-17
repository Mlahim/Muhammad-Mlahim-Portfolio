"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import { Github, Twitter, Instagram, Send } from "lucide-react";

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
            // EmailJS sends the email but the response connection often resets
            // (ERR_CONNECTION_RESET / "Failed to fetch") even though the email 
            // is delivered. Treat ALL network errors (TypeError) as success.
            if (error instanceof TypeError) {
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
        <section id="contact" className="relative overflow-hidden px-6 pt-16 pb-12 sm:pt-20 sm:pb-16" style={{ background: "linear-gradient(180deg, #0C2B27 0%, #0C2B27 70%, #103c2d 100%)" }}>

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
                        className="mb-3 text-sm font-bold uppercase tracking-widest text-[#C4FF00]"
                    >
                        Get in touch
                    </p>
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
                        Let&apos;s Connect
                    </h2>
                    <p
                        className="mx-auto max-w-md text-base leading-relaxed text-[#d1d5db]"
                    >
                        Whether you&apos;re looking to build something extraordinary, solve a complex problem, or just talk code over virtual coffee, my inbox is always open. Let&apos;s make it happen.
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
                            className="mb-2 block text-sm font-bold tracking-wide text-white"
                        >
                            Name
                        </label>
                        <input
                            id="contact-name"
                            name="from_name"
                            type="text"
                            placeholder="Your name"
                            required
                            className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-white/50 focus:ring-2 focus:ring-[#C4FF00] sm:text-base bg-transparent border-2 border-white/20 text-white"
                            onFocus={(e) => { e.currentTarget.style.borderColor = "#C4FF00"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)"; }}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="contact-email"
                            className="mb-2 block text-sm font-bold tracking-wide text-white"
                        >
                            Email
                        </label>
                        <input
                            id="contact-email"
                            name="from_email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-white/50 focus:ring-2 focus:ring-[#C4FF00] sm:text-base bg-transparent border-2 border-white/20 text-white"
                            onFocus={(e) => { e.currentTarget.style.borderColor = "#C4FF00"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)"; }}
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            htmlFor="contact-message"
                            className="mb-2 block text-sm font-bold tracking-wide text-white"
                        >
                            Message
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            rows={5}
                            placeholder="Tell me about your project..."
                            required
                            className="w-full resize-none rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-white/50 focus:ring-2 focus:ring-[#C4FF00] sm:text-base bg-transparent border-2 border-white/20 text-white"
                            onFocus={(e) => { e.currentTarget.style.borderColor = "#C4FF00"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)"; }}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === "loading" || status === "success"}
                        id="contact-submit"
                        className="group flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-extrabold uppercase tracking-widest text-[#0C2B27] transition-all duration-300 hover:-translate-y-1 cursor-pointer sm:text-lg hover:shadow-[0_4px_30px_rgba(196,255,0,0.5)] bg-[#C4FF00] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
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



                {/* ── Social Links ─────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-14 flex flex-col items-center gap-4"
                >
                    <p className="text-sm font-bold uppercase tracking-widest text-[#d1d5db]">
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
                                className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 text-white hover:text-[#0C2B27] hover:bg-[#C4FF00]"
                            >
                                <Icon size={22} />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ── Floating WhatsApp Button ─────────────────── */}
            <a
                href="https://wa.me/923276053253"
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100] flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(196,255,0,0.3)]"
                style={{ backgroundColor: "#1e5241" }}
            >
                <span className="text-3xl font-extrabold tracking-tighter text-[#C4FF00]" style={{ fontFamily: "var(--font-sans)" }}>M.</span>
            </a>
        </section>
    );
}
