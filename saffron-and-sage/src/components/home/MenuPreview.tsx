import { itemsByCategory, menuCategories } from "../../data/menu";
import { MenuItemRow } from "../menu/MenuItemRow";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const previewCategories = menuCategories.filter(
  (category) => category.id === "starters" || category.id === "mains",
);

export function MenuPreview() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="menu-preview-heading">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <div>
              <SectionHeading
                headingId="menu-preview-heading"
                eyebrow="From the menu"
                title={
                  <>
                    Honest food, <em className="italic text-forest-600">generously seasoned</em>
                  </>
                }
                description="A taste of what's on the pass this season. The full menu includes desserts and drinks."
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ButtonLink to="/menu" variant="outline">
              See the full menu
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-2">
          {previewCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 120}>
              <h3 className="border-b border-forest-800/20 pb-3 text-3xl italic text-forest-700">
                {category.label}
              </h3>
              <ul className="divide-y divide-cream-300/70">
                {itemsByCategory(category.id)
                  .slice(0, 3)
                  .map((item) => (
                    <MenuItemRow key={item.id} item={item} compact />
                  ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
