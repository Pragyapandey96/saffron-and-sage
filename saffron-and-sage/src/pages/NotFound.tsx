import { ButtonLink } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { usePageTitle } from "../hooks/usePageTitle";

export function NotFound() {
  usePageTitle("Page not found");
  return (
    <section className="py-28 text-center lg:py-40">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-700">
          Error 404
        </p>
        <h1 className="mt-4 text-5xl font-medium text-forest-900 sm:text-6xl">
          This page has <em className="italic text-forest-600">left the table</em>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-ink-soft">
          We couldn&rsquo;t find the page you were looking for.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <ButtonLink to="/" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink to="/menu" variant="outline" size="lg">
            View the menu
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
