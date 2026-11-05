import { Link } from "react-router";
import { navLinks, openingHours, site } from "../../data/site";
import { Container } from "../ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-forest-950 text-cream-200">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm leading-relaxed text-cream-200/80">
              {site.description}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-400 font-sans">
              Visit
            </h2>
            <address className="mt-5 not-italic leading-relaxed text-cream-200/85">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city}
            </address>
            <ul className="mt-5 space-y-1.5 text-sm text-cream-200/80">
              {openingHours.map((row) => (
                <li key={row.days}>
                  <span className="text-cream-50">{row.days}</span>
                  <br />
                  {row.time}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-400 font-sans">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-cream-200/85 transition hover:text-saffron-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-400 font-sans">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-cream-200/85">
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="transition hover:text-saffron-400"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition hover:text-saffron-400"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream-200/15 pt-8 text-sm text-cream-200/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Please tell us about any allergies when you book or order.</p>
        </div>
      </Container>
    </footer>
  );
}
