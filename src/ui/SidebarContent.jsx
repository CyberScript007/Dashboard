import { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";

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
import { useToggleContext } from "../context/ToggleSidebarContext";

function SidebarContent() {
  const [hoverContainer, setHoverContainer] = useState(false);
  const { theme } = useToggleContext();

  const renderThumbVertical = ({ style, ...props }) => {
    const thumbWidth = hoverContainer ? "5px" : "0px";
    return (
      <div
        {...props}
        className={`rounded-lg ${theme === "light" ? "bg-gray-300" : "bg-gray-500"} `}
        style={{
          ...style,
          height: "10px",
          width: thumbWidth,
          right: "3px",
        }}
      ></div>
    );
  };

  return (
    <section
      className="h-[calc(100vh-84px)]"
      onMouseEnter={() => setHoverContainer(true)}
      onMouseLeave={() => setHoverContainer(false)}
    >
      <Scrollbars renderThumbVertical={renderThumbVertical} autoHide={false}>
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
      </Scrollbars>
    </section>
  );
}

export default SidebarContent;
