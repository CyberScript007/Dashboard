import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import DropDowMenu from "../Components/DropDowMenu";

const logisticsList = [
  {
    path: "/logistics-dashboard",
    name: "dashboard",
  },
  {
    path: "/logistics-fleet",
    name: "fleet",
  },
];

function Logistics() {
  return (
    <DropDowMenu
      icon={<MdOutlineDirectionsCarFilled size={23} />}
      itemContent="logistics"
      lists={logisticsList}
    />
  );
}

export default Logistics;
