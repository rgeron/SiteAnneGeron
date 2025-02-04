import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import ContactForm from "../contact/ContactForm";

interface CustomRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "conference" | "formation";
}

export default function CustomRequestModal({
  isOpen,
  onClose,
  type,
}: CustomRequestModalProps) {
  const title =
    type === "conference"
      ? "Demander une conférence personnalisée"
      : "Demander une formation personnalisée";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-[90vw] max-w-2xl bg-white rounded-lg overflow-hidden shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 lg:p-8">
              <h2 className="text-2xl font-bold mb-6">{title}</h2>
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
