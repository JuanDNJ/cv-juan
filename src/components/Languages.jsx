import { useStore } from "../context/useStore";
import { languages } from "../utils";
import Btn from "./Btn";
import { useTranslation } from "react-i18next";

export default function Languages() {
  const { currentLanguage } = useStore();
  const { t } = useTranslation();
  const currentLanguageData = languages.find(({ language }) => language === currentLanguage);

  return (
    <div className="toolbar-group flex items-center gap-2 px-1 md:px-2">
      {languages.map((payload) => (
        <Btn key={payload.id} title={payload.name} lang={payload.language}>
          <img width={24} height={24} src={payload.img} alt={payload.name} />
        </Btn>
      ))}
      <strong className="toolbar-label">
        {currentLanguageData?.name ? t(currentLanguageData.name).toUpperCase() : currentLanguage.toUpperCase()}
      </strong>
    </div>
  );
}
