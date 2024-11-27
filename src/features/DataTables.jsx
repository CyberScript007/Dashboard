import { LiaTableSolid } from "react-icons/lia";
import DropDowMenu from "../Components/DropDowMenu";

const dataTablesList = [
  {
    path: "/data-tables-basic",
    name: "Basic",
  },
  {
    path: "/data-tables-advanced",
    name: "Advanced",
  },
];

function DataTables() {
  return (
    <>
      <DropDowMenu
        icon={<LiaTableSolid size={23} />}
        itemContent={"DataTables"}
        lists={dataTablesList}
      />
    </>
  );
}

export default DataTables;
