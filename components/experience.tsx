"use client";

import { useState } from "react";

const experiences = {
    vra: {
        company: "Volta River Authority",
        role: "Intern Engineer",
        period: "Oct 2024 – Dec 2024",
        icon: "⚡",
        points: [
            "Electrical installation and maintenance.",
            "Fault diagnosis and troubleshooting.",
            "Distribution system support.",
            "Circuit testing and inspections.",
        ],
    },

    uenr: {
        company: "UENR",
        role: "National Service Personnel",
        period: "Nov 2022 – Oct 2023",
        icon: "🎓",
        points: [
            "Electrical maintenance activities.",
            "Engineering operational support.",
            "Equipment inspections.",
            "Control system troubleshooting.",
        ],
    },

    gss: {
        company: "Ghana Statistical Service",
        role: "District IT Officer",
        period: "Jun 2021 – Oct 2021",
        icon: "💻",
        points: [
            "Technical support and troubleshooting.",
            "User training and guidance.",
            "Hardware and software maintenance.",
            "IT operations management.",
        ],
    },

    leadership: {
        company: "Leadership Experience",
        role: "Projects Manager & Council Secretary",
        period: "2024 – Present",
        icon: "🚀",
        points: [
            "Managed engineering projects.",
            "Coordinated student initiatives.",
            "Led technical teams.",
            "Organized engineering programs.",
        ],
    },
};

export function Experience() {
    const [active, setActive] =
        useState<keyof typeof experiences>("vra");

    const exp = experiences[active];

    return (
        <section id="experience" className="bg-background py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
                        Experience
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        Organizations where I've built expertise,
                        leadership, and technical excellence.
                    </p>
                </div>

                {/* Companies */}
                <div className="mt-16 flex flex-wrap justify-center gap-4">

                    {Object.entries(experiences).map(([key, item]) => (
                        <button
                            key={key}
                            onClick={() =>
                                setActive(
                                    key as keyof typeof experiences
                                )
                            }
                            className={`rounded-2xl border px-6 py-4 transition-all duration-300
                            ${
                                active === key
                                    ? "border-primary bg-primary text-white shadow-lg"
                                    : "border-slate-200 bg-white hover:border-primary hover:shadow-md"
                            }`}
                        >
                            <div className="text-3xl">{item.icon}</div>

                            <div className="mt-2 text-sm font-semibold">
                                {item.company}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Details Panel */}
                <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

                    <div className="flex items-center gap-4">
                        <div className="text-5xl">{exp.icon}</div>

                        <div>
                            <p className="text-sm font-semibold text-primary">
                                {exp.period}
                            </p>

                            <h3 className="text-3xl font-bold text-foreground">
                                {exp.role}
                            </h3>

                            <p className="text-muted-foreground">
                                {exp.company}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {exp.points.map((point) => (
                            <div
                                key={point}
                                className="rounded-xl bg-slate-50 p-4"
                            >
                                {point}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}