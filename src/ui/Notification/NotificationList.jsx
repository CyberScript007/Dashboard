import { useToggleContext } from "../../context/ToggleSidebarContext";

function NotificationList() {
  const { theme } = useToggleContext();
  return <div className={``}>Notifications</div>;
}

export default NotificationList;
