import { AiOutlineTable } from "react-icons/ai";

import ListLinkMenu from "../Components/ListLinkMenu";

function Kanban() {
  const pathUrl = "/kanban";

  return (
    <ListLinkMenu
      icon={<AiOutlineTable size={23} />}
      pathUrl={pathUrl}
      linkName={"kanban"}
    />
  );
}

export default Kanban;
