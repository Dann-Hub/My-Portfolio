"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faXTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";


const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Contact",
    "Download CV",
];

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


function Logo() {
    return (
        <Link href="" className="flex items-center gap-3">
            <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
                priority
            />

            <span className="font-heading text-2xl font-bold text-foreground">
                Daniel<span className="text-primary text-5xl">.</span>
            </span>
        </Link>
    );
}

export function Header() {
    const [open, setOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const navLink =
        "text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:text-yellow-300 hover:bg-blue-950 px-3 py-2 rounded-md";

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | PointerEvent) => {
            if (
                headerRef.current &&
                !headerRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("pointerdown", handleClickOutside);

        return () => {
            document.removeEventListener("pointerdown", handleClickOutside);
        };
    }, []);

    return (
        <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-[#e8ecf2] backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8 ">
                <Logo />

                {/* Mobile Menu Button */}
                <button
                    className="text-foreground lg:hidden"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Toggle Menu"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 lg:flex">
                    <nav className="flex items-center gap-2">
                        {navItems.map((item, i) =>
                            item === "Download CV" ? (
                                <a
                                    key={item}
                                    href="/download-cv.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${navLink} bg-red-400 text-white`}
                                >
                                    Download CV
                                </a>
                            ) : (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                    className={`${navLink} ${
                                        i === 0 ? "text-primary" : "text-foreground"
                                    }`}
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </nav>

                    {/* Social Icons */}
                    <div className="flex items-center gap-2">
                        {socials.map(({ icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-950/20 text-blue-950 transition-all duration-300 hover:border-blue-950 hover:bg-blue-950 hover:text-yellow-300"
                            >
                                <FontAwesomeIcon icon={icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {open && (
                <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
                    <nav className="flex flex-col gap-3">
                        {navItems.map((item, i) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                onClick={() => setOpen(false)}
                                className={`${navLink} ${
                                    i === 0 ? "text-primary" : "text-foreground"
                                }`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Social Icons */}
                    <div className="mt-6 flex items-center gap-3">
                        {socials.map(({ icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-950/20 text-blue-950 transition-all duration-300 hover:border-blue-950 hover:bg-blue-950 hover:text-yellow-300"
                            >
                                <FontAwesomeIcon icon={icon} />
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}