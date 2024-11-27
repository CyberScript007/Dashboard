import { FaFileInvoice } from "react-icons/fa6";

import DropDowMenu from "../Components/DropDowMenu";

const invoiceList = [
  {
    path: "/invoice-list",
    name: "List",
  },
  {
    path: "/invoice-preview",
    name: "preview",
  },
  {
    path: "/invoice-edit",
    name: "Edit",
  },
  {
    path: "/invoice-add",
    name: "Add",
  },
];

function Invoice() {
  return (
    <>
      <DropDowMenu
        icon={<FaFileInvoice size={23} />}
        itemContent={"invoice"}
        lists={invoiceList}
      />
    </>
  );
}

export default Invoice;
