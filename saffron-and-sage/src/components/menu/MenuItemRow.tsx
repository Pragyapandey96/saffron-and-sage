import { dietaryKey, type MenuItem } from "../../data/menu";
import { formatPrice } from "../../lib/format";

interface MenuItemRowProps {
  item: MenuItem;
  /** Hide the dietary tags (used in the compact homepage preview). */
  compact?: boolean;
}

export function MenuItemRow({ item, compact = false }: MenuItemRowProps) {
  return (
    <li className="py-5">
      <div className="flex items-baseline gap-3">
        <h3 className="text-2xl font-medium leading-tight text-forest-900">
          {item.name}
        </h3>
        <span
          aria-hidden="true"
          className="mb-1 min-w-6 flex-1 border-b border-dotted border-forest-800/30"
        />
        <p className="font-display text-xl text-saffron-700">
          {formatPrice(item.price)}
        </p>
      </div>
      <p className="mt-1.5 max-w-xl leading-relaxed text-ink-soft">
        {item.description}
      </p>
      {!compact && item.tags && item.tags.length > 0 && (
        <p className="mt-2 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              title={dietaryKey[tag]}
              className="rounded-full border border-sage-400/70 px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wider text-forest-700"
            >
              <span aria-hidden="true">{tag}</span>
              <span className="sr-only">{dietaryKey[tag]}</span>
            </span>
          ))}
        </p>
      )}
    </li>
  );
}
