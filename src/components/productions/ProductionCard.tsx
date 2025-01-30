import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Play } from "lucide-react";
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
          <Card className="w-[300px] flex-shrink-0 hover:shadow-lg transition-shadow cursor-pointer bg-white border-2 border-black">
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
      <Card className="w-[280px] flex-shrink-0 hover:shadow-lg transition-shadow border-red-200 hover:border-red-300 group">
        <CardContent className="p-3">
          {image && (
            <Dialog>
              <DialogTrigger asChild>
                <div className="aspect-video w-full relative overflow-hidden rounded-md mb-3 group-hover:ring-2 ring-red-400 transition-all cursor-pointer">
                  <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Play className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="aspect-video w-full">
                  {videoId === "webinar" ? (
                    <video
                      src="/webinars/LILLY 15 min Webinair.mp4"
                      controls
                      className="w-full h-full rounded-lg"
                    />
                  ) : (
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
                  )}
                </div>
              </DialogContent>
            </Dialog>
          )}
          <h3 className="text-sm font-medium text-left line-clamp-2 text-gray-700 group-hover:text-red-600 transition-colors">
            {title}
          </h3>
        </CardContent>
      </Card>
    );
  }

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
