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
    },
    {
      title: "Conférences & Ateliers",
      icon: <Presentation />,
      dialogContent: <ConferenceDialog />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Mes Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              dialogContent={service.dialogContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
