import { whyChoose } from "@/config/site";
import { Award, BadgeDollarSign, Timer, ShieldCheck, type LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const iconMap: Record<string, LucideIcon> = {
  Award, BadgeDollarSign, Timer, ShieldCheck,
};

export function WhyChoose() {
  return (
    <section id="why" className="section-pad bg-brand-creamDeep/40">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">Why BrightAir</span>
            <h2 className="display-xl mt-5 text-brand-charcoal">
              Comfort done <em className="italic text-brand-orange">right</em>.
            </h2>
            <p className="mt-6 max-w-md font-sans text-[17px] leading-relaxed text-brand-charcoal/55">
              Four non-negotiables that make BrightAir the last HVAC company you'll need to call.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyChoose.map((item, i) => (
              <WhyCard key={item.title} item={item} i={i} icon={iconMap[item.icon] ?? Award} />
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
      className="rounded-2xl border border-brand-charcoal/5 bg-brand-paper p-7 transition-all duration-700 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${i % 2 === 0 ? 30 : 40}px)`,
      }}
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <h3 className="font-display text-2xl leading-snug text-brand-charcoal">
        {item.title}
      </h3>
      <p className="mt-3 font-sans text-[14.5px] leading-relaxed text-brand-charcoal/60">
        {item.desc}
      </p>
    </div>
  );
}
