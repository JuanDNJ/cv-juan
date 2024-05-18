import { useTranslation } from "react-i18next";
import { firstCharAtToUpperCase } from "../utils";
import i18n from "../features/i18n";
import { useStore } from "../context/useStore";

export default function Btn({ children, title, lang }) {
  const { cahngeLanguage } = useStore();
  const { t } = useTranslation();
  const handlerChangeLanguage = (lang) => {
    cahngeLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <button
      type="button"
      title={firstCharAtToUpperCase(t(title))}
      onClick={() => handlerChangeLanguage(lang)}
      className="border text-red-500 border-stone-900 rounded-full z-10 hover:scale-90 "
    >
      {children}
    </button>
  );
}
