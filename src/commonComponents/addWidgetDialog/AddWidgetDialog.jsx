import "./AddWidgetDialog.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import React, { useState } from "react";
import MainButton from "../mainButton/MainButton";

const AddWidgetDialog = ({ handleAddNew, open, handleClose }) => {
  const [newWidgetData, setNewWidgetData] = useState({
    name: "",
    text: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setNewWidgetData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!newWidgetData.name || !newWidgetData.text) {
      alert("Enter the required details");
      return;
    }
    handleAddNew(newWidgetData);
    setNewWidgetData({ name: "", text: "" });
  };

  const handleCloseDialog = () => {
    setNewWidgetData({ name: "", text: "" });
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={handleCloseDialog}
        aria-labelledby="customized-dialog-title"
        open={open}
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
          ADD New Widget
        </DialogTitle>
        <DialogContent dividers>
          <div className="add-widget-container">
            <div className="add-widget-input-section">
              <label className="add-widget-label">Name:</label>
              <input
                className="add-widget-input"
                placeholder="Enter Name..."
                name="name"
                onChange={handleChange}
                value={newWidgetData.name}
              />
            </div>
            <div className="add-widget-input-section">
              <label className="add-widget-label">Text:</label>
              <input
                className="add-widget-input"
                placeholder="Enter Text..."
                name="text"
                onChange={handleChange}
                value={newWidgetData.text}
              />
            </div>
          </div>
        </DialogContent>
        <div className="add-widget-dialog-button-container">
          <MainButton
            handleClick={handleCloseDialog}
            btnText="Exit"
            bgcolor="none"
            hoverColor="#fff"
            variant="outlined"
            color="darkblue"
          />
          <MainButton
            handleClick={handleAdd}
            btnText="Add +"
            variant="contained"
          />
        </div>
      </Dialog>
    </React.Fragment>
  );
};

export default AddWidgetDialog;
