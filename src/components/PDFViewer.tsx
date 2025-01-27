interface PDFViewerProps {
  pdfUrl: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  return (
    <div className="w-full h-[85vh] border border-gray-200 rounded-lg overflow-hidden bg-white">
      <object data={pdfUrl} type="application/pdf" className="w-full h-full">
        <div className="p-4 text-center">
          <p className="text-gray-600 mb-2">
            Il semble que votre navigateur ne puisse pas afficher ce PDF.
          </p>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Télécharger le PDF
          </a>
        </div>
      </object>
    </div>
  );
}
