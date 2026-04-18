import { useState } from "react";
import { services } from "@/config/site";
import {
  Snowflake,
  Flame,
  Wind,
  Wrench,
  Gauge,
  Leaf,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const iconMap: Record<string, LucideIcon> = {
  Snowflake, Flame, Wind, Wrench, Gauge, Leaf,
};

const OCTAGON_CLIP =
  "polygon(22% 0, 78% 0, 100% 22%, 100% 78%, 78% 100%, 22% 100%, 0 78%, 0 22%)";

export function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="services"
      className="section-pad"
      style={{
        background:
          "linear-gradient(180deg, #FFF4EB 0%, #FAF6F0 60%, #FAF6F0 100%)",
      }}
    >
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow-dot text-brand-orange">
            Our Services
          </span>
          <h2 className="display-xl mt-5 text-brand-charcoal">
            Breathe Easy{" "}
            <em className="italic text-brand-orange">Assessment</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-[17px] leading-relaxed text-brand-charcoal/55">
            Six core services covering every HVAC need — residential, commercial,
            emergency, and everything in between.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {services.slice(0, 6).map((s, i) => {
            const Icon = iconMap[s.icon] ?? Wrench;
            const active = i === activeIdx;
            const num = String(i + 1).padStart(2, "0");
            return (
              <OctagonCard
                key={s.title}
                num={num}
                title={s.title}
                desc={s.desc}
                Icon={Icon}
                active={active}
                index={i}
                onHover={() => setActiveIdx(i)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OctagonCard({
  num,
  title,
  desc,
  Icon,
  active,
  index,
  onHover,
}: {
  num: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
  active: boolean;
  index: number;
  onHover: () => void;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.15);

  return (
    <div
      ref={ref}
      onMouseEnter={onHover}
      className="group relative transition-all duration-500"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Octagon card body */}
      <div
        className={`relative aspect-[1/1.05] transition-all duration-500 ${
          active ? "scale-[1.02]" : ""
        }`}
      >
        {/* Outer colored border layer */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            active ? "bg-brand-orange" : "bg-brand-charcoal/10"
          }`}
          style={{ clipPath: OCTAGON_CLIP }}
        />
        {/* Inner white fill */}
        <div
          className="absolute inset-[2px] bg-brand-paper shadow-[0_14px_40px_-18px_rgba(14,17,22,0.15)]"
          style={{ clipPath: OCTAGON_CLIP }}
        />

        {/* Orange half-moon top crown (active only) */}
        {active && (
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-[32%] w-[42%] -translate-x-1/2 bg-brand-orange"
            style={{
              clipPath: "polygon(0 0, 100% 0, 88% 100%, 12% 100%)",
              borderRadius: "0 0 9999px 9999px",
            }}
          />
        )}

        {/* Card content */}
        <div className="absolute inset-0 flex flex-col items-center px-8 pt-10 pb-10 text-center lg:px-10">
          {/* Number */}
          <div
            className={`font-display text-[54px] font-normal leading-none transition ${
              active
                ? "text-brand-cream"
                : "text-transparent [-webkit-text-stroke:1.5px_rgba(14,17,22,0.20)]"
            }`}
          >
            {num}
          </div>

          {/* Title */}
          <h3 className="mt-5 font-display text-[22px] font-normal leading-tight text-brand-charcoal">
            {title}
          </h3>

          {/* Desc */}
          <p className="mt-3 line-clamp-2 max-w-[18ch] font-sans text-[13.5px] leading-relaxed text-brand-charcoal/55">
            {desc}
          </p>

          {/* Read more */}
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-1.5 font-grotesk text-[11px] font-bold uppercase tracking-[0.18em] text-brand-charcoal transition hover:text-brand-orange"
          >
            Read More
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Icon medallion dangling below the card */}
      <div className="relative mx-auto -mt-10 flex h-20 w-20 items-center justify-center">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 ${
            active
              ? "bg-brand-orange text-brand-cream shadow-[0_14px_30px_-10px_rgba(255,90,31,0.6)]"
              : "bg-brand-paper text-brand-charcoal shadow-[0_6px_22px_-8px_rgba(14,17,22,0.20)]"
          }`}
        >
          <Icon className="h-7 w-7" strokeWidth={1.7} />
        </div>
      </div>
    </div>
  );
}
