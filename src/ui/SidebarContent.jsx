import Dashboard from "../features/Dashboard";
import Layouts from "../features/Layouts";
import Navbar from "./Navbar";

function SidebarContent() {
  return (
    <section className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-200 scrollbar-track-white h-[calc(100vh-84px)] overflow-x-hidden pb-8">
      <Navbar>
        <Dashboard />
        <Layouts />
      </Navbar>
    </section>
  );
}

export default SidebarContent;
