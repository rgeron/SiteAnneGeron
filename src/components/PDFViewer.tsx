interface PDFViewerProps {
  pdfUrl: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  return (
    <div className="flex h-[85vh] rounded-xl overflow-hidden bg-white">
      <object data={pdfUrl} type="application/pdf" className="w-full h-full">
        <div className="text-center">
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
