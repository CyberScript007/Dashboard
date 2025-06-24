import { PiCardsThree } from "react-icons/pi";
import DropDowMenu from "./../Components/DropDowMenu";

const cardsList = [
  {
    path: "/cards-basic",
    name: "Basic",
  },
  {
    path: "/cards-advance",
    name: "Advance",
  },
  {
    path: "/cards-statistics",
    name: "Statistics",
  },
  {
    path: "/cards-analytics",
    name: "Analytics",
  },
  {
    path: "/cards-gamifications",
    name: "Gamifications",
  },
  {
    path: "/cards-actions",
    name: "Actions",
  },
];

function Cards() {
  return (
    <>
      <DropDowMenu
        icon={<PiCardsThree size={23} />}
        itemContent={"cards"}
        lists={cardsList}
      />
    </>
  );
}

export default Cards;
