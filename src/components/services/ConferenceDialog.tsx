import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Calendar,
  FileText,
  Heart,
  Presentation,
  Puzzle,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

interface ConferenceThemeDialogProps {
  title: string;
  description: string;
}

function getIconForTheme(title: string) {
  switch (title) {
    case "Accepter la mort & le symbolisme des portes":
      return <BookOpen className="h-5 w-5" />;
    case "Bien vieillir toujours heureux":
      return <Heart className="h-5 w-5" />;
    case "Cycle des aidants":
      return <Users className="h-5 w-5" />;
    case "Halloween & la Toussaint":
      return <Calendar className="h-5 w-5" />;
    case "Je décide et je protège les miens":
      return <FileText className="h-5 w-5" />;
    case "La perte d'autonomie":
      return <Brain className="h-5 w-5" />;
    case "Les bienfaits de l'amour":
      return <Heart className="h-5 w-5" />;
    case "Les dispositions juridiques et réglementaires de la fin de la vie":
      return <FileText className="h-5 w-5" />;
    case "Les liens invisibles qui entravent":
      return <Puzzle className="h-5 w-5" />;
    case "Prévenir et soulager les douleurs":
      return <Star className="h-5 w-5" />;
    case "Vivre sereinement":
      return <Sparkles className="h-5 w-5" />;
    default:
      return <Presentation className="h-5 w-5" />;
  }
}

function ConferenceThemeDialog({
  title,
  description,
}: ConferenceThemeDialogProps) {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
      <ScrollArea className="h-full max-h-[90vh]">
        <div className="flex flex-col md:flex-row gap-8 p-6">
          {/* Left Column - Information */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            <div className="prose prose-slate">
              <p className="text-lg">{description}</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1">
            <ContactForm showWorkshopOption={true} />
          </div>
        </div>
      </ScrollArea>
    </DialogContent>
  );
}

const conferences = [
  {
    title: "Accepter la mort & le symbolisme des portes",
    description:
      "Une exploration profonde de notre rapport à la mort à travers le symbolisme universel des portes, offrant une perspective unique sur l'acceptation et la transition.",
  },
  {
    title: "Bien vieillir toujours heureux",
    description:
      "Découvrez les clés pour maintenir une vie épanouie et positive tout au long du vieillissement, avec des conseils pratiques et des approches holistiques.",
  },
  {
    title: "Cycle des aidants",
    description:
      "Une série complète abordant les aspects essentiels du rôle d'aidant : être aidant, prendre soin de soi, collaborer avec les professionnels, et comprendre l'accompagnement des maladies et du handicap.",
  },
  {
    title: "Halloween & la Toussaint",
    description:
      "Une analyse culturelle et historique de ces célébrations, explorant leur signification profonde et leur évolution dans notre société moderne.",
  },
  {
    title: "Je décide et je protège les miens",
    description:
      "Informations essentielles sur la protection juridique et les dispositions à prendre pour assurer l'avenir de vos proches.",
  },
  {
    title: "La perte d'autonomie",
    description:
      "Comprendre et anticiper la perte d'autonomie, avec des solutions pratiques et des ressources pour maintenir la dignité et la qualité de vie.",
  },
  {
    title: "Les bienfaits de l'amour",
    description:
      "Une exploration des effets positifs de l'amour sur notre bien-être physique et mental, particulièrement pendant les phases de transition de la vie.",
  },
  {
    title: "Les dispositions juridiques et réglementaires de la fin de la vie",
    description:
      "Un aperçu complet du cadre légal entourant la fin de vie, permettant une meilleure compréhension de vos droits et options.",
  },
  {
    title: "Les liens invisibles qui entravent",
    description:
      "Une analyse des attachements et des relations qui peuvent nous limiter, avec des outils pour identifier et transformer ces liens.",
  },
  {
    title: "Prévenir et soulager les douleurs",
    description:
      "Stratégies et approches pratiques pour la gestion et la prévention de la douleur, combinant méthodes traditionnelles et modernes.",
  },
  {
    title: "Vivre sereinement",
    description:
      "Des clés pour cultiver la sérénité au quotidien, avec des techniques et des conseils pratiques pour une vie plus équilibrée.",
  },
];

export default function ConferenceDialog() {
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
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary/90 via-blue-600 to-primary bg-[length:200%] animate-gradient bg-clip-text text-transparent">
              Conférences & Ateliers
            </h2>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <div className="flex justify-center gap-8 mt-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Conférences de 2h incluant des temps d'échanges</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>En présentiel et distanciel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>À partir de 20 personnes</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mx-auto">
          {conferences.map((conference) => (
            <Dialog key={conference.title}>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="w-full h-auto py-4 px-4 text-left flex items-start gap-3 hover:bg-violet-50 hover:border-violet-200 transition-colors group bg-gradient-to-br from-violet-50/50 to-blue-50/50 border-violet-100"
                  >
                    <div className="flex-shrink-0 mt-1 p-2 rounded-full bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
                      {getIconForTheme(conference.title)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-lg font-medium block">
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
      </ScrollArea>
    </div>
  );
}
