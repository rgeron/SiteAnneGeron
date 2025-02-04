import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface SantePartnersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SantePartnersModal({
  isOpen,
  onClose,
}: SantePartnersModalProps) {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (num: number) => {
    setLoadedImages((prev) => ({ ...prev, [num]: true }));
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-5 backdrop-blur-sm"
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
            <div className="h-[85vh]">
              <Carousel className="w-full h-full">
                <CarouselContent className="-ml-1">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <CarouselItem
                      key={num}
                      className="pl-1 basis-full sm:basis-1/2"
                    >
                      <div className="flex items-center justify-center h-full relative">
                        {!loadedImages[num] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                            <Loader2 className="w-8 h-8 animate-spin" />
                          </div>
                        )}
                        <img
                          src={`/images/SP/SP${num}.png`}
                          alt={`Slide ${num}`}
                          className={`max-w-full max-h-[80vh] object-contain transition-opacity duration-300 ${loadedImages[num] ? "opacity-100" : "opacity-0"}`}
                          onLoad={() => handleImageLoad(num)}
                          loading="eager"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-gray-700 hover:bg-gray-800 text-white border-0 w-12 h-12" />
                <CarouselNext className="right-2 bg-gray-700 hover:bg-gray-800 text-white border-0 w-12 h-12" />
              </Carousel>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
