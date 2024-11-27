import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BsCopy } from "react-icons/bs";
import { motion } from "framer-motion";

import NestedDropDownMenu from "../Components/NestedDropDownMenu";
import ListDropDown from "../Components/ListDropDown";
import flattendChildren from "../utils/flattendChildren";

const extendUIList = [
  {
    path: "/extend-ui-drag-drop",
    name: "Drag & Drop",
    directChild: true,
  },
  {
    path: "/extend-ui-star-ratings",
    name: "Star Ratings",
    directChild: true,
  },
  {
    name: "Timeline",
    childrens: [
      {
        path: "/extend-ui-timeline-basic",
        name: "Basic",
      },
      {
        path: "/extend-ui-timeline-fullscreen",
        name: "fullscreen",
      },
    ],
  },
  {
    path: "/extend-ui-tour",
    name: "Tour",
    directChild: true,
  },
  {
    path: "/extend-ui-treeview",
    name: "Treeview",
    directChild: true,
  },
];

const lists = flattendChildren(extendUIList);

const variantObj = {
  show: {
    height: "fit-content",
  },
  hide: {
    height: 0,
  },
};

function ExtendUI() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  return (
    <>
      <ListDropDown
        setShow={setShow}
        show={show}
        listName={"Extended UI"}
        lists={lists}
        icon={<BsCopy size={23} />}
        pathname={pathname}
      />
      <motion.ul
        variants={variantObj}
        animate={show ? "show" : "hide"}
        className="h-0 overflow-hidden"
      >
        {extendUIList.map((el) => (
          <NestedDropDownMenu key={el.name} item={el} />
        ))}
      </motion.ul>
    </>
  );
}

export default ExtendUI;
