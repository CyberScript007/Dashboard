import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function AppLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default AppLayout;
