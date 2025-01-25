import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Quote {
  text: string;
}

interface LeftPanelProps {
  quotes?: Quote[];
  logoText?: string;
  etymology?: string;
}

const defaultQuotes: Quote[] = [
  {
    text: "Parce qu'il faut vivre, vieillir est une chance et mourir une nécessité",
  },
  {
    text: "Votre performance business décollera en formant vos équipes à la culture et la pédagogie",
  },
  {
    text: "Mieux écouter pour conseiller de manière éclairée puis vendre en sécurité éthique",
  },
  {
    text: "À travers des conférences, des ateliers et des formations, je vous invite à mieux comprendre ces passages",
  },
  {
    text: "Ecouter l'intime nous dévoile ou nous confronte à nos peurs et à nos croyances limitantes",
  },
];

const LeftPanel = ({
  quotes = defaultQuotes,
  logoText = "",
  etymology = "From Ancient Greek 'γέρων' (gérōn) meaning 'elder' or 'wise one'",
}: LeftPanelProps) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 8000); // Increased to 8 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const previousQuote = () => {
    setCurrentQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="w-full h-full bg-white p-8 flex flex-col">
      {/* Logo Section */}
      <div className="flex justify-center items-start pt-12 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-4/5 max-w-[600px]"
        >
          <img
            src="/images/logo.jpg"
            alt="Anne Geron"
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Quote Carousel */}
      <div className="mt-8 flex flex-col items-center">
        <div className="w-3/4 h-[100px] flex items-center justify-center overflow-hidden">
          <motion.div
            key={currentQuoteIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl font-light italic text-gray-700">
              "{quotes[currentQuoteIndex].text}"
            </p>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4 mt-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={previousQuote}
            className="hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextQuote}
            className="hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
