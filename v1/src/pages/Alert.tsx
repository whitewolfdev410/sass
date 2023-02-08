import React, { useState, useEffect } from "react";
import { Snackbar, Stack } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import SnackbarContent from "@mui/material/SnackbarContent";

const Alert = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  // useEffect(() => {
  // setTimeout(handleClose, 3000);
  // });
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    // <Snackbar
    //   anchorOrigin={{ vertical: "top", horizontal: "right" }}
    //   open={isOpen}
    //   onClose={handleClose}
    // >
    //   <MuiAlert severity={"info"}>{"This is a test message."}</MuiAlert>
    // </Snackbar>
    <Stack sx={{ position: "fixed", top: 10, right: 10 }} rowGap={2}>
      <SnackbarContent
        message="I will never disappear"
        sx={{
          opacity: isOpen ? "1" : "0",
          transition: "all ease-in-out .2s",
        }}
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <SnackbarContent message="Me too." />
      <SnackbarContent message="Same here." />
    </Stack>
  );
};

export default Alert;
