import "./Toolbar.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { OutlinedInput } from "@mui/material";
import { IoIosSearch } from "react-icons/io";

const Toolbar = ({ handleSearch, value }) => {
  return (
    <div className="dashboard-tool-bar-container">
      <div className="dashboard-tool-bar-left">
        <div className="breadcrumb-item">Home</div>
        <MdOutlineArrowForwardIos color="#999" />
        <div className="breadcrumb-item-active">Dashboard V2</div>
      </div>
      <div className="dashboard-tool-bar-right">
        <OutlinedInput
          placeholder="Search anything..."
          onChange={handleSearch}
          value={value}
          startAdornment={
            <IoIosSearch
              size={"1.5em"}
              color="#666"
              style={{ marginRight: "6px" }}
            />
          }
          sx={{ height: "30px", padding: "6px" }}
        />
        <IoMdNotificationsOutline color="#999" size={"1.5em"} />
      </div>
    </div>
  );
};

export default Toolbar;
