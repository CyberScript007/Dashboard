// react router dom
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// app layout
import AppLayout from "./ui/AppLayout";

// context api
import { ToggleSidebarContext } from "./context/ToggleSidebarContext";

// dashboard pages
import DashboardAnalytics from "./pages/Dashboard/DashboardAnalytics";
import DashboardLogistics from "./pages/Dashboard/DashboardLogistics";
import DashboardEcommerce from "./pages/Dashboard/DashboardEcommerce";
import DashboardCrm from "./pages/Dashboard/DashboardCrm";
import DashboardAcademy from "./pages/Dashboard/DashboardAcademy";

// layout pages
import CollapsedMenu from "./pages/Layouts/CollapsedMenu";
import ContentNavbar from "./pages/Layouts/ContentNavbar";
import ContentNavSidebar from "./pages/Layouts/ContentNavSidebar";
import Horizontal from "./pages/Layouts/Horizontal";
import WithoutMenu from "./pages/Layouts/WithoutMenu";
import WithoutNavbar from "./pages/Layouts/WithoutNavbar";
import Fluid from "./pages/Layouts/Fluid";
import Container from "./pages/Layouts/Container";
import Blank from "./pages/Layouts/Blank";

function App() {
  return (
    <ToggleSidebarContext>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            {/* Dashboard pages route*/}
            <Route index element={<Navigate to="dashboard-analytics" />} />
            <Route
              path="dashboard-analytics"
              element={<DashboardAnalytics />}
            />
            <Route path="dashboard-crm" element={<DashboardCrm />} />
            <Route
              path="dashboard-eCommerce"
              element={<DashboardEcommerce />}
            />
            <Route
              path="dashboard-logistics"
              element={<DashboardLogistics />}
            />
            <Route path="dashboard-academy" element={<DashboardAcademy />} />

            {/* Layout pages route */}
            <Route path="layout-collapsed-menu" element={<CollapsedMenu />} />
            <Route path="layout-content-navbar" element={<ContentNavbar />} />
            <Route
              path="layout-content-nav-sidebar"
              element={<ContentNavSidebar />}
            />
            <Route path="layout-horizontal" element={<Horizontal />} />
            <Route path="layout-without-menu" element={<WithoutMenu />} />
            <Route path="layout-without-navbar" element={<WithoutNavbar />} />
            <Route path="layout-fluid" element={<Fluid />} />
            <Route path="layout-container" element={<Container />} />
            <Route path="layout-blank" element={<Blank />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToggleSidebarContext>
  );
  // <ThemeProvider theme={theme}>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route element={AppLayout}></Route>
  //     </Routes>
  //   </BrowserRouter>
  // </ThemeProvider>
}

export default App;
