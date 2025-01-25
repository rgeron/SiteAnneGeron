import React from "react";
import { motion } from "framer-motion";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

interface HeroSectionProps {
  quotes?: {
    text: string;
    author: string;
  }[];
  logoText?: string;
  etymology?: string;
  imageUrl?: string;
  introText?: string;
}

const HeroSection = ({
  quotes,
  logoText,
  etymology,
  imageUrl,
  introText,
}: HeroSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[60vh] bg-gray-50"
    >
      <div className="w-full h-full flex flex-col md:flex-row">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 h-1/2 md:h-full"
        >
          <LeftPanel
            quotes={quotes}
            logoText={logoText}
            etymology={etymology}
          />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 h-1/2 md:h-full"
        >
          <RightPanel imageUrl={imageUrl} introText={introText} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
