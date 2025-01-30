import { useState } from "react";
import MJModal from "./MJModal";

interface MJCardProps {
  title: string;
  icon?: React.ReactNode;
}

export default function MJCard({ title, icon }: MJCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="bg-black p-[2px] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-black rounded-[calc(var(--radius)-1px)] p-4 flex flex-col items-center justify-center text-center h-full">
            {icon && (
              <div className="mb-2 text-3xl text-white transition-colors duration-300">
                {icon}
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          </div>
        </div>
      </div>

      <MJModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
