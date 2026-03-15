import { useTranslation } from "react-i18next";
import { firstCharAtToUpperCase, socialNetWork } from "../utils";
import GitHub from "./svg/GitHub";
import Linkedin from "./svg/Linkeding";

export default function SocialNetWork() {
  const { t } = useTranslation();
  return (
    <nav className="social-bar col-span-12 flex items-end justify-end gap-3 lg:col-span-4">
      {socialNetWork.map((social) => {
        return (
          <a
            key={social.id}
            target="_black"
            href={social.url}
            title={`${firstCharAtToUpperCase(t("profile"))} ${social.name}`}
            className="social-link"
          >
            {social.component === "linkedin" ? (
              <Linkedin fill="currentColor" />
            ) : (
              <GitHub fill="currentColor" />
            )}
          </a>
        );
      })}
    </nav>
  );
}
