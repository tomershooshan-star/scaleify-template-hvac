import { services } from "@/config/site";
import {
  Snowflake, Flame, Wind, Wrench, Gauge, Leaf, ArrowUpRight, type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Snowflake, Flame, Wind, Wrench, Gauge, Leaf,
};

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Our Services</span>
          <h2 className="display-xl mt-5 text-brand-charcoal">
            HVAC services, <em className="italic text-brand-orange">every season</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-[17px] leading-relaxed text-brand-charcoal/55">
            Residential and commercial heating, cooling, and air quality — done right the first time.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Wrench;
            return (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-brand-charcoal/5 bg-brand-paper p-7 transition hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-card"
              >
                {/* % OFF badge — top-right */}
                {s.discount && (
                  <div className="absolute right-5 top-5 rounded-full bg-brand-orange/10 px-3 py-1 font-grotesk text-[10px] font-bold uppercase tracking-[0.15em] text-brand-orange">
                    {s.discount}
                  </div>
                )}

                {/* Icon medallion */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>

                <h3 className="font-display text-2xl text-brand-charcoal">
                  {s.title}
                </h3>
                <p className="mt-3 font-sans text-[14.5px] leading-relaxed text-brand-charcoal/60">
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 font-grotesk text-xs font-semibold uppercase tracking-wider text-brand-orange transition group-hover:gap-2.5"
                >
                  Book Now
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
