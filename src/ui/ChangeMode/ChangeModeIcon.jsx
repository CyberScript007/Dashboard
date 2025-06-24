import { useState } from "react";
import Tooltip from "../../Components/Tooltip";
import { useToggleContext } from "../../context/ToggleSidebarContext";

function ChangeModeIcon({ onClick, darkMode }) {
  const { theme, themeIcon } = useToggleContext();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <li
      className={`relative flex h-full w-10 cursor-pointer items-center justify-center ${theme === "light" ? "text-slate-800" : "dark:text-slate-200"}`}
      onClick={() => onClick()}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {darkMode.map((el, i) => (
        <span key={i}>{themeIcon === el.mode && el.icon} </span>
      ))}

      {showTooltip && (
        <span
          className={`absolute left-1/2 top-[-1.5rem] z-[500] w-28 translate-x-[-50%] rounded-sm px-3 py-1 text-center text-sm font-medium capitalize after:absolute after:bottom-[-.4rem] after:left-1/2 after:h-0 after:w-0 after:translate-x-[-50%] after:border-l-[6px] after:border-r-[6px] after:border-t-[6px] after:border-l-transparent after:border-r-transparent ${theme === "dark" ? "dark:bg-slate-200 dark:text-gray-800 dark:after:border-t-slate-200" : "bg-black text-white after:border-t-black"} `}
        >
          {themeIcon} mode
        </span>
      )}
    </li>
  );
}

export default ChangeModeIcon;
