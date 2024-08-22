import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Categoris } from "../../data/dashboardData";

const initialState = {
  data: JSON.parse(localStorage.getItem("dashboardData")) || Categoris,
};

const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    addNewWidget: (state, action) => {
      const { selectedCategoryId, newWidget } = action.payload;
      const widgetData = {
        id: uuidv4(),
        name: newWidget.name,
        graph: newWidget.graph,
        isShow: true,
      };
      const category = state.data.find((cat) => cat.id === selectedCategoryId);
      if (category) {
        category.widgets.push(widgetData);
      }
      localStorage.setItem("dashboardData", JSON.stringify(state.data));
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.data.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        );
      }
      localStorage.setItem("dashboardData", JSON.stringify(state.data));
    },
    updateCategoriesList: (state, action) => {
      const { categories } = action.payload;
      const newState = {
        ...state,
        data: categories,
      };
      localStorage.setItem("dashboardData", JSON.stringify(categories));
      return newState;
    },
    toggleWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;

      const category = state.data.find((cat) => cat.id === categoryId);
      if (category) {
        const widget = category.widgets.find(
          (widget) => widget.id === widgetId
        );
        if (widget) {
          widget.isShow = !widget.isShow;
        }
      }

      localStorage.setItem("dashboardData", JSON.stringify(state.data));
    },
  },
});

export default dashboardSlice.reducer;
export const { addNewWidget, removeWidget, updateCategoriesList,toggleWidget } =
  dashboardSlice.actions;
