import { createContext, useContext, useState } from "react";

import { FaFileInvoice, FaRegCalendarAlt } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { GoShieldCheck } from "react-icons/go";
import { LiaChartPieSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";

const pageList = [
  {
    listName: "calender",
    title: "calender",
    content: "appointments",
    path: "/calender",
    icon: <FaRegCalendarAlt size={23} />,
  },
  {
    listName: "invoice",
    title: "invoice app",
    content: "manage accounts",
    path: "/invoice-list",
    icon: <FaFileInvoice size={23} />,
  },
  {
    listName: "users",
    title: "user app",
    content: "manage users",
    path: "/users-list",
    icon: <BiUser size={23} />,
  },
  {
    listName: "roles and permission",
    title: "role management",
    content: "permission",
    path: "/rolesList-roles",
    icon: <GoShieldCheck size={23} />,
  },
  {
    listName: "dashboards",
    title: "dashboard",
    content: "user dashboard",
    path: "/dashboard-analytics",
    icon: <LiaChartPieSolid size={23} />,
  },
  {
    listName: "pages",
    title: "setting",
    content: "account settings",
    path: "/pages-account-settings-account",
    icon: <IoSettingsOutline size={23} />,
  },
];

const ShortcutListContext = createContext();

function ShortcutContext({ children }) {
  const [shortcutList, setShortcutList] = useState(pageList);

  return (
    <ShortcutListContext.Provider value={{ shortcutList, setShortcutList }}>
      {children}
    </ShortcutListContext.Provider>
  );
}

function useShortcutList() {
  const context = useContext(ShortcutListContext);

  if (context === undefined)
    console.error("You are using the context out of the provider");

  return context;
}

export { ShortcutContext, useShortcutList };
