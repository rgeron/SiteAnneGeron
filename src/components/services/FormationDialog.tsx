import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  BookOpen,
  Hourglass,
  Heart,
  UserCog,
  Scroll,
  GraduationCap,
  History,
  Briefcase,
  FileQuestion,
} from "lucide-react";

interface ThemeDialogProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ThemeDialog({ title, description, icon }: ThemeDialogProps) {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
      <ScrollArea className="h-full max-h-[90vh]">
        <div className="flex flex-col md:flex-row gap-8 p-6">
          {/* Left Column - Information */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                {icon}
              </div>
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <div className="prose prose-slate">
              <p className="text-lg">{description}</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1 bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="text-xl font-semibold mb-6">
              Demander plus d'informations
            </h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nom complet
                </label>
                <Input id="name" placeholder="Votre nom" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Téléphone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message"
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full">
                Envoyer
              </Button>
            </form>
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
    icon: <Scroll className="h-5 w-5" />,
  },
  {
    title: "Ritualisation, inhumation & crémation",
    description:
      "Découvrez les différentes pratiques de ritualisation, les spécificités de l'inhumation et de la crémation, ainsi que leur signification culturelle et spirituelle dans notre société moderne.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Qu'est-ce que la mort?",
    description:
      "Une approche philosophique et pratique de la mort, explorant sa signification dans différentes cultures et comment elle façonne notre compréhension de la vie.",
    icon: <FileQuestion className="h-5 w-5" />,
  },
  {
    title: "Grand âge & dépendance",
    description:
      "Formation sur les enjeux du vieillissement et de la dépendance, offrant des outils pratiques pour accompagner les personnes âgées et leurs familles.",
    icon: <UserCog className="h-5 w-5" />,
  },
  {
    title: "Traverser le deuil",
    description:
      "Comprendre les étapes du deuil et acquérir des outils pour accompagner les personnes endeuillées, tout en explorant les différentes façons de vivre et surmonter cette épreuve.",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    title: "Comprendre les contrats obsèques",
    description:
      "Une formation pratique sur les aspects juridiques et financiers des contrats obsèques, permettant de mieux conseiller et accompagner dans ces démarches importantes.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    title: "Transmettre ses expériences de vie",
    description:
      "Découvrez comment faciliter la transmission d'expériences et de mémoires familiales, créant des ponts entre les générations.",
    icon: <History className="h-5 w-5" />,
  },
  {
    title: "La retraite 3ème temps de la vie",
    description:
      "Une approche positive de la retraite, explorant les opportunités de développement personnel et social dans cette nouvelle phase de vie.",
    icon: <Hourglass className="h-5 w-5" />,
  },
];

export default function FormationDialog() {
  return (
    <div className="p-6 space-y-8 max-h-[80vh] overflow-hidden">
      <ScrollArea className="h-full pr-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
            Formation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
            <div className="flex items-start gap-2">
              <div className="mt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <p className="text-sm">Sessions en présentiel ou distanciel</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <p className="text-sm">Formation individuelle ou en groupe</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <p className="text-sm">Adaptée à votre contexte professionnel</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <p className="text-sm">Contenus personnalisables</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <p className="text-sm">Support pédagogique inclus</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <p className="text-sm">Attestation de formation</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mx-auto">
          {themes.map((theme) => (
            <Dialog key={theme.title}>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="w-full h-auto py-4 px-4 text-left flex items-center gap-3 hover:bg-slate-50 hover:border-slate-300 transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
                      {theme.icon}
                    </div>
                    <span className="text-lg font-medium">{theme.title}</span>
                  </Button>
                </motion.div>
              </DialogTrigger>
              <ThemeDialog {...theme} />
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-12 mb-6">
          <motion.button
            className="text-primary hover:text-primary/80 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg border-b border-primary/30 hover:border-primary transition-colors">
              Demander un devis pour une formation personnalisée à vos besoins
            </span>
          </motion.button>
        </div>
      </ScrollArea>
    </div>
  );
}
