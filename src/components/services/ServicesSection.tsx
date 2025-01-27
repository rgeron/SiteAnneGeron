import { Gavel, GraduationCap, Presentation, Users } from "lucide-react";
import ConferenceDialog from "./ConferenceDialog";
import FormationDialog from "./FormationDialog";
import MJCard from "./MJCard";
import MJDialog from "./MJDialog";
import ServiceCard from "./ServiceCard";
import CollabCard from "./CollabCard";
import BlaiseMarieDialog from "./BlaiseMarieDialog";

export default function ServicesSection() {
  const services = [
    {
      title: "Formation",
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
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 h-full">
          {/* Left side - Formation and Conferences */}
          <div className="md:w-[65%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div className="md:w-[32%] space-y-6">
            <MJCard
              title="Mandataire judiciaire"
              icon={
                <Gavel className="text-gradient-to-br from-violet-50 to-blue-50" />
              }
              dialogContent={<MJDialog />}
            />
            <div className="grid grid-cols-2 gap-6">
              <CollabCard
                title="Blaise & Marie"
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

              <CollabCard
                title="Santé Partners"
                dialogContent={
                  <div className="w-full h-[70vh] border border-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="/pdfs/sante-partners.pdf#view=FitH"
                      className="w-full h-full rounded-lg border-0 bg-white"
                      style={{ minHeight: "500px" }}
                    />
                  </div>
                }
              >
                <div className="w-10 h-10 rounded-full bg-violet-100 border-2 border-violet-200 overflow-hidden mb-4 mx-auto">
                  <Users className="w-5 h-5 mx-auto mt-2 text-violet-600" />
                </div>
              </CollabCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
