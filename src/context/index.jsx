import { createContext } from "react";
import { useCurrentLanguage } from "../hooks/currentLanguage";

export const Ctx = createContext();

const IndexContext = ({ children }) => {
  const value = {
    ...useCurrentLanguage(),
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export default IndexContext;
