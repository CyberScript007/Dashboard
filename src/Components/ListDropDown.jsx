import { HiOutlineChevronRight } from "react-icons/hi";
import { useToggleContext } from "../context/ToggleSidebarContext";

function ListDropDown({ setShow, show, listName, lists, icon, pathname }) {
  const { toggle, onHover } = useToggleContext();

  return (
    <li
      className={`relative mx-3 flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 hover:bg-slate-100 ${lists?.map((list) => list.path).includes(pathname) && "urlActive"}`}
      onClick={() => setShow((s) => !s)}
    >
      {icon}

      {(!toggle || onHover) && (
        <>
          <span className="grow">{listName}</span>
          <HiOutlineChevronRight
            className={`${show ? "rotate-90" : "rotate-0"} duration-200`}
          />
        </>
      )}
    </li>
  );
}

export default ListDropDown;
