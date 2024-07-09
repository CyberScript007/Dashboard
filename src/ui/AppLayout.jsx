import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function AppLayout() {
  return (
    <div className="grid grid-cols-[260px_1fr]">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default AppLayout;
