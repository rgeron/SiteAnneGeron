import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductionCard from "./ProductionCard";

export default function ProductionsSection() {
  const projects = [
    { title: "Livre de mémoire et transmission", description: "Family office" },
    { title: "Cahier MGEN" },
    { title: "Cahier mort Malakoff" },
    { title: "Cahier retraite Malakoff" },
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
                  <ProductionCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                  />
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
                  <ProductionCard
                    key={video.title}
                    title={video.title}
                    image={video.image}
                    videoId={video.videoId}
                    type="video"
                  />
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
                  <ProductionCard
                    key={podcast.title}
                    title={podcast.title}
                    image={podcast.image}
                  />
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
