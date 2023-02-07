import React, { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // useEffect(() => {
  // setTimeout(handleClose, 3000);
  // });
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={isOpen}
      onClose={handleClose}
    >
      <MuiAlert severity={"info"}>{"This is a test message."}</MuiAlert>
    </Snackbar>
  );
};

export default Alert;
