"use client";

// import Link from "next/link";
import { useState } from "react";

export function Footer() {
    const [open, setOpen] = useState(false);
    return (
        <footer className="border-t border-white/10 px-8 py-8 bg-[#ebeef3] backdrop-blur-sm text-blue-950">
            <div
                className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:items-center md:text-left">

                {/* Left */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-xl font-semibold">
                        Let's work together
                    </h3>

                    <p className="mt-2 text-slate-950">
                        danieloseiboateng5@gmail.com
                    </p>

                    <p className="text-slate-950">
                        +233 55 354 6477
                    </p>
                </div>

                {/* Right */}
                <div className="flex items-center gap-6 text-2xl">
                    <p className="mt-6 text-sm text-slate-600">
                        © {new Date().getFullYear()} Daniel O. Boateng. Designed & Developed by Daniel O. Boateng.
                    </p>

                </div>

            </div>
        </footer>
    );
}