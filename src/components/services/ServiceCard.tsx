import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  icon?: React.ReactNode;
  dialogContent?: React.ReactNode;
  className?: string;
  imageUrl?: string;
  description?: string;
}

export default function ServiceCard({
  title,
  icon,
  dialogContent = <div>Content coming soon...</div>,
  className,
  imageUrl,
  description,
}: ServiceCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          className={cn(
            "cursor-pointer hover:shadow-lg transition-shadow bg-white border-2 border-black",
            className,
          )}
        >
          <CardContent className="p-6">
            {imageUrl && (
              <div className="w-full h-48 overflow-hidden mb-4">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col items-center justify-center text-center">
              {icon && <div className="mb-4 text-4xl text-black">{icon}</div>}
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              {description && (
                <p className="text-lg leading-relaxed whitespace-pre-line text-gray-600">
                  {description}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="w-4/5 h-4/5 max-w-[80vw] max-h-[80vh]">
        {dialogContent}
      </DialogContent>
    </Dialog>
  );
}
