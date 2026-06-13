"use client";

// import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <footer className="border-t border-white/10 px-8 py-8 bg-blue-950 backdrop-blur-sm text-white">
            <div
                className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:items-center md:text-left">

                {/* Left */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-xl font-semibold">
                        Let's work together
                    </h3>

                    <p className="mt-2 text-slate-300">
                        danieloseiboateng5@gmail.com
                    </p>

                    <p className="text-slate-300">
                        +233 55 354 6477
                    </p>
                </div>

                {/* Right */}
                <div className="flex items-center gap-6 text-2xl">
                    <a
                        href="https://github.com/Dann-Hub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:scale-110"
                    >
                        <i className="fab fa-github"/>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/danieloseiboateng5/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:scale-110"
                    >
                        <i className="fab fa-linkedin"/>
                    </a>

                    <a
                        href="https://x.com/MrDanielBoateng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:scale-110"
                    >
                        <i className="fab fa-x-twitter"/>
                    </a>

                    <a
                        href="https://www.instagram.com/danielboateng5/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:scale-110"
                    >
                        <i className="fab fa-instagram"/>
                    </a>
                </div>

            </div>
        </footer>
    );
}