import { useTranslation } from "react-i18next";

export default function ItemList({ text }) {
  const { t } = useTranslation();
  return <li>{t(`${text}`)}</li>;
}
