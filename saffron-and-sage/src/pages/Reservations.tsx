import { ReservationForm } from "../components/forms/ReservationForm";
import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { maxOnlineParty, openingHours, site } from "../data/site";
import { usePageTitle } from "../hooks/usePageTitle";

export function Reservations() {
  usePageTitle("Reservations");
  return (
    <>
      <PageHeader
        eyebrow="Reservations"
        title={
          <>
            Reserve <em className="italic text-forest-600">your table</em>
          </>
        }
        description="Choose a date and time and we'll prepare your request. The restaurant confirms every booking directly."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ReservationForm />
            </div>

            <aside className="space-y-8 lg:col-span-5" aria-label="Booking information">
              <div>
                <h2 className="text-3xl font-medium text-forest-900">
                  Opening hours
                </h2>
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

              <div className="rounded-2xl bg-cream-100 p-6 ring-1 ring-cream-300">
                <h2 className="text-2xl font-medium text-forest-900">
                  Good to know
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft marker:text-saffron-500">
                  <li>
                    Parties of {maxOnlineParty + 1} or more: please call{" "}
                    <a
                      className="font-medium text-forest-800 underline underline-offset-4"
                      href={`tel:${site.phoneHref}`}
                    >
                      {site.phone}
                    </a>
                    .
                  </li>
                  <li>Let us know about allergies and special occasions.</li>
                  <li>
                    This form does not make a booking by itself. Your table is
                    held only once the restaurant confirms it.
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
