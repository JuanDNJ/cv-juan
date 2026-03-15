import { useTranslation } from "react-i18next";
import { firstCharAtToUpperCase } from "../utils";

export default function Card({ children, title, addclass = "" }) {
  const { t } = useTranslation();
  return (
    <div className={`card-shell ${addclass}`}>
      <h2>{firstCharAtToUpperCase(t(title))}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
}
