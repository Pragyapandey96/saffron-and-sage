import { photos } from "../../data/site";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { FoodImage } from "../ui/FoodImage";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function StorySection() {
  return (
    <section
      className="bg-forest-900 py-24 text-cream-100 lg:py-32"
      aria-labelledby="story-heading"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-forest-800 lg:rounded-t-[999px]">
              <FoodImage
                name={photos.story}
                alt="Cooks working over the open fire in the kitchen"
                label="Cooking over open fire"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div>
              <SectionHeading
                headingId="story-heading"
                tone="dark"
                eyebrow="Our story"
                title={
                  <>
                    Born from a love of <em className="italic text-sage-300">gathering</em>
                  </>
                }
              />
            </div>
            <div className="mt-7 max-w-xl space-y-5 text-lg leading-relaxed text-cream-200/85">
              <p>
                Saffron &amp; Sage began with a simple idea: that the best
                evenings happen around a table where nobody is in a hurry. We
                cook with the market, a wood fire and a well-worn jar of
                saffron.
              </p>
              <p>
                The menu is short on purpose. We would rather do fifteen things
                properly than fifty things quickly, and we change it whenever
                the season gives us a reason.
              </p>
            </div>
            <div className="mt-9">
              <ButtonLink to="/about" variant="light">
                Read more about us
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
