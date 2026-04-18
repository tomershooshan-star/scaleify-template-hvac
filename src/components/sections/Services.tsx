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
  "polygon(14% 0, 86% 0, 100% 14%, 100% 86%, 86% 100%, 14% 100%, 0 86%, 0 14%)";

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

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
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
      <div className="relative aspect-[1/1.02] transition-transform duration-300">
        {/* Outer colored border layer */}
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            active ? "bg-brand-orange" : "bg-brand-charcoal/10"
          }`}
          style={{ clipPath: OCTAGON_CLIP }}
        />
        {/* Inner white fill */}
        <div
          className="absolute inset-[1.5px] bg-brand-paper shadow-[0_10px_30px_-14px_rgba(14,17,22,0.15)]"
          style={{ clipPath: OCTAGON_CLIP }}
        />

        {/* Orange half-moon top crown — always rendered, opacity-animated to avoid mount/unmount blink */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[28%] w-[38%] -translate-x-1/2 bg-brand-orange transition-opacity duration-300"
          style={{
            clipPath: "polygon(0 0, 100% 0, 86% 100%, 14% 100%)",
            borderRadius: "0 0 9999px 9999px",
            opacity: active ? 1 : 0,
          }}
        />

        {/* Card content */}
        <div className="absolute inset-0 flex flex-col items-center px-5 pt-7 pb-7 text-center lg:px-6">
          {/* Number */}
          <div
            className={`font-display text-[40px] font-normal leading-none transition-colors duration-300 ${
              active
                ? "text-brand-cream"
                : "text-transparent [-webkit-text-stroke:1.5px_rgba(14,17,22,0.22)]"
            }`}
          >
            {num}
          </div>

          {/* Title */}
          <h3 className="mt-3.5 font-display text-[17px] font-normal leading-tight text-brand-charcoal">
            {title}
          </h3>

          {/* Desc */}
          <p className="mt-2 line-clamp-2 max-w-[16ch] font-sans text-[11.5px] leading-relaxed text-brand-charcoal/55">
            {desc}
          </p>

          {/* Read more */}
          <a
            href="#contact"
            className="mt-3 inline-flex items-center gap-1 font-grotesk text-[9.5px] font-bold uppercase tracking-[0.16em] text-brand-charcoal transition hover:text-brand-orange"
          >
            Read More
            <ArrowRight className="h-2.5 w-2.5" />
          </a>
        </div>
      </div>

      {/* Icon medallion dangling below the card */}
      <div className="relative mx-auto -mt-7 flex h-14 w-14 items-center justify-center">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${
            active
              ? "bg-brand-orange text-brand-cream shadow-[0_10px_22px_-8px_rgba(255,90,31,0.6)]"
              : "bg-brand-paper text-brand-charcoal shadow-[0_4px_16px_-6px_rgba(14,17,22,0.18)]"
          }`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
      </div>
    </div>
  );
}
