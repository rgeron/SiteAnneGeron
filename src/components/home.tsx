import React from "react";
import HeroSection from "./hero/HeroSection";
import ServicesSection from "./services/ServicesSection";
import ProductionsSection from "./productions/ProductionsSection";
import PartnersSection from "./partners/PartnersSection";
import Footer from "./contact/Footer";

interface HomeProps {
  quotes?: {
    text: string;
    author: string;
  }[];
  logoText?: string;
  etymology?: string;
  imageUrl?: string;
  introText?: string;
}

const Home = ({
  quotes,
  logoText,
  etymology,
  imageUrl,
  introText,
}: HomeProps) => {
  return (
    <main className="min-h-screen w-full bg-white">
      <HeroSection
        quotes={quotes}
        logoText={logoText}
        etymology={etymology}
        imageUrl={imageUrl}
        introText={introText}
      />
      <ServicesSection />
      <PartnersSection />
      <ProductionsSection />
      <Footer />
    </main>
  );
};

export default Home;
