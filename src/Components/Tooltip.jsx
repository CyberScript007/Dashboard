import { useToggleContext } from "../context/ToggleSidebarContext";

function Tooltip({ title }) {
  const { theme } = useToggleContext();
  return (
    <span
      className={`absolute left-1/2 top-[-2.5rem] z-[500] w-32 translate-x-[-50%] rounded-sm px-3 py-1 text-center text-sm font-medium after:absolute after:bottom-[-.4rem] after:left-1/2 after:h-0 after:w-0 after:translate-x-[-50%] after:border-l-[6px] after:border-r-[6px] after:border-t-[6px] after:border-l-transparent after:border-r-transparent ${theme === "dark" ? "dark:bg-slate-200 dark:text-gray-700 dark:after:border-t-slate-200" : "bg-black text-white after:border-t-black"} `}
    >
      {title}
    </span>
  );
}

export default Tooltip;
