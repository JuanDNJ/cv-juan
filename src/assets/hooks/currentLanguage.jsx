import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useCurrentLanguage = () => {
  const { i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const cahngeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };
  return { currentLanguage, cahngeLanguage };
};
