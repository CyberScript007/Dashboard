import { AiOutlineLayout } from "react-icons/ai";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useState } from "react";
import DropDowMenu from "../Components/DropDowMenu";

const layoutList = [
  {
    path: "/layout-collapsed-menu",
    name: "Collapsed menu",
  },
  {
    path: "/layout-content-navbar",
    name: "Content navbar",
  },
  {
    path: "/layout-content-nav-sidebar",
    name: "Content nav + sidebar",
  },
  {
    path: "/layout-horizontal",
    name: "Horizontal",
  },
  {
    path: "/layout-without-menu",
    name: "Without menu",
  },
  {
    path: "/layout-without-navbar",
    name: "Without navbar",
  },
  {
    path: "/layout-fluid",
    name: "Fluid",
  },
  {
    path: "/layout-container",
    name: "Container",
  },
  {
    path: "/layout-blank",
    name: "Blank",
  },
];

function Layouts() {
  return (
    <>
      <DropDowMenu
        icon={<AiOutlineLayout size={23} />}
        itemContent="layouts"
        lists={layoutList}
      />
    </>
  );
}

export default Layouts;
