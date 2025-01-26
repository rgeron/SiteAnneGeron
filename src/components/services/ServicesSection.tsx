import { Gavel, GraduationCap, Presentation } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ConferenceDialog from "./ConferenceDialog";
import FormationDialog from "./FormationDialog";
import MJDialog from "./MJDialog";
import ServiceCard from "./ServiceCard";
import MJCard from "./MJCard";
import PDFViewer from "../PDFViewer";

export default function ServicesSection() {
  const services = [
    {
      title: "Mandataire judiciaire",
      icon: <Gavel className="text-white" />,
      dialogContent: <MJDialog />,
    },
    {
      title: "Formation",
      icon: <GraduationCap />,
      dialogContent: <FormationDialog />,
      description:
        "Mon objectif est de vous permettre de mieux vendre, plus vendre tout en accompagnant vos collaborateurs à devenir plus agiles sur des sujets tabous et intimes.",
    },
    {
      title: "Conférences & Ateliers",
      icon: <Presentation />,
      dialogContent: <ConferenceDialog />,
      description:
        "La conférence permettant l'accueil un grand nombre de participants en présentiel et\nWebinar.\n\nL'atelier permettant des échanges plus longs, plus interactifs et des partages.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 h-full">
          {/* Left side - Formation and Conferences */}
          <div className="md:w-[65%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.slice(1, 3).map((service) => (
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
              title={services[0].title}
              icon={services[0].icon}
              dialogContent={services[0].dialogContent}
            />
            <Dialog>
              <DialogTrigger asChild>
                <div className="mt-7 p-6 bg-gradient-to-br from-violet-50 to-blue-50 rounded-lg border-2 border-violet-100 hover:shadow-lg transition-all cursor-pointer">
                  <h3 className="text-xl font-semibold text-center mb-6">
                    Mon équipe de choc
                  </h3>
                  <div className="flex justify-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-violet-100 border-2 border-violet-200" />
                    <div className="w-20 h-20 rounded-full bg-violet-100 border-2 border-violet-200" />
                  </div>
                  <p className="text-center mt-4 text-sm text-gray-600">
                    Nous créons des contenus ensemble
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh]">
                <PDFViewer pdfUrl="/pdfs/plaquetteMarieBlaise.pdf" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
