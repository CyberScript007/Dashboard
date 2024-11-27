import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { BiCartAlt } from "react-icons/bi";
import { HiOutlineChevronRight } from "react-icons/hi";

import { useToggleContext } from "../context/ToggleSidebarContext";
import NestedDropDownMenu from "../Components/NestedDropDownMenu";
import flattendChildren from "./../utils/flattendChildren";
import ListDropDown from "../Components/ListDropDown";

const eCommerceList = [
  {
    path: "/eCommerce-dashboard",
    name: "dashboard",
    directChild: true,
  },
  {
    name: "products",
    childrens: [
      {
        path: "/eCommerce-product-list",
        name: "product list",
      },
      {
        path: "/eCommerce-add-product",
        name: "add product",
      },
      {
        path: "/eCommerce-category-list",
        name: "category list",
      },
    ],
  },
  {
    name: "order",
    childrens: [
      {
        path: "/eCommerce-order-list",
        name: "order list",
      },
      {
        path: "/eCommerce-order-details",
        name: "order details",
      },
    ],
  },
  {
    name: "customer",
    childrens: [
      {
        path: "/eCommerce-customer-all",
        name: "all customer",
      },
      {
        name: "customer details",
        nestedChildParent: true,
        childrens: [
          {
            path: "/eCommerce-customer-details-overview",
            name: "overview",
            nestedChild: true,
          },
          {
            path: "/eCommerce-customer-details-security",
            name: "security",
            nestedChild: true,
          },
          {
            path: "/eCommerce-customer-details-billing",
            name: "address & billing",
            nestedChild: true,
          },
          {
            path: "/eCommerce-customer-details-notifications",
            name: "notifications",
            nestedChild: true,
          },
        ],
      },
    ],
  },
  {
    path: "/eCommerce-manage-reviews",
    name: "manage reviews",
    directChild: true,
  },
  {
    path: "/eCommerce-referrals",
    name: "referrals",
    directChild: true,
  },
  {
    name: "settings",
    childrens: [
      {
        path: "/eCommerce-settings-details",
        name: "store details",
      },
      {
        path: "/eCommerce-settings-payments",
        name: "payments",
      },
      {
        path: "/eCommerce-settings-checkout",
        name: "checkout",
      },
      {
        path: "/eCommerce-settings-shipping",
        name: "shipping & deliery",
      },
      {
        path: "/eCommerce-settings-locations",
        name: "locations",
      },
      {
        path: "/eCommerce-settings-notifications",
        name: "notifications",
      },
    ],
  },
];

const containerVariant = {
  showList: {
    height: "fit-content",
  },
  hideList: {
    height: 0,
  },
};

// flat all nested array
const lists = flattendChildren(eCommerceList);

function Ecommerce() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <ListDropDown
        show={show}
        setShow={setShow}
        pathname={pathname}
        icon={<BiCartAlt size={23} />}
        lists={lists}
        listName={"eCommerce"}
      />

      <motion.ul
        variants={containerVariant}
        animate={show ? "showList" : "hideList"}
        className="h-0 overflow-hidden"
      >
        {eCommerceList.map((item) => (
          <NestedDropDownMenu key={item.name} item={item} />
        ))}
      </motion.ul>
    </>
  );
}

export default Ecommerce;
