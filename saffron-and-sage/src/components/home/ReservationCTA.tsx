import { openingHours } from "../../data/site";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function ReservationCTA() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="cta-heading">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-forest-800 px-8 py-16 text-center sm:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-forest-700/60 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-saffron-500/15 blur-2xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-400">
                Join us
              </p>
              <h2
                id="cta-heading"
                className="mt-4 text-4xl font-medium leading-tight text-cream-50 sm:text-5xl lg:text-6xl"
              >
                Save a seat at <em className="italic text-sage-300">our table</em>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-cream-200/85">
                Tell us when you would like to dine and we will get back to you
                to confirm. Open {openingHours[0].days.toLowerCase()},
                weekends and Sunday lunch.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ButtonLink to="/reservations" variant="saffron" size="lg">
                  Request a table
                </ButtonLink>
                <ButtonLink to="/contact" variant="light" size="lg">
                  Contact us
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
