import PdfDownLoad from "./PdfDownLoad";
import UnOrderedList from "./UnOrderedList";
import { DownLoadPDF } from "./svg";

export default function CardDownload() {
  return (
    <section className="group relative col-span-2  flex flex-col items-center justify-center pr-4">
      <button title="Download PDF">
        <DownLoadPDF height="1.5em" width="1.5em" fill="red" />
      </button>
      <UnOrderedList addclass="hidden group-hover:absolute top-full w-40 py-8 -left-40 md:-left-20 group-hover:flex ">
        <article className="bg-white w-full  flex flex-col rounded-lg border-4 border-[skyblue] overflow-hidden">
          <PdfDownLoad name="Juan_A_Valdivia_Camacho_CV_CAT" lang="CAT" />
          <PdfDownLoad name="Juan_A_Valdivia_Camacho_CV_ES" lang="ES" />
          <PdfDownLoad name="Juan_A_Valdivia_Camacho_CV_EN" lang="EN" />
        </article>
      </UnOrderedList>
    </section>
  );
}
