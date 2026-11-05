import { site } from "../data/site";

export function formatPrice(value: number): string {
  return `${site.currency}${value}`;
}
