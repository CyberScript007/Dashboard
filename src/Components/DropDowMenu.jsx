import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { useToggleContext } from "../context/ToggleSidebarContext";
import { HiOutlineChevronRight } from "react-icons/hi";
import getDropDownClasses from "../utils/getDropDownClasses";

const dropdowAnimate = {
  showList: {
    height: "fit-content",
  },
  hideList: {
    height: 0,
  },
};

function DropDowMenu({ icon, itemContent, lists, target = "self" }) {
  const { toggle, onHover, toggleList, showList, theme } = useToggleContext();
  const { pathname } = useLocation();
  const isOpen = showList === itemContent;

  return (
    <>
      <li
        className={`relative mx-3 flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 capitalize duration-100 ${getDropDownClasses(theme, lists, pathname)} `}
        onClick={() => toggleList(itemContent)}
      >
        <span>{icon}</span>

        <>
          <span
            className={`grow text-[1rem] ${!toggle || onHover ? "block" : "hidden"}`}
          >
            {itemContent.length > 14
              ? `${itemContent.slice(0, 14)}...`
              : `${itemContent}`}
          </span>
          <HiOutlineChevronRight
            className={`${isOpen ? "rotate-90" : "rotate-0"} duration-200 ${!toggle || onHover ? "block" : "hidden"}`}
          />
        </>
      </li>

      <motion.ul
        className={`h-0 overflow-hidden ${!toggle || onHover ? "block" : "hidden"}`}
        variants={dropdowAnimate}
        animate={isOpen ? "showList" : "hideList"}
      >
        {lists.map((list) => {
          return (
            <li
              key={list.name}
              className={`mx-4 rounded-md capitalize transition-all duration-300 ${theme === "light" ? "text-slate-800 hover:bg-slate-100" : "dark:text-slate-300 dark:hover:bg-gray-700"}`}
            >
              {target === "blank" ? (
                <a
                  href={list.path}
                  className={`grid cursor-pointer grid-cols-[1rem_1fr] items-center gap-3 px-7 py-2`}
                  target="_blank"
                  rel="noopener noreferre "
                >
                  <span className="inline-block h-[.4rem] w-[.4rem] justify-self-center rounded-full bg-gray-400"></span>
                  <small className="text-sm capitalize">{list.name}</small>
                </a>
              ) : (
                <NavLink
                  to={`${list.path}`}
                  className={`grid w-full grid-cols-[1rem_1fr] items-center gap-4 px-5 py-2 ${theme === "light" ? "islight" : "isDark"}`}
                >
                  <span
                    className={`inline-block h-[.4rem] w-[.4rem] justify-self-center rounded-full bg-gray-400`}
                  ></span>

                  <small className="text-[.9rem]">{list.name}</small>
                </NavLink>
              )}
            </li>
          );
        })}
      </motion.ul>
    </>
  );
}

export default DropDowMenu;
