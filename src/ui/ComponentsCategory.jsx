import Cards from "../features/Cards";
import ExtendUI from "../features/ExtendUI";
import UserInterface from "../features/UserInterface";
import ComponentsPages from "./ComponentsPages";

function ComponentsCategory() {
  return (
    <>
      <ComponentsPages />
      <Cards />
      <UserInterface />
      <ExtendUI />
    </>
  );
}

export default ComponentsCategory;
