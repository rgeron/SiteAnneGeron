import { Gavel, GraduationCap, Presentation } from "lucide-react";
import { useState } from "react";
import BlaiseMarieModal from "./BlaiseMarieModal";
import CollabCard from "./CollabCard";
import ConferenceDialog from "./ConferenceDialog";
import FormationDialog from "./FormationDialog";
import MJCard from "./MJCard";
import MJDialog from "./MJModal";
import SantePartnersModal from "./SantePartnersModal";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const [isSantePartnersOpen, setIsSantePartnersOpen] = useState(false);
  const [isBlaiseMarieOpen, setIsBlaiseMarieOpen] = useState(false);
  const services = [
    {
      title: "Formations",
      icon: <GraduationCap />,
      dialogContent: <FormationDialog />,
      description:
        "Je conçois et anime des formations sur mesure adaptées aux enjeux spécifiques de chaque organisation. Intégrant une démarche de responsabilité sociétale (RSE) je favorise une approche éthique, durable, personnelle et collective. ",
    },
    {
      title: "Conférences & Ateliers",
      icon: <Presentation />,
      dialogContent: <ConferenceDialog />,
      description:
        "Je crée et j'anime des conférences sur mesure, conçues pour sensibiliser les participants à des thématiques clés et engager des discussions enrichissantes. Ces conférences peuvent s'accompagner d'ateliers pratiques, permettant de travailler en profondeur les sujets abordés pour favoriser des solutions concrètes et durables. ",
    },
  ];

  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row h-full gap-10">
            {/* Left side - Formation and Conferences */}
            <div className="md:w-[70%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {services.map((service) => (
                  <ServiceCard
                    key={service.title}
                    title={service.title}
                    icon={service.icon}
                    dialogContent={service.dialogContent}
                    className="h-full"
                    description={service.description}
                  />
                ))}
              </div>
            </div>

            {/* Right side - Mandataire judiciaire */}
            <div className="md:w-[35%] space-y-10">
              <MJCard
                title="Mandataire judiciaire à la protection des majeurs"
                icon={<Gavel className="" />}
                dialogContent={<MJDialog />}
              />
              <div className="grid grid-cols-2 gap-10">
                <div onClick={() => setIsBlaiseMarieOpen(true)}>
                  <CollabCard title="Équipe avec Blaise & Marie">
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
                </div>

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
        </div>
      </section>

      <BlaiseMarieModal
        isOpen={isBlaiseMarieOpen}
        onClose={() => setIsBlaiseMarieOpen(false)}
      />

      <SantePartnersModal
        isOpen={isSantePartnersOpen}
        onClose={() => setIsSantePartnersOpen(false)}
      />
    </>
  );
}
