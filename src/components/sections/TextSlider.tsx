const slides = [
  "AC INSTALLATION",
  "HEATING REPAIR",
  "DUCT CLEANING",
  "EMERGENCY SERVICE",
  "AC INSTALLATION",
  "HEATING REPAIR",
  "DUCT CLEANING",
  "EMERGENCY SERVICE",
];

export function TextSlider() {
  return (
    <section className="overflow-hidden bg-brand-charcoal py-12 lg:py-16">
      <div className="flex animate-marquee whitespace-nowrap">
        {slides.map((s, i) => (
          <div
            key={`${s}-${i}`}
            className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
          >
            <Diamond />
            <h3 className="font-display text-5xl font-normal tracking-tight text-brand-cream sm:text-6xl lg:text-[96px] lg:leading-none">
              {s}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function Diamond() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden
      className="shrink-0 lg:h-16 lg:w-16"
    >
      <path
        d="M30 0L38.1027 21.8973L60 30L38.1027 38.1027L30 60L21.8973 38.1027L0 30L21.8973 21.8973L30 0Z"
        fill="#FF5A1F"
      />
    </svg>
  );
}
