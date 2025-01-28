import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, X } from "lucide-react";
import { useState } from "react";
import PDFViewer from "../PDFViewer";

interface CahierCardProps {
  title: string;
  description?: string;
  pdfUrl: string;
}

export default function CahierCard({
  title,
  description,
  pdfUrl,
}: CahierCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="flex-grow flex-shrink-0 hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border-2 border-black group max-w-xs">
        <div className="h-full flex flex-col p-6">
          <CardHeader className="p-0 mb-2 flex-1">
            <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
              {title}
            </CardTitle>
            {description && (
              <CardDescription className="mt-2 text-gray-600">
                {description}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="p-0 mt-auto">
            <Button
              className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow group-hover:bg-gray-700"
              variant="default"
              onClick={() => setIsOpen(true)}
            >
              <FileText className="mr-2 h-4 w-4" /> Voir le PDF
            </Button>
          </CardContent>
        </div>
      </Card>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-[95vw] max-w-7xl"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <PDFViewer pdfUrl={pdfUrl} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
