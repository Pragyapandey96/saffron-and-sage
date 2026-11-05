import { Hero } from "../components/home/Hero";
import { MenuPreview } from "../components/home/MenuPreview";
import { ReservationCTA } from "../components/home/ReservationCTA";
import { SignatureDishes } from "../components/home/SignatureDishes";
import { StorySection } from "../components/home/StorySection";
import { Testimonials } from "../components/home/Testimonials";
import { usePageTitle } from "../hooks/usePageTitle";

export function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <SignatureDishes />
      <MenuPreview />
      <StorySection />
      <Testimonials />
      <ReservationCTA />
    </>
  );
}
