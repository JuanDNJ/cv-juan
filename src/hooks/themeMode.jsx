import { useEffect, useState } from "react";

const THEME_KEY = "cv-theme";

export const useThemeMode = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";

    return window.localStorage.getItem(THEME_KEY) || "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};
