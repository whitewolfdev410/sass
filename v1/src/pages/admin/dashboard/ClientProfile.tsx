import React from "react";
import {
  Typography,
  Stack,
  TextField,
  InputAdornment,
  Button,
  Divider,
  IconButton,
  Grid,
} from "@mui/material";
import { SidebarLayout } from "../../../components";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

/**
 * Dashboard for admin
 * Displays all the programs made by him
 * @
 */

const ClientProfile = () => {
  return (
    <SidebarLayout>
      <Stack
        direction="row"
        justifyContent={"end"}
        columnGap={3}
        sx={{ my: 5 }}
      >
        <Button variant="contained" color="error">
          Deactivate client account
        </Button>
        <Button variant="contained">Create a client account</Button>
      </Stack>
      <Stack direction="row">
        <Stack
          rowGap={2}
          sx={{ width: "500px", padding: 3, borderRadius: 2 }}
          boxShadow={2}
        >
          <Stack direction="row" justifyContent="end">
            <IconButton>
              <ModeEditOutlineOutlinedIcon />
            </IconButton>
          </Stack>
          <Stack direction="row">
            <Typography sx={{ flexGrow: 1 }} variant="h2">
              Misk Foundation
            </Typography>
            <Typography>Logo Here</Typography>
          </Stack>
          <Divider orientation="horizontal" flexItem />
          <Grid container rowSpacing={1} columnSpacing={{ xs: 2 }}>
            <Grid item xs={6}>
              <Typography>
                <b>First name: </b>Al Jowhara
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <b>Last name: </b>Mohammed
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <b>Email: </b>Aljohara@misk.sa
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <b>Job title: </b>Manager
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                <b>Country: </b>Saudi Arabia
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                <b>Contact Number: </b>+99233 353 43433
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                <b>Access level: </b>Program Manager
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
      <Stack rowGap={3} sx={{ mt: 5 }}>
        <Typography variant="h2">Application stats for billing</Typography>
        <Button
          sx={{ padding: 0, borderRadius: 3, boxShadow: "0 0 5px gray" }}
          fullWidth
        >
          <Stack direction="row" sx={{ width: "100%" }}>
            <Stack
              sx={{
                py: 3,
                px: 2,
                backgroundColor: "#fff3e0",
                borderRadius: "12px 0 0 12px",
              }}
              direction="column"
            >
              <Typography variant="h2">Jan 2023</Typography>
              <Typography>1st - 31st</Typography>
            </Stack>
            <Stack sx={{ py: 3, px: 2 }} direction="column">
              <Typography variant="h2">
                <ArticleOutlinedIcon /> 1,520
              </Typography>
              <Typography>Total applications received</Typography>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Stack sx={{ py: 3, px: 2, flexGrow: 1 }} direction="column">
              <Typography variant="h2">
                <DeleteForeverOutlinedIcon /> 600
              </Typography>
              <Typography>Auto disqualified</Typography>
            </Stack>
          </Stack>
        </Button>
        <Button
          sx={{ padding: 0, borderRadius: 3, boxShadow: "0 0 5px gray" }}
          fullWidth
        >
          <Stack direction="row" sx={{ width: "100%" }}>
            <Stack
              sx={{
                py: 3,
                px: 2,
                backgroundColor: "#e0f7fa",
                borderRadius: "12px 0 0 12px",
              }}
              direction="column"
            >
              <Typography variant="h2">Jan 2023</Typography>
              <Typography>1st - 31st</Typography>
            </Stack>
            <Stack sx={{ py: 3, px: 2 }} direction="column">
              <Typography variant="h2">
                <ArticleOutlinedIcon /> 1,520
              </Typography>
              <Typography>Total applications received</Typography>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Stack sx={{ py: 3, px: 2, flexGrow: 1 }} direction="column">
              <Typography variant="h2">
                <DeleteForeverOutlinedIcon /> 600
              </Typography>
              <Typography>Auto disqualified</Typography>
            </Stack>
          </Stack>
        </Button>
      </Stack>
    </SidebarLayout>
  );
};

export default ClientProfile;
