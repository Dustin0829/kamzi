import CountUp from "./CountUp";
import { Heart } from "./Doodles";
import Reveal from "./Reveal";
import SectionBgDecor from "./SectionBgDecor";
import "./Testimonials.css";

const stats = [
  { value: "20+", label: "Happy clients" },
  { value: "PHP10M+", label: "revenue added" },
  { value: "4.9", label: "Average Rating" },
];

const testimonials = [
  {
    name: "Luxe Manila",
    role: "E-commerce Founder",
    initials: "LM",
    accent: "#c8a98a",
    rating: 5,
    text: "Exceptional creativity and attention to detail! Kamille transformed our ad strategy and doubled our ROAS within the first month.",
  },
  {
    name: "Bare Skincare",
    role: "Brand Owner",
    initials: "BS",
    accent: "#d7c4b3",
    rating: 5,
    text: "Working with Kamille was a game-changer. Her campaigns brought in consistent new customers and our revenue grew over 178%.",
  },
  {
    name: "NTRL Apparel",
    role: "Marketing Director",
    initials: "NA",
    accent: "#9aa0a6",
    rating: 5,
    text: "Professional, data-driven, and always on top of trends. She built full-funnel campaigns that actually converted — highly recommend!",
  },
  {
    name: "Glow Co.",
    role: "CEO",
    initials: "GC",
    accent: "#ed7fc2",
    rating: 5,
    text: "Kamille doesn't just run ads — she understands your brand. Our cost per acquisition dropped 42% while sales kept climbing.",
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="testimonials__stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="testimonials__star" aria-hidden="true">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.6.94-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item, index }) {
  return (
    <article className={`testimonials__card testimonials__card--${index}`}>
      <span className="testimonials__tape" aria-hidden="true" />

      <div className="testimonials__card-paper">
        <div className="testimonials__card-header">
          <div className="testimonials__avatar" style={{ backgroundColor: item.accent }}>
            {item.initials}
          </div>
          <div>
            <p className="testimonials__card-name">{item.name}</p>
            <p className="testimonials__card-role">{item.role}</p>
          </div>
          <div className="testimonials__rating">
            <Stars count={item.rating} />
            <span className="testimonials__rating-value">{item.rating}.0</span>
          </div>
        </div>

        <p className="testimonials__quote">
          <span className="testimonials__quote-mark" aria-hidden="true">
            “
          </span>
          {item.text}
        </p>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials relative py-20 md:py-28">
      <SectionBgDecor variant="testimonials" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="md:sticky md:top-28 md:self-start">
          <Reveal direction="up">
            <span className="testimonials__badge">
              <Heart className="testimonials__badge-icon h-4 w-4" filled />
              Happy Clients
            </span>

            <div className="testimonials__headline">
              <h2>
                <span className="testimonials__title-script">clients</span>
                <span className="testimonials__title-display">love me</span>
              </h2>
            </div>

            <p className="testimonials__desc">
              Trusted by 20+ happy clients, adding $500k+ in revenue through strategic ads and
              creative campaigns.
            </p>
          </Reveal>

          <div className="testimonials__stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} direction="up">
                <div className="testimonials__stat">
                  <p className="testimonials__stat-value">
                    <CountUp value={s.value} />
                  </p>
                  <p className="testimonials__stat-label">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="testimonials__actions" delay={300} direction="up">
            <a href="#work" className="testimonials__btn testimonials__btn--outline btn-interactive">
              See All Projects
            </a>
            <a href="#contact" className="testimonials__btn testimonials__btn--primary btn-interactive">
              Contact Now
            </a>
          </Reveal>
        </div>

        <div className="flex flex-col gap-5 pb-8 md:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} direction="right">
              <TestimonialCard item={t} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
