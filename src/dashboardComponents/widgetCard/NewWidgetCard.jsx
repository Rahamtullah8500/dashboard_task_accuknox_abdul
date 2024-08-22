import { FaPlus } from "react-icons/fa6";

const NewWidgetCard = ({ handleOpenDialog, categoryId }) => {
  return (
    <div className="dashboard-widget-card add-widget-card">
      <div
        className="header-button"
        onClick={() => handleOpenDialog(categoryId)}
      >
        Add Widget <FaPlus size={"0.8em"} color="#666" />
      </div>
    </div>
  );
};

export default NewWidgetCard;
