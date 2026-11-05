import type { ReactNode } from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}

/** Shared top-of-page banner used by Menu, About, Reservations, Contact. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-cream-300/70 bg-cream-100 py-20 lg:py-28">
      <Container>
        <div className="animate-fade-up motion-reduce:animate-none">
          <SectionHeading
            as="h1"
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </div>
      </Container>
    </header>
  );
}
