import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";

const iconLibrary = {
  fa: FaIcons,
  md: MdIcons,
  io: IoIcons,
};

const loadIcon = async (library, iconName) => {
  try {
    const module = iconLibrary[library];
    return module[iconName];
  } catch (error) {
    console.error("Failed icon", error);
    return null;
  }
};

export default loadIcon;
