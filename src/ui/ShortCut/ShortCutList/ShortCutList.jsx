import { Link } from "react-router-dom";

import { useToggleContext } from "../../../context/ToggleSidebarContext";
import { useShortcutList } from "../../../context/ShortcutContext";

function ShortCutList({ closeList }) {
  const { toggleList, theme } = useToggleContext();
  const { shortcutList } = useShortcutList();

  return (
    <ul
      className={`relative grid max-h-[27rem] auto-rows-min grid-cols-[1fr_1fr] overflow-hidden overflow-y-auto border-t-[2px] ${theme === "light" ? "border-t-slate-200" : "dark:border-t-slate-500"} *:relative *:before:absolute *:before:left-[-0.1rem] *:before:top-0 *:before:h-full *:before:w-[2px] ${theme === "light" ? "*:before:bg-slate-200" : "*:before:dark:bg-slate-500"} *:after:absolute *:after:left-0 *:after:top-[-0.1rem] *:after:z-[1] *:after:h-[2px] *:after:w-[100vh] ${theme === "light" ? "*:after:bg-slate-200" : "*:after:dark:bg-slate-500"} `}
    >
      {shortcutList.map((el, i) => {
        return (
          <li
            key={i}
            className={`${theme === "light" ? "hover:bg-slate-50" : "dark:hover:bg-slate-700"} `}
          >
            <Link
              to={el.path}
              className={
                "flex flex-col items-center justify-center py-5 text-center"
              }
              onClick={() => {
                toggleList(el.listName);
                closeList();
              }}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center ${theme === "light" ? "bg-slate-100 text-slate-600" : "dark:bg-slate-600 dark:text-slate-300"} rounded-full`}
              >
                {el.icon}
              </div>
              <h3
                className={`${theme === "light" ? "text-slate-600" : "dark:text-slate-300"} font-medium capitalize`}
              >
                {el.title}
              </h3>
              <small
                className={`text-xs capitalize ${theme === "light" ? "text-slate-700" : "dark:text-slate-400"}`}
              >
                {el.content}
              </small>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ShortCutList;
