import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { useToggleContext } from "../context/ToggleSidebarContext";
import { HiOutlineChevronRight } from "react-icons/hi";

const dropdowAnimate = {
  showList: {
    height: "fit-content",
  },
  hideList: {
    height: 0,
  },
};

function DropDowMenu({ icon, itemContent, lists, target = "self" }) {
  const [showList, setShowList] = useState(false);
  const { toggle, onHover } = useToggleContext();
  const { pathname } = useLocation();

  return (
    <>
      <li
        className={`relative mx-3 flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 capitalize duration-100 hover:bg-gray-100 ${lists.map((el) => el.path).includes(pathname) && "urlActive"}`}
        onClick={() => setShowList((s) => !s)}
      >
        {icon}
        {(!toggle || onHover) && (
          <>
            <span className="grow">
              {itemContent.length > 14
                ? `${itemContent.slice(0, 14)}...`
                : `${itemContent}`}
            </span>
            <HiOutlineChevronRight
              className={`${showList ? "rotate-90" : "rotate-0"} duration-200`}
            />
          </>
        )}
      </li>
      {(!toggle || onHover) && (
        <motion.ul
          className="h-0 overflow-hidden"
          variants={dropdowAnimate}
          animate={showList ? "showList" : "hideList"}
        >
          {lists.map((list) => {
            return (
              <li
                key={list.name}
                className="mx-3 rounded-md capitalize transition-all duration-100 hover:bg-slate-100"
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
                    className={`grid w-full grid-cols-[1rem_1fr] items-center gap-4 px-5 py-2`}
                    target={target === "blank" ? "_blank" : "_self"}
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
      )}
    </>
  );
}

export default DropDowMenu;
