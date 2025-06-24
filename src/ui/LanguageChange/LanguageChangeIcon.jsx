import { HiOutlineGlobeAlt } from "react-icons/hi2";
import ListIcon from "../../Components/ListIcon";

function LanguageChangeIcon({ onClick }) {
  return <ListIcon icon={<HiOutlineGlobeAlt size={23} />} onClick={onClick} />;
}

export default LanguageChangeIcon;
