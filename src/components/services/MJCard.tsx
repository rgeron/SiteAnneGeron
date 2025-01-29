import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface MJCardProps {
  title: string;
  icon?: React.ReactNode;
  dialogContent?: React.ReactNode;
}

export default function MJCard({
  title,
  icon,
  dialogContent = <div>Content coming soon...</div>,
}: MJCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative group cursor-pointer">
          {/* Gradient border container */}
          <div className="bg-black p-[2px] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            {/* White background content */}
            <div className="bg-black rounded-[calc(var(--radius)-1px)] p-4 flex flex-col items-center justify-center text-center h-full">
              {icon && (
                <div className="mb-2 text-3xl text-white transition-colors duration-300">
                  {icon}
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-4/5 h-4/5 max-w-[80vw] max-h-[80vh]">
        {dialogContent}
      </DialogContent>
    </Dialog>
  );
}
