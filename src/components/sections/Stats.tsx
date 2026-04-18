import CountUp from "react-countup";
import { useReveal } from "@/hooks/useReveal";
import { Wrench, Award, Users, Zap } from "lucide-react";

// LSI Cool-style Counter section: icon + animated count-up number + label
const counterStats = [
  { n: 20, suffix: "+", label: "Years In Business", icon: Award },
  { n: 18000, suffix: "+", label: "Systems Serviced", icon: Wrench },
  { n: 1840, suffix: "+", label: "Happy Clients", icon: Users },
  { n: 2, suffix: "hr", label: "Emergency Response", icon: Zap },
];

export function Stats() {
  const { ref, inView } = useReveal<HTMLDivElement>(0.2);

  return (
    <section className="relative overflow-hidden bg-brand-blueDeep py-20 lg:py-24">
      {/* Soft blue glow */}
      <div
        aria-hidden
        className="absolute -left-40 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #2371ff 0%, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="absolute -right-40 top-0 h-[24rem] w-[24rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #ff5e14 0%, transparent 65%)" }}
      />

      <div ref={ref} className="container-x relative">
        <p className="mb-12 text-center font-grotesk text-xs font-bold uppercase tracking-[0.28em] text-brand-cream/50">
          — The BrightAir numbers —
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {counterStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="group flex flex-col items-center text-center transition-all duration-700"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue text-brand-cream transition group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </div>
                <div className="font-display text-[56px] font-extrabold leading-none text-brand-cream lg:text-[64px]">
                  {inView ? (
                    <CountUp end={s.n} duration={2.2} separator="," />
                  ) : (
                    0
                  )}
                  <span className="text-brand-orange">{s.suffix}</span>
                </div>
                <div className="mt-3 font-grotesk text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-cream/60">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
