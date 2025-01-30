import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Gavel, GraduationCap, Presentation, X } from "lucide-react";
import { useEffect, useState } from "react";
import BlaiseMarieModal from "./services/BlaiseMarieModal";
import CollabCard from "./services/CollabCard";
import ConferenceDialog from "./services/ConferenceDialog";
import FormationDialog from "./services/FormationDialog";
import MJCard from "./services/MJCard";
import MJModal from "./services/MJModal";
import SantePartnersModal from "./services/SantePartnersModal";
import ServiceCard from "./services/ServiceCard";

interface BentoLayoutProps {
  quotes?: {
    text: string;
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
  {
    text: "Nos parents et l'école nous apprennent à grandir puis nous sommes livrés à nous même pour vieillir",
  },
  {
    text: "Vieillir et mourir c'est effrayant car c'est se diriger sans freins vers des territoires inconnus sans aide des aînés",
  },
  {
    text: "La beauté et la performance sont l'adage du jeunisme. La connaissance et l'expérience sont l'adage de la maturité.",
  },
  {
    text: "La jeunesse apprend, la vieillesse transmet",
  },
  {
    text: "La connaissance est la lampe qui éclaire le chemin",
  },
  {
    text: "La performance commerciale en prévoyance nécessite l'apport de connaissances culturelles et psychosociales aux équipes.",
  },
];

export default function BentoLayout({
  quotes = defaultQuotes,
}: BentoLayoutProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [showBio, setShowBio] = useState(false);
  const [isSantePartnersOpen, setIsSantePartnersOpen] = useState(false);
  const [isBlaiseMarieOpen, setIsBlaiseMarieOpen] = useState(false); // Add state for BlaiseMarieModal
  const [isMJModalOpen, setIsMJModalOpen] = useState(false); // Add state for MJModal

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 6000); // Change quote every 6 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  const services = [
    {
      title: "Formations",
      icon: <GraduationCap />,
      dialogContent: <FormationDialog />,
      description:
        "Je conçois et anime des formations sur mesure adaptées aux enjeux spécifiques de chaque organisation. Intégrant une démarche de responsabilité sociétale (RSE) je favorise une approche éthique, durable, personnelle et collective.",
    },
    {
      title: "Conférences & Ateliers",
      icon: <Presentation />,
      dialogContent: <ConferenceDialog />,
      description:
        "Je crée et j'anime des conférences sur mesure, conçues pour sensibiliser les participants à des thématiques clés et engager des discussions enrichissantes. Ces conférences peuvent s'accompagner d'ateliers pratiques.",
    },
  ];

  return (
    <div className="container mx-auto px-24 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 ">
        {/* Top Left: Logo and Quotes */}
        <div className="md:col-span-7 space-y-10">
          <div className="w-full">
            <img src="/images/logo.jpg" alt="Logo" className="w-5/6 h-auto" />
          </div>
          <div className="w-4/5 flex justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuoteIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-medium italic text-gray-700">
                  "{quotes[currentQuoteIndex].text}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
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
              className="bg-white  absolute inset-0 flex items-start justify-center overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{
                opacity: showBio ? 1 : 0,
                pointerEvents: showBio ? "auto" : "none",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className=" max-w-prose bg-white text-black p-6 mb-6">
                <p className="text-lg font-medium mb-6">
                  Gérontologue et thérapeute spécialisée dans le vieillissement,
                  avec une expertise de plus de 20 ans dans l'accompagnement des
                  seniors et des familles. J'ai introduit le métier de funeral
                  planner en France, sensibilisant à l'importance de préparer
                  ses funérailles avec ou sans contrat financier.
                </p>

                <p className="text-lg font-medium mb-6">
                  Formatrice et conférencière, j'œuvre pour démystifier les
                  enjeux du bien-vieillir et de la fin de vie, en proposant des
                  outils pédagogiques et la création de supports pratiques.
                </p>

                <p className="leading-relaxed text-lg font-medium mb-6">
                  Je suis engagée dans la prévention de la santé et la
                  prévoyance, je collabore avec des mutuelles, des caisses de
                  retraite, et des acteurs sociaux. Récemment certifiée
                  Mandataire Judiciaire à la Protection des Majeurs (MJPM),
                  j'élargis mon champ d'action pour accompagner les personnes
                  vulnérables dans la gestion de leurs droits et de leur
                  autonomie avec empathie et éthique.
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
            onClick={() => setIsMJModalOpen(true)} // Trigger modal on click
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CollabCard
              title="Équipe avec Blaise & Marie"
              onClick={() => setIsBlaiseMarieOpen(true)} // Trigger modal on click
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
      <BlaiseMarieModal
        isOpen={isBlaiseMarieOpen}
        onClose={() => setIsBlaiseMarieOpen(false)}
      />
      <MJModal isOpen={isMJModalOpen} onClose={() => setIsMJModalOpen(false)} />
    </div>
  );
}
