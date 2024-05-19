import { saveAs } from "file-saver";
import DownloadFile from "./svg/DownloadFile";
import { useTranslation } from "react-i18next";
import { firstCharAtToUpperCase } from "../utils";
export default function PdfDownLoad({ name, lang }) {
  const { t } = useTranslation();
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
      title={`${firstCharAtToUpperCase(t("download"))} cv ${lang}`}
      onClick={handleDownload}
      className="bg-stone-800 text-left p-1 text-stone-200 hover:text-stone-800 hover:bg-stone-200 transition-all transition-300"
    >
      <span className="flex items-center justify-between hover:text-blue-500 hover:font-extrabold">
        {lang} <DownloadFile fill="currentColor" height="2em" width="2em" />
      </span>
    </button>
  );
}
