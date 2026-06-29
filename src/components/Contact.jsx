import { Heart, CurveArrow } from "./Doodles";
import MagneticButton from "./MagneticButton";
import SocialLinks from "./SocialLinks";
import Reveal from "./Reveal";
import SectionBgDecor from "./SectionBgDecor";
import "./Contact.css";

const CALENDLY_URL = "https://calendly.com/adsbykamzi";
const CALENDLY_EMBED = `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=f2f0ed&text_color=2c2420&primary_color=98030b`;

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
    <section id="contact" className="contact section-band section-band--cta relative overflow-hidden py-24 md:py-32">
      <SectionBgDecor variant="contact" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-10 px-6 md:grid-cols-2 md:gap-12 md:px-10">
        <Reveal direction="left">
          <span className="contact__badge">let&apos;s grow together</span>

          <div className="contact__headline">
            <h2>
              <span className="contact__title-script">let&apos;s grow</span>
              <span className="contact__title-display">your brand.</span>
            </h2>
            <Heart className="contact__heart animate-float" filled />
          </div>

          <p className="contact__desc">
            Have a project in mind? Book a free discovery call and let&apos;s create something
            amazing together.
          </p>

          <a href="mailto:hello@adsbykamzi.com" className="contact__email group">
            <span className="contact__email-icon">
              <MailIcon />
            </span>
            <span className="transition-all duration-300 group-hover:tracking-wide">
              hello@adsbykamzi.com
            </span>
          </a>

          <SocialLinks className="mt-5" variant="scrapbook" />

          <MagneticButton
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__btn-mobile btn-interactive group"
          >
            book a call
            <Heart className="h-4 w-4" filled={false} />
            <span className="arrow-slide" aria-hidden="true">
              →
            </span>
          </MagneticButton>
        </Reveal>

        <Reveal delay={150} direction="right">
          <div className="contact__calendly-wrap">
            <div className="contact__calendly-frame card-lift">
              <span className="contact__calendly-tape" aria-hidden="true" />
              <div className="contact__calendly-inner">
                <iframe src={CALENDLY_EMBED} title="Book a call with Kamille" />
              </div>
            </div>
            <CurveArrow className="contact__arrow animate-float hidden md:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
