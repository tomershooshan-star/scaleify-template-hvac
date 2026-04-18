import { useEffect, useState } from "react";
import { site } from "@/config/site";

/**
 * LSI Cool-style preloader: letter-by-letter brand animation + spinner.
 * Fades out once the document is fully loaded, then unmounts.
 */
export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const letters = site.brand.toLowerCase().split("");

  useEffect(() => {
    // Keep loader visible at minimum ~1.4s for the animation to play through,
    // then fade out and unmount.
    const onReady = () => {
      setTimeout(() => setFadeOut(true), 1400);
      setTimeout(() => setLoading(false), 1900);
    };

    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady, { once: true });
      // Safety: always fall through even if 'load' never fires
      const safety = setTimeout(onReady, 2500);
      return () => {
        window.removeEventListener("load", onReady);
        clearTimeout(safety);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-brand-charcoal transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Spinner ring */}
      <div className="absolute h-44 w-44 animate-[spin_1.4s_linear_infinite] rounded-full border-2 border-brand-blue/20 border-t-brand-blue" />

      {/* Letter-by-letter brand */}
      <div className="relative flex gap-[2px] font-display text-[58px] font-extrabold uppercase leading-none tracking-tight text-brand-cream sm:text-[72px]">
        {letters.map((l, i) => (
          <span
            key={i}
            className="letter-loading inline-block"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {l}
          </span>
        ))}
      </div>

      {/* Soft orange glow underneath */}
      <div
        aria-hidden
        className="absolute h-64 w-64 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #ff5e14 0%, transparent 65%)" }}
      />
    </div>
  );
}
