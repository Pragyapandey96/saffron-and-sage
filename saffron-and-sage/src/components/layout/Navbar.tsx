import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { navLinks } from "../../data/site";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { Logo } from "./Logo";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `relative py-2 text-sm font-medium tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-saffron-500 after:transition-transform after:duration-300 ${
    isActive
      ? "text-forest-900 after:scale-x-100"
      : "text-ink-soft hover:text-forest-900 after:scale-x-0 hover:after:scale-x-100"
  }`;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        scrolled || open
          ? "border-b border-cream-300/70 bg-cream-50/90 backdrop-blur-md"
          : "border-b border-transparent bg-cream-50"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" aria-label="Saffron & Sage, home" className="rounded-md">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
          <ButtonLink to="/reservations" size="md">
            Reserve a table
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest-800/20 text-forest-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-cream-300/70 bg-cream-50 lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 font-display text-2xl ${
                    isActive
                      ? "bg-cream-100 text-forest-900"
                      : "text-ink-soft hover:bg-cream-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <ButtonLink to="/reservations" size="lg" className="mt-4">
              Reserve a table
            </ButtonLink>
          </Container>
        </nav>
      )}
    </header>
  );
}
