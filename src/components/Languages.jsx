import { useStore } from "../context/useStore";
import { firstCharAtToUpperCase, languages } from "../utils";
import Btn from "./Btn";

export default function Languages() {
  const { currentLanguage } = useStore();
  return (
    <div className="flex items-center gap-2 px-4">
      <strong className="text-stone-400">
        {firstCharAtToUpperCase(currentLanguage)}
      </strong>
      {languages.map((payload) => (
        <Btn key={payload.id} title={payload.name} lang={payload.language}>
          <img width={24} height={24} src={payload.img} alt={payload.name} />
        </Btn>
      ))}
    </div>
  );
}
