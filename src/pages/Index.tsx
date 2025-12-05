import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Benefits from "@/components/landing/Benefits";
import Pricing from "@/components/landing/Pricing";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
