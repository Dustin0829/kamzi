import { Heart, CurveArrow } from "./Doodles";
import MagneticButton from "./MagneticButton";
import SocialLinks from "./SocialLinks";
import Reveal from "./Reveal";

const CALENDLY_URL = "https://calendly.com/adsbykamzi";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 text-cream">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 md:grid-cols-2 md:gap-12 md:px-10">
        <Reveal direction="left">
          <span className="inline-block rounded-full bg-blush px-4 py-1.5 text-[11px] font-semibold tracking-wide text-ink">
            let's grow together
          </span>

          <h2 className="relative mt-6 font-serif text-5xl font-semibold leading-[0.95] md:text-6xl">
            let's grow
            <br />
            your <span className="text-rose">brand.</span>
            <Heart className="animate-float absolute -right-4 top-2 h-6 w-6 text-rose md:-right-10" filled={false} />
          </h2>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
            Have a project in mind? Book a free discovery call and let's create
            something amazing together.
          </p>

          <a
            href="mailto:hello@adsbykamzi.com"
            className="group mt-8 flex items-center gap-3 text-sm text-cream/80 transition-colors hover:text-rose"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-rose/20">
              <MailIcon />
            </span>
            <span className="transition-all duration-300 group-hover:tracking-wide">
              hello@adsbykamzi.com
            </span>
          </a>

          <SocialLinks className="mt-4" />

          <MagneticButton
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interactive group mt-8 inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white hover:bg-rose-deep md:hidden"
          >
            book a call
            <Heart className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" filled={false} />
            <span className="arrow-slide" aria-hidden="true">→</span>
          </MagneticButton>
        </Reveal>

        <Reveal delay={150} direction="right">
          <div className="card-lift relative mx-auto h-[260px] w-full max-w-[420px] overflow-hidden rounded-2xl bg-ink-soft ring-1 ring-white/10 sm:h-[300px] md:mx-0 md:h-[320px] md:max-w-none">
            <CurveArrow className="animate-float absolute -right-6 -bottom-10 z-10 hidden h-12 w-12 rotate-[200deg] text-rose md:block" />
            <iframe
              src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=1a1a1a&text_color=f6ede7&primary_color=ec5b72`}
              title="Book a call with Kamille"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
