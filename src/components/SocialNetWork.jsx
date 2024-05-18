import { useTranslation } from "react-i18next";
import { firstCharAtToUpperCase, socialNetWork } from "../utils";
import GitHub from "./svg/GitHub";
import Linkedin from "./svg/Linkeding";

export default function SocialNetWork() {
  const { t } = useTranslation();
  return (
    <nav className="col-span-2 flex items-center justify-end gap-2 px-4">
      {socialNetWork.map((social) => {
        return (
          <a
            key={social.id}
            target="_black"
            href={social.url}
            title={`${firstCharAtToUpperCase(t("profile"))} ${social.name}`}
            className="hover:scale-90 transition-transform duration-300"
          >
            {social.component === "linkedin" ? (
              <Linkedin fill="skyblue" />
            ) : (
              <GitHub fill="white" />
            )}
          </a>
        );
      })}
    </nav>
  );
}
