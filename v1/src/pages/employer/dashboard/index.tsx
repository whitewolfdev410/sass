import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { OpportunityCard, SidebarLayout } from "../../../components";
import companyLogo from "../../../assets/bg/404.jpg";

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
        <Box
          sx={{ width: "100%" }}
          boxShadow={2}
          borderRadius={3}
          marginTop={3}
        >
          <OpportunityCard
            title={
              <Typography variant="h2">
                Virtual work experience
                <br />
                in London
              </Typography>
            }
            coverImage={companyLogo}
          >
            <Stack direction="row" columnGap={3}>
              <Stack>
                <Typography>Programme type:</Typography>
                <Typography>Intership</Typography>
              </Stack>
              <Stack>
                <Typography>Duration:</Typography>
                <Typography>6 weeks</Typography>
              </Stack>
              <Stack>
                <Typography>Programme start:</Typography>
                <Typography>13 Jan 2023</Typography>
              </Stack>
            </Stack>
            <Button variant="contained" color="success">
              Post opportunity
            </Button>
          </OpportunityCard>
        </Box>
      </SidebarLayout>
    </div>
  );
};

export default EmployerDashboard;
