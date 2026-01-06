"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${scrolled ? "bg-yellow-400 shadow-md" : "bg-black/90 backdrop-blur-md"}
      `}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-16 w-20 shrink-0">
            <Image
              src="/images/bragahitam.png"
              alt="Braga Studio"
              fill
              priority
              // Tambahkan scale-110 atau scale-125 jika di dalam file PNG ada margin kosong (whitespace)
              className={`object-contain transition-opacity duration-300 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src="/images/bragahitam.png"
              alt="Braga Studio"
              fill
              priority
              className={`object-contain brightness-0 invert transition-opacity duration-300 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium tracking-wide">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative transition-colors duration-300
                    ${
                      scrolled
                        ? active
                          ? "text-black"
                          : "text-black/80 hover:text-black"
                        : active
                        ? "text-yellow-400"
                        : "text-white/90 hover:text-yellow-400"
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] transition-all duration-300
                      ${scrolled ? "bg-black" : "bg-yellow-400"}
                      ${active ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className={`hidden md:inline-flex items-center rounded-full px-6 py-2 text-sm font-medium transition-all duration-300
              ${
                scrolled
                  ? "bg-black text-white hover:bg-gray-900"
                  : "bg-yellow-400 text-black hover:bg-yellow-300"
              }`}
          >
            Let’s Talk
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`md:hidden text-2xl transition-colors ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${scrolled ? "bg-yellow-400 text-black" : "bg-black text-yellow-400"}
          ${
            open
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }
        `}
      >
        <nav className="flex flex-col gap-4 px-6 py-6 text-base font-medium">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`transition-colors duration-200
                  ${active ? "font-semibold" : "opacity-80 hover:opacity-100"}`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className={`mt-6 inline-flex justify-center rounded-full px-6 py-3 text-sm font-medium
              ${scrolled ? "bg-black text-white" : "bg-yellow-400 text-black"}`}
          >
            Let’s Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
