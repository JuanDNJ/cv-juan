import { useTranslation } from "react-i18next";
import PdfDownLoad from "./PdfDownLoad";
import UnOrderedList from "./UnOrderedList";
import { DownLoadPDF } from "./svg";
import { firstCharAtToUpperCase } from "../utils";
export default function CardDownload() {
  const { t } = useTranslation();
  return (
    <section className="download-shell group relative col-span-2 flex flex-col items-center justify-center px-1 md:px-2">
      <button className="download-trigger" title={`${firstCharAtToUpperCase(t("download"))} CV`}>
        <DownLoadPDF height="1.25em" width="1.25em" fill="currentColor" />
      </button>
      <UnOrderedList addclass="download-menu hidden group-hover:absolute group-hover:flex top-full right-0 pt-4 w-44">
        <article className="download-panel w-full flex flex-col overflow-hidden">
          <PdfDownLoad name="Juan_A_Valdivia_Camacho_CV_EN" lang="EN" />
          <PdfDownLoad name="Juan_A_Valdivia_Camacho_CV_ES" lang="ES" />
          <PdfDownLoad name="Juan_A_Valdivia_Camacho_CV_CA" lang="CAT" />
        </article>
      </UnOrderedList>
    </section>
  );
}
