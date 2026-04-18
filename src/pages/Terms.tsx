import { Footer } from "@/components/sections/Footer";
import { SEO } from "@/components/SEO";
import { site } from "@/config/site";

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service" path="/terms" />
      
      <main className="container-x py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="display-lg mt-5 text-brand-navy">Terms of Service</h1>
          <p className="mt-2 font-grotesk text-sm text-brand-navy/50">
            Effective: {new Date().toLocaleDateString()}
          </p>

          <div className="mt-12 space-y-8 font-grotesk text-[15px] leading-relaxed text-brand-navy/75">
            <p>
              These Terms of Service ("Terms") govern your use of the {site.brand} website and services. By booking a service or using this site, you agree to these Terms.
            </p>

            <S title="1. Services">
              <p>{site.brand} provides licensed electrical services including repairs, installations, upgrades, and inspections. All work is performed by licensed, insured professionals.</p>
            </S>
            <S title="2. Estimates & Pricing">
              <p>Written estimates are provided in advance and are valid for 30 days unless otherwise stated. The final invoice matches the estimate unless scope changes are approved in writing (including text).</p>
            </S>
            <S title="3. Scheduling & Cancellations">
              <p>Appointments can be rescheduled or cancelled at no charge with at least 4 hours notice. Missed appointments without notice may incur a dispatch fee.</p>
            </S>
            <S title="4. Workmanship Warranty">
              <p>We warrant our workmanship for the lifetime of the installed work against defects caused by our labor. Manufacturer warranties pass through directly to you on all equipment and materials installed.</p>
            </S>
            <S title="5. Permits & Code Compliance">
              <p>Where required, we pull appropriate permits and ensure work meets or exceeds applicable electrical codes. You are responsible for providing accurate property information at time of booking.</p>
            </S>
            <S title="6. Payment">
              <p>Payment is due upon completion of work unless otherwise agreed in writing. We accept credit, debit, ACH, and major digital payment methods. Late payments may accrue interest at the maximum rate permitted by law.</p>
            </S>
            <S title="7. Limitation of Liability">
              <p>To the maximum extent permitted by law, {site.brand}'s liability is limited to the amount paid for the service. We are not liable for indirect, incidental, or consequential damages. This does not limit liability for injury caused by our negligence or willful misconduct.</p>
            </S>
            <S title="8. Access to Property">
              <p>You agree to provide reasonable and safe access to the premises and to disclose any known hazards. We reserve the right to pause or decline work if a site presents unsafe conditions until resolved.</p>
            </S>
            <S title="9. Intellectual Property">
              <p>All content on this website (text, images, logos) is the property of {site.brand} or its licensors and may not be used without written permission.</p>
            </S>
            <S title="10. Governing Law">
              <p>These Terms are governed by the laws of the state in which services are provided. Any disputes will be resolved in that state's courts.</p>
            </S>
            <S title="11. Contact">
              <p>
                Questions?{" "}
                <a href={`mailto:${site.email}`} className="text-brand-red underline underline-offset-2">
                  {site.email}
                </a>{" "}
                or {site.phone}.
              </p>
            </S>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function S({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-grotesk text-xl font-semibold text-brand-navy">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
