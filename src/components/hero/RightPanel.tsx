import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "react-feather";

interface RightPanelProps {
  imageUrl?: string;
}

const RightPanel = ({ imageUrl = "/images/photo1.jpg" }: RightPanelProps) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="relative w-full h-[55vh] bg-white overflow-hidden">
      <div className="relative w-full h-full">
        <motion.img
          src={imageUrl}
          alt="Anne Géron"
          className="w-full h-full object-cover rounded-xl border-2 border-black shadow-lg shadow-black/20"
          animate={{
            filter: showBio ? "brightness(0.1)" : "brightness(1)",
          }}
          transition={{ duration: 0.4 }}
        />

        <Button
          variant="secondary"
          className="absolute bottom-2 left-2 z-10"
          onClick={() => setShowBio(!showBio)}
        >
          {showBio ? <X /> : "Qui suis-je ?"}
        </Button>

        <motion.div
          className={`absolute inset-0 flex items-start justify-center p-8 overflow-y-auto bg-white text-black rounded-xl ${
            showBio ? "border-2 border-black" : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: showBio ? 1 : 0,
            pointerEvents: showBio ? "auto" : "none",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-4 max-w-prose p-2 mb-6">
            <p className="text-lg font-medium mb-6">
              Gérontologue et thérapeute spécialisée dans le vieillissement,
              avec une expertise de plus de 20 ans dans l'accompagnement des
              seniors et des familles. J’ai introduit le métier de funeral
              planner en France, sensibilisant à l'importance de préparer ses
              funérailles avec ou sans contrat financier. Formatrice et
              conférencière, j’œuvre pour démystifier les enjeux du
              bien-vieillir et de la fin de vie, en proposant des outils
              pédagogiques et la création de supports pratiques.
            </p>

            <p className="text-lg font-medium mb-6">
              Formatrice et conférencière, j’œuvre pour démystifier les enjeux
              du bien-vieillir et de la fin de vie, en proposant des outils
              pédagogiques et la création de supports pratiques.
            </p>

            <p className="leading-relaxed text-lg font-medium mb-6">
              Je suis engagée dans la prévention de la santé et la prévoyance,
              je collabore avec des mutuelles, des caisses de retraite, et des
              acteurs sociaux. Récemment certifiée Mandataire Judiciaire à la
              Protection des Majeurs (MJPM), j’élargis mon champ d’action pour
              accompagner les personnes vulnérables dans la gestion de leurs
              droits et de leur autonomie avec empathie et éthique.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RightPanel;
