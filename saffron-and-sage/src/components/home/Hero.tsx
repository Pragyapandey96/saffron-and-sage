import { openingHours, photos, site } from "../../data/site";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { FoodImage } from "../ui/FoodImage";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-sage-200/50 blur-3xl"
      />
      <Container>
        <div className="grid items-center gap-14 pb-20 pt-10 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-16">
          <div className="animate-fade-up motion-reduce:animate-none lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-700">
              Seasonal kitchen &middot; Open Tuesday to Sunday
            </p>
            <h1 className="mt-5 text-5xl font-medium leading-[1.02] tracking-tight text-forest-900 sm:text-6xl lg:text-7xl">
              Saffron, sage and{" "}
              <em className="italic text-forest-600">slow evenings.</em>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              {site.description} Come hungry, stay for the second glass.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink to="/reservations" size="lg">
                Reserve a table
              </ButtonLink>
              <ButtonLink to="/menu" variant="outline" size="lg">
                View the menu
              </ButtonLink>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-2 gap-6 border-t border-cream-300 pt-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                  Find us
                </dt>
                <dd className="mt-1.5 text-forest-900">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                  Dinner from
                </dt>
                <dd className="mt-1.5 text-forest-900">
                  {openingHours[0].time.split(" to ")[0]}
                  <br />
                  Sunday lunch from 12 pm
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] bg-forest-800 shadow-2xl shadow-forest-900/20 lg:max-w-lg">
              <FoodImage
                name={photos.hero}
                alt="A set table with seasonal dishes at Saffron & Sage"
                label="The table, set for dinner"
                priority
              />
            </div>
            <div className="absolute -bottom-6 left-0 max-w-[15rem] rounded-2xl bg-cream-50 p-5 shadow-xl shadow-forest-900/10 ring-1 ring-cream-300 sm:left-4 lg:-left-6">
              <p className="font-display text-xl italic leading-snug text-forest-900">
                The menu follows the market, so it changes with the seasons.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
