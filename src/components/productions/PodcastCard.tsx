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
    <Card className="hover:shadow-lg transition-shadow bg-white border-2 border-black">
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
