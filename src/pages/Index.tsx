import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EgestorERP from "@/components/EgestorERP";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProfipeSection from "@/components/ProfipeSection";
import ContactSection from "@/components/ContactSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      {/* SEO optimized structure */}
      <Header />
      
      <main>
        <HeroSection />
        <EgestorERP />
        <AboutSection />
        <ServicesSection />
        <ProfipeSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;