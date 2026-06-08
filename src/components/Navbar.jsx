import Reveal from "./Reveal";
import { useScrollSpy, useScrolled } from "../hooks/useScrollSpy";

const links = [
  { label: "Services", href: "#services", id: "services" },
  { label: "About me", href: "#about", id: "about" },
  { label: "Portfolio", href: "#work", id: "work" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const scrolled = useScrolled(80);
  const active = useScrollSpy(links.map((l) => l.id));
  const onHero = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        onHero
          ? "bg-transparent py-6"
          : "bg-ink/85 py-4 shadow-lg backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Reveal direction="down" delay={0}>
          <a
            href="#home"
            className={`group inline-flex items-center gap-1.5 font-['Bebas_Neue',sans-serif] text-3xl tracking-wide transition-transform duration-300 hover:scale-[1.02] md:text-4xl ${
              onHero ? "text-[#b91c1c]" : "text-rose"
            }`}
          >
            KAMZI
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 md:h-5 md:w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 20.5C6.5 16.5 3 13.2 3 9.3 3 6.6 5.1 4.7 7.6 4.7c1.6 0 3.2.9 4.4 2.6C13.2 5.6 14.8 4.7 16.4 4.7 18.9 4.7 21 6.6 21 9.3c0 3.9-3.5 7.2-9 11.2z" />
            </svg>
          </a>
        </Reveal>

        <Reveal as="ul" className="hidden items-center gap-8 md:flex lg:gap-10" direction="down" delay={100}>
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`text-sm font-medium transition-colors ${
                    onHero
                      ? `hover:text-[#b91c1c] ${isActive ? "text-[#b91c1c]" : "text-ink"}`
                      : `link-underline hover:text-rose ${isActive ? "is-active text-rose" : "text-cream/80"}`
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </Reveal>
      </nav>
    </header>
  );
}
