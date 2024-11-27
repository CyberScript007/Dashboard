import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FiCreditCard } from "react-icons/fi";
import { motion } from "framer-motion";

import ListDropDown from "../Components/ListDropDown";
import flattendChildren from "../utils/flattendChildren";
import NestedDropDownMenu from "../Components/NestedDropDownMenu";

const pagesList = [
  {
    name: "user profile",
    childrens: [
      {
        path: "/pages-user-profile",
        name: "profile",
      },
      {
        path: "/pages-user-profile-teams",
        name: "teams",
      },
      {
        path: "/pages-user-profile-projects",
        name: "projects",
      },
      {
        path: "/pages-user-profile-connections",
        name: "connections",
      },
    ],
  },
  {
    name: "account settings",
    childrens: [
      {
        path: "/pages-account-settings-account",
        name: "account",
      },
      {
        path: "/pages-account-settings-security",
        name: "security",
      },
      {
        path: "/pages-account-settings-billing-plans",
        name: "billing & plans",
      },
      {
        path: "/pages-account-settings-notifications",
        name: "notifications",
      },
      {
        path: "/pages-account-settings-connections",
        name: "connections",
      },
    ],
  },
  {
    path: "/pages-faq",
    name: "FAQ",
    directChild: "true",
  },
  {
    path: "/pages-pricing",
    name: "pricing",
    directChild: true,
  },
  {
    name: "misc",
    childrens: [
      {
        path: "/pages-misc-error",
        name: "error",
      },
      {
        path: "/pages-misc-under-maintenance",
        name: "under maintenance",
      },
      {
        path: "/pages-misc-coming-soon",
        name: "coming soon",
      },
      {
        path: "/pages-misc-not-authorized",
        name: "notauthorized",
      },
    ],
  },
];

const lists = flattendChildren(pagesList);

const variantObj = {
  showList: {
    height: "fit-content",
  },
  hideList: {
    height: 0,
  },
};

function Pages() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <ListDropDown
        show={show}
        setShow={setShow}
        pathname={pathname}
        listName={"Pages"}
        lists={lists}
        icon={<FiCreditCard size={23} />}
      />
      <motion.ul
        variants={variantObj}
        animate={show ? "showList" : "hideList"}
        className="h-0 overflow-hidden"
      >
        {pagesList.map((el) => (
          <NestedDropDownMenu key={el.name} item={el} />
        ))}
      </motion.ul>
    </>
  );
}

export default Pages;
