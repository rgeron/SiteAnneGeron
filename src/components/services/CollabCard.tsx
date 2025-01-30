interface CollabCardProps {
  title: string;
  description?: string;

  children?: React.ReactNode;
}

export default function CollabCard({
  title,
  description,

  children,
}: CollabCardProps) {
  return (
    <div className="relative group cursor-pointer">
      {/* Gradient border container */}
      <div className="bg-black p-[2px] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        {/* White background content */}
        <div className="bg-white rounded-[calc(var(--radius)-1px)] p-4 flex flex-col items-center justify-center text-center h-full">
          {children}
          <h3 className="text-2xl font-semibold mb-4 text-black">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
