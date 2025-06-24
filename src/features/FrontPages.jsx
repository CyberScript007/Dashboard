import { BiStore } from "react-icons/bi";

import DropDowMenu from "../Components/DropDowMenu";

const frontList = [
  {
    path: "/landing",
    name: "Landing",
  },
  {
    path: "/pricing",
    name: "Pricing",
  },
  {
    path: "/payment",
    name: "Payment",
  },
  {
    path: "/checkout",
    name: "Checkout",
  },
  {
    path: "/help",
    name: "Help center",
  },
];

function FrontPages() {
  return (
    <>
      <DropDowMenu
        icon={<BiStore size={23} />}
        itemContent={"front pages"}
        lists={frontList}
        target="blank"
      />
    </>
  );
}

export default FrontPages;
