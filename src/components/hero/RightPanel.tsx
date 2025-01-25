import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface RightPanelProps {
  imageUrl?: string;
  introText?: string;
}

const RightPanel = ({
  imageUrl = "/images/photo1.jpg",
  introText = `Pour se rendre d'une vie à l'autre n'est-il pas rassurant de s'y préparer ?

Cette réflexion est devenue au fil des années, pour moi, une nécessité que j'ai enrichie de connaissances et d'expériences.

Il y a 20 ans, j'ai introduit en France le métier de funeral planner, en soutien aux familles endeuillées dans l'organisation logistique des hommages aux défunts. Il y a 15 ans, j'ai rejoint les assurances de personnes pour sensibiliser un plus grand nombres d'acteurs à la prévention funéraire sous forme de récit de vie et de transmission.

J'ai poursuivi en travaillant auprès des personnes en fin de vie et des personnes âgées dépendantes en maison de retraite (Ehpad). Les années passées auprès du grand âge, de la vieillesse et des retraités me persuadent de l'importance de se préparer aux étapes incontournables de cette échéance.

Egalement diplômée d'un master en droit de la santé, j'ai acquis des expertises sur les thématiques de gérontologie. J'interviens lors d'ateliers, des conférences et de formations. J'apporte une sensibilisation pédagogique, illustrée et décomplexée sur ces sujets encore tabous qui déterminent pourtant notre art du bien vieillir.`,
}: RightPanelProps) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="relative w-full h-[55vh] bg-white overflow-hidden p-6">
      <div className="relative w-full h-full">
        <motion.img
          src={imageUrl}
          alt="Anne Géron"
          className="w-full h-full object-cover rounded-xl border-2 border-gray-200"
          animate={{
            filter: showBio ? "brightness(0.1)" : "brightness(1)",
          }}
          transition={{ duration: 0.4 }}
        />

        <Button
          variant="secondary"
          className="absolute bottom-4 left-4 z-10"
          onClick={() => setShowBio(!showBio)}
        >
          {showBio ? "Fermer" : "Qui suis-je ?"}
        </Button>

        <motion.div
          className="absolute inset-0 flex items-start justify-center p-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{
            opacity: showBio ? 1 : 0,
            pointerEvents: showBio ? "auto" : "none",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white space-y-4 max-w-prose">
            <p className="text-xl font-semibold mb-6">
              Pour se rendre d'une vie à l'autre n'est-il pas rassurant de s'y
              préparer ?
            </p>

            <p className="leading-relaxed">
              Cette réflexion est devenue au fil des années, pour moi, une
              nécessité que j'ai enrichie de connaissances et d'expériences.
            </p>

            <p className="leading-relaxed">
              Il y a 20 ans, j'ai introduit en France le métier de funeral
              planner, en soutien aux familles endeuillées dans l'organisation
              logistique des hommages aux défunts. Il y a 15 ans, j'ai rejoint
              les assurances de personnes pour sensibiliser un plus grand
              nombres d'acteurs à la prévention funéraire sous forme de récit de
              vie et de transmission.
            </p>

            <p className="leading-relaxed">
              J'ai poursuivi en travaillant auprès des personnes en fin de vie
              et des personnes âgées dépendantes en maison de retraite (Ehpad).
              Les années passées auprès du grand âge, de la vieillesse et des
              retraités me persuadent de l'importance de se préparer aux étapes
              incontournables de cette échéance.
            </p>

            <p className="leading-relaxed">
              Egalement diplômée d'un master en droit de la santé, j'ai acquis
              des expertises sur les thématiques de gérontologie. J'interviens
              lors d'ateliers, des conférences et de formations. J'apporte une
              sensibilisation pédagogique, illustrée et décomplexée sur ces
              sujets encore tabous qui déterminent pourtant notre art du bien
              vieillir.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RightPanel;
