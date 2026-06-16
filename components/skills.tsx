"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faCode,

} from "@fortawesome/free-solid-svg-icons";

const socials = [
    {
        // icon: faLaptopCode,
        label: "GitHub",
    },
    {
        // icon: faXTwitter,
        label: "LinkedIn",
    },
    {
        // icon: faXTwitter,
        label: "X",
    },
];

export default function Skills() {
    return (
        <section id="about" className="min-h-screen relative overflow-hidden bg-[#e8ecf2]/40 py-32">
            <div className="max-w-6xl mx-auto text-center items-center justify-center">
                <h2 className="font-heading font-bold text-4xl leading-20">Skills</h2>
                <p className="font-heading font-bold text-2xl">I am a good boy</p>
                <div className="grid gap-14 lg:grid-cols-3 items-center justify-center mt-10">
                    <div className="relative flex h-100 flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e8ecf2]/40">
                            <FontAwesomeIcon
                                icon={faCode}
                                className="text-4xl text-accent-yellow"
                            />
                        </div>

                        <h3 className="mt-2 font-heading text-2xl font-bold">
                            Software Engineering
                        </h3>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Building scalable web applications, APIs,
                            and cloud-native solutions with modern technologies.
                        </p>
                        <div className="absolute rounded-full h-10 w-10 bottom-0 left-1/2 -translate-x-1/2 bg-[#e8ecf2]/40 flex items-end justify-center mb-8">

                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}