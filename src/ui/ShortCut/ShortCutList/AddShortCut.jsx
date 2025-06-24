import { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";

import { useToggleContext } from "../../../context/ToggleSidebarContext";
import Modal from "../../Modal";
import Tooltip from "../../../Components/Tooltip";

function AddShortCut({ closeList }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { theme } = useToggleContext();

  const handleMouseEnter = () => {
    if (!isFocused) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isFocused) {
      setShowTooltip(false);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowTooltip(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setShowTooltip(false);
  };

  return (
    <div className="flex justify-between rounded-t-md p-5">
      <h3
        className={`font-medium capitalize ${theme === "light" ? "text-slate-600" : "text-slate-300"}`}
      >
        shortcuts
      </h3>

      <Modal.Open name="shortcut modal" closeList={closeList}>
        <button
          className={`relative ${theme === "light" ? "text-slate-600" : "text-slate-300"}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <BiPlusCircle size={23} />
          {showTooltip && <Tooltip title="Add shortcut" />}
        </button>
      </Modal.Open>
    </div>
  );
}

export default AddShortCut;
