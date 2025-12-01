import { BestSeller } from "./components/BestSeller";
import { BrandTrust } from "./components/BrandTrust";
import { CustomerTestimonial } from "./components/CustomerTestimonial";
import { Footer } from "./components/Footer";
import { HealthCareDesk } from "./components/HealthCareDesk";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { CharitableInitiatives } from "./components/CharitableInitiatives";
import { Solutions } from "./components/Solutions";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Solutions />
      <BestSeller />
      <BrandTrust />
      <HealthCareDesk />
      <CharitableInitiatives />
      <CustomerTestimonial />
      <Footer />
    </div>
  );
}

export default App;
