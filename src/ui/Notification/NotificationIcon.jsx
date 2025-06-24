import { FaRegBell } from "react-icons/fa";
import { useToggleContext } from "../../context/ToggleSidebarContext";

function NotificationIcon({ onClick }) {
  const { theme } = useToggleContext();
  return (
    <li
      className="relative flex h-full w-10 cursor-pointer items-center justify-center"
      onClick={() => onClick()}
    >
      <span
        className={`${theme === "light" ? "text-slate-700 before:border-slate-100" : "dark:text-slate-300 dark:before:border-black"} relative before:absolute before:right-0 before:top-0 before:h-[0.6rem] before:w-[0.6rem] before:rounded-full before:border-2 before:bg-red-500`}
      >
        <FaRegBell size={23} />
      </span>
    </li>
  );
}

export default NotificationIcon;
