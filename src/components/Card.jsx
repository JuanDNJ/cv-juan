import { useTranslation } from "react-i18next";
import { firstCharAtToUpperCase } from "../utils";

export default function Card({ children, title }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col px-4">
      <h2 className="font-title text-xl md:text-2xl font-bold">
        {firstCharAtToUpperCase(t(title))}
      </h2>
      {children}
    </div>
  );
}
