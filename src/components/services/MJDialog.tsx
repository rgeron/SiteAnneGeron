import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function MJDialog() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Left Column - Information */}
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl font-bold mb-6">
          Mandataire Judiciaire à la Protection des Majeurs
        </h2>

        <div className="prose prose-slate">
          <p className="text-lg mb-4">
            En tant que Mandataire Judiciaire à la Protection des Majeurs
            (MJPM), mon rôle est d'accompagner et de protéger les personnes
            vulnérables dans leur vie quotidienne.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Mes missions principales :
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Protection et représentation juridique des personnes vulnérables
            </li>
            <li>Gestion du patrimoine et des ressources</li>
            <li>Accompagnement dans les démarches administratives</li>
            <li>Veille au bien-être et à la qualité de vie</li>
            <li>
              Coordination avec les différents intervenants (médecins, services
              sociaux, famille)
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Types de mesures :
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sauvegarde de justice</li>
            <li>Curatelle simple ou renforcée</li>
            <li>Tutelle</li>
            <li>Mandat de protection future</li>
          </ul>

          <p className="mt-6">
            Je travaille en étroite collaboration avec les juges des tutelles et
            m'assure que les droits et les intérêts des personnes protégées sont
            préservés, tout en respectant leur autonomie et leur dignité.
          </p>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="flex-1 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-6">Me contacter</h3>
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
            <label htmlFor="subject" className="text-sm font-medium">
              Sujet
            </label>
            <Input id="subject" placeholder="Sujet de votre message" />
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
  );
}
