import { RiInboxUnarchiveLine } from "react-icons/ri";
import ListLinkMenu from "../Components/ListLinkMenu";

function ModalExamples() {
  const pathUrl = "/modal-examples";
  return (
    <>
      <ListLinkMenu
        icon={<RiInboxUnarchiveLine size={25} />}
        pathUrl={pathUrl}
        linkName={"Modal Examples"}
      />
    </>
  );
}

export default ModalExamples;
