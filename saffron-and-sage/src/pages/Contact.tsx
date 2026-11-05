import { ContactForm } from "../components/forms/ContactForm";
import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { openingHours, site } from "../data/site";
import { usePageTitle } from "../hooks/usePageTitle";

export function Contact() {
  usePageTitle("Contact");
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Say <em className="italic text-forest-600">hello</em>
          </>
        }
        description="Questions about the menu, private dining or a special occasion? We'd love to hear from you."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-5">
              <div>
                <h2 className="text-3xl font-medium text-forest-900">Find us</h2>
                <address className="mt-4 not-italic leading-relaxed text-ink-soft">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}
                </address>
              </div>

              <div>
                <h2 className="text-3xl font-medium text-forest-900">
                  Get in touch
                </h2>
                <ul className="mt-4 space-y-2 text-ink-soft">
                  <li>
                    Phone:{" "}
                    <a
                      className="font-medium text-forest-800 underline underline-offset-4"
                      href={`tel:${site.phoneHref}`}
                    >
                      {site.phone}
                    </a>
                  </li>
                  <li>
                    Email:{" "}
                    <a
                      className="break-all font-medium text-forest-800 underline underline-offset-4"
                      href={`mailto:${site.email}`}
                    >
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-medium text-forest-900">Hours</h2>
                <ul className="mt-4 divide-y divide-cream-300/70">
                  {openingHours.map((row) => (
                    <li
                      key={row.days}
                      className="flex justify-between gap-4 py-3 text-ink-soft"
                    >
                      <span className="text-forest-900">{row.days}</span>
                      <span>{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
