import { cloneElement, createContext, useContext, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

const MenusContext = createContext();

function Menus({ children }) {
  const [activeMenu, setActiveMenu] = useState("");
  const close = () => setActiveMenu("");
  const toggle = (listName) =>
    setActiveMenu((prevName) => (prevName === listName ? null : listName));

  return (
    <MenusContext.Provider value={{ activeMenu, close, toggle }}>
      <ul className="flex">{children}</ul>
    </MenusContext.Provider>
  );
}

function ToggleBtn({ children, listName }) {
  const { toggle } = useContext(MenusContext);

  return cloneElement(children, { onClick: () => toggle(listName) });
}

function MenuList({ children, listName }) {
  const { activeMenu, close } = useContext(MenusContext);

  if (activeMenu !== listName) return null;

  return cloneElement(children, { closeList: close });
}

function MenuContainer({ children }) {
  const { close } = useContext(MenusContext);
  const ref = useClickOutside(close);

  return (
    <li className="flex" ref={ref}>
      {children}
    </li>
  );
}

function Menu({ children }) {
  return (
    <ul className="relative">
      <ul className="h-full">{children}</ul>
    </ul>
  );
}

Menus.ToggleBtn = ToggleBtn;
Menus.MenuList = MenuList;
Menus.MenuContainer = MenuContainer;
Menus.Menu = Menu;

export default Menus;
