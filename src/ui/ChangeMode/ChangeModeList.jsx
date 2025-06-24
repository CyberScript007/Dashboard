import getItemClasses from "../../utils/getItemClasses";
import { useToggleContext } from "../../context/ToggleSidebarContext";

function ChangeModeList({ darkMode, closeList }) {
  const { theme, setTheme, themeIcon, setThemeIcon } = useToggleContext();

  return (
    <ul
      className={`absolute right-0 top-[135%] w-40 rounded-md py-2 ${theme === "dark" ? "dark:bg-slate-800" : "bg-white"} overflow-hidden`}
    >
      {darkMode.map((el) => {
        return (
          <li
            key={el.mode}
            className={`flex cursor-pointer gap-4 px-7 py-2 capitalize ${getItemClasses(theme, themeIcon, el.mode)} `}
            onClick={() => {
              setTheme(el.mode);
              setThemeIcon(el.mode);
              closeList();
            }}
          >
            {el.icon}
            <span>{el.mode}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default ChangeModeList;
