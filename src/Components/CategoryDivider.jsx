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
  const { toggle, onHover } = useToggleContext();
  return (
    <li className="flex items-center gap-4 py-4">
      <motion.span
        variants={anime}
        animate={!toggle || onHover ? "show" : "hide"}
        className="inline-block h-[1px] w-6 bg-gray-300"
      ></motion.span>

      {(!toggle || onHover) && (
        <span className="text-sm uppercase text-gray-400">{title}</span>
      )}
    </li>
  );
}

export default CategoryDivider;
