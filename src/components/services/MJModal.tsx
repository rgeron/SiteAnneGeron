import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import ContactForm from "../contact/ContactForm";

interface MJModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MJModal({ isOpen, onClose }: MJModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-[90vw] max-w-4xl bg-white rounded-lg overflow-hidden shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <ScrollArea className="h-[60vh]">
              <div className="flex flex-col md:flex-row gap-8 p-6">
                {/* Left Column - Information */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-6">
                    Mandataire Judiciaire à la Protection des Majeurs
                  </h2>

                  <div className="prose prose-slate">
                    <p className="text-lg mb-4">
                      Métier méconnu d'utilité publique d'auxiliaire de justice
                      au service des vulnérables dans la gestion de leurs
                      affaires personnelles, administratives ou patrimoniales.
                    </p>
                    <p className="text-lg mb-4">
                      Diplômée du Certification Nationale de Compétence en
                      qualité de Mandataire Judiciaire à la Protection des
                      Majeurs.
                    </p>
                    <p className="text-lg">
                      La vulnérabilité est au cœur de notre humanité. Devenir
                      mandataire pour majeurs protégés, c'est soutenir,
                      accompagner ou représenter les personnes incapables ou
                      invalides, de manière temporaire ou permanente.
                    </p>
                  </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="flex-1">
                  <ContactForm />
                </div>
              </div>
            </ScrollArea>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
