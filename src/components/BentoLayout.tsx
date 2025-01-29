import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Gavel, GraduationCap, Presentation, X } from "lucide-react";
import { useState } from "react";
import BlaiseMarieDialog from "./services/BlaiseMarieDialog";
import CollabCard from "./services/CollabCard";
import ConferenceDialog from "./services/ConferenceDialog";
import FormationDialog from "./services/FormationDialog";
import MJCard from "./services/MJCard";
import MJDialog from "./services/MJDialog";
import SantePartnersModal from "./services/SantePartnersModal";
import ServiceCard from "./services/ServiceCard";

interface BentoLayoutProps {
  quotes?: {
    text: string;
    author: string;
  }[];
}

const defaultQuotes = [
  {
    text: "Ma raison d'être est d'éduquer au bien-vieillir et d'inspirer la confiance dans le dernier tiers temps de la vie.",
  },
  {
    text: "Parce qu'il faut vivre, vieillir est une chance et mourir une nécessité",
  },
  {
    text: "Vieillir c'est chiant et on n'a rien trouvé de mieux pour vivre",
  },
];

export default function BentoLayout({
  quotes = defaultQuotes,
}: BentoLayoutProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [showBio, setShowBio] = useState(false);
  const [isSantePartnersOpen, setIsSantePartnersOpen] = useState(false);

  const services = [
    {
      title: "Formations",
      icon: <GraduationCap />,
      dialogContent: <FormationDialog />,
      description:
        "Je conçoiime des formations sur mesure adaptées aux enjeux spécifiques de chaque organisation.",
    },
    {
      title: "Conférences & Ateliers",
      icon: <Presentation />,
      dialogContent: <ConferenceDialog />,
      description:
        "Je crée et j'anime des conférences sur mesure, conçues pour sensibiliser les participants à des thématiques clés.",
    },
  ];

  return (
    <div className="container mx-auto px-20 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 ">
        {/* Top Left: Logo and Quotes */}
        <div className="md:col-span-7 space-y-10">
          <div className="w-full">
            <img src="/images/logo.jpg" alt="Logo" className="w-5/6 h-auto" />
          </div>
          <motion.div
            key={currentQuoteIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 1 }}
            className="bg-white p-6"
          >
            <p className="text-xl md:text-2xl font-light italic text-gray-700">
              "{quotes[currentQuoteIndex].text}"
            </p>
          </motion.div>
        </div>

        {/* Top Right: Photo and Bio */}
        <div className="md:col-span-5">
          <div className="relative w-3/4 bg-white overflow-hidden rounded-lg border-2 border-black">
            <motion.img
              src="/images/photo1.jpg"
              alt="Anne Géron"
              className="w-full h-full object-cover"
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
              {showBio ? <X /> : "Qui suis-je ?"}
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
              <div className="space-y-4 text-white">
                <p className="text-lg">
                  Gérontologue et thérapeute spécialisée dans le vieillissement,
                  avec une expertise de plus de 20 ans dans l'accompagnement des
                  seniors et des familles.
                </p>
                <p className="text-lg">
                  Formatrice et conférencière, j'œuvre pour démystifier les
                  enjeux du bien-vieillir et de la fin de vie.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Left: Service Cards */}
        <div className="md:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                className="h-full"
              />
            ))}
          </div>
        </div>

        {/* Bottom Right: MJCard, Collab and Sante Partner Cards */}
        <div className="md:col-span-5 space-y-6">
          <MJCard
            title="Mandataire judiciaire à la protection des majeurs"
            icon={<Gavel />}
            dialogContent={<MJDialog />}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CollabCard
              title="Équipe avec Blaise & Marie"
              dialogContent={<BlaiseMarieDialog />}
            >
              <div className="flex -space-x-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-violet-100 border-2 border-violet-200 overflow-hidden">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Blaise"
                    alt="Blaise"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-violet-100 border-2 border-violet-200 overflow-hidden">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marie"
                    alt="Marie"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CollabCard>

            <div
              onClick={() => setIsSantePartnersOpen(true)}
              className="relative group cursor-pointer"
            >
              <div className="bg-black p-[2px] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-white rounded-[calc(var(--radius)-1px)] p-4 flex flex-col items-center justify-center text-center h-full">
                  <div className="w-10 h-10 rounded-full bg-violet-100 border-2 border-violet-200 overflow-hidden mb-4 mx-auto">
                    <img
                      src="/images/SPLogo.png"
                      alt="Santé Partners Logo"
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-black">
                    Santé Partners
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SantePartnersModal
        isOpen={isSantePartnersOpen}
        onClose={() => setIsSantePartnersOpen(false)}
      />
    </div>
  );
}
