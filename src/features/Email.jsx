import { AiOutlineMail } from "react-icons/ai";

import ListLinkMenu from "../Components/ListLinkMenu";

function Email() {
  const pathUrl = "/email";

  return (
    <ListLinkMenu
      icon={<AiOutlineMail size={23} />}
      pathUrl={pathUrl}
      linkName={"email"}
    />
  );
}

export default Email;
