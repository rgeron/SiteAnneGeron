import { Gavel, GraduationCap, Presentation } from "lucide-react";
import PDFViewer from "../PDFViewer";
import ConferenceDialog from "./ConferenceDialog";
import FormationDialog from "./FormationDialog";
import MJCard from "./MJCard";
import MJDialog from "./MJDialog";
import ServiceCard from "./ServiceCard";

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
        "Je crée et j’anime des conférences sur mesure, conçues pour sensibiliser les participants à des thématiques clés et engager des discussions enrichissantes. Ces conférences peuvent s’accompagner d’ateliers pratiques, permettant de travailler en profondeur les sujets abordés pour favoriser des solutions concrètes et durables. ",
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
                  className="bg-gradient-to-br from-violet-50 to-blue-50 border-2 border-violet-100 h-full hover:shadow-violet-100"
                  description={service.description}
                />
              ))}
            </div>
          </div>

          {/* Right side - Mandataire judiciaire */}
          <div className="md:w-[32%]">
            <MJCard
              title="Mandataire judiciaire"
              icon={
                <Gavel className="text-gradient-to-br from-violet-50 to-blue-50 " />
              }
              dialogContent={<MJDialog />}
            />
            <MJCard
              title="Mon équipe de choc"
              dialogContent={
                <div className="w-full h-[70vh] border border-gray-200 rounded-lg overflow-hidden">
                  <PDFViewer pdfUrl="/pdfs/plaquetteMarieBlaise.pdf" />
                </div>
              }
            >
              <div className="flex justify-center gap-6">
                <div className="w-20 h-20 rounded-full bg-violet-100 border-2 border-violet-200" />
                <div className="w-20 h-20 rounded-full bg-violet-100 border-2 border-violet-200" />
              </div>
              <p className="text-center mt-4 text-sm text-gray-600">
                Nous créons des contenus ensemble
              </p>
            </MJCard>
          </div>
        </div>
      </div>
    </section>
  );
}
