import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import NestedDropDownMenu from "../Components/NestedDropDownMenu";
import ListDropDown from "../Components/ListDropDown";
import flattendChildren from "../utils/flattendChildren";

const usersList = [
  {
    path: "/users-list",
    name: "List",
    directChild: true,
  },
  {
    name: "View",
    childrens: [
      {
        path: "/users-view-account",
        name: "account",
      },
      {
        path: "/users-view-security",
        name: "security",
      },
      {
        path: "/users-view-billing-plans",
        name: "billing & plans",
      },
      {
        path: "/users-view-notifications",
        name: "notifications",
      },
      {
        path: "/users-view-connections",
        name: "connections",
      },
    ],
  },
];

const lists = flattendChildren(usersList);

const variantObj = {
  showList: {
    height: "fit-content",
  },
  hideList: {
    height: 0,
  },
};

function Users() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <ListDropDown
        icon={<BiUser size={23} />}
        setShow={setShow}
        show={show}
        listName={"Users"}
        pathname={pathname}
        lists={lists}
      />

      <motion.ul
        variants={variantObj}
        animate={show ? "showList" : "hideList"}
        className="h-0 overflow-hidden"
      >
        {usersList.map((user, index) => (
          <NestedDropDownMenu item={user} key={index} />
        ))}
      </motion.ul>
    </>
  );
}

export default Users;
