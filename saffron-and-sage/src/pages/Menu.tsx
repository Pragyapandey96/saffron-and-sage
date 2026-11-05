import { useState } from "react";
import {
  dietaryKey,
  itemsByCategory,
  menuCategories,
  type MenuCategoryId,
} from "../data/menu";
import { MenuItemRow } from "../components/menu/MenuItemRow";
import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { usePageTitle } from "../hooks/usePageTitle";

type Filter = "all" | MenuCategoryId;

export function Menu() {
  usePageTitle("Menu");
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all"
      ? menuCategories
      : menuCategories.filter((category) => category.id === filter);

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    ...menuCategories.map((c) => ({ id: c.id, label: c.label })),
  ];

  return (
    <>
      <PageHeader
        eyebrow="The menu"
        title={
          <>
            Cooked with the <em className="italic text-forest-600">seasons</em>
          </>
        }
        description="Our menu changes as the market does. Dishes below are a guide to what we cook; ask your server about today's specials."
      />

      <section className="py-16 lg:py-24" aria-label="Menu">
        <Container>
          <div
            role="group"
            aria-label="Filter menu by category"
            className="flex flex-wrap gap-3"
          >
            {filters.map((option) => {
              const active = filter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(option.id)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                    active
                      ? "border-forest-800 bg-forest-800 text-cream-50"
                      : "border-forest-800/25 text-forest-800 hover:border-forest-800"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          <div className="mt-14 space-y-20">
            {visible.map((category) => (
              <section
                key={category.id}
                aria-labelledby={`cat-${category.id}`}
                className="grid gap-8 lg:grid-cols-12 lg:gap-16"
              >
                <div className="lg:col-span-4">
                  <h2
                    id={`cat-${category.id}`}
                    className="text-4xl italic text-forest-700 sm:text-5xl"
                  >
                    {category.label}
                  </h2>
                  <p className="mt-3 max-w-xs leading-relaxed text-ink-soft">
                    {category.note}
                  </p>
                </div>
                <ul className="divide-y divide-cream-300/70 lg:col-span-8">
                  {itemsByCategory(category.id).map((item) => (
                    <MenuItemRow key={item.id} item={item} />
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <aside className="mt-20 rounded-2xl bg-cream-100 p-6 text-sm leading-relaxed text-ink-soft ring-1 ring-cream-300">
            <p>
              <span className="font-semibold text-forest-900">Key: </span>
              {Object.entries(dietaryKey)
                .map(([code, label]) => `${code} = ${label}`)
                .join(" · ")}
              .
            </p>
            <p className="mt-2">
              Please tell us about any allergies or intolerances before you
              order; our kitchen handles nuts, gluten, dairy and shellfish.
            </p>
          </aside>
        </Container>
      </section>
    </>
  );
}
