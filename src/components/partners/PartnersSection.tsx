import { useEffect, useState } from "react";

export default function PartnersSection() {
  const [partners1, setPartners1] = useState<string[]>([]);
  const [partners2, setPartners2] = useState<string[]>([]);

  useEffect(() => {
    // Get all partner logos
    const allPartners = [
      "chaville.png",
      "generali.png",
      "happyend.jpg",
      "harmonie.png",
      "lilly.jpg",
      "maison.png",
      "malakoff.jpeg",
      "mercer.png",
      "mgen.jpg",
      "mma.jpg",
      "mnt.png",
      "ouihelp.png",
      "umr.png",
    ];

    // Split partners into two groups
    const midPoint = Math.ceil(allPartners.length / 2);
    setPartners1(allPartners.slice(0, midPoint));
    setPartners2(allPartners.slice(midPoint));
  }, []);

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-4xl font-tan-nimbus text-center mb-12">
          Nous avons eu des projets ensemble
        </h2>
      </div>

      {/* First row of logos */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex items-center space-x-12 py-4">
          {partners1.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm w-[220px] h-[100px]"
            >
              <img
                src={`/images/partnerslogo/${logo}`}
                alt={logo.split(".")[0]}
                className="max-w-[160px] max-h-[70px] object-contain"
              />
            </div>
          ))}
        </div>
        <div
          className="animate-marquee flex items-center space-x-12 py-4"
          aria-hidden="true"
        >
          {partners1.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm w-[220px] h-[100px]"
            >
              <img
                src={`/images/partnerslogo/${logo}`}
                alt={logo.split(".")[0]}
                className="max-w-[160px] max-h-[70px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second row of logos - moving in opposite direction */}
      <div className="relative flex overflow-x-hidden group mt-8">
        <div className="animate-marquee-reverse flex items-center space-x-12 py-4">
          {partners2.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm w-[220px] h-[100px]"
            >
              <img
                src={`/images/partnerslogo/${logo}`}
                alt={logo.split(".")[0]}
                className="max-w-[160px] max-h-[70px] object-contain"
              />
            </div>
          ))}
        </div>
        <div
          className="animate-marquee-reverse flex items-center space-x-12 py-4"
          aria-hidden="true"
        >
          {partners2.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm w-[220px] h-[100px]"
            >
              <img
                src={`/images/partnerslogo/${logo}`}
                alt={logo.split(".")[0]}
                className="max-w-[160px] max-h-[70px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
