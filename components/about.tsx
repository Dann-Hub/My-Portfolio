"use client";

import Image from "next/image";


export default function About() {
    return (
        <section id="about" className="min-h-screen relative overflow-hidden py-32">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="font-bold font-heading text-4xl ">
                        About Me
                    </h1>
                    <div className="mx-auto mt-5 h-0.5 w-24 rounded-full bg-accent-yellow"/>
                </div>
            </div>

            <div
                className="mx-auto max-w-6xl  px-6 grid grid-cols-1 justify-items-center gap-12 mt-14 lg:grid-cols-[7fr_3fr] lg:justify-items-stretch">
                <div className="order-2 text-center lg:order-1 lg:text-left">
                    <div className="">
                        <div className="justify-items-start">
                            <h2 className="font-bold font-heading text-2xl ">
                                Engineering the Future, Cloud- <br/>Focused and Constantly Evolving.
                            </h2>
                            <div className="mx-auto mt-5 h-0.5 w-20 rounded-full bg-accent-yellow lg:mx-0" />
                        </div>
                        <div className="grid lg:grid-cols-2 gap-12 mt-9 text-justify leading-loose">
                            <div className=" ">
                                <p>
                                    I am a results-oriented professional with a strong foundation in
                                    Electrical/Electronic
                                    Engineering,
                                    holding a BSc in the field, complemented by experience in Systems
                                    Management.<br/><br/>
                                    From serving as a District Manager for the Ghana Statistical Service to leading
                                    projects
                                    for the Ghana
                                    Institution of Engineering (Students’ Chapter), I have balanced high-level
                                    operational
                                    strategy with hands-on
                                    technical execution.
                                </p>
                            </div>
                            <div className="">
                                <p>Now, as a Certified AWS Cloud Practitioner with a focus on Python-driven automation,
                                    I am seeking to leverage my leadership experience and technical versatility to
                                    contribute to forward-thinking
                                    engineering projects.
                                </p>
                            </div>
                        </div>
                        <div className="relative mt-9 flex justify-center lg:justify-start">
                            <a href="/contact"
                               className="inline-flex items-center justify-center rounded-2xl bg-blue-950 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
                <div className="order-1 flex justify-center lg:order-2">
                    <div className="flex bg-blue-950 rounded-2xl self-center h-130">
                        <Image
                            src="/images/pic1.JPG"
                            alt="daniel picture"
                            width={560}
                            height={500}
                            className="h-110 w-[110%] object-cover rounded-2xl -ml-5 self-center"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}