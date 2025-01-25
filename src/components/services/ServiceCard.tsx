import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ServiceCardProps {
  title: string;
  icon?: React.ReactNode;
  dialogContent?: React.ReactNode;
}

export default function ServiceCard({
  title,
  icon,
  dialogContent = <div>Content coming soon...</div>,
}: ServiceCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px] text-center">
            {icon && <div className="mb-4 text-4xl text-primary">{icon}</div>}
            <h3 className="text-xl font-semibold">{title}</h3>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="w-4/5 h-4/5 max-w-[80vw] max-h-[80vh]">
        {dialogContent}
      </DialogContent>
    </Dialog>
  );
}
