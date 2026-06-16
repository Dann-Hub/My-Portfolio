"use client";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import {
    faGithub, faInstagram,
    faLinkedin,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
    {
        icon: faGithub,
        label: "GitHub",
        href: "https://github.com/Dann-Hub",
    },
    {
        icon: faLinkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/danieloseiboateng5/",
    },
    {
        icon: faXTwitter,
        label: "X",
        href: "https://x.com/MrDanielBoateng",
    },
    {
        icon: faInstagram,
        label: "Instagram",
        href: "https://www.instagram.com/danielboateng5/",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-screen overflow-hidden bg-[#07152d] py-32">
            {/* Background Blobs */}
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl"/>
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"/>

            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 items-center">

                {/* Header */}
                <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
                        Contact
                    </p>

                    <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-white lg:text-7xl">
                        Let&apos;s Build
                        <span className="block text-yellow-300">
                            Something Amazing.
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
                        Whether you need a developer, cloud engineer, project
                        leader, or technology partner, I am always open to
                        discussing exciting opportunities.
                    </p>
                </div>

                {/* Content */}
                <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.2fr]">

                    {/* Left */}
                    <div className="space-y-6">

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-blue-950">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>

                                <div>
                                    <p className="text-sm text-white/50">
                                        Email
                                    </p>
                                    <p className="text-lg font-semibold text-white">
                                        danieloseiboateng5@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-blue-950">
                                    <FontAwesomeIcon icon={faPhone}/>
                                </div>

                                <div>
                                    <p className="text-sm text-white/50">
                                        Phone
                                    </p>
                                    <p className="text-lg font-semibold text-white">
                                        +233 55 354 6477
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-blue-950">
                                    <FontAwesomeIcon icon={faLocationDot}/>
                                </div>

                                <div>
                                    <p className="text-sm text-white/50">
                                        Location
                                    </p>
                                    <p className="text-lg font-semibold text-white">
                                        Kumasi, Ghana
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex flex-wrap items-center justify-center gap-4 pt-6 ">
                            {socials.map(({icon, label, href}) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:text-yellow-300"
                                    >
                                        <FontAwesomeIcon icon={icon}/>
                                    </a>
                                )
                            )}
                            <div className=" flex justify-center lg:justify-start">
                                <a
                                    href="/download-cv.pdf"
                                    download
                                    className="inline-flex items-center justify-center rounded-2xl bg-red-400 px-5 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                        <div className="grid gap-6 md:grid-cols-2">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-white/40"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-white/40"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-white/40"
                        />

                        <textarea
                            rows={6}
                            placeholder="Tell me about your project..."
                            className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-white/40"
                        />

                        <button
                            className="mt-8 w-full rounded-2xl bg-yellow-400 px-8 py-5 font-semibold uppercase tracking-widest text-blue-950 transition-all duration-300 hover:scale-[1.02]"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}