import { useTranslation } from "react-i18next";
import { firstCharAtToUpperCase } from "../utils";

export default function ItemList({ text }) {
  const { t } = useTranslation();
  return <li className="pb-2">{firstCharAtToUpperCase(t(`${text}`))}</li>;
}
