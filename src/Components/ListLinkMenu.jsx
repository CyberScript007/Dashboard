import { NavLink, useLocation } from "react-router-dom";

import { useToggleContext } from "../context/ToggleSidebarContext";

function ListLinkMenu({ icon, pathUrl, linkName, target = "self" }) {
  const { toggle, onHover } = useToggleContext();
  const { pathname } = useLocation();
  return (
    <li
      className={`${pathUrl === pathname && "urlActive"} relative mx-3 flex rounded-md hover:bg-slate-100`}
    >
      {target === "blank" ? (
        <a
          href={pathUrl}
          className="flex grow items-center gap-3 px-4 py-2"
          target="_blank"
        >
          {icon}
          {(!toggle || onHover) && (
            <small className="text-base capitalize">{linkName}</small>
          )}
        </a>
      ) : (
        <NavLink
          to={pathUrl}
          className="flex grow items-center gap-3 px-4 py-2"
        >
          {icon}
          {(!toggle || onHover) && (
            <small className="text-base capitalize">{linkName}</small>
          )}
        </NavLink>
      )}
    </li>
  );
}

export default ListLinkMenu;
