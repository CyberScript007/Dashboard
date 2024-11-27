import { BiHomeSmile } from "react-icons/bi";
import DropDowMenu from "../Components/DropDowMenu";

const dashboardList = [
  {
    path: "/dashboard-analytics",
    name: "Analytics",
  },
  {
    path: "/dashboard-crm",
    name: "CRM",
  },
  {
    path: "/dashboard-eCommerce",
    name: "eCommerce",
  },
  {
    path: "/dashboard-logistics",
    name: "Logistics",
  },
  {
    path: "/dashboard-academy",
    name: "Academy",
  },
];

function Dashboard() {
  return (
    <>
      <DropDowMenu
        icon={<BiHomeSmile size={23} />}
        itemContent={"dashboards"}
        lists={dashboardList}
      />
    </>
  );
}

export default Dashboard;
