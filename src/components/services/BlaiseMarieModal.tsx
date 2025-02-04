import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface BlaiseMarieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlaiseMarieModal({
  isOpen,
  onClose,
}: BlaiseMarieModalProps) {
  const [imagesLoaded, setImagesLoaded] = useState([false, false]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-[95vw] max-w-6xl overflow-hidden shadow-sm mx-4"
          >
            <div className="max-h-[85vh] overflow-y-auto flex flex-col gap-4 p-4">
              <div className="relative">
                {!imagesLoaded[0] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                    <Loader2 className="w-8 h-8 animate-spin" />
                  </div>
                )}
                <img
                  src="/images/blaise&marie/page1.png"
                  alt="Blaise & Marie Page 1"
                  className={`w-full h-full object-contain rounded-lg shadow-xl transition-opacity duration-300 ${imagesLoaded[0] ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => handleImageLoad(0)}
                  loading="eager"
                />
              </div>
              <div className="relative">
                {!imagesLoaded[1] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                    <Loader2 className="w-8 h-8 animate-spin" />
                  </div>
                )}
                <img
                  src="/images/blaise&marie/page2.png"
                  alt="Blaise & Marie Page 2"
                  className={`w-full h-full object-contain rounded-lg shadow-xl transition-opacity duration-300 ${imagesLoaded[1] ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => handleImageLoad(1)}
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
