import { useTranslation } from "react-i18next";
import { firstCharAtToUpperCase } from "../utils";

export default function SetInnerHTML({ text }) {
    const { t } = useTranslation();
    const texto = firstCharAtToUpperCase(t(`${text}`))
    return <div dangerouslySetInnerHTML={{ __html: texto }} />;
}
