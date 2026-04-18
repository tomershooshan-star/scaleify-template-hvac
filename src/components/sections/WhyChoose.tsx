import { whyChoose } from "@/config/site";
import { Award, BadgeDollarSign, Timer, ShieldCheck, type LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const iconMap: Record<string, LucideIcon> = {
  Award, BadgeDollarSign, Timer, ShieldCheck,
};

export function WhyChoose() {
  return (
    <section id="why" className="relative overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/images/why/why_chose_us_bg_1.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=2400&q=85";
          }}
        />
        {/* Dark charcoal gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(14,17,22,0.95) 0%, rgba(14,17,22,0.82) 45%, rgba(14,17,22,0.55) 100%)",
          }}
        />
        {/* Orange heat-pulse glow */}
        <div
          aria-hidden
          className="absolute -right-40 top-1/3 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF5A1F 0%, transparent 65%)" }}
        />
      </div>

      <div className="container-x relative py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-20">
          {/* Left content */}
          <div>
            <span className="eyebrow eyebrow-dot text-brand-orange mb-5">
              Why BrightAir
            </span>
            <h2 className="display-xl mt-4 text-brand-cream">
              Relax — we've got your{" "}
              <em className="italic text-brand-orange">air climate</em> covered.
            </h2>
            <p className="mt-6 max-w-md font-sans text-[16.5px] leading-relaxed text-brand-cream/65">
              Four non-negotiables that make BrightAir the last HVAC company
              you'll need to call. Not a gimmick — our guarantee, in writing.
            </p>

            {/* Trust badges strip */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              {[
                { n: "20+", label: "Years Serving LA" },
                { n: "18K+", label: "Systems Serviced" },
                { n: "4.9★", label: "1,840+ Reviews" },
                { n: "2hr", label: "Emergency Response" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.04] p-5 backdrop-blur-sm"
                >
                  <div className="font-display text-4xl text-brand-orange">{s.n}</div>
                  <div className="mt-1 font-grotesk text-[11px] uppercase tracking-[0.18em] text-brand-cream/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item, i) => (
              <WhyCard
                key={item.title}
                item={item}
                i={i}
                icon={iconMap[item.icon] ?? Award}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyCard({
  item,
  i,
  icon: Icon,
}: {
  item: { title: string; desc: string };
  i: number;
  icon: LucideIcon;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      className="group rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.04] p-7 backdrop-blur-sm transition-all duration-700 ease-out hover:border-brand-orange/40 hover:bg-brand-cream/[0.07]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${i % 2 === 0 ? 30 : 40}px)`,
        transitionDelay: `${i * 80}ms`,
      }}
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white transition group-hover:scale-110">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <h3 className="font-display text-xl leading-snug text-brand-cream">
        {item.title}
      </h3>
      <p className="mt-3 font-sans text-[14px] leading-relaxed text-brand-cream/60">
        {item.desc}
      </p>
    </div>
  );
}
