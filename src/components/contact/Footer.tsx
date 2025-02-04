import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ContactForm from "./ContactForm";

export default function Footer() {
  const carouselImages = [
    { src: "/images/carousel/cta.png", alt: "CTA" },
    { src: "/images/carousel/methode.png", alt: "Méthode" },
    { src: "/images/carousel/themes.png", alt: "Thèmes" },
    { src: "/images/carousel/approche.png", alt: "Approche" },
  ];

  return (
    <footer className="bg-white text-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ContactForm />
            {/* Updated container styling to center the image */}
            <div className="mt-28 flex justify-center">
              <img
                src="/images/logo.jpg"
                alt="AB Logo"
                className="w-auto h-36"
              />
            </div>
          </div>

          <div className="space-y-8">
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
