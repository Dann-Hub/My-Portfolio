"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-wider text-white"
        >
          Home
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-white">
            <li>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
            </li>

            <li>
              <a href="#portfolio" className="hover:text-blue-400">
                Portfolio
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-blue-400">
                Projects
              </a>
            </li>

            <li>
              <a href="#leadership" className="hover:text-blue-400">
                Leadership
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-400">
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
        <nav className="border-t border-white/10 bg-black/90 md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6 text-white">
            <li>
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#portfolio" onClick={() => setOpen(false)}>
                Portfolio
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#leadership" onClick={() => setOpen(false)}>
                Leadership
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

