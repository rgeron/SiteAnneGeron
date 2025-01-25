interface PDFViewerProps {
  pdfUrl: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  return (
    <div className="w-full h-[70vh] border border-gray-200 rounded-lg overflow-hidden">
      <object data={pdfUrl} type="application/pdf" className="w-full h-full">
        <p>Il semble que votre navigateur ne puisse pas afficher ce PDF.</p>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          Télécharger le PDF
        </a>
      </object>
    </div>
  );
}
