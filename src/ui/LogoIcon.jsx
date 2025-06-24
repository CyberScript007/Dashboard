import { HiChevronLeft } from "react-icons/hi";

import { useToggleContext } from "../context/ToggleSidebarContext";

function LogoIcon() {
  const { toggleSidebar, toggle, onHover, theme } = useToggleContext();

  return (
    (!toggle || onHover) && (
      <div
        className={`absolute -right-4 top-6 z-[3000] flex h-10 w-10 items-center justify-center rounded-full ${theme === "light" ? "bg-gray-100" : "dark:bg-gray-900"} transition`}
      >
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
