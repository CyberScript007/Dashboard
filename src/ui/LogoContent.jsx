import { useToggleContext } from "../context/ToggleSidebarContext";

function LogoContent() {
  const { toggle, onHover } = useToggleContext();
  return (
    <figure className={`flex items-center gap-2`}>
      <img src="/img/logo.png" className="w-5" alt="Application logo" />

      <figcaption
        className={`${!toggle || onHover ? "visible" : "invisible"} text-3xl font-semibold text-gray-500 transition-all`}
      >
        sneat
      </figcaption>
    </figure>
  );
}

export default LogoContent;
