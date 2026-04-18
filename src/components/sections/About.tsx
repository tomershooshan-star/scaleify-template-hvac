import { useState } from "react";
import { CheckCircle2, Phone, ArrowUpRight, Play } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { site } from "@/config/site";

type TabKey = "mission" | "vision" | "values";

const tabs: Record<TabKey, { label: string; body: string[] | string }> = {
  mission: {
    label: "Mission",
    body: [
      "AirFlow Optimization",
      "FreezeGuard Installation",
      "Cool Care Maintenance",
      "ClimateControl Checkup",
      "ChillOut Emergency Services",
    ],
  },
  vision: {
    label: "Vision",
    body: [
      "Total Comfort Installation",
      "RapidRepair Services",
      "PureAir Quality Testing",
      "CoolBreeze Cleaning",
      "FrostGuard Inspection",
      "EcoCool Upgrades",
    ],
  },
  values: {
    label: "Values",
    body:
      "Common signs include unusual noises, reduced airflow, uneven cooling, strange odors, and higher energy bills. Prompt diagnosis and repair of any issues with your air conditioning unit ensure optimal performance. Inspection of ductwork for leaks or damage followed by sealing improves energy efficiency.",
  },
};

export function About() {
  const [active, setActive] = useState<TabKey>("vision");
  const { ref, inView } = useReveal<HTMLDivElement>(0.15);
  const tab = tabs[active];

  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left image column with play button + offset second image */}
          <div
            ref={ref}
            className="relative transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-40px)",
            }}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1631545308456-68ebe3e34d3a?auto=format&fit=crop&w=1000&q=85"
                alt="HVAC technician servicing an outdoor unit"
                className="h-auto w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?auto=format&fit=crop&w=1000&q=85";
                }}
              />
              <button
                aria-label="Watch story"
                className="group absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-orange text-white shadow-xl transition hover:scale-105"
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-brand-orange/40" />
                <Play className="ml-1 h-6 w-6 fill-white" strokeWidth={0} />
              </button>
            </div>
          </div>

          {/* Right content column */}
          <div>
            <span className="eyebrow eyebrow-dot text-brand-orange mb-5">
              About Us
            </span>
            <h2 className="display-xl mt-4 text-brand-charcoal">
              Where every breath feels{" "}
              <span className="text-brand-orange font-extrabold">fresh and cool</span>.
            </h2>
            <p className="mt-6 max-w-lg font-sans text-[17px] leading-relaxed text-brand-charcoal/60">
              Prompt diagnosis and repair of any issue with your HVAC system for
              optimal performance. Duct inspection, sealing, and energy-efficiency
              upgrades — done once, done right.
            </p>

            {/* Tabs */}
            <div className="mt-9 flex items-center gap-8 border-b border-brand-charcoal/10">
              {(Object.keys(tabs) as TabKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`relative pb-3 font-display text-xl transition ${
                    active === key
                      ? "text-brand-charcoal"
                      : "text-brand-charcoal/45 hover:text-brand-charcoal/70"
                  }`}
                >
                  {tabs[key].label}
                  {active === key && (
                    <span className="absolute inset-x-0 bottom-[-1px] h-[2px] bg-brand-orange" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab body */}
            <div className="mt-7 min-h-[160px]">
              {Array.isArray(tab.body) ? (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {tab.body.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 font-grotesk text-[15px] font-medium text-brand-charcoal"
                    >
                      <CheckCircle2
                        className="h-5 w-5 shrink-0 text-brand-orange"
                        strokeWidth={2.2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="max-w-lg font-sans text-[15.5px] leading-relaxed text-brand-charcoal/65">
                  {tab.body}
                </p>
              )}
            </div>

            {/* CTA row */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-6 py-3 font-grotesk text-sm font-semibold text-brand-cream transition hover:bg-brand-orange"
              >
                Read More
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </a>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange text-white">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="font-grotesk">
                  <div className="text-[11px] uppercase tracking-wider text-brand-charcoal/50">
                    Call any time
                  </div>
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="text-[15px] font-semibold text-brand-charcoal hover:text-brand-orange"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
