import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { LuMonitor } from "react-icons/lu";

import SearchbarInputField from "./SearchbarInputField";
import LanguageChangeIcon from "../LanguageChange/LanguageChangeIcon";
import Menus from "../Menus";
import LanguageList from "../LanguageChange/LanguageList";
import ChangeModeIcon from "../ChangeMode/ChangeModeIcon";
import ChangeModeList from "../ChangeMode/ChangeModeList";

import { useToggleContext } from "../../context/ToggleSidebarContext";
import ShortCutIcon from "../ShortCut/ShortCutIcon";
import ShortCut from "../ShortCut/ShortCutList/ShortCut";
import Modal from "../Modal";
import CreateShortcutList from "../ShortCut/ShortCutList/CreateShortcutList";
import NotificationIcon from "../Notification/NotificationIcon";
import NotificationSearchbar from "../Notification/NotificationSearchbar";

const darkMode = [
  {
    icon: <MdOutlineLightMode size={21} />,
    mode: "light",
  },
  {
    icon: <IoMoonOutline size={21} />,
    mode: "dark",
  },
  {
    icon: <LuMonitor size={21} />,
    mode: "system",
  },
];

function SearchbarLayout() {
  const { theme } = useToggleContext();

  return (
    <nav
      className={`relative flex h-16 w-full justify-between rounded-md ${theme === "light" ? "bg-white/[.88]" : "dark:bg-slate-800/[.90]"} px-5 py-2 shadow-md transition`}
    >
      <SearchbarInputField />

      <Modal>
        <Menus>
          <Menus.MenuContainer>
            <Menus.Menu>
              <Menus.ToggleBtn listName="language">
                <LanguageChangeIcon />
              </Menus.ToggleBtn>
              <Menus.MenuList listName="language">
                <LanguageList />
              </Menus.MenuList>
            </Menus.Menu>

            <Menus.Menu>
              <Menus.ToggleBtn listName="changeMode">
                <ChangeModeIcon darkMode={darkMode} />
              </Menus.ToggleBtn>
              <Menus.MenuList listName="changeMode">
                <ChangeModeList darkMode={darkMode} />
              </Menus.MenuList>
            </Menus.Menu>

            <Menus.Menu>
              <Menus.ToggleBtn listName="shortcut">
                <ShortCutIcon />
              </Menus.ToggleBtn>
              <Menus.MenuList listName="shortcut">
                <ShortCut />
              </Menus.MenuList>
            </Menus.Menu>

            <Menus.Menu>
              <Menus.ToggleBtn listName="notification">
                <NotificationIcon />
              </Menus.ToggleBtn>
              <Menus.MenuList listName="notification">
                <NotificationSearchbar />
              </Menus.MenuList>
            </Menus.Menu>
          </Menus.MenuContainer>
        </Menus>
        <Modal.Window name="shortcut modal">
          <CreateShortcutList />
        </Modal.Window>
      </Modal>
    </nav>
  );
}

export default SearchbarLayout;
