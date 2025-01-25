import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductionCard from "./ProductionCard";

export default function ProductionsSection() {
  const projects = [
    {
      title: "Livre de mémoire et transmission",
      description:
        "Un guide complet pour préserver et transmettre l'histoire familiale aux générations futures",
      type: "pdf",
      pdfUrl: "/pdfs/livre-memoire.pdf",
    },
    {
      title: "Cahier MGEN",
      description:
        "Ressources et informations essentielles pour les adhérents MGEN sur la prévoyance et la santé",
      type: "pdf",
      pdfUrl: "/pdfs/cahier-mgen.pdf",
    },
    {
      title: "Cahier mort Malakoff",
      description:
        "Guide pratique pour comprendre et préparer les aspects liés à la fin de vie",
      type: "pdf",
      pdfUrl: "/pdfs/cahier-mort-malakoff.pdf",
    },
  ];

  const videos = [
    {
      title: "Accompagner la fin de vie",
      videoId: "nOhDOKKUOJg",
      image: "https://i3.ytimg.com/vi/nOhDOKKUOJg/maxresdefault.jpg",
    },
    {
      title: "Accompagner la fin de vie - Partie 2",
      videoId: "nOhDOKKUOJg",
      image: "https://i3.ytimg.com/vi/nOhDOKKUOJg/maxresdefault.jpg",
    },
    {
      title: "La mort, parlons-en !",
      videoId: "nOhDOKKUOJg",
      image: "https://i3.ytimg.com/vi/nOhDOKKUOJg/maxresdefault.jpg",
    },
    {
      title: "Le deuil et ses étapes",
      videoId: "nOhDOKKUOJg",
      image: "https://i3.ytimg.com/vi/nOhDOKKUOJg/maxresdefault.jpg",
    },
    {
      title: "Préparer sa fin de vie",
      videoId: "nOhDOKKUOJg",
      image: "https://i3.ytimg.com/vi/nOhDOKKUOJg/maxresdefault.jpg",
    },
    {
      title: "Les directives anticipées",
      videoId: "nOhDOKKUOJg",
      image: "https://i3.ytimg.com/vi/nOhDOKKUOJg/maxresdefault.jpg",
    },
    {
      title: "Le testament",
      videoId: "nOhDOKKUOJg",
      image: "https://i3.ytimg.com/vi/nOhDOKKUOJg/maxresdefault.jpg",
    },
    {
      title: "Les obsèques",
      videoId: "nOhDOKKUOJg",
      image: "https://i3.ytimg.com/vi/nOhDOKKUOJg/maxresdefault.jpg",
    },
    {
      title: "Le deuil",
      videoId: "nOhDOKKUOJg",
      image: "https://i3.ytimg.com/vi/nOhDOKKUOJg/maxresdefault.jpg",
    },
    {
      title: "L'héritage",
      videoId: "nOhDOKKUOJg",
      image: "https://i3.ytimg.com/vi/nOhDOKKUOJg/maxresdefault.jpg",
    },
    {
      title: "La succession",
      videoId: "nOhDOKKUOJg",
      image: "https://i3.ytimg.com/vi/nOhDOKKUOJg/maxresdefault.jpg",
    },
    {
      title: "Les démarches administratives",
      videoId: "nOhDOKKUOJg",
      image: "https://i3.ytimg.com/vi/nOhDOKKUOJg/maxresdefault.jpg",
    },
  ];

  const podcasts = [
    {
      title: "Podcast 1",
      image:
        "https://images.unsplash.com/photo-1516280440429-4c0b901e8b9c?w=800",
    },
    {
      title: "Podcast 2",
      image:
        "https://images.unsplash.com/photo-1516280440429-4c0b901e8b9c?w=800",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Productions</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Projets</h3>
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {projects.map((project) => (
                  <ProductionCard key={project.title} {...project} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Vidéos</h3>
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {videos.map((video) => (
                  <ProductionCard key={video.title} {...video} type="video" />
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
                  <ProductionCard key={podcast.title} {...podcast} />
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
