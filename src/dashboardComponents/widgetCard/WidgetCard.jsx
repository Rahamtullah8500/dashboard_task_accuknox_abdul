import { RxCross2 } from "react-icons/rx";
import { IconButton } from "@mui/material";
import { IoBarChartOutline } from "react-icons/io5";
import PieChartModelOne from "../../commonComponents/pieChart/PieChartModelOne";
import PieChartModelTwo from "../../commonComponents/pieChart/PieChartModelTwo";

const WidgetCard = ({ widget, handleRemove, categoryId }) => {
  const { id, isShow, name, graph } = widget;

  const GraphRenderer = ({ graph }) => {
    switch (graph) {
      case "pieChart1":
        return <PieChartModelOne />;
      case "pieChart2":
        return <PieChartModelTwo />;
      case "":
        return (
          <div className="widget-card-no-chart">
            <IoBarChartOutline size={"3em"} color="#888" />
            No Graph data available!
          </div>
        );
      default:
        return <div>{graph}</div>;
    }
  };

  return (
    <div className={`dashboard-widget-card ${!isShow && "hide-widget-card"}`}>
      <div className="widget-card-title">
        {name}
        <IconButton
          color="error"
          size="small"
          onClick={() => handleRemove(categoryId, id)}
        >
          <RxCross2 className="card-cross-button" size={"1em"} />
        </IconButton>
      </div>
      <div className="widget-card-body">{<GraphRenderer graph={graph} />}</div>
    </div>
  );
};

export default WidgetCard;
