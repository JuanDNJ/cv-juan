import { useContext } from "react";
import { Ctx } from "./index";

export const useStore = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("Context not available");
  return ctx;
};
