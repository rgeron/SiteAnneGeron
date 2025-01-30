import { AnimatePresence, motion } from "framer-motion";

interface BlaiseMarieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlaiseMarieModal({
  isOpen,
  onClose,
}: BlaiseMarieModalProps) {
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
            className="relative max-w-6xl overflow-hidden shadow-sm"
          >
            <div className="h-[90vh] flex flex-col md:flex-row gap-4 p-4">
              <div className="flex-1">
                <img
                  src="/images/blaise&marie/page1.png"
                  alt="Blaise & Marie Page 1"
                  className="w-full h-full object-contain rounded-lg shadow-xl"
                />
              </div>
              <div className="flex-1">
                <img
                  src="/images/blaise&marie/page2.png"
                  alt="Blaise & Marie Page 2"
                  className="w-full h-full object-contain rounded-lg shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
