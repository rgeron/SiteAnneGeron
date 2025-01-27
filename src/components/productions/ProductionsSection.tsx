import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CahierCard from "./CahierCard";
import PodcastPlayer from "./PodcastPlayer";
import WebinarCard from "./WebinarCard";
import YTBCard from "./YTBCard";

export default function ProductionsSection() {
  const projects = [
    {
      title: "Cahier MGEN",
      description:
        "Un guide complet pour préserver et transmettre l'histoire familiale aux générations futures",
      type: "pdf",
      pdfUrl: "/pdfs/cahier-mgen.pdf",
    },
    {
      title: "Cahier mort Malakoff",
      description:
        "Ressources et informations essentielles pour les adhérents MGEN sur la prévoyance et la santé",
      type: "pdf",
      pdfUrl: "/pdfs/cahier-mort-malakoff-mederic.pdf",
    },
    {
      title: "Cahier retraite Malakoff",
      description:
        "Guide pratique pour comprendre et préparer les aspects liés à la fin de vie",
      type: "pdf",
      pdfUrl: "/pdfs/cahier-retraite-malakoff-mederic.pdf",
    },
  ];

  const videos = [
    {
      title: "2 ans, le temps du deuil",
      videoId: "tqf9iDUv5cQ",
      image: "https://i3.ytimg.com/vi/tqf9iDUv5cQ/maxresdefault.jpg",
    },
    {
      title: "S'inspirer des autres cultures",
      videoId: "nOhDOKKUOJg",
      image: "https://i3.ytimg.com/vi/nOhDOKKUOJg/maxresdefault.jpg",
    },
    {
      title: "Transmettre ses souvenirs",
      videoId: "pO09bXbSsqg",
      image: "https://i3.ytimg.com/vi/pO09bXbSsqg/maxresdefault.jpg",
    },
    {
      title: "Quel prix pour une demeure d'éternité",
      videoId: "i2euZkYQ4-I",
      image: "https://i3.ytimg.com/vi/i2euZkYQ4-I/maxresdefault.jpg",
    },
    {
      title: "Préparer les formalités",
      videoId: "WWPuWj0YDWQ",
      image: "https://i3.ytimg.com/vi/WWPuWj0YDWQ/maxresdefault.jpg",
    },
    {
      title: "Où se faire enterrer",
      videoId: "pBsdVEEibGU",
      image: "https://i3.ytimg.com/vi/pBsdVEEibGU/maxresdefault.jpg",
    },
    {
      title: "Les soins palliatifs",
      videoId: "4wABfaLkayU",
      image: "https://i3.ytimg.com/vi/4wABfaLkayU/maxresdefault.jpg",
    },
    {
      title: "Les rituels indispensables dans les chemins du deuil",
      videoId: "LmIDsKYlGnw",
      image: "https://i3.ytimg.com/vi/LmIDsKYlGnw/maxresdefault.jpg",
    },
    {
      title: "Les deuils symboliques",
      videoId: "A6PHPLGx7pA",
      image: "https://i3.ytimg.com/vi/A6PHPLGx7pA/maxresdefault.jpg",
    },
    {
      title: "Le don d'organes",
      videoId: "-PjkrkdbmSE",
      image: "https://i3.ytimg.com/vi/-PjkrkdbmSE/maxresdefault.jpg",
    },
    {
      title: "La crémation",
      videoId: "XOi6841Vbso",
      image: "https://i3.ytimg.com/vi/XOi6841Vbso/maxresdefault.jpg",
    },
    {
      title: "Anticiper ses funérailles",
      videoId: "Gz0Z6a8duAU",
      image: "https://i3.ytimg.com/vi/Gz0Z6a8duAU/maxresdefault.jpg",
    },
  ];

  const webinars = [
    {
      title: "LILLY 15 min Webinair",
      videoUrl: "https://example.com/webinar.mp4",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2940&auto=format&fit=crop",
    },
  ];

  const podcasts = [
    {
      title: "Empathie, Sympathie, Compassion",
      src: "/podcasts/Podcast 1 - Empathie Sympathie Compassion.mp4",
      startTime: 50,
      endTime: 180, // 3min
    },
    {
      title: "Histoire et réglementation funéraire",
      src: "/podcasts/Podcast 2 - Histoire et réglementation funéraire.mp4",
      startTime: 51,
      endTime: 155, // 2min35s
    },
    {
      title:
        "Les 3 transitions : assurance, épargne, risque projet décès obsèques",
      src: "/podcasts/Podcast 3 - 3 transitions assurance epargne rique projet deces obséques.mp4",
      startTime: 127, // 2min07s
      endTime: 223, // 3min43s
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Découvrez mes réalisations clients
            </h3>
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {projects.map((project) => (
                  <CahierCard key={project.title} {...project} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Extraits vidéo d'une conférence
            </h3>
            <ScrollArea className="w-full">
              <div className="pb-4">
                <div
                  className="inline-grid grid-rows-2 gap-4"
                  style={{ gridAutoColumns: "280px", gridAutoFlow: "column" }}
                >
                  {videos.map((video) => (
                    <YTBCard key={video.title} {...video} />
                  ))}
                </div>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Webinars</h3>
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {webinars.map((webinar) => (
                  <WebinarCard key={webinar.title} {...webinar} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Podcasts</h3>
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {podcasts.map((podcast) => (
                  <PodcastPlayer key={podcast.title} {...podcast} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  );
}
