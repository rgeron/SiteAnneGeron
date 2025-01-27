import { AnimatePresence, motion } from "framer-motion";
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
    text: "Ma raison d’être est d’éduquer au bien-vieillir et d’inspirer la confiance dans le dernier tiers temps de la vie.",
  },
  {
    text: "Parce qu’il faut vivre, vieillir est une chance et mourir une nécessité",
  },
  {
    text: "Vieillir c’est chiant et on n’a rien trouvé de mieux pour vivre",
  },
  {
    text: "Nos parents et l’école nous apprennent à grandir puis nous sommes livrés à nous même pour vieillir",
  },
  {
    text: "Vieillir et mourir c’est effrayant car c’est se diriger sans freins vers des territoires inconnus sans aide des aînés",
  },
  {
    text: "La beauté et la performance sont l’adage du jeunisme. La connaissance et l’expérience sont l’adage de la maturité.",
  },
  {
    text: "La jeunesse apprend, la vieillesse transmet",
  },
  {
    text: "La connaissance est la lampe qui éclaire le chemin",
  },
  {
    text: "La performance commerciale en prévoyance nécessite l’apport de connaissances culturelles et psychosociales aux équipes.",
  },
];

const LeftPanel = ({ quotes = defaultQuotes }: LeftPanelProps) => {
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
