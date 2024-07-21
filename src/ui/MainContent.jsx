import { Outlet } from "react-router-dom";
import { useToggleContext } from "../context/ToggleSidebarContext";

function MainContent() {
  const { onHover } = useToggleContext();
  return (
    <main
      className={`min-h-screen flex-1 bg-slate-100 px-8 py-4 transition-all`}
    >
      {<Outlet />}
    </main>
  );
}

export default MainContent;
