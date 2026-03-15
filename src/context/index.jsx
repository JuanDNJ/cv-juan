import { createContext } from "react";
import { useCurrentLanguage } from "../hooks/currentLanguage";
import { useThemeMode } from "../hooks/themeMode";

export const Ctx = createContext();

const IndexContext = ({ children }) => {
  const value = {
    ...useCurrentLanguage(),
    ...useThemeMode(),
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export default IndexContext;
