import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PodcastCardProps {
  title: string;
  description?: string;
  image?: string;
  podcastUrl: string;
}

export default function PodcastCard({
  title,
  description,
  image,
  podcastUrl,
}: PodcastCardProps) {
  return (
    <Card className="w-[300px] flex-shrink-0 hover:shadow-lg transition-shadow bg-white border-2 border-black">
      {image && (
        <div className="aspect-video relative overflow-hidden">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <audio controls className="w-full">
          <source src={podcastUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </CardContent>
    </Card>
  );
}
