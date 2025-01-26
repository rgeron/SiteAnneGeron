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
      <Card className="w-[280px] flex-shrink-0 hover:shadow-lg transition-shadow bg-gradient-to-br from-violet-50 to-blue-50 border-red-200 hover:border-red-300 group">
        <CardContent className="p-3">
          {image && (
            <div className="aspect-video w-full relative overflow-hidden rounded-md mb-3 group-hover:ring-2 ring-red-400 transition-all">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <Play className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </div>
            </div>
          )}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="w-full h-auto p-0 hover:bg-transparent"
              >
                <h3 className="text-sm font-medium text-left line-clamp-2 group-hover:text-red-600 transition-colors">
                  {title}
                </h3>
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
