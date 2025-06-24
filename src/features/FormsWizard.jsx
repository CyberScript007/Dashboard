import { BiCarousel } from "react-icons/bi";
import DropDowMenu from "../Components/DropDowMenu";

const formsWizardList = [
  {
    path: "/forms-wizard-numbered",
    name: "Numbered",
  },
  {
    path: "/forms-wizard-icons",
    name: "Icons",
  },
];

function FormsWizard() {
  return (
    <>
      <DropDowMenu
        icon={<BiCarousel size={23} />}
        itemContent={"form wizard"}
        lists={formsWizardList}
      />
    </>
  );
}

export default FormsWizard;
