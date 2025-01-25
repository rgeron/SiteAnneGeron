import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RightPanelProps {
  imageUrl?: string;
  introText?: string;
}

const RightPanel = ({
  imageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&fit=crop",
  introText = "Hi, I'm Anne Géron. With over a decade of experience in design and development, I create digital experiences that leave lasting impressions. My approach combines aesthetic sensibility with technical expertise to deliver solutions that not only look beautiful but perform exceptionally.",
}: RightPanelProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-full bg-gray-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-full h-full"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.img
          src={imageUrl}
          alt="Anne Géron"
          className="w-full h-full object-cover"
          animate={{
            filter: isHovered ? "brightness(0.3)" : "brightness(1)",
          }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className={cn(
            "absolute inset-0 flex items-center justify-center p-8",
            "text-white text-lg md:text-xl lg:text-2xl leading-relaxed",
          )}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="max-w-prose text-center font-light">{introText}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RightPanel;
