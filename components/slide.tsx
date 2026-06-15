"use client";

import { motion } from "framer-motion";

export default function Slide({
                                  children,
                              }: {
    children: React.ReactNode;
}) {
    return (
        <section className="relative flex min-h-screen items-center justify-center px-6">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 80,
                    scale: 0.95,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                viewport={{
                    once: true,
                    amount: 0.4,
                }}
                transition={{
                    duration: 1,
                }}
                className="max-w-6xl"
            >
                {children}
            </motion.div>
        </section>
    );
}