import { AiOutlineProfile } from "react-icons/ai";

import DropDowMenu from "../Components/DropDowMenu";

const wizardLists = [
  {
    path: "/wizard-examples-checkout",
    name: "Checkout",
  },
  {
    path: "/wizard-examples-property-listing",
    name: "Property Listing",
  },
  {
    path: "/wizard-examples-create-deal",
    name: "Create Deal",
  },
];

function WizardExamples() {
  return (
    <>
      <DropDowMenu
        icon={<AiOutlineProfile size={23} />}
        itemContent={"Wizard Examples"}
        lists={wizardLists}
      />
    </>
  );
}

export default WizardExamples;
