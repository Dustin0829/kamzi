import { Heart, Flower, Star4 } from "./Doodles";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20">
      <Heart className="animate-float absolute left-16 top-12 h-9 w-9 text-rose" filled={false} />
      <Star4 className="animate-twinkle absolute left-8 top-40 h-4 w-4 text-rose/60" />
      <Flower className="animate-float-delay-1 absolute right-16 bottom-24 h-9 w-9 text-ink" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <Reveal className="relative mx-auto w-full max-w-xs" direction="left">
          <span className="absolute -top-3 left-1/2 z-20 h-7 w-24 -translate-x-1/2 -rotate-2 bg-blush/80" />
          <div className="card-lift rotate-[-2deg] bg-white p-3 pb-12 shadow-xl transition-transform duration-500 hover:rotate-0">
            <div className="overflow-hidden bg-linear-to-b from-cream-dark to-blush-soft">
              <img
                src="/KAMZ_NEW-removebg-preview.png"
                alt="Kamille"
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={120}>
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">about <span className="text-rose">me</span></h2>
          <span className="mt-3 block h-[3px] w-40 rounded-full bg-rose" />

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/70">
            I'm passionate about helping businesses grow through smart strategies,
            creative storytelling, and relentless execution.
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink/70">
            With a data-driven mindset and a creative edge, I turn ideas into
            campaigns that deliver real results.
          </p>

          <p className="mt-8 font-script text-4xl text-ink transition-transform duration-300 hover:scale-105">
            Kamille
          </p>
        </Reveal>
      </div>
    </section>
  );
}
