import { Button } from "@/components/ui/button";
import { useState } from "react";
import CustomRequestModal from "./CustomRequestModal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  FileText,
  Heart,
  Presentation,
  Puzzle,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import ContactForm from "../contact/ContactForm";

interface ConferenceThemeDialogProps {
  title: string;
  description: string;
}

function getIconForTheme(title: string) {
  switch (title) {
    case "Accepter la mort & le symbolisme des portes":
      return <BookOpen className="h-7 w-7 bg-white" />;
    case "Bien vieillir toujours heureux":
      return <Heart className="h-7 w-7 bg-white" />;
    case "Cycle des aidants":
      return <Users className="h-7 w-7 bg-white" />;
    case "Je décide et je protège les miens":
      return <FileText className="h-7 w-7" bg-white />;
    case "La perte d'autonomie":
      return <Brain className="h-7 w-7 bg-white" />;
    case "Les bienfaits de l'amour":
      return <Heart className="h-7 w-7 bg-white" />;
    case "Les dispositions juridiques et réglementaires de la fin de la vie":
      return <FileText className="h-7 w-7 bg-white" />;
    case "Les liens invisibles qui entravent":
      return <Puzzle className="h-7 w-7 bg-white" />;
    case "Prévenir et soulager les douleurs":
      return <Star className="h-7 w-7 bg-white" />;
    case "Vivre sereinement":
      return <Sparkles className="h-7 w-7 bg-white" />;
    default:
      return <Presentation className="h-7 w-7 bg-white" />;
  }
}

function ConferenceThemeDialog({
  title,
  description,
}: ConferenceThemeDialogProps) {
  return (
    <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] p-0 overflow-hidden mx-4">
      <ScrollArea className="h-full max-h-[90vh]">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-4 lg:p-6">
          {/* Left Column - Information */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
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

const conferences = [
  {
    title: "Accepter la mort et le symbolisme des portes",
    description: "Description for Accepter la mort & le symbolisme des portes",
  },
  {
    title: "Bien vieillir toujours heureux",
    description: "Description for Bien vieillir toujours heureux",
  },
  {
    title: "Cycle des aidants",
    description: "Description for Cycle des aidants",
  },
  {
    title: "Je décide et je protège les miens",
    description: "Description for Je décide et je protège les miens",
  },
  {
    title: "La perte d'autonomie",
    description: "Description for La perte d'autonomie",
  },
  {
    title: "Les bienfaits de l'amour",
    description: "Description for Les bienfaits de l'amour",
  },
  {
    title: "Les dispositions juridiques de la fin de la vie",
    description:
      "Description for Les dispositions juridiques et réglementaires de la fin de la vie",
  },
  {
    title: "Les liens invisibles qui entravent",
    description: "Description for Les liens invisibles qui entravent",
  },
  {
    title: "Prévenir et soulager les douleurs",
    description: "Description for Prévenir et soulager les douleurs",
  },
  {
    title: "Vivre sereinement",
    description: "Description for Vivre sereinement",
  },
];

export default function ConferenceDialog() {
  const [isCustomRequestOpen, setIsCustomRequestOpen] = useState(false);
  return (
    <div className="p-6 space-y-8 max-h-[80vh] overflow-hidden">
      <ScrollArea className="h-full pr-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <h2 className="text-4xl font-bold mb-3 text-black">
              Conférences & Ateliers
            </h2>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <div className="flex justify-center gap-8 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>Conférences de 2h incluant des temps d'échanges</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>En présentiel et distanciel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>À partir de 20 personnes</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {conferences.map((conference) => (
            <Dialog key={conference.title}>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="w-full px-4 py-8 text-left flex items-center gap-3 hover:bg-gray-50 border-2 border-black transition-colors"
                  >
                    <div className=" rounded-full bg-black/5 text-black group-hover:bg-black/10 transition-colors">
                      {getIconForTheme(conference.title)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-lg font-medium whitespace-normal leading-tight">
                        {conference.title}
                      </span>
                    </div>
                  </Button>
                </motion.div>
              </DialogTrigger>
              <ConferenceThemeDialog {...conference} />
            </Dialog>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            variant="link"
            className="text-lg underline"
            onClick={() => setIsCustomRequestOpen(true)}
          >
            demander un devis pour une conférence personnalisée
          </Button>
        </div>

        <CustomRequestModal
          isOpen={isCustomRequestOpen}
          onClose={() => setIsCustomRequestOpen(false)}
          type="conference"
        />
      </ScrollArea>
    </div>
  );
}
