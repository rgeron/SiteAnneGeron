import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PDFViewer from "../PDFViewer";

interface ProductionCardProps {
  title: string;
  description?: string;
  image?: string;
  videoId?: string;
  pdfUrl?: string;
  type?: "video" | "pdf" | "default";
}

export default function ProductionCard({
  title,
  description,
  image,
  videoId,
  pdfUrl,
  type = "default",
}: ProductionCardProps) {
  if (type === "pdf") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Card className="w-[300px] flex-shrink-0 hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-violet-50 to-blue-50 border-violet-100">
            <CardHeader>
              <CardTitle className="text-lg">{title}</CardTitle>
              {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <Button className="w-full" variant="outline">
                <FileText className="mr-2 h-4 w-4" /> Voir le PDF
              </Button>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh]">
          <PDFViewer pdfUrl={pdfUrl} />
        </DialogContent>
      </Dialog>
    );
  }

  if (type === "video") {
    return (
      <Card className="w-[400px] flex-shrink-0 hover:shadow-lg transition-shadow bg-gradient-to-br from-violet-50 to-blue-50 border-violet-100">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          {image && (
            <div className="aspect-video w-full relative overflow-hidden rounded-md">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full" size="lg">
                <Play className="mr-2 h-4 w-4" /> Regarder la vidéo
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-[300px] flex-shrink-0 hover:shadow-lg transition-shadow bg-gradient-to-br from-violet-50 to-blue-50 border-violet-100">
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
