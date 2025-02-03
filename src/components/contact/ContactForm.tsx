import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  // États pour les champs du formulaire
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // États pour la gestion des messages de succès/erreur
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Vérification des champs obligatoires
    if (!name || !phone || !message) {
      setStatus("error");
      setStatusMessage("Veuillez remplir tous les champs.");
      return;
    }

    // Définir l'état "loading" pendant l'envoi
    setStatus("loading");
    setStatusMessage("Envoi en cours...");

    try {
      // Envoyer les données du formulaire à l'API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, message }),
      });

      if (response.ok) {
        // Succès
        setStatus("success");
        setStatusMessage("Message envoyé avec succès !");
        // Réinitialiser les champs du formulaire
        setName("");
        setPhone("");
        setMessage("");
      } else {
        // Erreur côté serveur
        setStatus("error");
        setStatusMessage("Une erreur est survenue lors de l'envoi du message.");
      }
    } catch (error) {
      // Erreur réseau ou autre
      setStatus("error");
      setStatusMessage(
        "Une erreur est survenue. Veuillez réessayer plus tard.",
      );
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nom et prénom
          </label>
          <Input
            id="name"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Numéro de téléphone
          </label>
          <Input
            id="phone"
            placeholder="Votre numéro de téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Votre message"
          className="min-h-[150px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full md:w-auto"
        disabled={status === "loading"} // Désactiver le bouton pendant l'envoi
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer"}
      </Button>

      {/* Affichage des messages de statut */}
      {status !== "idle" && (
        <p
          className={`text-sm ${
            status === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}
