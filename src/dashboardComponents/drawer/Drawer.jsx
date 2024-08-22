import { useEffect, useState } from "react";
import "./Drawer.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Box,
  Checkbox,
  DialogTitle,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import MainButton from "../../commonComponents/mainButton/MainButton";
import { updateCategoriesList } from "../../store/slice/DashboardSlice";

const Drawer = ({ open, toggleDrawer }) => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const categoriesData = useSelector((state) => state.dashboardData.data);
  const [categories, setCategories] = useState(categoriesData);

  useEffect(() => {
    setCategories(categoriesData);
  }, [categoriesData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheckboxChange = (widgetId) => {
    let categoryId = categoriesData[value].id;
    setCategories((prevCategories) => {
      return prevCategories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: category.widgets.map((widget) => {
              if (widget.id === widgetId) {
                return {
                  ...widget,
                  isShow: !widget.isShow,
                };
              }
              return widget;
            }),
          };
        }
        return category;
      });
    });
  };

  const handleConfirm = () => {
    dispatch(updateCategoriesList({ categories }));
    handleCloseDrawer();
  };

  const handleCloseDrawer = () => {
    toggleDrawer();
    setCategories(categoriesData);
  };

  return (
    <div>
      <SwipeableDrawer
        anchor={"right"}
        open={open}
        onClose={handleCloseDrawer}
        onOpen={handleCloseDrawer}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            fontSize: "1rem",
            backgroundColor: "#00008B",
            color: "#fff",
          }}
        >
          <div className="drawyer-title-container">
            <div> ADD Widget</div>
            <IconButton color="white" size="small" onClick={handleCloseDrawer}>
              <RxCross2 color="#fff" size={"1.2em"} />
            </IconButton>
          </div>
        </DialogTitle>
        <div className="drawer-right-body">
          <div className="drawer-heading-text">
            Personalize your dashboard by adding the folling widget
          </div>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider", marginTop: "6px" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "darkblue",
                },
              }}
              sx={{
                "& .MuiTab-root": {
                  "&:focus": {
                    color: "darkblue",
                  },
                },
                "& .Mui-selected": {
                  color: "darkblue",
                  fontWeight: "600",
                },
                "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                  color: "darkblue",
                },
              }}
            >
              {categories.map((category, index) => (
                <Tab
                  key={category.id}
                  value={index}
                  label={category.category.split(" ")[0]}
                />
              ))}
            </Tabs>
          </Box>
          <div className="drawer-widgets-container">
            {categories[value].widgets.map((widget) => (
              <FormControlLabel
                key={widget.id}
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "0.9rem",
                  },
                  border: "1px solid #cdcdcd",
                  borderRadius: "4px",
                }}
                control={
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "darkblue",
                      },
                      fontSize: "12px",
                    }}
                    size="small"
                    checked={widget.isShow}
                    onChange={() => handleCheckboxChange(widget.id)}
                  />
                }
                label={widget.name}
              />
            ))}
          </div>
        </div>
        <div className="drawer-widgets-btn-container">
          <MainButton
            handleClick={handleCloseDrawer}
            btnText="Cancel"
            bgcolor="none"
            hoverColor="#fff"
            variant="outlined"
            color="darkblue"
          />
          <MainButton
            handleClick={handleConfirm}
            btnText="Confirm"
            variant="contained"
          />
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
