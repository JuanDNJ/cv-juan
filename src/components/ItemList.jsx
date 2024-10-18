import { useTranslation } from "react-i18next";
import { firstCharAtToUpperCase } from "../utils";

export default function ItemList({ text }) {
  const { t } = useTranslation();
  const texto = firstCharAtToUpperCase(t(`${text}`))
  return <div dangerouslySetInnerHTML={{ __html: texto }} />;
}
