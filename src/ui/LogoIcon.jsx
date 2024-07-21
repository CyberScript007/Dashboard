import { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";

import { useToggleContext } from "../context/ToggleSidebarContext";

function LogoIcon() {
  const { toggleSidebar, toggle, onHover } = useToggleContext();

  return (
    (!toggle || onHover) && (
      <div className="absolute -right-4 top-6 z-[1000] flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
        <div className="flex h-[1.4rem] w-[1.4rem] cursor-pointer items-center justify-center rounded-full bg-blue-500">
          <HiChevronLeft
            className={`${toggle ? "rotate-180" : ""} rotate text-4xl text-gray-50 transition-all duration-500`}
            onClick={toggleSidebar}
          />
        </div>
      </div>
    )
  );
}

export default LogoIcon;
