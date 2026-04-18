import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

type Msg = { from: "bot" | "user"; text: string };

const INITIAL: Msg[] = [
  {
    from: "bot",
    text: `Hi — I'm the ${site.brand} assistant. How can I help: booking, pricing, or an emergency?`,
  },
];

const QUICK = ["Book a service", "Get pricing", "Emergency", "Talk to a human"];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(INITIAL);
  const [text, setText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  function send(input: string) {
    const t = input.trim();
    if (!t) return;
    setMsgs((m) => [...m, { from: "user", text: t }]);
    setText("");
    setTimeout(() => setMsgs((m) => [...m, { from: "bot", text: generateReply(t) }]), 420);
  }

  return (
    <>
      <button
        onClick={() => setOpen((x) => !x)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-brand-red shadow-soft transition hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[32rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-3xl border border-brand-navy/10 bg-brand-paper shadow-soft">
          <div className="flex items-center justify-between bg-brand-navy px-4 py-3 text-brand-cream">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <div className="font-grotesk text-sm font-semibold">{site.brand}</div>
                <div className="text-[10px] text-brand-cream/55">Typically replies in minutes</div>
              </div>
            </div>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-1 rounded-full bg-brand-red/15 px-3 py-1 font-grotesk text-xs font-semibold text-brand-red"
            >
              <Phone className="h-3 w-3" />
              Call
            </a>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-brand-cream/40 px-4 py-4 font-grotesk text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={m.from === "bot" ? "flex justify-start" : "flex justify-end"}>
                <div
                  className={
                    m.from === "bot"
                      ? "max-w-[85%] rounded-2xl rounded-bl-sm bg-brand-paper px-3 py-2 text-brand-navy shadow-sm"
                      : "max-w-[85%] rounded-2xl rounded-br-sm bg-brand-navy px-3 py-2 text-brand-cream"
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {msgs.length <= 2 && (
            <div className="flex flex-wrap gap-2 border-t border-brand-navy/10 bg-brand-paper px-3 py-2">
              {QUICK.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-full border border-brand-navy/15 bg-brand-cream/40 px-3 py-1 font-grotesk text-xs font-medium text-brand-navy hover:border-brand-red hover:bg-brand-red/10"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <form
            className="flex items-center gap-2 border-t border-brand-navy/10 bg-brand-paper p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(text);
            }}
          >
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 rounded-full border border-brand-navy/15 bg-brand-paper px-4 py-2 font-grotesk text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
            />
            <Button type="submit" size="sm" className="shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}

function generateReply(text: string) {
  const t = text.toLowerCase();
  if (/\b(emergency|urgent|now|asap|right now)\b/.test(t)) {
    return `For emergencies, call ${site.phone} — 24/7, and we'll dispatch a licensed electrician fast.`;
  }
  if (/\b(price|cost|how much|quote|estimate)\b/.test(t)) {
    return "Most residential repairs are between $150–$600 at flat-rate pricing in writing. We can give a precise quote on-site — free. Want to book a free estimate?";
  }
  if (/\b(book|schedule|appointment)\b/.test(t)) {
    return `Fastest path: submit the contact form or call ${site.phone}. We confirm within 15 minutes during business hours.`;
  }
  if (/\b(human|real|person|agent|someone)\b/.test(t)) {
    return `Of course — call ${site.phone} and you'll reach a real person. Or drop your number in the form and we'll ring back within 15 minutes.`;
  }
  return `Great question. The fastest answer is a 2-minute call — ${site.phone}. Or tell me a bit more about what you're dealing with?`;
}
