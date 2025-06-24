import { Outlet } from "react-router-dom";
import SearchbarContainer from "./Searchbar UI/SearchbarContainer";
import { useToggleContext } from "../context/ToggleSidebarContext";

function MainContent() {
  const { theme } = useToggleContext();

  return (
    <main
      className={`relative min-h-screen flex-1 overflow-auto ${theme === "light" ? "bg-slate-100" : "dark:bg-slate-900"} px-5 pb-4 transition scrollbar scrollbar-track-slate-200 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-800 dark:scrollbar-thumb-slate-500`}
    >
      <SearchbarContainer />
      {<Outlet />}
    </main>
  );
}

export default MainContent;
