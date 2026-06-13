"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navLink = "rounded-md bg-transparent px-4 py-2 transition-all duration-300 hover:bg-[#4647AE] hover:text-yellow-300 hover:shadow-lg";
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
          headerRef.current &&
          !headerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl tracking-wider text-white hover:text-yellow-300 hover:shadow-lg"
        >
          Home
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-white">
            <li>
              <a href="about" className={navLink}>
                About
              </a>
            </li>

            <li>
              <a href="portfolio" className={navLink}>
                Portfolio
              </a>
            </li>

            <li>
              <a href="projects" className={navLink}>
                Projects
              </a>
            </li>

            <li>
              <a href="leadership" className={navLink}>
                Leadership
              </a>
            </li>

            <li>
              <a href="contact" className={navLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="border-t border-white/10 bg-transparent md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6 text-white">
            <li>
              <a href="about" onClick={() => setOpen(false)} className={navLink}>
                About
              </a>
            </li>

            <li>
              <a href="portfolio" onClick={() => setOpen(false)} className={navLink}>
                Portfolio
              </a>
            </li>

            <li>
              <a href="projects" onClick={() => setOpen(false)} className={navLink}>
                Projects
              </a>
            </li>

            <li>
              <a href="leadership" onClick={() => setOpen(false)} className={navLink}>
                Leadership
              </a>
            </li>

            <li>
              <a href="contact" onClick={() => setOpen(false)} className={navLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

