import { useToggleContext } from "../context/ToggleSidebarContext";

function FormRow({ children, label, error }) {
  const { theme } = useToggleContext();
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={children.props.id}
          className={`${theme === "light" ? "text-slate-500" : "dark:text-slate-300"} text-sm font-medium capitalize`}
        >
          {label}
        </label>
      )}
      {children}
      {error && (
        <span
          className={`${theme === "light" ? "text-red-500" : "dark:text-red-400"}`}
        >
          {error}
        </span>
      )}
    </div>
  );
}

export default FormRow;
