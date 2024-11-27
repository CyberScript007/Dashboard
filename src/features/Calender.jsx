import { HiOutlineCalendarDays } from "react-icons/hi2";

import ListLinkMenu from "../Components/ListLinkMenu";

function Calender() {
  const pathUrl = "/calender";

  return (
    <ListLinkMenu
      icon={<HiOutlineCalendarDays size={23} />}
      pathUrl={pathUrl}
      linkName={"Calender"}
    />
  );
}
export default Calender;
