import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MJModal() {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
      <ScrollArea className="h-full max-h-[90vh]">
        <div className="flex flex-col md:flex-row gap-8 p-6">
          {/* Left Column - Information */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold mb-6">
              Mandataire Judiciaire à la Protection des Majeurs
            </h2>

            <div className="prose prose-slate">
              <p className="text-lg mb-4">
                Métier méconnu d’utilité publique d’auxiliaire de justice au
                service des vulnérables dans la gestion de leurs affaires
                personnelles, administratives ou patrimoniales.
              </p>
              <p className="text-lg mb-4">
                Diplômée du Certification Nationale de Compétence en qualité de
                Mandataire Judiciaire à la Protection des Majeurs.
              </p>
              <p className="text-lg">
                La vulnérabilité est au cœur de notre humanité. Devenir
                mandataire pour majeurs protégés, c’est soutenir, accompagner ou
                représenter les personnes incapables ou invalides, de manière
                temporaire ou permanente.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1 bg-gradient-to-br from-violet-50 to-blue-50 p-6 rounded-lg border border-violet-100">
            <h3 className="text-xl font-semibold mb-6">Me contacter</h3>
            <form className="space-y-6">
              {/* Department Selection */}
              <div className="space-y-2">
                <label htmlFor="department" className="text-sm font-medium">
                  Votre département
                </label>
                <select
                  id="department"
                  className="block w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="" disabled>
                    Sélectionnez votre département
                  </option>
                  <option value="92">92</option>
                  <option value="77">77</option>
                </select>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nom complet
                </label>
                <Input id="name" placeholder="Votre nom" />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>

              {/* Phone */}
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
