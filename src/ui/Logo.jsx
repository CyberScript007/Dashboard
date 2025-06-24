import { useToggleContext } from "../context/ToggleSidebarContext";
import LogoContent from "./LogoContent";
import LogoIcon from "./LogoIcon";

function Logo() {
  const { theme } = useToggleContext();

  return (
    <header
      className={`relative ${theme === "light" ? "bg-white" : "dark:bg-slate-800"} py-6 pl-7 transition`}
    >
      <LogoContent />
      <LogoIcon />
    </header>
  );
}

export default Logo;
