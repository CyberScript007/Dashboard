import { NavLink, useLocation } from "react-router-dom";

import { useToggleContext } from "../context/ToggleSidebarContext";

function ListLinkMenu({ icon, pathUrl, linkName, target = "self" }) {
  const { toggle, onHover, toggleList, theme } = useToggleContext();
  const { pathname } = useLocation();

  const getLinkMenuClasses = () => {
    const isActive = pathUrl === pathname;

    if (theme === "dark") {
      return isActive
        ? "rounded-md dark:bg-blue-600 dark:text-slate-100 after:absolute after:right-[-.7rem] after:h-full after:w-1 after:rounded-l-lg after:bg-blue-500"
        : "dark:hover:bg-gray-700 text-slate-300";
    }

    return isActive
      ? "rounded-md bg-blue-100 text-blue-500 after:absolute after:right-[-.7rem] after:h-full after:w-1 after:rounded-l-lg after:bg-blue-500"
      : "hover:bg-slate-100 text-slate-800 ";
  };

  return (
    <li
      className={`${getLinkMenuClasses()} relative mx-3 flex rounded-md`}
      onClick={() => toggleList(linkName)}
    >
      {target === "blank" ? (
        <a
          href={pathUrl}
          className={`flex grow items-center gap-3 px-4 py-2`}
          target="_blank"
        >
          {icon}
          {(!toggle || onHover) && (
            <small className={`text-base capitalize`}>{linkName}</small>
          )}
        </a>
      ) : (
        <NavLink
          to={pathUrl}
          className={`flex grow items-center gap-3 px-4 py-2`}
        >
          <span>{icon}</span>
          <small
            className={`text-base capitalize ${!toggle || onHover ? "block" : "hidden"}`}
          >
            {linkName}
          </small>
        </NavLink>
      )}
    </li>
  );
}

export default ListLinkMenu;
