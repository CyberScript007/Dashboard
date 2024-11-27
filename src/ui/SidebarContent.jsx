import Dashboard from "../features/Dashboard";
import FrontPages from "../features/FrontPages";
import Layouts from "../features/Layouts";
import AppPagesCategory from "./AppPagesCategory";
import ComponentsCategory from "./ComponentsCategory";
import FormsAndTablesCategory from "./FormsAndTablesCategory";
import ChartCategory from "./ChartCategory";
import MiscCategory from "./MiscCategory";
import Navbar from "./Navbar";
import SidebarFooter from "./SidebarFooter";

function SidebarContent() {
  return (
    <section className="h-[calc(100vh-84px)] overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
      <Navbar>
        <Dashboard />
        <Layouts />
        <FrontPages />
        <AppPagesCategory />
        <ComponentsCategory />
        <FormsAndTablesCategory />
        <ChartCategory />
        <MiscCategory />
        <SidebarFooter />
      </Navbar>
    </section>
  );
}

export default SidebarContent;
