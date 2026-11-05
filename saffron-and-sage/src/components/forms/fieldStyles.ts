export const labelClass =
  "block text-sm font-semibold text-forest-900";

export function inputClass(hasError: boolean): string {
  return `mt-2 block w-full rounded-xl border bg-cream-50 px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 transition focus:border-forest-700 focus:outline-none focus:ring-2 focus:ring-forest-700/25 ${
    hasError ? "border-red-700" : "border-cream-300"
  }`;
}

export const errorClass = "mt-1.5 text-sm font-medium text-red-800";
