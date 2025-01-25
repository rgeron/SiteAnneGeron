import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ConferenceThemeDialogProps {
  title: string;
  description: string;
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
          <div className="flex-1 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">
              Réserver cette conférence
            </h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nom complet
                </label>
                <Input id="name" placeholder="Votre nom" />
              </div>

              <div className="space-y-2">
                <label htmlFor="organization" className="text-sm font-medium">
                  Organisation
                </label>
                <Input
                  id="organization"
                  placeholder="Nom de votre organisation"
                />
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
                <label htmlFor="attendees" className="text-sm font-medium">
                  Nombre de participants estimé
                </label>
                <Input
                  id="attendees"
                  type="number"
                  min="20"
                  placeholder="Nombre de participants"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="workshop"
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <label htmlFor="workshop" className="text-sm font-medium">
                    Intéressé(e) par un atelier suite à la conférence ?
                  </label>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message ou demandes particulières
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Votre message"
                    className="min-h-[150px]"
                  />
                </div>
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
        <div className="prose prose-slate max-w-none mb-8">
          <h2 className="text-2xl font-bold mb-4">Modalités des conférences</h2>
          <ul className="text-lg list-disc pl-6 space-y-2">
            <li>Conférences de 2h incluant des temps d'échanges</li>
            <li>En présentiel et distanciel</li>
            <li>À partir de 20 personnes (sans limite haute)</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {conferences.map((conference) => (
            <Dialog key={conference.title}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-auto py-4 px-6 text-left flex items-start hover:bg-gray-100"
                >
                  <span className="text-lg font-medium">
                    {conference.title}
                  </span>
                </Button>
              </DialogTrigger>
              <ConferenceThemeDialog {...conference} />
            </Dialog>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
