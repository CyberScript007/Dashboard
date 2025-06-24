import { useToggleContext } from "../context/ToggleSidebarContext";

function ListIcon({ icon, onClick }) {
  const { theme } = useToggleContext();

  return (
    <li
      className="flex h-full w-10 cursor-pointer items-center justify-center"
      role="button"
      onClick={() => onClick()}
    >
      <span
        className={`${theme === "light" ? "text-slate-800" : "dark:text-slate-300"}`}
      >
        {icon}
      </span>
    </li>
  );
}

export default ListIcon;
