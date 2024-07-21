import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

function ToggleSidebarContext({ children }) {
  const [toggle, setToggle] = useState(false);
  const [onHover, setOnHover] = useState(false);

  const openSidebar = () => {
    if (toggle) {
      setOnHover(true);
      // console.log(onHover);
    }
  };
  const closeSidebar = () => {
    setOnHover(false);
  };

  const toggleSidebar = () => setToggle((tog) => !tog);

  return (
    <ToggleContext.Provider
      value={{ toggle, toggleSidebar, openSidebar, closeSidebar, onHover }}
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
