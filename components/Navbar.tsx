"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1117]/95 backdrop-blur-md border-b border-[#30363d]"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-lg tracking-tight">
          Shawn<span className="text-[#38bdf8]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#8b949e] hover:text-white text-sm transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume_general.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 border border-[#38bdf8] text-[#38bdf8] text-sm rounded hover:bg-[#38bdf8]/10 transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-[#8b949e] hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d1117] border-t border-[#30363d] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#8b949e] hover:text-white text-sm transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume_general.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#38bdf8] text-sm"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
