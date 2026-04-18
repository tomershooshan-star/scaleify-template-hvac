import { Wrench, Snowflake, Clock, Award, type LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

type Feature = { icon: LucideIcon; title: string; desc: string };

const features: Feature[] = [
  {
    icon: Award,
    title: "Expert Engineers",
    desc: "NATE-certified technicians with 10+ years on the tools — not trainees.",
  },
  {
    icon: Snowflake,
    title: "Quality Equipment",
    desc: "Carrier, Trane, Lennox, Mitsubishi — top-tier systems with full warranty.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "On-call dispatch every hour, every day. 2-hour emergency response window.",
  },
  {
    icon: Wrench,
    title: "Lifetime Workmanship",
    desc: "We warrant our labor for the life of the install. No fine-print weasel clauses.",
  },
];

export function Features() {
  return (
    <section className="section-pad-sm bg-brand-creamDeep/40">
      <div className="container-x">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature: f, i }: { feature: Feature; i: number }) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.15);
  const Icon = f.icon;
  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-3xl border border-brand-charcoal/5 bg-brand-paper p-7 shadow-card transition-all duration-700 ease-out hover:-translate-y-1 hover:border-brand-orange/40"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${i * 90}ms`,
      }}
    >
      {/* Decorative gradient blob — Roofing template DNA */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-40 blur-2xl transition-opacity group-hover:opacity-70"
        style={{ background: "radial-gradient(circle, #FF5A1F 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-8 bottom-[-40px] h-32 w-32 rounded-full opacity-20 blur-2xl"
        style={{ background: "radial-gradient(circle, #FF7A47 0%, transparent 70%)" }}
      />

      {/* Dotted corner accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-5 top-5 h-16 w-16 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1.5px)",
          backgroundSize: "10px 10px",
        }}
      />

      <div className="relative">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange text-white shadow-[0_10px_30px_-10px_rgba(255,90,31,0.6)] transition group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="font-display text-xl leading-snug text-brand-charcoal">
          {f.title}
        </h3>
        <p className="mt-3 font-sans text-[14.5px] leading-relaxed text-brand-charcoal/60">
          {f.desc}
        </p>
      </div>
    </div>
  );
}
