import { LuShieldCheck } from "react-icons/lu";
import DropDowMenu from "../Components/DropDowMenu";

const rolesList = [
  {
    path: "/rolesList-roles",
    name: "Roles",
  },
  {
    path: "/rolesList-permission",
    name: "Permission",
  },
];

function RolesAndPermission() {
  return (
    <DropDowMenu
      lists={rolesList}
      itemContent={"roles and permission"}
      icon={<LuShieldCheck size={23} />}
    />
  );
}

export default RolesAndPermission;
