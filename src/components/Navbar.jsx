import { useState } from "react";
import { useLocation } from "react-router-dom";
import Reveal from "./Reveal";
import { useScrollSpy, useScrolled, useNavbarHidden } from "../hooks/useScrollSpy";

const links = [
  { label: "Services", href: "/#services", id: "services" },
  { label: "About me", href: "/#about", id: "about" },
  { label: "Work", href: "/#work", id: "work" },
  { label: "Contact", href: "/#contact", id: "contact" },
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
  const location = useLocation();
  const isCaseStudy = location.pathname.startsWith("/work/");
  const scrolled = useScrolled(80);
  const scrollHidden = useNavbarHidden();
  const active = useScrollSpy(links.map((l) => l.id));
  const onHero = !scrolled && !isCaseStudy;
  const [menuOpen, setMenuOpen] = useState(false);
  const isHidden = scrollHidden && !menuOpen;

  const headerBg = onHero
    ? "bg-transparent py-6"
    : "bg-cream/95 py-4 shadow-md backdrop-blur-md border-b border-ink/5";

  const linkClass = (isActive) =>
    `hover:text-[#b91c1c] ${isActive ? "text-[#b91c1c]" : "text-ink"}`;

  const iconClass = "text-[#b91c1c]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 will-change-transform ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${headerBg}`}
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
            href="mailto:hello@kamillepaus.com"
            className="inline-flex font-sans text-sm font-semibold leading-none tracking-tight text-ink-warm transition-transform duration-300 hover:scale-[1.02] sm:text-base md:text-lg"
          >
            hello@kamillepaus.com
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
        <div className="md:hidden border-t border-ink/10 bg-cream/95">
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
