import { Star, Quote } from "lucide-react";
import { testimonials } from "@/config/site";

export function Testimonials() {
  return (
    <section id="reviews" className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Reviews</span>
          <h2 className="display-xl mt-5 text-brand-charcoal">
            What customers <em className="italic text-brand-orange">actually</em> say.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-brand-charcoal/5 bg-brand-paper p-8 shadow-card lg:p-10"
            >
              <Quote
                aria-hidden
                className="absolute right-6 top-6 h-9 w-9 text-brand-orange/20"
                strokeWidth={1.5}
              />
              <div className="mb-5 flex gap-0.5 text-brand-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-display text-[22px] leading-snug text-brand-charcoal lg:text-2xl">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-xs font-bold text-white">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="font-grotesk">
                  <div className="text-sm font-semibold text-brand-charcoal">{t.name}</div>
                  <div className="text-xs text-brand-charcoal/55">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
