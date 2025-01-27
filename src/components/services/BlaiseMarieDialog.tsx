import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

export default function BlaiseMarieDialog() {
  return (
    <div className="p-6 space-y-8 max-h-[90vh] overflow-hidden">
      <ScrollArea className="h-full pr-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Animated Cards */}
          <div className="relative h-[600px] w-full">
            {/* First Card - Fixed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-10"
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
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute inset-0"
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
