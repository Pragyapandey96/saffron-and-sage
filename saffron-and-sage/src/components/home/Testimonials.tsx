import { testimonials } from "../../data/testimonials";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  const hasSamples = testimonials.some((entry) => entry.sample);

  return (
    <section className="bg-cream-100 py-24 lg:py-32" aria-labelledby="testimonials-heading">
      <Container>
        <Reveal>
          <div>
            <SectionHeading
              headingId="testimonials-heading"
              align="center"
              eyebrow="Kind words"
              title={
                <>
                  What our <em className="italic text-forest-600">guests say</em>
                </>
              }
            />
          </div>
        </Reveal>

        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((entry, index) => (
            <li key={entry.id}>
              <Reveal delay={index * 120} className="h-full">
                <figure className="flex h-full flex-col rounded-[1.75rem] bg-cream-50 p-8 ring-1 ring-cream-300">
                  <svg
                    viewBox="0 0 32 24"
                    className="h-6 w-8 text-saffron-500"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M0 24V13.5C0 5.6 4.3 1 12 0v4.6C8.2 5.5 6.6 7.6 6.4 10.5H12V24H0Zm18 0V13.5C18 5.6 22.3 1 30 0v4.6c-3.8.9-5.4 3-5.6 5.9H30V24H18Z" />
                  </svg>
                  <blockquote className="mt-5 flex-1 font-display text-2xl leading-snug text-forest-900">
                    {entry.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-cream-300 pt-4 text-sm">
                    <span className="font-semibold text-forest-900">
                      {entry.author}
                    </span>
                    <span className="text-ink-soft"> &middot; {entry.context}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>

        {hasSamples && (
          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-ink-soft">
            Placeholder text for layout only. These are not real reviews; replace
            them with genuine guest feedback before launch.
          </p>
        )}
      </Container>
    </section>
  );
}
