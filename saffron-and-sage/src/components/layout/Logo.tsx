interface LogoProps {
  tone?: "dark" | "light";
}

export function Logo({ tone = "dark" }: LogoProps) {
  const light = tone === "light";
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        viewBox="0 0 40 40"
        className="h-8 w-8"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="20"
          cy="20"
          r="19"
          className={light ? "stroke-sage-300" : "stroke-forest-800"}
          strokeWidth="1.5"
        />
        <path
          d="M20 31V16"
          className="stroke-saffron-500"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 22c-6 0-9-4-9-9 6 0 9 4 9 9Z"
          className={light ? "fill-sage-300" : "fill-forest-700"}
        />
        <path d="M20 18c5 0 8-3 8-8-5 0-8 3-8 8Z" className="fill-sage-400" />
      </svg>
      <span
        className={`font-display text-2xl font-semibold leading-none tracking-tight ${
          light ? "text-cream-50" : "text-forest-900"
        }`}
      >
        Saffron <span className="italic text-saffron-500">&amp;</span> Sage
      </span>
    </span>
  );
}
