import { ShieldCheck, Award, Leaf, CircleCheck, Zap } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const certs = [
  { icon: Award, label: "NATE Certified", sub: "North American Technician Excellence" },
  { icon: ShieldCheck, label: "EPA 608", sub: "Refrigerant Handling Certified" },
  { icon: Leaf, label: "Energy Star", sub: "Partner Installer" },
  { icon: CircleCheck, label: "BBB A+", sub: "Accredited Business" },
  { icon: Zap, label: "Licensed & Bonded", sub: "CA License #998421" },
];

export function Certifications() {
  const { ref, inView } = useReveal<HTMLDivElement>(0.15);
  return (
    <section className="border-y border-brand-charcoal/10 bg-brand-paper py-10 lg:py-12">
      <div className="container-x">
        <div
          ref={ref}
          className="flex flex-col items-center gap-6 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <p className="font-grotesk text-[10px] font-bold uppercase tracking-[0.28em] text-brand-charcoal/45">
            Certified · Licensed · Accredited
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16">
            {certs.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-ice text-brand-steel">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div className="leading-tight">
                  <div className="font-display text-[14px] font-bold text-brand-charcoal">
                    {label}
                  </div>
                  <div className="font-grotesk text-[10.5px] text-brand-charcoal/50">
                    {sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
