import { AiOutlineLayout } from "react-icons/ai";
import { HiOutlineChevronRight } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToggleContext } from "../context/ToggleSidebarContext";

const layoutList = [
  {
    path: "collapsed-menu",
    urlname: "Collapsed menu",
  },
  {
    path: "content-navbar",
    urlname: "Content navbar",
  },
  {
    path: "content-nav-sidebar",
    urlname: "Content nav + sidebar",
  },
  {
    path: "horizontal",
    urlname: "Horizontal",
  },
  {
    path: "without-menu",
    urlname: "Without menu",
  },
  {
    path: "without-navbar",
    urlname: "Without navbar",
  },
  {
    path: "fluid",
    urlname: "Fluid",
  },
  {
    path: "container",
    urlname: "Container",
  },
  {
    path: "blank",
    urlname: "Blank",
  },
];

const pathUrl = [
  "layout-content-navbar",
  "layout-collapsed-menu",
  "layout-content-nav-sidebar",
  "layout-horizontal",
  "layout-without-menu",
  "layout-without-navbar",
  "layout-fluid",
  "layout-container",
  "layout-blank",
];

const dropDowm = {
  show: {
    height: "fit-content",
  },
  hide: {
    height: 0,
  },
};

function Layouts() {
  const [showList, setShowList] = useState(false);
  const { pathname } = useLocation();
  const pathWithOutSlash = pathname.replace("/", "");
  const { toggle, onHover } = useToggleContext();

  return (
    <>
      <li
        className={`nav_item ${pathUrl.includes(pathWithOutSlash) && "urlActive"}`}
        onClick={() => setShowList((s) => !s)}
      >
        <AiOutlineLayout size={23} />
        {(!toggle || onHover) && (
          <>
            <span className="grow">Layouts</span>
            <HiOutlineChevronRight />
          </>
        )}
      </li>
      {(!toggle || onHover) && (
        <motion.ul
          variants={dropDowm}
          animate={showList ? "show" : "hide"}
          className="nav_list"
        >
          {layoutList.map((el) => {
            return (
              <li key={el.urlname} className="nested_nav_item">
                <NavLink to={`layout-${el.path}`} className={`nested_nav_link`}>
                  <span className="nested_nav_link_bullet"></span>
                  <small className="nested_nav_link_name">{el.urlname}</small>
                </NavLink>
              </li>
            );
          })}
        </motion.ul>
      )}
    </>
  );
}

export default Layouts;
