import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BlaiseMarieDialog() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="p-6 space-y-8 max-h-[90vh]">
      <ScrollArea className="h-full pr-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Animated Cards */}
          <div className="relative h-[1200px] w-full">
            {/* First Card - Sticky */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`sticky top-0 z-10 ${
                scrollY > 200 ? "opacity-0" : "opacity-100"
              }`}
              style={{ marginTop: "20px" }} // Added margin to the first card
            >
              <img
                src="/images/blaise&marie/page1.png"
                alt="Blaise & Marie Page 1"
                className="w-full h-full object-contain rounded-lg shadow-xl"
              />
            </motion.div>

            {/* Second Card - Animated */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: [100, 50, 50, 100],
              }}
              className="absolute inset-0 z-20"
              style={{ top: scrollY > 200 ? "20px" : "120px" }} // Adjusted top property
            >
              <img
                src="/images/blaise&marie/page2.png"
                alt="Blaise & Marie Page 2"
                className="w-full h-full object-contain rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
