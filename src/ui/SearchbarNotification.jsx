import { FaRegBell } from "react-icons/fa";
import { useToggleContext } from "../context/ToggleSidebarContext";

function SearchbarNotification() {
  const { theme } = useToggleContext();

  return (
    <li className="relative z-10 flex w-10 cursor-pointer items-center justify-center">
      <FaRegBell
        size={23}
        className={`${theme === "light" ? "text-slate-800" : "dark:text-slate-300"}`}
      />
      <span className="absolute right-3 top-2.5 h-2 w-2 rounded-full border bg-red-400"></span>
    </li>
  );
}

export default SearchbarNotification;
