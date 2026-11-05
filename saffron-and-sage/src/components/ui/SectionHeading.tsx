import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  /** id applied to the heading, for aria-labelledby on the parent section. */
  headingId?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  headingId,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${
            dark ? "text-saffron-400" : "text-saffron-700"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        id={headingId}
        className={`mt-3 text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl ${
          dark ? "text-cream-50" : "text-forest-900"
        }`}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-cream-200/85" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
