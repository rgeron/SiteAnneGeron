import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductionCard from "./ProductionCard";

export default function ProductionsSection() {
  const publications = [
    { title: "Livre de mémoire et transmission", description: "Family office" },
    { title: "Cahier MGEN" },
    { title: "Cahier mort Malakoff" },
    { title: "Cahier retraite Malakoff" },
  ];

  const videos = [
    {
      title: "Video 1",
      image:
        "https://images.unsplash.com/photo-1516280440429-4c0b901e8b9c?w=800",
    },
    {
      title: "Video 2",
      image:
        "https://images.unsplash.com/photo-1516280440429-4c0b901e8b9c?w=800",
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
            <h3 className="text-2xl font-semibold mb-6">Publications</h3>
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {publications.map((pub) => (
                  <ProductionCard
                    key={pub.title}
                    title={pub.title}
                    description={pub.description}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Vidéos YouTube</h3>
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {videos.map((video) => (
                  <ProductionCard
                    key={video.title}
                    title={video.title}
                    image={video.image}
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
