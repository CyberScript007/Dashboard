import { MdGridView } from "react-icons/md";
import ListIcon from "../../Components/ListIcon";

function ShortCutIcon({ onClick }) {
  return <ListIcon icon={<MdGridView size={23} />} onClick={onClick} />;
}

export default ShortCutIcon;
