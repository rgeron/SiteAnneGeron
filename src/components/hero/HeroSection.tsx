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
      className="w-full h-[40vh] container mx-auto mb-6 mt-6 bg-red-200"
    >
      <div className="w-full h-full flex flex-col md:flex-row">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-[65%] md:h-full pr-6"
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
          className="w-full md:w-[35%] md:h-full pl-6"
        >
          <RightPanel imageUrl={imageUrl} introText={introText} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
