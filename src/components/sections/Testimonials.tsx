import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/config/site";
import { useReveal } from "@/hooks/useReveal";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const { ref, inView } = useReveal<HTMLDivElement>(0.12);
  const active = testimonials[idx];

  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="relative overflow-hidden">
      {/* Full-bleed dark background */}
      <div className="absolute inset-0">
        <img
          src="/images/testimonial/testimonial_bg.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0E1116 0%, #1B1F28 55%, #0E1116 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute left-1/3 top-0 h-[30rem] w-[30rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF5A1F 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-x relative py-24 lg:py-32">
        <div
          ref={ref}
          className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s ease-out",
          }}
        >
          {/* Left: heading + character image */}
          <div>
            <span className="eyebrow eyebrow-dot text-brand-orange mb-5">
              Reviews
            </span>
            <h2 className="display-xl mt-4 text-brand-cream">
              Our clients' <span className="text-brand-orange font-extrabold">feedback</span>.
            </h2>
            <p className="mt-6 max-w-md font-sans text-[16.5px] leading-relaxed text-brand-cream/65">
              {testimonials.length}+ five-star reviews across Google, Yelp, and
              Nextdoor. Here's what real customers have to say about working
              with our team.
            </p>

            {/* Rating summary */}
            <div className="mt-9 flex items-center gap-5 rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.04] p-5 backdrop-blur-sm">
              <div>
                <div className="flex gap-1 text-brand-orange">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <div className="mt-2 font-grotesk text-[11px] uppercase tracking-[0.18em] text-brand-cream/55">
                  4.9 · 1,840+ reviews
                </div>
              </div>
              <div className="h-12 w-px bg-brand-cream/15" />
              <div className="flex -space-x-2">
                {["SM", "MT", "PR", "DK"].map((i, k) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-charcoal bg-brand-orange font-grotesk text-[11px] font-bold text-white"
                    style={{ zIndex: 10 - k }}
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: quote card carousel */}
          <div className="relative">
            <div className="relative rounded-3xl border border-brand-cream/10 bg-brand-cream/[0.04] p-8 backdrop-blur-sm lg:p-10">
              <Quote
                aria-hidden
                className="absolute right-7 top-7 h-14 w-14 text-brand-orange/25"
                strokeWidth={1.5}
              />
              <div className="mb-6 flex gap-0.5 text-brand-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-current" />
                ))}
              </div>

              {/* Animated key forces fade on change */}
              <div key={idx} className="animate-fade-in-up">
                <blockquote className="font-display text-[22px] leading-snug text-brand-cream lg:text-[26px]">
                  "{active.quote}"
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange font-grotesk text-sm font-bold text-white">
                    {active.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="font-grotesk">
                    <div className="text-[15px] font-semibold text-brand-cream">
                      {active.name}
                    </div>
                    <div className="text-[12px] text-brand-cream/55">
                      {active.role}
                    </div>
                  </div>
                </figcaption>
              </div>

              {/* Controls */}
              <div className="mt-8 flex items-center justify-between border-t border-brand-cream/10 pt-6">
                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === idx
                          ? "w-8 bg-brand-orange"
                          : "w-1.5 bg-brand-cream/25 hover:bg-brand-cream/45"
                      }`}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-cream/15 text-brand-cream/70 transition hover:border-brand-orange hover:bg-brand-orange hover:text-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-cream/15 text-brand-cream/70 transition hover:border-brand-orange hover:bg-brand-orange hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
