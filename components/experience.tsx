"use client";

import Reveal from "./reveal";

const timeline = [
    {
        year: "2026",
        title: "Technology Innovator",
        desc: "Building scalable platforms and digital ecosystems.",
    },
    {
        year: "2025",
        title: "Student Leader",
        desc: "Driving impactful initiatives and representing students.",
    },
    {
        year: "2024",
        title: "Full Stack Developer",
        desc: "Developing modern web applications and management systems.",
    },
    {
        year: "2023",
        title: "Software Engineer",
        desc: "Building solutions that improve efficiency and workflows.",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="max-w-5xl mx-auto px-6 py-40"
        >
            <Reveal>
                <h2 className="text-5xl font-black mb-20">
                    Experience
                </h2>
            </Reveal>

            <div className="relative border-l border-white/10 ml-6">
                {timeline.map((item) => (
                    <Reveal key={item.year}>
                        <div className="mb-20 ml-12 relative">
                            <div className="absolute -left-[58px] top-2 h-5 w-5 rounded-full bg-yellow-400" />

                            <span className="text-yellow-400 font-bold">
                {item.year}
              </span>

                            <h3 className="text-3xl font-bold mt-2">
                                {item.title}
                            </h3>

                            <p className="text-zinc-400 mt-3">
                                {item.desc}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}