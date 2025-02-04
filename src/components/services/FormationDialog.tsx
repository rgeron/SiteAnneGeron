import { Button } from "@/components/ui/button";
import { useState } from "react";
import CustomRequestModal from "./CustomRequestModal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { BookOpen, ScrollText } from "lucide-react";
import ContactForm from "../contact/ContactForm";

interface ThemeDialogProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ThemeDialog({ title, description, icon }: ThemeDialogProps) {
  return (
    <DialogContent className="max-w-4xl max-h-[60vh] p-0 overflow-hidden">
      <ScrollArea className="h-full max-h-[90vh]">
        <div className="flex flex-col md:flex-row gap-8 p-6">
          {/* Left Column - Information */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-black/10 text-black">
                {icon}
              </div>
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <div className="prose prose-slate">
              <p className="text-lg">{description}</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </ScrollArea>
    </DialogContent>
  );
}

const themes = [
  {
    title: "Le funéraire",
    description:
      "Une exploration approfondie des pratiques funéraires contemporaines, leur évolution et leur importance dans notre société. Cette formation aborde les aspects pratiques, émotionnels et culturels des rituels funéraires.",
    icon: <ScrollText className="h-7 w-7 bg-white" />,
  },
  {
    title: "Ritualisation, inhumation et crémation",
    description:
      "Découvrez les différentes pratiques de ritualisation, les spécificités de l'inhumation et de la crémation, ainsi que leur signification culturelle et spirituelle dans notre société moderne.",
    icon: <BookOpen className="h-7 w-7 bg-white" />,
  },
  {
    title: "Qu'est-ce que la mort?",
    description:
      "Une exploration philosophique et pratique de la mort, son impact sur notre société et comment mieux l'appréhender.",
    icon: <ScrollText className="h-7 w-7 bg-white" />,
  },
  {
    title: "Grand âge et dépendance",
    description:
      "Comprendre les enjeux du vieillissement et de la dépendance, et comment accompagner au mieux les personnes âgées.",
    icon: <BookOpen className="h-7 w-7 bg-white" />,
  },
  {
    title: "Traverser le deuil",
    description:
      "Un accompagnement pour comprendre et traverser les différentes étapes du deuil, avec des outils pratiques et du soutien émotionnel.",
    icon: <ScrollText className="h-7 w-7 bg-white" />,
  },
  {
    title: "Comprendre les contrats obsèques",
    description:
      "Une formation détaillée sur les aspects juridiques et pratiques des contrats obsèques, pour mieux conseiller et accompagner.",
    icon: <BookOpen className="h-7 w-7 bg-white" />,
  },
  {
    title: "Transmettre ses expériences de vie",
    description:
      "Apprendre à valoriser et partager son vécu, ses connaissances et sa sagesse avec les générations futures.",
    icon: <ScrollText className="h-7 w-7 bg-white" />,
  },
  {
    title: "La retraite 3ème temps de la vie",
    description:
      "Une approche positive et pratique pour préparer et vivre pleinement sa retraite comme une nouvelle étape enrichissante.",
    icon: <BookOpen className="h-7 w-7 bg-white" />,
  },
];

export default function FormationDialog() {
  const [isCustomRequestOpen, setIsCustomRequestOpen] = useState(false);
  return (
    <div className="p-6 space-y-8">
      <ScrollArea className="h-full pr-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <h2 className="text-4xl font-bold mb-3 text-black">Formations</h2>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {themes.map((theme) => (
            <Dialog key={theme.title}>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="w-full px-4 py-8 text-left flex justify-start items-center gap-3 hover:bg-gray-50 border-2 border-black transition-colors"
                  >
                    <div className="rounded-full bg-black/5 text-black group-hover:bg-black/10 transition-colors">
                      {theme.icon}
                    </div>
                    <span className="text-lg font-medium whitespace-normal leading-tight">
                      {theme.title}
                    </span>
                  </Button>
                </motion.div>
              </DialogTrigger>
              <ThemeDialog {...theme} />
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            variant="link"
            className="text-lg underline"
            onClick={() => setIsCustomRequestOpen(true)}
          >
            demander un devis pour une formation personnalisée
          </Button>
        </div>

        <CustomRequestModal
          isOpen={isCustomRequestOpen}
          onClose={() => setIsCustomRequestOpen(false)}
          type="formation"
        />
      </ScrollArea>
    </div>
  );
}
