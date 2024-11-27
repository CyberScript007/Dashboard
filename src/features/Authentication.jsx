import { useState } from "react";
import { BiLockOpenAlt } from "react-icons/bi";
import { motion } from "framer-motion";

import ListDropDown from "../Components/ListDropDown";
import NestedDropDownMenu from "../Components/NestedDropDownMenu";

const authenticationList = [
  {
    name: "Login",
    childrens: [
      { path: "/authentication-login-basic", name: "basic" },
      { path: "/authentication-login-cover", name: "cover" },
    ],
  },
  {
    name: "Register",
    childrens: [
      { path: "/authentication-register-basic", name: "basic" },
      { path: "/authentication-register-cover", name: "cover" },
      { path: "/authentication-register-multi-steps", name: "multi-steps" },
    ],
  },
  {
    name: "Verify Email",
    childrens: [
      { path: "/authentication-verify-email-basic", name: "basic" },
      { path: "/authentication-verify-email-cover", name: "cover" },
    ],
  },
  {
    name: "Reset Password",
    childrens: [
      { path: "/authentication-reset-password-basic", name: "basic" },
      { path: "/authentication-reset-password-cover", name: "cover" },
    ],
  },
  {
    name: "Forgot Password",
    childrens: [
      { path: "/authentication-forgot-password-basic", name: "basic" },
      { path: "/authentication-forgot-password-cover", name: "cover" },
    ],
  },
  {
    name: "Two Steps",
    childrens: [
      { path: "/authentication-two-steps-basic", name: "basic" },
      { path: "/authentication-two-steps-cover", name: "cover" },
    ],
  },
];

const variantObj = {
  showList: {
    height: "fit-content",
  },
  hideList: {
    height: 0,
  },
};

function Authentication() {
  const [show, setShow] = useState(false);

  return (
    <>
      <ListDropDown
        show={show}
        setShow={setShow}
        listName={"Authentications"}
        icon={<BiLockOpenAlt size={23} />}
      />

      <motion.ul
        variants={variantObj}
        animate={show ? "showList" : "hideList"}
        className="h-0 overflow-hidden"
      >
        {authenticationList.map((el) => (
          <NestedDropDownMenu key={el.name} item={el} target="blank" />
        ))}
      </motion.ul>
    </>
  );
}

export default Authentication;
