import { stats } from "@/config/site";

export function Stats() {
  return (
    <section className="border-y border-brand-charcoal/10 py-16 lg:py-20">
      <div className="container-x">
        <p className="mb-12 font-grotesk text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-charcoal/40">
          Two decades of comfort, served
        </p>
        <div className="grid gap-y-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="display-xl text-brand-charcoal">{s.n}</div>
              <div className="mt-2 font-grotesk text-xs font-semibold uppercase tracking-[0.22em] text-brand-charcoal/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
