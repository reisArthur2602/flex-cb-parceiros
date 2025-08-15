import { CtaSection } from "./components/cta-section";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { NavigationMenu } from "./components/navigation-menu";
import { PartnershipsSection } from "./components/partnerships-section";
import { TestimonialsSection } from "./components/testimonials-section";

const App = () => {
  return (
    <main className="min-h-screen ">
      <NavigationMenu />
      <HeroSection />
      <TestimonialsSection />
      <PartnershipsSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default App;
