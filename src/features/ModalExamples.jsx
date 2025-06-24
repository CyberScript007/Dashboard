import { RiInboxUnarchiveLine } from "react-icons/ri";
import ListLinkMenu from "../Components/ListLinkMenu";

function ModalExamples() {
  const pathUrl = "/modal-examples";
  return (
    <>
      <ListLinkMenu
        icon={<RiInboxUnarchiveLine size={25} />}
        pathUrl={pathUrl}
        linkName={"modal examples"}
      />
    </>
  );
}

export default ModalExamples;
