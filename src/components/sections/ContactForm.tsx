import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Loader2, Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

const WEBHOOK = import.meta.env.VITE_CONTACT_WEBHOOK as string | undefined;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    setStatus("sending");
    try {
      if (WEBHOOK) {
        const r = await fetch(WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, source: site.brand, ts: new Date().toISOString() }),
        });
        if (!r.ok) throw new Error("Webhook failed");
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        {/* Top CTA panel — orange */}
        <div className="relative overflow-hidden rounded-3xl bg-brand-orange px-8 py-14 text-white sm:px-14 sm:py-16 lg:px-20 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #FAF6F0 0%, transparent 60%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 h-96 w-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #1B1F28 0%, transparent 60%)" }}
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                Get Started
              </span>
              <h2 className="mt-4 font-display leading-[0.98] text-white" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
                Your comfort's <span className="text-brand-orange font-extrabold">one call</span> away.
              </h2>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Button asChild size="lg" variant="dark">
                <a href={`tel:${site.phoneRaw}`}>
                  <Phone className="h-5 w-5" />
                  Call {site.phone}
                </a>
              </Button>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-1.5 font-grotesk text-sm font-semibold text-white/90 transition hover:gap-2.5 hover:text-white"
              >
                Or fill out the form below
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div id="contact-form" className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <span className="eyebrow">Get In Touch</span>
            <h3 className="display-lg mt-5 text-brand-charcoal">
              Request a <span className="text-brand-orange font-extrabold">free estimate</span>.
            </h3>
            <p className="mt-5 max-w-md font-sans text-[17px] leading-relaxed text-brand-charcoal/55">
              Tell us what's going on — we'll text you back within 15 minutes during business hours.
            </p>

            <div className="relative mt-8 aspect-[5/3] w-full overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?auto=format&fit=crop&w=1200&q=85"
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(200deg, rgba(14,17,22,0) 40%, rgba(14,17,22,0.85) 100%)" }} />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                <div>
                  <div className="font-display text-2xl leading-tight text-brand-cream">
                    Real humans. Fast response.
                  </div>
                  <div className="mt-1 font-grotesk text-xs text-brand-cream/70">
                    Avg reply: under 15 minutes
                  </div>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                  <Phone className="h-4 w-4" />
                </div>
              </div>
            </div>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <Row icon={Phone} label="Phone" value={site.phone} href={`tel:${site.phoneRaw}`} />
              <Row icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <Row icon={MapPin} label="Address" value={site.address} />
              <Row icon={Clock} label="Hours" value={`${site.hours.weekdays} · ${site.hours.emergency}`} />
            </dl>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-brand-charcoal/10 bg-brand-paper p-8 shadow-card lg:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your Name" name="name" required placeholder="Jane Smith" />
              <Field label="Phone" name="phone" type="tel" required placeholder="(555) 000-0000" />
            </div>
            <div className="mt-5"><Field label="Email" name="email" type="email" placeholder="jane@email.com" /></div>
            <div className="mt-5"><Field label="Service Needed" name="service" placeholder="AC repair, new system, tune-up, etc." /></div>
            <div className="mt-5"><Field label="Describe The Issue" name="message" as="textarea" placeholder="Not cooling, weird noise, high energy bill..." required /></div>
            <Button type="submit" size="lg" variant="orange" className="mt-6 w-full" disabled={status === "sending"}>
              {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "success" && <Check className="h-4 w-4" />}
              {status === "sending" ? "Sending…" : status === "success" ? "Sent!" : "Request A Call"}
            </Button>
            {status === "error" && <p className="mt-3 font-sans text-sm text-destructive">Something went wrong. Please call us at {site.phone}.</p>}
            {status === "success" && <p className="mt-3 font-sans text-sm text-brand-charcoal/55">Thanks — we'll reach out shortly.</p>}
            <p className="mt-4 font-sans text-[11px] leading-relaxed text-brand-charcoal/45">
              By submitting, you agree to receive a call or text back from {site.brand}. Message & data rates may apply.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Row({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const Inner = (
    <>
      <Icon className="h-4 w-4 text-brand-orange" />
      <div>
        <dt className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-charcoal/45">{label}</dt>
        <dd className="mt-1 font-grotesk text-[14px] font-medium text-brand-charcoal">{value}</dd>
      </div>
    </>
  );
  return (
    <div className="flex items-start gap-3">
      {href ? <a href={href} className="flex items-start gap-3">{Inner}</a> : Inner}
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required, as = "input" }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean; as?: "input" | "textarea";
}) {
  const cls = "w-full rounded-xl border border-brand-charcoal/15 bg-brand-paper px-4 py-3.5 font-grotesk text-sm text-brand-charcoal placeholder:text-brand-charcoal/35 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition";
  return (
    <label className="block">
      <span className="mb-1.5 block font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-charcoal/60">
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={4} className={cls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}
