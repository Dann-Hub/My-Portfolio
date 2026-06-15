"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-x-hidden py-20 md:py-32"
        >
            {/* Section Heading */}
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <h1 className="font-heading text-4xl font-bold md:text-5xl">
                        About Me
                    </h1>

                    <div className="mx-auto mt-5 h-0.5 w-24 rounded-full bg-accent-yellow" />
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[7fr_3fr]">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <h2 className="font-heading text-2xl font-bold leading-tight md:text-3xl">
                            Engineering the Future,
                            <br />
                            Cloud-Focused and Constantly Evolving.
                        </h2>

                        <div className="mt-5 h-0.5 w-20 rounded-full bg-accent-yellow" />
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-8 text-justify leading-8 lg:grid-cols-2">
                        <div>
                            <p>
                                I am a results-oriented professional with a
                                strong foundation in Electrical/Electronic
                                Engineering, holding a BSc in the field,
                                complemented by experience in Systems
                                Management.
                                <br />
                                <br />
                                From serving as a District Manager for the
                                Ghana Statistical Service to leading projects
                                for the Ghana Institution of Engineering
                                (Students’ Chapter), I have balanced
                                high-level operational strategy with
                                hands-on technical execution.
                            </p>
                        </div>

                        <div>
                            <p>
                                Now, as a Certified AWS Cloud Practitioner
                                with a focus on Python-driven automation,
                                I am seeking to leverage my leadership
                                experience and technical versatility to
                                contribute to forward-thinking engineering
                                projects.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-2xl bg-blue-950 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-900"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="self-center"
                >
                    <div className="overflow-hidden rounded-3xl bg-blue-950 shadow-2xl">
                        <Image
                            src="/images/pic1.JPG"
                            alt="Daniel Boateng"
                            width={560}
                            height={700}
                            className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[550px]"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}