import useLocalStorage from "../../hooks/useLocalStorage";
import getItemClasses from "../../utils/getItemClasses";
import { useToggleContext } from "../../context/ToggleSidebarContext";
import { useState } from "react";

const lang = ["English", "French", "Arabic", "Germany"];

function LanguageList({ closeList }) {
  const [userLang, setUserLang] = useLocalStorage("language", "English");
  const [isProcessing, setIsProcessing] = useState(false);
  const { theme } = useToggleContext();

  const handleClick = (lang) => {
    // if (userLang === lang) return;

    setIsProcessing(true);
    setUserLang(lang);

    setTimeout(() => {
      setIsProcessing(false);
      closeList();
    }, 0);
  };

  return (
    <ul
      className={`absolute right-0 top-[135%] w-44 rounded-md ${theme === "light" ? "bg-white" : "dark:bg-slate-800"} py-2`}
    >
      {lang.map((el, i) => {
        return (
          <li
            key={i}
            className={`cursor-pointer px-5 py-2 ${getItemClasses(theme, userLang, el)}`}
            onClick={() => {
              !isProcessing && handleClick(el);
            }}
          >
            {el}
          </li>
        );
      })}
    </ul>
  );
}

export default LanguageList;
