import React from "react";
import HeroSection from "./hero/HeroSection";

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
    <main className="min-h-screen w-full bg-gray-50">
      <HeroSection
        quotes={quotes}
        logoText={logoText}
        etymology={etymology}
        imageUrl={imageUrl}
        introText={introText}
      />
    </main>
  );
};

export default Home;
