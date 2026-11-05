import { ButtonLink } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { FoodImage } from "../components/ui/FoodImage";
import { PageHeader } from "../components/ui/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import { photos } from "../data/site";
import { usePageTitle } from "../hooks/usePageTitle";

const values = [
  {
    title: "Market first",
    body: "We start with what's good this week and write the menu around it, not the other way round.",
  },
  {
    title: "Fire and patience",
    body: "Open flame, long braises and slow-steeped saffron. Good things on our menu take time.",
  },
  {
    title: "An open table",
    body: "Warm service, no rush and room for one more chair. Everyone is welcome to linger.",
  },
];

export function About() {
  usePageTitle("About");
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            A kitchen built around <em className="italic text-forest-600">the table</em>
          </>
        }
        description="Saffron & Sage is a small, seasonal restaurant for long lunches, quiet dinners and celebrations of every size."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
                <p>
                  We started with a simple belief: a meal should feel like
                  being invited into someone&rsquo;s home. That means food that
                  is generous without being fussy, and a room where nobody
                  checks the time.
                </p>
                <p>
                  Saffron brings warmth and a little drama; sage keeps things
                  grounded and green. Together they set the tone for
                  everything we cook, from a plate of charred vegetables to a
                  slow-braised shoulder of lamb.
                </p>
                <p>
                  Our menu is deliberately short and changes with the
                  seasons. We work with growers and producers we trust, and we
                  cook most dishes over an open fire.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-6">
              <div className="aspect-[5/4] overflow-hidden rounded-[2rem] bg-forest-800">
                <FoodImage
                  name={photos.room}
                  alt="The dining room at Saffron & Sage, set for evening service"
                  label="The dining room"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-forest-900 py-20 text-cream-100 lg:py-28" aria-labelledby="values-heading">
        <Container>
          <h2
            id="values-heading"
            className="text-4xl font-medium text-cream-50 sm:text-5xl"
          >
            What we <em className="italic text-sage-300">believe in</em>
          </h2>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {values.map((value, index) => (
              <li key={value.title}>
                <Reveal delay={index * 120}>
                  <p className="font-display text-5xl italic text-saffron-400" aria-hidden="true">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-medium text-cream-50">
                    {value.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-cream-200/80">
                    {value.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 text-center lg:py-28">
        <Container>
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-4xl font-medium text-forest-900 sm:text-5xl">
              We&rsquo;d love to <em className="italic text-forest-600">cook for you</em>
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <ButtonLink to="/reservations" size="lg">
                Reserve a table
              </ButtonLink>
              <ButtonLink to="/menu" variant="outline" size="lg">
                Explore the menu
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
