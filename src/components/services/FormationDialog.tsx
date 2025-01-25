import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ThemeDialogProps {
  title: string;
  description: string;
}

function ThemeDialog({ title, description }: ThemeDialogProps) {
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
          <div className="flex-1 bg-gray-100 p-6 rounded-lg">
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
  },
  {
    title: "Ritualisation, inhumation & crémation",
    description:
      "Découvrez les différentes pratiques de ritualisation, les spécificités de l'inhumation et de la crémation, ainsi que leur signification culturelle et spirituelle dans notre société moderne.",
  },
  {
    title: "Qu'est-ce que la mort?",
    description:
      "Une approche philosophique et pratique de la mort, explorant sa signification dans différentes cultures et comment elle façonne notre compréhension de la vie.",
  },
  {
    title: "Grand âge & dépendance",
    description:
      "Formation sur les enjeux du vieillissement et de la dépendance, offrant des outils pratiques pour accompagner les personnes âgées et leurs familles.",
  },
  {
    title: "Traverser le deuil",
    description:
      "Comprendre les étapes du deuil et acquérir des outils pour accompagner les personnes endeuillées, tout en explorant les différentes façons de vivre et surmonter cette épreuve.",
  },
  {
    title: "Comprendre les contrats obsèques",
    description:
      "Une formation pratique sur les aspects juridiques et financiers des contrats obsèques, permettant de mieux conseiller et accompagner dans ces démarches importantes.",
  },
  {
    title: "Transmettre ses expériences de vie",
    description:
      "Découvrez comment faciliter la transmission d'expériences et de mémoires familiales, créant des ponts entre les générations.",
  },
  {
    title: "La retraite 3ème temps de la vie",
    description:
      "Une approche positive de la retraite, explorant les opportunités de développement personnel et social dans cette nouvelle phase de vie.",
  },
  {
    title: "Demande de devis",
    description:
      "Consultez nos différentes offres de formation et obtenez un devis personnalisé adapté à vos besoins spécifiques.",
  },
];

export default function FormationDialog() {
  return (
    <div className="p-6 space-y-8 max-h-[80vh] overflow-hidden">
      <ScrollArea className="h-full pr-4">
        <div className="prose prose-slate max-w-none mb-8">
          <h2 className="text-2xl font-bold mb-4">Modalités des formations</h2>
          <p className="text-lg">
            Nos formations sont disponibles en présentiel ou en distanciel,
            adaptées à vos besoins spécifiques. Chaque session peut être
            personnalisée en fonction de votre contexte professionnel et de vos
            objectifs. Les formations peuvent être organisées en groupe ou en
            individuel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {themes.map((theme) => (
            <Dialog key={theme.title}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-auto py-4 px-6 text-left flex items-start hover:bg-gray-100"
                >
                  <span className="text-lg font-medium">{theme.title}</span>
                </Button>
              </DialogTrigger>
              <ThemeDialog {...theme} />
            </Dialog>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
