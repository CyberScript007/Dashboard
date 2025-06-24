import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function AppLayout() {
  return (
    <div className="flex max-h-screen overflow-hidden">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default AppLayout;
