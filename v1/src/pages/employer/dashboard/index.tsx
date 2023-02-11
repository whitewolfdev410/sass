import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SidebarLayout } from "../../../components";
import { useAppDispatch, useAppSelector } from "../../../appStore";

/**
 * Dashboard for program providers showing current programs and their statistics
 */

const EmployerDashboard = () => {
  return (
    <div>
      <SidebarLayout logo>
        {/* Statistics Title */}
        <Stack
          justifyContent="space-between"
          flexDirection={{ xs: "column", lg: "row" }}
          className="content-wrapper"
          marginX="auto"
        >
          <Box marginLeft={5}>
            <Typography variant="h1" component="h1">
              Hi Mohammmed,
            </Typography>
            <Typography
              variant="h5"
              component="h5"
              sx={{ color: "var(--silver)" }}
            >
              Your summary for today
            </Typography>
          </Box>
        </Stack>

        {/* Statistics */}
      </SidebarLayout>
    </div>
  );
};

export default EmployerDashboard;
