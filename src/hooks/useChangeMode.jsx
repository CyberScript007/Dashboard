import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useChangeMode() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [themeIcon, setThemeIcon] = useLocalStorage("themeIcon", "light");

  useEffect(() => {
    const root = document.documentElement;

    const darkFunc = () => {
      root.classList.remove("light");
      root.classList.add("dark");
    };

    const lightFunc = () => {
      root.classList.remove("dark");
      root.classList.add("light");
    };

    if (theme === "dark") {
      darkFunc();
    }

    if (theme === "light") {
      lightFunc();
    }

    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (isDark) {
        darkFunc();
        setTheme("dark");
      } else {
        lightFunc();
        setTheme("light");
      }
    }
  }, [theme, setTheme]);

  return [theme, setTheme, themeIcon, setThemeIcon];
}

export default useChangeMode;
