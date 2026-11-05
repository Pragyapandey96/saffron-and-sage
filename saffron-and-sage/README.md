# Saffron & Sage

A responsive restaurant website built with **Vite + React + TypeScript +
Tailwind CSS v4 + React Router**.

## Run it locally

Requires Node.js 20.19+ (or 22.12+), as required by Vite 7.

```bash
npm install        # install dependencies
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check, then create the production build in dist/
npm run preview    # serve the production build locally
```

## Important: no backend

The reservation and contact forms **do not store or send anything**. They
validate input, then offer a pre-filled `mailto:` link and a phone number so
the visitor can contact the restaurant themselves. To take real bookings,
connect a backend or a booking service (and then update the wording on the
forms).

## Placeholder content to replace before launch

- `src/data/site.ts`: address, phone, email, opening hours, bookable seatings
- `src/data/menu.ts`: dishes, descriptions, prices, dietary tags
- `src/data/testimonials.ts`: **sample text only**, not real reviews
- `public/images/`: photography (see `public/images/README.md`)

## Structure

```
src/
  components/
    layout/   Layout (shell), Navbar, Footer, Logo, ScrollToTop
    ui/       Button, Container, SectionHeading, PageHeader, Reveal, FoodImage
    home/     Hero, SignatureDishes, MenuPreview, StorySection,
              Testimonials, ReservationCTA
    menu/     MenuItemRow
    forms/    ReservationForm, ContactForm, fieldStyles
  pages/      Home, Menu, About, Reservations, Contact, NotFound
  data/       site, menu, testimonials
  hooks/      usePageTitle
  lib/        dates, format, mailto
  index.css   Tailwind import + theme tokens (colours, fonts, animation)
  App.tsx     Route table
  main.tsx    Entry point (BrowserRouter)
public/       favicon.svg, images/
```

## Deploying

Because the site uses client-side routing, configure your host to serve
`index.html` for unknown paths (a "single-page app" fallback), otherwise
refreshing `/menu` returns a 404.
