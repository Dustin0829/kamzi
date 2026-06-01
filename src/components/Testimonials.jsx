import CountUp from "./CountUp";
import Reveal from "./Reveal";

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
    accent: "from-[#c8a98a] to-[#a8896a]",
    rating: 5,
    text: "Exceptional creativity and attention to detail! Kamille transformed our ad strategy and doubled our ROAS within the first month.",
  },
  {
    name: "Bare Skincare",
    role: "Brand Owner",
    initials: "BS",
    accent: "from-[#d7c4b3] to-[#b8a090]",
    rating: 5,
    text: "Working with Kamille was a game-changer. Her campaigns brought in consistent new customers and our revenue grew over 178%.",
  },
  {
    name: "NTRL Apparel",
    role: "Marketing Director",
    initials: "NA",
    accent: "from-[#9aa0a6] to-[#7a8086]",
    rating: 5,
    text: "Professional, data-driven, and always on top of trends. She built full-funnel campaigns that actually converted — highly recommend!",
  },
  {
    name: "Glow Co.",
    role: "CEO",
    initials: "GC",
    accent: "from-blush to-rose/80",
    rating: 5,
    text: "Kamille doesn't just run ads — she understands your brand. Our cost per acquisition dropped 42% while sales kept climbing.",
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-[#f5c542]" aria-hidden="true">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.6.94-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="card-lift group rounded-2xl bg-[#1a1a1a] p-5 ring-1 ring-white/5 transition-all duration-300 hover:ring-rose/20">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${item.accent} text-xs font-bold text-white transition-transform duration-300 group-hover:scale-105`}
        >
          {item.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-cream">{item.name}</p>
          <p className="text-xs text-cream/45">{item.role}</p>
        </div>
        <div className="ml-auto flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
          <Stars count={item.rating} />
          <span className="text-[10px] font-medium text-cream/60">{item.rating}.0</span>
        </div>
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-cream/55">{item.text}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#121212] py-20 text-cream">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute right-0 top-0 h-96 w-96 translate-x-1/4 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(236,91,114,0.25), transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-2 md:px-10">
        <div className="md:sticky md:top-28 md:self-start">
          <Reveal direction="up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-[11px] font-medium tracking-wide text-cream/70 ring-1 ring-white/10">
              <span className="text-rose">♡</span>
              Happy Clients
            </span>

            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              clients love me
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/50">
              Trusted by 20+ happy clients, adding $500k+ in revenue through
              strategic ads and creative campaigns.
            </p>
          </Reveal>

          <div className="mt-8 grid min-w-0 grid-cols-3 gap-2 sm:gap-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} direction="up">
                <div className="card-lift min-w-0 overflow-hidden rounded-2xl bg-[#1a1a1a] px-2 py-4 text-center ring-1 ring-white/5 sm:px-3">
                  <p className="font-serif text-[clamp(0.8rem,2.6vw,1.5rem)] font-bold leading-tight text-cream">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-1 text-[9px] leading-tight text-cream/40 sm:text-[10px]">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 flex flex-wrap gap-3" delay={300} direction="up">
            <a
              href="#work"
              className="btn-interactive rounded-full bg-white/5 px-5 py-2.5 text-xs font-semibold tracking-wide text-cream ring-1 ring-white/10 hover:bg-white/10"
            >
              See All Projects
            </a>
            <a
              href="#contact"
              className="btn-interactive rounded-full bg-cream px-5 py-2.5 text-xs font-semibold tracking-wide text-ink hover:bg-cream/90"
            >
              Contact Now
            </a>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4 pb-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} direction="right">
              <TestimonialCard item={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
