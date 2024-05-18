import { saveAs } from "file-saver";
export default function PdfDownLoad({ name, lang }) {
  const handleDownload = () => {
    const pdfUrl = `./pdf/${name}.pdf`;
    const pdfName = `${name}.pdf`;

    fetch(pdfUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        saveAs(blob, pdfName);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <button
      type="button"
      title={`Descarga CV ${lang}`}
      onClick={handleDownload}
      className="bg-stone-800 text-left p-2 text-stone-200 hover:text-stone-800 hover:bg-stone-200"
    >
      <strong>CV {lang}</strong>
    </button>
  );
}
