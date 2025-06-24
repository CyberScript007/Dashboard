import { useState } from "react";
import { BiEnvelopeOpen } from "react-icons/bi";

import { useToggleContext } from "../../context/ToggleSidebarContext";
import Tooltip from "../../Components/Tooltip";

function NotificationTitle() {
  const { theme } = useToggleContext();
  const [showTooltip, setShowToolTip] = useState(false);

  return (
    <div
      className={`border-b-[1px] ${theme === "light" ? "border-b-slate-200" : "dark:border-b-slate-600"} flex items-center justify-between px-5 py-4`}
    >
      <h3
        className={`${theme === "light" ? "text-slate-600" : "dark:text-slate-300"} capitalize`}
      >
        notification
      </h3>

      <div className="flex items-center gap-3">
        <span
          className={`inline-block ${theme === "light" ? "bg-blue-100 text-blue-600" : "text-blue-500 dark:bg-blue-900/100"} rounded-md px-3 py-1 text-sm`}
        >
          8 new
        </span>

        <span
          onMouseEnter={() => setShowToolTip(true)}
          onMouseLeave={() => setShowToolTip(false)}
          className={`relative cursor-pointer ${theme === "light" ? "text-slate-700" : "text-slate-300"}`}
        >
          <BiEnvelopeOpen size={23} />
          {showTooltip && <Tooltip title="mark all as read" />}
        </span>
      </div>
    </div>
  );
}

export default NotificationTitle;
