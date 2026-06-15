"use client";

const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Git",
    "Linux",
    "Tailwind",
    "AWS",
];

export default function Skills() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-40">
            <h2 className="text-5xl font-black mb-16">
                Technical Expertise
            </h2>

            <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-lg hover:bg-yellow-400 hover:text-black transition"
                    >
            {skill}
          </span>
                ))}
            </div>
        </section>
    );
}