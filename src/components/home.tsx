import React, { useEffect } from "react";
import ImagePreloader from "./services/ImagePreloader";
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
  useEffect(() => {
    // Preload images when component mounts
    const preloadImages = () => {
      const images = [
        "/images/blaise&marie/page1.png",
        "/images/blaise&marie/page2.png",
        ...Array.from({ length: 6 }, (_, i) => `/images/SP/SP${i + 1}.png`),
      ];

      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  return (
    <main className="min-h-screen w-full bg-white">
      <ImagePreloader />
      <BentoLayout quotes={quotes} />
      <PartnersSection />
      <ProductionsSection />
      <Footer />
    </main>
  );
};

export default Home;
