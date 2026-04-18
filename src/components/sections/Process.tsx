import { process as steps } from "@/config/site";

export function Process() {
  return (
    <section id="process" className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">How It Works</span>
          <h2 className="display-xl mt-5 text-brand-charcoal">
            Book a service in <em className="italic text-brand-orange">four</em> steps.
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="flex items-center gap-3 font-grotesk text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
                <span>{s.n}</span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-brand-charcoal/10 lg:block" />
                )}
              </div>
              <h3 className="mt-5 font-display text-2xl leading-tight text-brand-charcoal">
                {s.title}
              </h3>
              <p className="mt-3 font-sans text-[14.5px] leading-relaxed text-brand-charcoal/55">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
