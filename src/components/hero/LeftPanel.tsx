import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface Quote {
  text: string;
  author: string;
}

interface LeftPanelProps {
  quotes?: Quote[];
  logoText?: string;
  etymology?: string;
}

const defaultQuotes: Quote[] = [
  {
    text: "Parce qu'il faut vivre, vieillir est une chance et mourir une nécessité",
    author: "Anne Géron",
  },
  {
    text: "Votre performance business décollera en formant vos équipes à la culture et la pédagogie",
    author: "Anne Géron",
  },
  {
    text: "Mieux écouter pour conseiller de manière éclairée puis vendre en sécurité éthique",
    author: "Anne Géron",
  },
  {
    text: "À travers des conférences, des ateliers et des formations, je vous invite à mieux comprendre ces passages",
    author: "Anne Géron",
  },
  {
    text: "Ecouter l'intime nous dévoile ou nous confronte à nos peurs et à nos croyances limitantes",
    author: "Anne Géron",
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
    <div className="w-full h-full bg-white p-8 flex flex-col justify-between">
      {/* Logo Section */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-48 h-auto"
        >
          <img
            src="/images/logo.jpg"
            alt="Anne Geron"
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Quote Carousel */}
      <div className="max-w-lg">
        <motion.div
          key={currentQuoteIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-xl md:text-2xl font-light italic text-gray-700">
            "{quotes[currentQuoteIndex].text}"
          </p>
          <p className="text-sm text-gray-500">
            — {quotes[currentQuoteIndex].author}
          </p>
        </motion.div>
      </div>

      {/* Visual indicator for quote rotation */}
      <div className="flex gap-2 mt-8">
        {quotes.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 rounded-full transition-colors duration-300 ${
              index === currentQuoteIndex ? "bg-blue-600" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
