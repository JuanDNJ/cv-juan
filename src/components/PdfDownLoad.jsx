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
      className="download-option"
    >
      <span className="flex items-center justify-between gap-3">
        {lang} <DownloadFile fill="currentColor" height="2em" width="2em" />
      </span>
    </button>
  );
}
