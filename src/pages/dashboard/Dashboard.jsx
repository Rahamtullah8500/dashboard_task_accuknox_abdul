import "./styles/Dashboard.css";
import { useState } from "react";
import Header from "../../dashboardComponents/header/Header";
import Toolbar from "../../dashboardComponents/toolbar/Toolbar";
import AddWidgetDialog from "../../commonComponents/addWidgetDialog/AddWidgetDialog";
import Drawer from "../../dashboardComponents/drawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { addNewWidget, toggleWidget } from "../../store/slice/DashboardSlice";
import WidgetCard from "../../dashboardComponents/widgetCard/WidgetCard";
import NewWidgetCard from "../../dashboardComponents/widgetCard/NewWidgetCard";

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [openWidgetDialog, setOpenWidgetDialog] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();
  const categoriesData = useSelector((state) => state.dashboardData.data);

  const handleAddWidget = (data) => {
    const newWidget = {
      name: data.name,
      graph: data.text,
    };
    dispatch(addNewWidget({ selectedCategoryId, newWidget }));
    setSelectedCategoryId("");
    handleCloseNewWidgetDialog();
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(toggleWidget({ categoryId, widgetId }));
  };

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleOpenDialog = (id) => {
    setSelectedCategoryId(id);
    setOpenWidgetDialog(true);
  };

  const handleCloseNewWidgetDialog = () => {
    setOpenWidgetDialog((prev) => !prev);
  };

  const handleToggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  const filteredWidgets = categoriesData.map((category) => {
    return {
      ...category,
      widgets: category.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(searchValue.toLowerCase())
      ),
    };
  });

  return (
    <div className="dashboard-page">
      <Toolbar handleSearch={handleSearchValue} value={searchValue} />
      <div className="dashboard-page-body">
        <Header toggleDrawer={handleToggleDrawer} />
        <div className="dashboard-page-content">
          {filteredWidgets &&
            filteredWidgets.map((eachCategory) => {
              return (
                <div key={eachCategory.id}>
                  <div className="dashboard-category-title">
                    {eachCategory.category}
                  </div>
                  <div className="dashboard-widgets-container">
                    {eachCategory.widgets.map((eachWidget) => {
                      return (
                        <WidgetCard
                          widget={eachWidget}
                          key={eachWidget.id}
                          categoryId={eachCategory.id}
                          handleRemove={handleRemoveWidget}
                        />
                      );
                    })}
                    <NewWidgetCard
                      handleOpenDialog={handleOpenDialog}
                      categoryId={eachCategory.id}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Below component contains the Category sections */}
      <Drawer open={openDrawer} toggleDrawer={handleToggleDrawer} />

      {/* Below component is a dialog box to add name and text for new widget */}
      <AddWidgetDialog
        handleAddNew={handleAddWidget}
        open={openWidgetDialog}
        handleClose={handleCloseNewWidgetDialog}
      />
    </div>
  );
};

export default Dashboard;
