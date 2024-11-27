import { LuActivitySquare } from "react-icons/lu";
import DropDowMenu from "../Components/DropDowMenu";

const chartsList = [
  {
    path: "/charts-apex",
    name: "Apex Charts",
  },
  {
    path: "/charts-chartjs",
    name: "ChartJS",
  },
];

function Charts() {
  return (
    <DropDowMenu
      icon={<LuActivitySquare size={23} />}
      itemContent={"Charts"}
      lists={chartsList}
    />
  );
}

export default Charts;
