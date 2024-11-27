import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChevronRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const childVariant = {
  showList: {
    height: "fit-content",
  },
  hideList: {
    height: 0,
  },
};

function NestedDropDownMenu({ item, target = "self" }) {
  const [show, setShow] = useState(false);

  if (item.childrens) {
    return (
      <>
        <li
          className={`mx-3 mb-1 flex cursor-pointer items-center gap-5 rounded-md py-2 pl-6 pr-4 hover:bg-gray-100 ${show && "bg-slate-100"}`}
          onClick={() => setShow((s) => !s)}
        >
          <span className="inline-block h-[.4rem] w-[.4rem] -self-center rounded-full bg-gray-400"></span>
          <span className="grow text-[.9rem] capitalize">{item.name}</span>
          <HiOutlineChevronRight
            className={`${show ? "rotate-90" : "rotate-0"} duration-200`}
          />
        </li>
        <motion.ul
          variants={childVariant}
          animate={show ? "showList" : "hideList"}
          className="h-0 overflow-hidden"
        >
          {item.childrens.map((child) => {
            return (
              <NestedDropDownMenu
                item={child}
                key={child.name}
                target={target}
              />
            );
          })}
        </motion.ul>
      </>
    );
  } else {
    if (item.directChild) {
      return (
        <li
          key={item.name}
          className={`mx-3 mb-1 rounded-md hover:bg-gray-100`}
        >
          <NavLink
            to={`${item.path}`}
            className={`grid w-full grid-cols-[1rem_1fr] items-center gap-4 px-5 py-2`}
          >
            <span className="inline-block h-[.4rem] w-[.4rem] justify-self-center rounded-full bg-gray-400"></span>
            <small className="text-[.9rem] capitalize">{item.name}</small>
          </NavLink>
        </li>
      );
    } else {
      return (
        <li
          key={item.name}
          className={`mx-3 mb-1 rounded-md hover:bg-gray-100`}
        >
          {target === "blank" ? (
            <a
              href={item.path}
              className={`grid cursor-pointer grid-cols-[1rem_1fr] items-center gap-3 px-7 py-2`}
              target="_blank"
              rel="noopener noreferre "
            >
              <span className="inline-block h-[.4rem] w-[.4rem] justify-self-center rounded-full bg-gray-400"></span>
              <small className="text-sm capitalize">{item.name}</small>
            </a>
          ) : (
            <NavLink
              to={`${item.path}`}
              className={`grid grid-cols-[1rem_1fr] items-center gap-3 px-7 py-2`}
            >
              <span className="inline-block h-[.4rem] w-[.4rem] justify-self-center rounded-full bg-gray-400"></span>
              <small className="text-sm capitalize">{item.name}</small>
            </NavLink>
          )}
        </li>
      );
    }
  }
}

export default NestedDropDownMenu;
