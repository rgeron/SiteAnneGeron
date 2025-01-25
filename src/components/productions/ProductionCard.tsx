import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductionCardProps {
  title: string;
  description?: string;
  image?: string;
}

export default function ProductionCard({
  title,
  description,
  image,
}: ProductionCardProps) {
  return (
    <Card className="w-[300px] flex-shrink-0 hover:shadow-lg transition-shadow">
      {image && (
        <div className="aspect-video relative overflow-hidden">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
    </Card>
  );
}
