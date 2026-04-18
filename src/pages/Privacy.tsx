import { Footer } from "@/components/sections/Footer";
import { SEO } from "@/components/SEO";
import { site } from "@/config/site";

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" path="/privacy" />
      
      <main className="container-x py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="display-lg mt-5 text-brand-navy">Privacy Policy</h1>
          <p className="mt-2 font-grotesk text-sm text-brand-navy/50">
            Effective: {new Date().toLocaleDateString()}
          </p>

          <div className="mt-12 space-y-8 font-grotesk text-[15px] leading-relaxed text-brand-navy/75">
            <p>
              {site.brand} ("we," "our," or "us") respects your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights. By using our website or services, you agree to the practices described here.
            </p>

            <Section title="1. Information We Collect">
              <p>We collect information you provide directly, including:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Name, phone, email, and address when you request a quote, book a service, or contact us</li>
                <li>Service history and preferences to help us serve you better</li>
                <li>Payment details processed securely through third-party processors (we do not store card numbers)</li>
              </ul>
              <p className="mt-3">
                We also automatically collect limited technical data when you visit our website, such as IP address, browser type, pages viewed, and referral source, via cookies and similar technologies.
              </p>
            </Section>

            <Section title="2. How We Use Information">
              <ul className="list-disc space-y-1 pl-6">
                <li>Respond to inquiries and dispatch technicians</li>
                <li>Process service bookings, estimates, and payments</li>
                <li>Send appointment reminders, service updates, and post-service follow-ups</li>
                <li>Improve our website, operations, and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </Section>

            <Section title="3. SMS & Phone Communications">
              <p>
                When you submit a phone number through our website or provide it to a representative, you agree to receive service-related calls and text messages from {site.brand}. Message and data rates may apply. Reply STOP to opt out of marketing SMS. Transactional service messages (appointment confirmations, technician dispatch, etc.) may continue as they relate to active services you requested.
              </p>
            </Section>

            <Section title="4. Sharing of Information">
              <p>We do not sell personal information. We share data only with:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Service providers who help us operate (scheduling, payment processing, SMS, email)</li>
                <li>Legal authorities when required by law</li>
                <li>Professional advisors under confidentiality obligations</li>
              </ul>
            </Section>

            <Section title="5. Cookies">
              <p>
                We use cookies to remember preferences, understand how our site is used, and improve performance. You can disable cookies in your browser settings, though some features may not work as intended.
              </p>
            </Section>

            <Section title="6. Data Security">
              <p>
                We use commercially reasonable technical and organizational safeguards to protect your data. No system is 100% secure, but we work to protect your information.
              </p>
            </Section>

            <Section title="7. Your Rights">
              <p>
                Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict use of your personal data. To exercise any of these rights, contact us at {site.email}.
              </p>
            </Section>

            <Section title="8. Children">
              <p>
                Our services are not directed to children under 13, and we do not knowingly collect their information.
              </p>
            </Section>

            <Section title="9. Changes">
              <p>
                We may update this policy from time to time. Material changes will be posted on this page with an updated effective date.
              </p>
            </Section>

            <Section title="10. Contact">
              <p>
                Questions? Contact {site.brand} at{" "}
                <a href={`mailto:${site.email}`} className="text-brand-red underline underline-offset-2">
                  {site.email}
                </a>{" "}
                or call {site.phone}.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-grotesk text-xl font-semibold text-brand-navy">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
