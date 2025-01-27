import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface ContactFormProps {
  showWorkshopOption?: boolean;
}

export default function ContactForm({
  showWorkshopOption = false,
}: ContactFormProps) {
  return (
    <form className="space-y-6 bg-white p-6 rounded-lg border-2 border-black">
      <h3 className="text-xl font-semibold mb-6">
        Laissez-moi vos informations pour que je vous recontacte.
      </h3>

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
        <Input id="phone" type="tel" placeholder="Votre numéro de téléphone" />
      </div>

      {showWorkshopOption && (
        <div className="flex items-center space-x-2">
          <Checkbox id="workshop" />
          <label
            htmlFor="workshop"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Intéressé(e) par un atelier suite à la conférence
          </label>
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message (optionnel)
        </label>
        <Textarea
          id="message"
          placeholder="Votre message"
          className="min-h-[100px]"
        />
      </div>

      <Button type="submit" className="w-full">
        Envoyer
      </Button>
    </form>
  );
}
