import { HiOutlineChevronRight } from "react-icons/hi";

import { useToggleContext } from "../context/ToggleSidebarContext";
import getDropDownClasses from "../utils/getDropDownClasses";

function ListDropDown({ listName, lists, icon, pathname }) {
  const { toggle, onHover, toggleList, showList, theme } = useToggleContext();

  return (
    <li
      className={`relative mx-3 flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 ${getDropDownClasses(theme, lists, pathname)}`}
      onClick={() => toggleList(listName)}
    >
      <span>{icon}</span>
      <span
        className={`grow ${listName === "eCommerce" ? "" : "capitalize"} ${!toggle || onHover ? "block" : "hidden"}`}
      >
        {listName}
      </span>
      <HiOutlineChevronRight
        className={`${showList === listName ? "rotate-90" : "rotate-0"} duration-200 ${!toggle || onHover ? "block" : "hidden"}`}
      />
    </li>
  );
}

export default ListDropDown;
