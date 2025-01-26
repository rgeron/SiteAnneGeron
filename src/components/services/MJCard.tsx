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
          <div className="bg-gradient-to-br from-violet-600 to-blue-600 p-[3px] rounded-lg shadow-lg shadow-violet-100/30 hover:shadow-xl hover:shadow-violet-200/40 transition-all duration-300">
            {/* White background content */}
            <div className="bg-white rounded-[calc(var(--radius)-1px)] p-8 flex flex-col items-center justify-center text-center h-full">
              {icon && (
                <div className="mb-4 text-4xl text-violet-600 transition-colors duration-300">
                  {icon}
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-br from-violet-600 to-blue-600 bg-clip-text text-transparent">
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
