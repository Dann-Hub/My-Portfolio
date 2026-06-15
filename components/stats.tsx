"use client";

import { motion } from "framer-motion";
import Reveal from "./reveal";

const stats = [
    {
        value: "10+",
        label: "Projects",
    },
    {
        value: "5+",
        label: "Technologies",
    },
    {
        value: "100%",
        label: "Commitment",
    },
    {
        value: "∞",
        label: "Learning",
    },
];

export default function Stats() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-32">
            <Reveal>
                <div className="grid md:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            whileHover={{
                                scale: 1.05,
                            }}
                            className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center"
                        >
                            <h3 className="text-6xl font-black text-yellow-400">
                                {stat.value}
                            </h3>

                            <p className="mt-3 text-zinc-400">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}