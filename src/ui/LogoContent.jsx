import { useToggleContext } from "../context/ToggleSidebarContext";

function LogoContent() {
  const { toggle, onHover, theme } = useToggleContext();
  return (
    <figure className={`flex items-center gap-2`}>
      <img src="/img/logo.png" className="w-5" alt="Application logo" />

      <figcaption
        className={`${!toggle || onHover ? "visible" : "invisible"} text-3xl font-semibold ${theme === "light" ? "text-gray-500" : "dark:text-gray-300"} transition`}
      >
        sneat
      </figcaption>
    </figure>
  );
}

export default LogoContent;
