import { Button } from "@mui/material";
import React from "react";

const MainButton = ({
  handleClick,
  btnText = "Add",
  color = "white",
  bgcolor = "darkblue",
  hoverColor = "darkblue",
  variant = "contained" || 'outlined',
}) => {
  return (
    <Button
      autoFocus
      variant={variant}
      onClick={handleClick}
      sx={{
        backgroundColor: bgcolor,
        borderColor:color,
        color: color,
        borderRadius:'8px',
        fontSize:'0.8rem',
        "&:hover": {
          backgroundColor: hoverColor,
          borderColor:color
        },
      }}
    >
      {btnText}
    </Button>
  );
};

export default MainButton;
