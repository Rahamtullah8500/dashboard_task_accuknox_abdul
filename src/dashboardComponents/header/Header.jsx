import "./Header.css";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineRefresh } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";
import { FaCaretDown } from "react-icons/fa";

const Header = ({toggleDrawer}) => {
  return (
    <div className="dashboard-header">
        <div className="dashboard-header-title">CNAPP Dashboard</div>
        <div className="dashboard-header-right">
          <div className="header-button" onClick={toggleDrawer}>
            Add Widget <FaPlus size={"0.8em"} color="#666" />
          </div>
          <div className="header-button">
            <HiOutlineRefresh size={"1em"} />
          </div>
          <div className="header-button">
            <BsThreeDotsVertical size={"1em"} />
          </div>
          <div className="header-button header-active-button">
            <BsClockFill size={"1em"} /> <TbMinusVertical size={"1.5em"} /> Last
            2 days <FaCaretDown style={{ marginLeft: "6px" }} />
          </div>
        </div>
      </div>
    
  );
};

export default Header;
