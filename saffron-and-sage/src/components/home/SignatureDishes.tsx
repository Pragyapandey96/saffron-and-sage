import { signatureDishes } from "../../data/menu";
import { formatPrice } from "../../lib/format";
import { Container } from "../ui/Container";
import { FoodImage } from "../ui/FoodImage";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function SignatureDishes() {
  return (
    <section className="bg-cream-100 py-24 lg:py-32" aria-labelledby="signature-heading">
      <Container>
        <Reveal>
          <div>
            <SectionHeading
              headingId="signature-heading"
              eyebrow="Signature dishes"
              title={
                <>
                  Three plates we <em className="italic text-forest-600">keep coming back to</em>
                </>
              }
              description="Dishes that anchor the menu while everything around them shifts with the seasons."
            />
          </div>
        </Reveal>

        <ul className="mt-16 grid gap-10 md:grid-cols-3">
          {signatureDishes.map((dish, index) => (
            <li key={dish.id}>
              <Reveal delay={index * 120}>
                <article className="group">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-forest-800">
                    <FoodImage
                      name={dish.image ?? dish.id}
                      alt={dish.name}
                      label={dish.name}
                      className="transition duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl font-medium leading-tight text-forest-900">
                      {dish.name}
                    </h3>
                    <p className="font-display text-xl text-saffron-700">
                      {formatPrice(dish.price)}
                    </p>
                  </div>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    {dish.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
