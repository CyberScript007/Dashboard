import { BsArchive } from "react-icons/bs";
import DropDowMenu from "../Components/DropDowMenu";

const userInterfaceLists = [
  {
    path: "/user-interface-accordion",
    name: "Accordion",
  },
  {
    path: "/user-interface-Carousel",
    name: "Carousel",
  },
  {
    path: "/user-interface-Collapse",
    name: "Collapse",
  },
  {
    path: "/user-interface-modals",
    name: "Modals",
  },
  {
    path: "/user-interface-offcanvas",
    name: "Offcanvas",
  },
  {
    path: "/user-interface-tab-pills",
    name: "Tabs & Pills",
  },
  {
    path: "/user-interface-tooltips-popovers",
    name: "Tooltips & Popovers",
  },
];

function UserInterface() {
  return (
    <>
      <DropDowMenu
        icon={<BsArchive size={23} />}
        itemContent={"user interface"}
        lists={userInterfaceLists}
      />
    </>
  );
}

export default UserInterface;
