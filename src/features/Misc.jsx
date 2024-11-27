import { LuFileText } from "react-icons/lu";
import ListLinkMenu from "../Components/ListLinkMenu";

function Misc() {
  const pathUrl = "/documentation";
  return (
    <ListLinkMenu
      icon={<LuFileText size={23} />}
      pathUrl={pathUrl}
      linkName={"Documentation"}
      target="blank"
    />
  );
}

export default Misc;
