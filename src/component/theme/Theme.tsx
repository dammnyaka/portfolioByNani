import { useState, useEffect, createContext, PropsWithChildren, FC } from "react";

export const ThemeContext = createContext<any>("");

const Theme: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "dark");

  const themetoggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, themetoggle }}>{children}</ThemeContext.Provider>;
};

export default Theme;
