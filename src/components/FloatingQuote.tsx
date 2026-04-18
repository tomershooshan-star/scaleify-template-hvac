import { useState, type FormEvent } from "react";
import { X, MessageSquareQuote, Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

const WEBHOOK = import.meta.env.VITE_CONTACT_WEBHOOK as string | undefined;

export function FloatingQuote() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    setStatus("sending");
    try {
      if (WEBHOOK) {
        await fetch(WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, source: `${site.brand} - Instant Quote`, ts: new Date().toISOString() }),
        });
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => { setStatus("idle"); setOpen(false); }, 2500);
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Tab button — right edge, vertical text */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed right-0 top-1/2 z-40 -translate-y-1/2 transition-all duration-300 ${
          open ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        aria-label="Get Instant Quote"
      >
        <div className="flex h-36 w-10 items-center justify-center rounded-l-lg bg-brand-red shadow-lg transition hover:w-12">
          <span
            className="font-grotesk text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cream whitespace-nowrap"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            Instant Quote
          </span>
        </div>
      </button>

      {/* Slide-out panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md transform bg-brand-paper shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Backdrop */}
        {open && (
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          />
        )}

        <div className="relative z-50 flex h-full flex-col bg-brand-paper">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-brand-navy/10 px-6 py-5">
            <div>
              <div className="font-display text-xl font-bold text-brand-navy">
                Get an Instant Quote
              </div>
              <div className="mt-1 font-grotesk text-xs text-brand-navy/55">
                We'll text you back within 15 minutes
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy transition hover:bg-brand-navy/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
            <Field label="Your Name" name="name" required placeholder="Jane Smith" />
            <Field label="Phone" name="phone" type="tel" required placeholder="(555) 000-0000" />
            <Field label="Email" name="email" type="email" placeholder="jane@email.com" />
            <Field label="Service Needed" name="service" placeholder="Panel upgrade, rewiring, etc." />
            <Field label="Describe the Issue" name="message" as="textarea" placeholder="What's going on?" required />

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={status === "sending"}
            >
              {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "success" && <Check className="h-4 w-4" />}
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "Sent! We'll text you shortly."
                : "Get My Free Quote"}
            </Button>

            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please call {site.phone} directly.
              </p>
            )}

            <p className="font-grotesk text-[11px] text-brand-navy/45">
              By submitting, you agree to receive a call or text back from {site.brand}. Message & data rates may apply.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  as = "input",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  as?: "input" | "textarea";
}) {
  const cls =
    "w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3 font-grotesk text-sm text-brand-navy placeholder:text-brand-navy/35 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition";
  return (
    <label className="block">
      <span className="mb-1.5 block font-grotesk text-xs font-semibold uppercase tracking-[0.15em] text-brand-navy/60">
        {label}
        {required && <span className="text-brand-red"> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={3} className={cls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}
