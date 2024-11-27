import { BiBookOpen } from "react-icons/bi";
import DropDowMenu from "../Components/DropDowMenu";

const academyList = [
  {
    path: "/academy-dashboard",
    name: "dashboard",
  },
  {
    path: "/academy-course",
    name: "my course",
  },
  {
    path: "/academy-course-details",
    name: "course details",
  },
];

function Academy() {
  return (
    <DropDowMenu
      icon={<BiBookOpen size={23} />}
      itemContent="academy"
      lists={academyList}
    />
  );
}

export default Academy;
