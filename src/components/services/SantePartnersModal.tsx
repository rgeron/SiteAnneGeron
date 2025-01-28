import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimatePresence, motion } from "framer-motion";

interface SantePartnersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SantePartnersModal({
  isOpen,
  onClose,
}: SantePartnersModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-6xl overflow-hidden shadow-sm"
          >
            <div className="h-[90vh]">
              <Carousel className="w-full h-full">
                <CarouselContent className="-ml-1">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <CarouselItem key={num} className="pl-1 basis-1/2">
                      <div className="flex items-center justify-center h-full">
                        <img
                          src={`/images/SP/SP${num}.png`}
                          alt={`Slide ${num}`}
                          className="max-w-full max-h-[85vh] object-contain"
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
