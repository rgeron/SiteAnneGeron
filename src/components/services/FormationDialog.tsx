import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { BookOpen, ScrollText } from "lucide-react";
import ContactForm from "../contact/ContactForm";

interface ThemeDialogProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ThemeDialog({ title, description, icon }: ThemeDialogProps) {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
      <ScrollArea className="h-full max-h-[90vh]">
        <div className="flex flex-col md:flex-row gap-8 p-6">
          {/* Left Column - Information */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-black/10 text-black">
                {icon}
              </div>
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <div className="prose prose-slate">
              <p className="text-lg">{description}</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </ScrollArea>
    </DialogContent>
  );
}

const themes = [
  {
    title: "Le funéraire",
    description:
      "Une exploration approfondie des pratiques funéraires contemporaines, leur évolution et leur importance dans notre société. Cette formation aborde les aspects pratiques, émotionnels et culturels des rituels funéraires.",
    icon: <ScrollText className="h-5 w-5" />,
  },
  {
    title: "Ritualisation, inhumation & crémation",
    description:
      "Découvrez les différentes pratiques de ritualisation, les spécificités de l'inhumation et de la crémation, ainsi que leur signification culturelle et spirituelle dans notre société moderne.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  // ... rest of the themes
];

export default function FormationDialog() {
  return (
    <div className="p-6 space-y-8 max-h-[80vh] overflow-hidden">
      <ScrollArea className="h-full pr-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl font-bold mb-8 text-black">Formation</h2>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mx-auto">
          {themes.map((theme) => (
            <Dialog key={theme.title}>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="w-full h-auto py-4 px-4 text-left flex items-center gap-3 hover:bg-gray-50 border-2 border-black transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-black/5 text-black group-hover:bg-black/10 transition-colors">
                      {theme.icon}
                    </div>
                    <span className="text-lg font-medium">{theme.title}</span>
                  </Button>
                </motion.div>
              </DialogTrigger>
              <ThemeDialog {...theme} />
            </Dialog>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
