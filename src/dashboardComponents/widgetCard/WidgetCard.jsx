import { RxCross2 } from "react-icons/rx";
import { IconButton } from "@mui/material";
import { IoBarChartOutline } from "react-icons/io5";

const WidgetCard = ({ widget,handleRemove,categoryId }) => {
  return (
    <div
      key={widget.id}
      className={`dashboard-widget-card ${
        !widget.isShow && "hide-widget-card"
      }`}
    >
      <div className="widget-card-title">
        {widget.name}
        <IconButton
          color="error"
          size="small"
          onClick={() => handleRemove(categoryId, widget.id)}
        >
          <RxCross2 className="card-cross-button" size={"1em"} />
        </IconButton>
      </div>
      <div className="widget-card-body">
        {widget.graph ? (
          <div>{widget.graph}</div>
        ) : (
          <div className="widget-card-no-chart">
            <IoBarChartOutline size={"3em"} color="#888" />
            No Graph data available!
          </div>
        )}
      </div>
    </div>
  );
};

export default WidgetCard;
