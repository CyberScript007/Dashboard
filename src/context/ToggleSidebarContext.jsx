import { createContext, useContext, useState } from "react";
import useLocalStorage from "./../hooks/useLocalStorage";
import useChangeMode from "../hooks/useChangeMode";

const ToggleContext = createContext();

function ToggleSidebarContext({ children }) {
  const [toggle, setToggle] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const [showList, setShowList] = useLocalStorage("showList", null);
  const [theme, setTheme, themeIcon, setThemeIcon] = useChangeMode();

  const toggleList = (componentName) => {
    return setShowList(() =>
      showList === componentName ? null : componentName,
    );
  };

  const openSidebar = () => {
    if (toggle) {
      setOnHover(true);
    }
  };
  const closeSidebar = () => {
    setOnHover(false);
  };

  const toggleSidebar = () => setToggle((tog) => !tog);

  return (
    <ToggleContext.Provider
      value={{
        toggle,
        toggleSidebar,
        openSidebar,
        closeSidebar,
        onHover,
        showList,
        toggleList,
        theme,
        setTheme,
        themeIcon,
        setThemeIcon,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
}

function useToggleContext() {
  const context = useContext(ToggleContext);

  if (context === undefined)
    throw new Error("You are using the context out of the provider");

  return context;
}

export { ToggleSidebarContext, useToggleContext };
