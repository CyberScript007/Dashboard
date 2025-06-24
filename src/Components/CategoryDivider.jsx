import { motion } from "framer-motion";
import { useToggleContext } from "../context/ToggleSidebarContext";

const anime = {
  show: {
    x: 0,
  },
  hide: {
    x: 25,
  },
};

function CategoryDivider({ title }) {
  const { toggle, onHover, theme } = useToggleContext();
  return (
    <li className="flex items-center gap-4 py-4">
      <motion.span
        variants={anime}
        animate={!toggle || onHover ? "show" : "hide"}
        className={`inline-block h-[1px] w-6 ${theme === "light" ? "bg-gray-300" : "dark:bg-slate-500"}`}
      ></motion.span>

      <span
        className={`text-sm uppercase ${theme === "light" ? "text-gray-400" : "dark:text-slate-500"} ${!toggle || onHover ? "block" : "hidden"}`}
      >
        {title}
      </span>
    </li>
  );
}

export default CategoryDivider;
