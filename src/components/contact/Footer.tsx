import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Footer() {
  const carouselImages = [
    { src: "/images/carousel/methode.png", alt: "Méthode" },
    { src: "/images/carousel/themes.png", alt: "Thèmes" },
    { src: "/images/carousel/approche.png", alt: "Approche" },
    { src: "/images/carousel/cta.png", alt: "CTA" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Informations de contact
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>123 Rue Example, 75000 Paris</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>contact@annegeron.com</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Carousel className="w-full max-w-lg mx-auto">
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
