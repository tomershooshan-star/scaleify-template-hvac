import { services } from "@/config/site";
import {
  Snowflake, Flame, Wind, Wrench, Gauge, Leaf, ArrowRight, type LucideIcon,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const iconMap: Record<string, LucideIcon> = {
  Snowflake, Flame, Wind, Wrench, Gauge, Leaf,
};

export function Services() {
  return (
    <section id="services" className="section-pad bg-brand-cream">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <span className="eyebrow eyebrow-dot text-brand-orange">
              Services
            </span>
            <h2 className="display-xl mt-5 text-brand-charcoal">
              Climate control,
              <br />
              done right.
            </h2>
          </div>
          <p className="max-w-lg font-sans text-[16px] leading-relaxed text-brand-charcoal/55 lg:justify-self-end lg:text-right">
            Six core services covering every residential and commercial HVAC
            need. Every quote flat-rate and in writing. Every install code-passed.
          </p>
        </div>

        {/* Vertical stacked list of horizontal service rows */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-brand-paper shadow-[0_20px_60px_-30px_rgba(5,14,26,0.18)]">
          {services.slice(0, 6).map((s, i) => {
            const Icon = iconMap[s.icon] ?? Wrench;
            const num = String(i + 1).padStart(2, "0");
            return (
              <ServiceRow
                key={s.title}
                num={num}
                title={s.title}
                desc={s.desc}
                icon={Icon}
                isLast={i === services.length - 1}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  num, title, desc, icon: Icon, isLast, index,
}: {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  isLast: boolean;
  index: number;
}) {
  const { ref, inView } = useReveal<HTMLAnchorElement>(0.12);
  return (
    <a
      ref={ref}
      href="#contact"
      className={`group relative grid items-center gap-6 px-6 py-6 transition-all hover:bg-brand-ice/40 sm:grid-cols-[auto_auto_1fr_auto_auto] sm:gap-8 sm:px-10 sm:py-8 ${
        isLast ? "" : "border-b border-brand-charcoal/10"
      }`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out, background-color 0.2s",
        transitionDelay: `${index * 60}ms`,
      }}
    >
      {/* Left: number */}
      <div className="font-display text-2xl font-bold text-brand-steel/45 group-hover:text-brand-orange sm:text-[28px]">
        {num}
      </div>

      {/* Icon chip */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-ice text-brand-charcoal transition group-hover:bg-brand-orange group-hover:text-white sm:h-14 sm:w-14">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
      </div>

      {/* Title + desc */}
      <div className="min-w-0">
        <h3 className="font-display text-[19px] font-bold leading-tight text-brand-charcoal sm:text-[22px]">
          {title}
        </h3>
        <p className="mt-1 font-sans text-[13.5px] leading-relaxed text-brand-charcoal/55 sm:text-[14.5px]">
          {desc}
        </p>
      </div>

      {/* Tag */}
      <div className="hidden rounded-full border border-brand-charcoal/10 bg-brand-cream px-3 py-1 font-grotesk text-[10px] font-bold uppercase tracking-[0.16em] text-brand-charcoal/60 md:inline-flex">
        Residential · Commercial
      </div>

      {/* Arrow */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-charcoal/15 text-brand-charcoal transition group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white">
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}
