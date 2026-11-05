/**
 * Single source of truth for restaurant details.
 * Everything here is PLACEHOLDER content: replace the address, phone and
 * email with real details before launch.
 */
export const site = {
  name: "Saffron & Sage",
  tagline: "Seasonal cooking for slow evenings",
  description:
    "A market-led kitchen cooking over open fire, with saffron, sage and whatever the season is offering.",
  address: {
    line1: "42 Marigold Lane",
    line2: "Old Orchard District",
    city: "Your City",
  },
  phone: "+1 (555) 014-2290",
  phoneHref: "+15550142290",
  email: "hello@saffronandsage.example",
  reservationsEmail: "reservations@saffronandsage.example",
  currency: "$",
} as const;

/** Human-readable opening hours (display only). */
export const openingHours = [
  { days: "Tuesday to Thursday", time: "5:30 pm to 9:30 pm" },
  { days: "Friday and Saturday", time: "5:30 pm to 10:30 pm" },
  { days: "Sunday", time: "12:00 pm to 8:30 pm" },
  { days: "Monday", time: "Closed" },
] as const;

/**
 * Bookable seatings by weekday (0 = Sunday ... 6 = Saturday), used by the
 * reservation form. null = closed. Keep in step with `openingHours`.
 */
export const seatingByWeekday: Record<
  number,
  { first: string; last: string } | null
> = {
  0: { first: "12:00", last: "19:30" },
  1: null,
  2: { first: "17:30", last: "20:30" },
  3: { first: "17:30", last: "20:30" },
  4: { first: "17:30", last: "20:30" },
  5: { first: "17:30", last: "21:30" },
  6: { first: "17:30", last: "21:30" },
};

export const maxOnlineParty = 8;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
] as const;

/**
 * Photo slots. Each name maps to /public/images/<name>.jpg.
 * Until a file exists the site shows an on-brand placeholder instead.
 */
export const photos = {
  hero: "hero-table",
  story: "story-kitchen",
  room: "about-room",
} as const;
