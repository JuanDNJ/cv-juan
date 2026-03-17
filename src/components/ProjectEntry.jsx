import { useTranslation } from "react-i18next";
import { firstCharAtToUpperCase } from "../utils";

export default function ProjectEntry({ text, href, title, image, alt }) {
  const { t } = useTranslation();
  const content = firstCharAtToUpperCase(t(text));

  return (
    <article className="project-entry-card">
      <a className="project-shot" href={href} target="_blank" rel="noreferrer" title={title}>
        <img src={image} alt={alt} />
      </a>
      <div className="project-copy" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
