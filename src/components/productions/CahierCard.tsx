import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FileText } from "lucide-react";
import PDFViewer from "../PDFViewer";

interface CahierCardProps {
  title: string;
  description?: string;
  pdfUrl: string;
}

export default function CahierCard({
  title,
  description,
  pdfUrl,
}: CahierCardProps) {
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
