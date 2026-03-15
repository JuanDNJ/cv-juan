import { useTranslation } from "react-i18next";
import { firstCharAtToUpperCase } from "../utils";

export default function ItemList({ text }) {
  const { t } = useTranslation();
  const texto = firstCharAtToUpperCase(t(`${text}`));
  return <div className="rich-item" dangerouslySetInnerHTML={{ __html: texto }} />;
}
