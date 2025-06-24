import { IoGridOutline } from "react-icons/io5";
import { useToggleContext } from "../context/ToggleSidebarContext";
import ShortCut from "./ShortCut";

function PageShortCut({ isOpen, toggle, close }) {
  const { theme } = useToggleContext();

  return (
    <>
      <li
        className="relative flex w-10 cursor-pointer items-center justify-center"
        onClick={() => toggle()}
      >
        <IoGridOutline
          size={23}
          className={`${theme === "light" ? "text-slate-800" : "dark:text-slate-300"}`}
        />

        {isOpen && <ShortCut />}
      </li>
    </>
  );
}

export default PageShortCut;
