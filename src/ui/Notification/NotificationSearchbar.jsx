import { useToggleContext } from "../../context/ToggleSidebarContext";
import NotificationList from "./NotificationList";
import NotificationTitle from "./NotificationTitle";

function NotificationSearchbar() {
  const { theme } = useToggleContext();

  return (
    <div
      className={`absolute right-0 top-[135%] w-[22rem] ${theme === "light" ? "bg-white" : "dark:bg-slate-800"} rounded-md`}
    >
      <NotificationTitle />
      <NotificationList />
    </div>
  );
}

export default NotificationSearchbar;
