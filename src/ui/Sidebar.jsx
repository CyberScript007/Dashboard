import { motion } from "framer-motion";

import { useToggleContext } from "../context/ToggleSidebarContext";
import Logo from "./Logo";
import SidebarContent from "./SidebarContent";

function Sidebar() {
  const { toggle, openSidebar, closeSidebar, onHover, theme } =
    useToggleContext();

  const sidebarAnimate = {
    open: {
      width: "16.5rem",
    },
    closed: {
      width: "5rem",
    },
  };

  return (
    <motion.aside
      className={`${onHover ? "fixed inset-x-0 inset-y-0 z-[2000]" : "relative"} h-[100vh] w-[16.5rem] ${theme === "light" ? "bg-white" : "dark:bg-slate-800"} transition max-[1200px]:hidden`}
      onMouseEnter={openSidebar}
      onMouseLeave={closeSidebar}
      variants={sidebarAnimate}
      animate={!toggle || onHover ? "open" : "closed"}
    >
      <Logo />
      <SidebarContent />
    </motion.aside>
  );
}

export default Sidebar;
