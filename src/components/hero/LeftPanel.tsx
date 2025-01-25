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
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  { text: "Less is more.", author: "Ludwig Mies van der Rohe" },
];

const LeftPanel = ({
  quotes = defaultQuotes,
  logoText = "ANNE GERON",
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
    <div className="w-full h-full bg-white p-12 flex flex-col justify-between">
      {/* Logo Section */}
      <div className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-wider"
        >
          <span>ANNE </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="text-blue-600 hover:text-blue-700 transition-colors duration-300">
                  GÉRON
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">{etymology}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.h1>
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
