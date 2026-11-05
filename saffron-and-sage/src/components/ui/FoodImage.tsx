import { useState } from "react";

interface FoodImageProps {
  /** File name without extension, from /public/images (e.g. "saffron-risotto"). */
  name: string;
  alt: string;
  /** Text shown on the placeholder until a real photo is added. */
  label?: string;
  className?: string;
  priority?: boolean;
}

/**
 * Renders /images/<name>.jpg filling its parent. If the file is missing it
 * falls back to an on-brand placeholder, so the layout never breaks while
 * photography is being sourced.
 */
export function FoodImage({
  name,
  alt,
  label,
  className = "",
  priority = false,
}: FoodImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900 p-6 text-center text-cream-100 ${className}`}
      >
        <svg
          viewBox="0 0 64 64"
          className="h-14 w-14 text-sage-300"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M32 56V24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path d="M32 36C21 36 15 29 15 18c11 0 17 7 17 18Z" fill="currentColor" />
          <path
            d="M32 28c9 0 15-6 15-15-9 0-15 6-15 15Z"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>
        {label && (
          <span className="font-display text-xl italic leading-tight text-cream-50">
            {label}
          </span>
        )}
        <span className="text-[0.65rem] uppercase tracking-[0.25em] text-sage-300">
          Photograph coming soon
        </span>
      </div>
    );
  }

  return (
    <img
      src={`${import.meta.env.BASE_URL}images/${name}.jpg`}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
