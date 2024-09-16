import { createContext, useState } from "react";
import { lsHelper } from "../../helpers/localStorageHelper";

export type Theme = "light" | "dark";

type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};

const defaultValue: ThemeContext = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultValue);

type Props = {
  children: React.ReactNode;
};

function switchTheme(theme: Theme) {
  return theme === "dark" ? "light" : "dark";
}

const LOCAL_STORAGE_THEME_KEY = "theme";

export function ThemeProvider({ children }: Props) {
  const lsTheme = lsHelper.getLocalStorageItem({
    key: LOCAL_STORAGE_THEME_KEY,
  });
  const [theme, setTheme] = useState<Theme>(lsTheme || "light");

  const toggleTheme = () => {
    lsHelper.setLocalStorageItem({
      key: LOCAL_STORAGE_THEME_KEY,
      value: switchTheme(theme),
    });
    setTheme(switchTheme);
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
