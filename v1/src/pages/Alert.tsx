import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import SnackbarContent from "@mui/material/SnackbarContent";
import { useAppSelector } from "../appStore";
import { getAllAlerts } from "../appStore/slices/Alert/selectors";

const Alert = () => {
  const allAlerts = useAppSelector(getAllAlerts);
  const colorMap = {
    info: "#42a5f5",
    success: "#2e7d32",
    error: "#ef5350",
  };
  return (
    <Stack sx={{ position: "fixed", top: 10, right: 10 }} rowGap={2}>
      {allAlerts.map((alert) => (
        <SnackbarContent
          action={<small>{alert.title}</small>}
          message={alert.msg}
          sx={{
            backgroundColor: colorMap[alert.type],
            color: "white",
          }}
        />
      ))}
      <SnackbarContent
        message="I will never disappear"
        sx={{
          backgroundColor: "white",
          color: "black",
        }}
      />
    </Stack>
  );
};

export default Alert;
