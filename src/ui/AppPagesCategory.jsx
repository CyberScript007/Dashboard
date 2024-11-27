import Academy from "../features/Academy";
import Authentication from "../features/Authentication";
import Calender from "../features/Calender";
import Chat from "../features/Chat";
import Ecommerce from "../features/Ecommerce";
import Email from "../features/Email";
import Invoice from "../features/Invoice";
import Kanban from "../features/Kanban";
import Logistics from "../features/Logistics";
import ModalExamples from "../features/ModalExamples";
import Pages from "../features/Pages";
import RolesAndPermission from "../features/RolesAndPermission";
import Users from "../features/Users";
import WizardExamples from "../features/WizardExamples";
import AppPages from "./AppPages";

function AppPagesCategory() {
  return (
    <>
      <AppPages />
      <Email />
      <Chat />
      <Calender />
      <Kanban />
      <Ecommerce />
      <Academy />
      <Logistics />
      <Invoice />
      <Users />
      <RolesAndPermission />
      <Pages />
      <Authentication />
      <WizardExamples />
      <ModalExamples />
    </>
  );
}

export default AppPagesCategory;
