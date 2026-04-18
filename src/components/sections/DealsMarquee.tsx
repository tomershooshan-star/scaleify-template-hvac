import { site } from "@/config/site";

// Signature Heatfix move: rolling strip of active deals across the top.
export function DealsMarquee() {
  const items = [...site.deals, ...site.deals];
  return (
    <div className="w-full overflow-hidden border-b border-brand-charcoal/10 bg-brand-charcoal text-brand-cream">
      <div className="flex animate-marquee whitespace-nowrap py-2.5 font-grotesk text-[11px] font-semibold uppercase tracking-[0.22em]">
        {items.map((d, i) => (
          <span key={i} className="mx-10 flex items-center gap-3">
            <span className="inline-block h-1 w-1 rounded-full bg-brand-orange" />
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}
