import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useToggleContext } from "../../context/ToggleSidebarContext";

function SearchbarInputField() {
  const [showInput, setShowInput] = useState(false);
  const { theme } = useToggleContext();
  const inputEl = useRef(null);

  useEffect(
    function () {
      showInput && inputEl.current.focus();
    },
    [showInput],
  );

  return (
    <>
      <div
        className="flex h-full w-40 cursor-pointer items-center gap-4"
        onClick={() => {
          setShowInput(true);
        }}
      >
        <FiSearch
          size={23}
          className={`${theme === "light" ? "text-slate-800" : "dark:text-slate-300"}`}
        />
        <span
          className={`text-lg font-medium ${theme === "light" ? "text-gray-300" : "dark:text-slate-400"}`}
        >
          Search (Ctrl+/)
        </span>
      </div>
      {showInput && (
        <>
          <input
            type="text"
            placeholder="Search..."
            className={`absolute left-0 top-0 z-20 h-full w-full whitespace-pre rounded-md border-0 ${theme === "light" ? "bg-white text-slate-800" : "text-slate-100 dark:bg-slate-800"} px-5 outline-0 placeholder:indent-[5px]`}
            ref={inputEl}
            onBlur={() => setShowInput(false)}
          />
          <button
            className={`absolute right-3 top-1/2 z-20 flex translate-y-[-50%] items-center justify-center overflow-hidden text-3xl leading-4 ${theme === "light" ? "text-slate-800" : "dark:text-slate-300"}`}
            onClick={() => setShowInput(false)}
          >
            &times;
          </button>
        </>
      )}
    </>
  );
}

export default SearchbarInputField;
