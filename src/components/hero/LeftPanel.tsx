import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="w-full h-full bg-white p-8 flex flex-col">
      {/* Logo Section */}
      <div className="flex justify-center items-center flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-2/3 max-w-[400px]"
        >
          <img
            src="/images/logo.jpg"
            alt="Anne Geron"
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Quote Carousel */}
      <div className="mt-8">
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
    </div>
  );
};

export default LeftPanel;
