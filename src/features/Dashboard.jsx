import { useState } from "react";
import { HiOutlineChevronRight, HiOutlineHome } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useToggleContext } from "../context/ToggleSidebarContext";

const dashboardList = [
  {
    path: "analytics",
    name: "Analytics",
  },
  {
    path: "crm",
    name: "CRM",
  },
  {
    path: "eCommerce",
    name: "eCommerce",
  },
  {
    path: "logistics",
    name: "Logistics",
  },
  {
    path: "academy",
    name: "Academy",
  },
];

const pathUrl = [
  "dashboard-analytics",
  "dashboard-crm",
  "dashboard-eCommerce",
  "dashboard-logistics",
  "dashboard-academy",
];

const dropdowAnimate = {
  showList: {
    height: "fit-content",
  },
  hideList: {
    height: 0,
  },
};

function Dashboard() {
  const [showList, setShowList] = useState(false);
  const { pathname } = useLocation();
  const pathWithOutSlash = pathname.replace("/", "");
  const { toggle, onHover } = useToggleContext();

  return (
    <>
      <li
        className={`nav_item ${pathUrl.includes(pathWithOutSlash) && "urlActive"}`}
        onClick={() => setShowList((show) => !show)}
      >
        <HiOutlineHome size={23} className="max-w-max" />
        {(!toggle || onHover) && (
          <>
            <span className="grow">dashboards</span>
            <HiOutlineChevronRight
              className={`${showList ? "rotate-90" : "rotate-0"} duration-200`}
            />
          </>
        )}
      </li>
      {(!toggle || onHover) && (
        <motion.ul
          variants={dropdowAnimate}
          animate={showList ? "showList" : "hideList"}
          className="nav_list"
        >
          {dashboardList.map((el) => {
            return (
              <li key={el.name} className="nested_nav_item">
                <NavLink
                  to={`/dashboard-${el.path}`}
                  className="nested_nav_link"
                >
                  <span className={`nested_nav_link_bullet`}></span>

                  <small className="nested_nav_link_name">{el.name}</small>
                </NavLink>
              </li>
            );
          })}
        </motion.ul>
      )}
    </>
  );
}

export default Dashboard;
