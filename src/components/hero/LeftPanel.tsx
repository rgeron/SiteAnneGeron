import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const previousQuote = () => {
    setCurrentQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="w-full h-full  flex-col">
      {/* Logo Section */}
      <div className="flex justify-center items-start pt-12 flex-grow mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=" max-w-[700px]"
        >
          <img
            src="/images/logo.jpg"
            alt="Anne Geron"
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Quote Carousel */}
      <div className="flex flex-col items-center">
        <div className="w-4/5 flex justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-light italic text-gray-700">
                "{quotes[currentQuoteIndex].text}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
