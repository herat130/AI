import { createContext, useState } from "react";

type Theme = "light" | "dark";

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

function updateToggle(theme: Theme) {
  return theme === "dark" ? "light" : "dark";
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => setTheme(updateToggle);

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
