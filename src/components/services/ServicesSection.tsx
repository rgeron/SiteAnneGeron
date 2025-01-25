import { Gavel, GraduationCap, Presentation, Users } from "lucide-react";
import ServiceCard from "./ServiceCard";
import MJDialog from "./MJDialog";
import FormationDialog from "./FormationDialog";
import ConferenceDialog from "./ConferenceDialog";

export default function ServicesSection() {
  const services = [
    {
      title: "Mandataire judiciaire",
      icon: <Gavel />,
      dialogContent: <MJDialog />,
    },
    {
      title: "Formation",
      icon: <GraduationCap />,
      dialogContent: <FormationDialog />,
      imageUrl:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=60",
      description: "Formations professionnelles sur mesure pour vos équipes",
    },
    {
      title: "Conférences & Ateliers",
      icon: <Presentation />,
      dialogContent: <ConferenceDialog />,
      imageUrl:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=60",
      description:
        "Interventions et ateliers interactifs sur des thématiques ciblées",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 h-full">
          {/* Left side - Formation and Conferences */}
          <div className="md:w-[70%] space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.slice(1, 3).map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  icon={service.icon}
                  dialogContent={service.dialogContent}
                  className="bg-gray-50 border-2"
                />
              ))}
            </div>
          </div>

          {/* Right side - Mandataire judiciaire */}
          <div className="md:w-[30%] md:pl-8">
            <ServiceCard
              key={services[0].title}
              title={services[0].title}
              icon={services[0].icon}
              dialogContent={services[0].dialogContent}
              className="bg-primary/5 border-primary/20 border-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
