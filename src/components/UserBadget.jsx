import { useTranslation } from "react-i18next";
import { firstCharAtToUpperCase } from "../utils";

export default function UserBadget() {
  const { t } = useTranslation();
  return (
    <article className="badge-panel col-span-12 flex items-end gap-4 lg:col-span-8">
      <img
        src="images/jpg/juan_profile.jpg"
        alt="Profile photo"
        width={128}
        height={128}
        className="photo__cv z-10"
      />
      <h1 className="hero-copy">
        <div className="flex flex-col">
          <strong className="name">Juan Valdivia</strong>
          <strong className="surname">
            {firstCharAtToUpperCase(t("developer"))} Front-End
          </strong>
        </div>
      </h1>
    </article>
  );
}
