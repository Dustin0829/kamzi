import { Heart } from "./Doodles";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";
import { useScrollSpy, useScrolled } from "../hooks/useScrollSpy";

const CALENDLY_URL = "https://calendly.com/adsbykamzi";

const links = [
  { label: "HOME", href: "#home", id: "home" },
  { label: "WORK", href: "#work", id: "work" },
  { label: "ABOUT", href: "#about", id: "about" },
  { label: "CONTACT", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const scrolled = useScrolled(80);
  const active = useScrollSpy(links.map((l) => l.id));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/85 py-4 shadow-lg backdrop-blur-md" : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Reveal direction="down" delay={0}>
          <a
            href="#home"
            className="group flex items-baseline gap-1.5 text-cream transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="font-sans text-sm font-semibold tracking-[0.2em]">ADS BY</span>
            <span className="font-script text-3xl font-bold leading-none text-rose transition-transform duration-300 group-hover:scale-110">
              kamzi
            </span>
          </a>
        </Reveal>

        <Reveal as="ul" className="hidden items-center gap-9 md:flex" direction="down" delay={100}>
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`link-underline text-xs font-semibold tracking-[0.18em] transition-colors hover:text-rose ${
                    isActive ? "is-active text-rose" : "text-cream/80"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </Reveal>

        <Reveal direction="down" delay={200}>
          <MagneticButton
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interactive group flex items-center gap-2 rounded-full bg-blush px-5 py-2.5 text-xs font-semibold tracking-wide text-ink"
          >
            let's work together
            <Heart className="h-3.5 w-3.5 text-rose transition-transform duration-300 group-hover:scale-125" />
          </MagneticButton>
        </Reveal>
      </nav>
    </header>
  );
}
