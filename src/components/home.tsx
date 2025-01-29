import React from "react";
import BentoLayout from "./BentoLayout";
import ProductionsSection from "./productions/ProductionsSection";
import PartnersSection from "./partners/PartnersSection";
import Footer from "./contact/Footer";

interface HomeProps {
  quotes?: {
    text: string;
    author: string;
  }[];
}

const Home = ({ quotes }: HomeProps) => {
  return (
    <main className="min-h-screen w-full bg-white">
      <BentoLayout quotes={quotes} />
      <PartnersSection />
      <ProductionsSection />
      <Footer />
    </main>
  );
};

export default Home;
