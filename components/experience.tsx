"use client";

import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    faCode,
    faBolt,
    faUserGear,
} from "@fortawesome/free-solid-svg-icons";


export default function Skills() {
    return (
        <section id="experience" className="min-h-screen relative overflow-hidden bg-[#e8ecf2]/40 py-32">
            <div className="max-w-6xl mx-auto text-center items-center justify-center px-6 ">
                <h2 className="font-heading font-bold text-4xl leading-10">Work Experience</h2>
                <div className="mx-auto mt-5 h-0.5 w-18 rounded-full bg-accent-yellow"/>
            </div>

            <div className="max-w-6xl px-6 mx-auto grid gap-14 lg:grid-cols-2 items-center justify-center mt-10">
                <div className="p-8 gap-20 rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className=" grid lg:grid-cols-[1fr_9fr] gap-5">
                        <div className="relative overflow-hidden h-18 w-18 ">
                            <Image
                                src="/images/vra-logo.png"
                                alt="daniel picture"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div>
                            <h2 className="font-black text-[20px] ">Intern Engineer</h2>
                            <p>Volta River Authority</p>
                            <p className="font-bold ">2024</p>
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <ol className="list-decimal pl-6 space-y-2 text-justify">
                            <li>Install brackets and hangers to support electrical equipment</li>
                            <li>Install, replace and repair lighting fixtures and electrical control and distribution equipment, such as switches, relays and circuit breaker panels</li>
                            <li>Test continuity of circuits using test equipment to ensure compatibility and safety of system, following installation, replacement or repair</li>
                            <li>Troubleshoot and isolate faults in electrical and electronic systems and remove and replace faulty components.</li>
                        </ol>
                    </div>
                    <div className="mt-auto flex justify-center pt-6">
                        <div className="h-1 w-25  bg-accent-yellow" />
                    </div>
                </div>

                <div className="rounded-2xl p-8 gap-20 rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className=" grid lg:grid-cols-[1fr_9fr] gap-5">
                        <div className="relative overflow-hidden h-18 w-18 ">
                            <Image
                                src="/images/uenr-logo.png"
                                alt="daniel picture"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div>
                            <h2 className="font-black text-[20px] ">National Service Personnel</h2>
                            <p>University of Energy and Natural Resources</p>
                            <p className="font-bold ">2022 - 2023</p>
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <ol className="list-decimal pl-6 space-y-2 text-justify">
                            <li>Install brackets and hangers to support electrical equipment</li>
                            <li>Install, replace and repair lighting fixtures and electrical control and distribution equipment, such as switches, relays and circuit breaker panels</li>
                            <li>Test continuity of circuits using test equipment to ensure compatibility and safety of system, following installation, replacement or repair</li>
                            <li>Troubleshoot and isolate faults in electrical and electronic systems and remove and replace faulty components.</li>
                        </ol>
                    </div>
                    <div className="mt-auto flex justify-center pt-6">
                        <div className="h-1 w-25  bg-accent-yellow" />
                    </div>
                </div>

                <div className="rounded-2xl p-8 gap-20 rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className=" grid lg:grid-cols-[1fr_9fr] gap-5">
                        <div className="relative overflow-hidden h-18 w-18 ">
                            <Image
                                src="/images/gss-logo.WEBP"
                                alt="daniel picture"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div>
                            <h2 className="font-black text-[20px] ">IT Support Officer</h2>
                            <p>Ghana Statistical Service</p>
                            <p className="font-bold ">2021</p>
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <ol className="list-decimal pl-6 space-y-2 text-justify">
                            <li>Communicate electronically and in person with computer users experiencing difficulties
                                to determine and document problems experienced</li>
                            <li>Consult user guides, technical manuals and other documents to research and
                                implement solutions</li>
                            <li>Reproduce, diagnose and resolve technical problems encountered by users</li>
                            <li>Collect, organize and maintain problems and solutions log for use by other technical
                                support analysts</li>
                        </ol>
                    </div>
                    <div className="mt-auto flex justify-center pt-6">
                        <div className="h-1 w-25  bg-accent-yellow" />
                    </div>
                </div>

                <div className="rounded-2xl p-8 gap-20 rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className=" grid lg:grid-cols-[1fr_9fr] gap-5">
                        <div className="relative overflow-hidden h-18 w-18 ">
                            <Image
                                src="/images/gss-logo.WEBP"
                                alt="GSS LOGO"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div>
                            <h2 className="font-black text-[20px] ">District Manager</h2>
                            <p>Ghana Statistical Service</p>
                            <p className="font-bold ">2024</p>
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <ol className="list-decimal pl-6 space-y-2 text-justify">
                            <li>Oversee day-to-day operations</li>
                            <li>Design and implement strategies and set goals for data collection.</li>
                            <li>Maintain budgets and optimize expenses.</li>
                            <li>Set policies and processes.</li>
                            <li>Ensure field officers work productively and develop professionally.</li>
                            <li>Oversee recruitment and training of new field officers.</li>
                        </ol>
                    </div>
                    <div className="mt-auto flex justify-center pt-6">
                        <div className="h-1 w-25  bg-accent-yellow" />
                    </div>
                </div>
            </div>

        </section>
    )
}