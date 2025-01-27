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
        <Card className="w-[300px] h-[200px] flex-shrink-0 hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border border-gray-200 group hover:border-gray-400">
          <div className="h-full flex flex-col p-6">
            <CardHeader className="p-0 mb-2 flex-1">
              <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                {title}
              </CardTitle>
              {description && (
                <CardDescription className="mt-2 text-gray-600">
                  {description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="p-0">
              <Button
                className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow group-hover:bg-gray-700"
                variant="default"
              >
                <FileText className="mr-2 h-4 w-4" /> Voir le PDF
              </Button>
            </CardContent>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <PDFViewer pdfUrl={pdfUrl} />
      </DialogContent>
    </Dialog>
  );
}
