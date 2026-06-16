"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faCode,
    faBolt,
    faUserGear,
} from "@fortawesome/free-solid-svg-icons";


export default function Skills() {
    return (
        <section id="about" className="min-h-screen relative overflow-hidden bg-[#e8ecf2]/40 py-32">
            <div className="max-w-6xl mx-auto text-center items-center justify-center -mt-20">
                <h2 className="font-heading font-bold text-4xl leading-10">Skills</h2>
                <div className="mx-auto mt-5 h-0.5 w-18 rounded-full bg-accent-yellow"/>

                <div className="grid gap-14 lg:grid-cols-3 items-center justify-center mt-10">
                    <div className="relative flex h-full flex-col gap-5 items-center rounded-3xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex h-17 w-17 items-center justify-center border-3 border-blue-950/40 rounded-full bg-[#e8ecf2]/40">
                            <FontAwesomeIcon
                                icon={faCode}
                                className="text-4xl text-accent-yellow"
                            />
                        </div>
                        <div>
                            <h3 className="font-heading text-2xl font-bold mb-3">
                                Software Engineering
                            </h3>

                            <p className="text-gray-600 mb-3 leading-relaxed text-justify">
                                Building secure, scalable, and user-focused applications while leveraging modern frameworks,
                                cloud technologies, and efficient development workflows.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Python</span>
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">React</span>
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Next.js</span>
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">TypeScript</span>
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">JavaScript</span>
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Tailwind CSS</span>
                        </div>
                        <div className="mt-auto flex justify-center pt-6">
                            <div className="h-7 w-7 rounded-full border-3 border-blue-950/40 bg-accent-yellow" />
                        </div>
                    </div>

                    <div className="relative flex h-full flex-col gap-5 items-center rounded-3xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex h-17 w-17 items-center justify-center border-3 border-blue-950/40 rounded-full bg-[#e8ecf2]/40">
                            <FontAwesomeIcon
                                icon={faBolt}
                                className="text-4xl text-accent-yellow"
                            />
                        </div>
                        <div>
                            <h3 className="font-heading text-2xl mb-3 font-bold">
                                Electrical Engineering
                            </h3>

                            <p className="text-gray-600 mb-3 leading-relaxed text-justify">
                                Designing, analyzing, and optimizing electrical and electronic systems through
                                innovative engineering principles and practical problem-solving.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">High Voltage Engineering</span>
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Fault Diagnosis/Troubleshooting</span>
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Power Transmission</span>
                        </div>
                        <div className="mt-auto flex justify-center pt-6">
                            <div className="h-7 w-7 rounded-full border-3 border-blue-950/40 bg-accent-yellow" />
                        </div>
                    </div>

                    <div className="relative flex h-full flex-col gap-5 items-center rounded-3xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex h-17 w-17 items-center justify-center border-3 border-blue-950/40 rounded-full bg-[#e8ecf2]/40">
                            <FontAwesomeIcon
                                icon={faUserGear}
                                className="text-4xl text-accent-yellow"
                            />
                        </div>
                        <div>
                            <h3 className="font-heading text-2xl mb-3 font-bold">
                                Leadership/Management
                            </h3>

                            <p className="text-gray-600 mb-3 leading-relaxed text-justify">
                                Leading teams, coordinating projects, and driving strategic initiatives to achieve organizational
                                goals and deliver measurable results.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Project Management</span>
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Strategic Planning</span>
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Resource Management</span>
                        </div>
                        <div className="mt-auto flex justify-center pt-6">
                            <div className="h-7 w-7 rounded-full border-3 border-blue-950/40 bg-accent-yellow" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}