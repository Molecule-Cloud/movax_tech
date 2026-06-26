/**
 * ContactSection
 * ----------------------------------------------------------------------------
 * The `#contact` target every CTA on the site already points to. Pairs the
 * working form with static contact details — both matter: some visitors
 * want to fill out a form, others just want your email address right now.
 */
import { ContactForm } from "@/components/ContactForm";

const CONTACT_DETAILS = {
  email: "contact@movaxtechnologies.com",
  phone: "+233 5478 256 | +233 50 000 0000 | +233 50 000 0001",
  location: "1 Airport Square, ACCRA, GHANA",
};

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
            Get In Touch
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Tell us what you&apos;re trying to solve.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-foreground/70">
            Whether you have a defined project or just an operational
            headache you suspect technology could fix, start the
            conversation here - we&apos;ll follow up directly, not through a
            call center.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-foreground/50">Email</dt>
              <dd className="mt-1 font-medium text-foreground">
                {CONTACT_DETAILS.email}
              </dd>
            </div>
            <div>
              <dt className="text-foreground/50">Phone</dt>
              <dd className="mt-1 font-medium text-foreground">
                {CONTACT_DETAILS.phone}
              </dd>
            </div>
            <div>
              <dt className="text-foreground/50">Location</dt>
              <dd className="mt-1 font-medium text-foreground">
                {CONTACT_DETAILS.location}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-border-subtle bg-surface p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}