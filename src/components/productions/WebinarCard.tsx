import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";

interface WebinarCardProps {
  title: string;
  image?: string;
  videoUrl: string;
}

export default function WebinarCard({
  title,
  image,
  videoUrl,
}: WebinarCardProps) {
  return (
    <Card className="w-[280px] flex-shrink-0 hover:shadow-lg transition-shadow bg-gradient-to-br from-violet-50 to-blue-50 border-red-200 hover:border-red-300 group">
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
                <video
                  src={videoUrl}
                  controls
                  className="w-full h-full rounded-lg"
                />
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
