import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

import ListLinkMenu from "../Components/ListLinkMenu";

function Chat() {
  const pathUrl = "/chat";

  return (
    <ListLinkMenu
      icon={<HiOutlineChatBubbleLeftRight size={23} />}
      pathUrl={pathUrl}
      linkName={"chat"}
    />
  );
}

export default Chat;
