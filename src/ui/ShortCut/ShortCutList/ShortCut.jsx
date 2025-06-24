import { useToggleContext } from "../../../context/ToggleSidebarContext";
import Modal from "../../Modal";
import AddShortCut from "./AddShortCut";
import ShortCutList from "./ShortCutList";

function ShortCut({ closeList }) {
  const { theme } = useToggleContext();
  return (
    <div
      className={`absolute right-0 top-[135%] ${theme === "light" ? "bg-white" : "dark:bg-slate-800"} w-96 rounded-md`}
    >
      <AddShortCut closeList={closeList} />
      <ShortCutList closeList={closeList} />
    </div>
  );
}

export default ShortCut;
