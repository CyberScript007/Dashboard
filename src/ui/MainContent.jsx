import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <main
      className={`min-h-screen flex-1 bg-slate-100 px-8 py-4 transition-all`}
    >
      {<Outlet />}
    </main>
  );
}

export default MainContent;
