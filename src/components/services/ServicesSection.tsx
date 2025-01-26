import { Gavel, GraduationCap, Presentation } from "lucide-react";
import ConferenceDialog from "./ConferenceDialog";
import FormationDialog from "./FormationDialog";
import MJDialog from "./MJDialog";
import ServiceCard from "./ServiceCard";

const StaticCircle = () => (
  <div className="size-32 bg-black rounded-full"></div>
);

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
            <ServiceCard
              key={services[0].title}
              title={services[0].title}
              icon={services[0].icon}
              dialogContent={services[0].dialogContent}
              className="bg-transparent border-[3px] border-transparent relative before:absolute before:inset-0 before:-z-10 before:rounded-lg before:p-[3px] before:bg-gradient-to-br before:from-violet-600 before:to-blue-600 after:absolute after:inset-[3px] after:-z-10 after:rounded-lg after:bg-white [&_h3]:bg-gradient-to-br [&_h3]:from-violet-600 [&_h3]:to-blue-600 [&_h3]:bg-clip-text [&_h3]:text-transparent [&_svg]:text-violet-600 hover:shadow-violet-200"
            />
            <div className="flex justify-center mt-7">
              <StaticCircle />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
