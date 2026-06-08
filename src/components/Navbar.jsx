import { useState } from "react";
import Reveal from "./Reveal";
import { useScrollSpy, useScrolled } from "../hooks/useScrollSpy";

const links = [
  { label: "Services", href: "#services", id: "services" },
  { label: "About me", href: "#about", id: "about" },
  { label: "Portfolio", href: "#work", id: "work" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function HamburgerIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M6 6l12 12M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  );
}

export default function Navbar() {
  const scrolled = useScrolled(80);
  const active = useScrollSpy(links.map((l) => l.id));
  const onHero = !scrolled;
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (isActive) =>
    onHero
      ? `hover:text-[#b91c1c] ${isActive ? "text-[#b91c1c]" : "text-ink"}`
      : `link-underline hover:text-rose ${isActive ? "is-active text-rose" : "text-cream/80"}`;

  const iconClass = onHero ? "text-[#b91c1c]" : "text-cream";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        onHero
          ? "bg-transparent py-6"
          : "bg-ink/85 py-4 shadow-lg backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <button
          type="button"
          className={`flex md:hidden ${iconClass} transition-colors hover:opacity-80`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <HamburgerIcon open={menuOpen} />
        </button>

        <Reveal direction="down" delay={0}>
          <a
            href="#home"
            className={`inline-flex font-['Allura',cursive] text-[2.35rem] leading-none tracking-[0.02em] transition-transform duration-300 hover:scale-[1.02] md:text-[3.15rem] ${
              onHero ? "text-ink" : "text-cream"
            }`}
          >
            Kamille
          </a>
        </Reveal>

        <Reveal as="ul" className="hidden items-center gap-8 md:flex lg:gap-10" direction="down" delay={100}>
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`text-sm font-medium transition-colors ${linkClass(isActive)}`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </Reveal>
      </nav>

      {menuOpen && (
        <div
          className={`md:hidden border-t ${
            onHero ? "border-ink/10 bg-cream/95" : "border-cream/10 bg-ink/95 backdrop-blur-md"
          }`}
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={`block py-3 text-base font-medium transition-colors ${linkClass(isActive)}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
