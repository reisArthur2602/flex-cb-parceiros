import {Footer} from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { NavigationMenu } from "./components/navigation-menu";
import { PartnerCatalog } from "./components/partner-catalog";

const App = () => {
  return (
    <main className="min-h-screen bg-white">
      <NavigationMenu />
      <div className="container mx-auto p-4">
        <HeroSection />
        <PartnerCatalog />
      </div>
      <Footer />
    </main>
  );
};

export default App;
