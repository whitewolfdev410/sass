import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Stack,
  TextField,
  InputAdornment,
  Button,
  Divider,
} from "@mui/material";
import { SidebarLayout } from "../../../components";
import SearchIcon from "@mui/icons-material/Search";

/**
 * Dashboard for admin
 * Displays all the programs made by him
 * @
 */

const ClientList = () => {
  const navigate = useNavigate();
  return (
    <SidebarLayout>
      <Typography variant="h1">All Clients</Typography>
      <Stack direction="row" columnGap={3} sx={{ my: 5 }}>
        <TextField
          placeholder="Search by client name"
          sx={{ flexGrow: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained">Create a client account</Button>
      </Stack>
      <Stack rowGap={3}>
        <Button
          sx={{ padding: 0, borderRadius: 3, boxShadow: "0 0 10px gray" }}
          fullWidth
          onClick={() => {
            navigate("client-profile/5a6w5z889-a23s56c");
          }}
        >
          <Stack
            direction="row"
            columnGap={3}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{
              position: "relative",
              py: 8,
              userSelect: "none",
              width: "100%",
            }}
          >
            <Stack
              sx={{
                position: "absolute",
                top: 15,
                right: 0,
                backgroundColor: "blue",
                color: "white",
                padding: "5px 10px",
              }}
            >
              Invited
            </Stack>
            <Stack sx={{ minWidth: "200px" }}>Logo Here</Stack>
            <Stack sx={{ flexGrow: 1 }}>
              <Typography variant="h2">Misk Foundation</Typography>
              <Typography>Country of the client: Saudi Arabia</Typography>
            </Stack>
            <Stack sx={{ minWidth: "300px" }}>
              <Typography variant="h2">20,000</Typography>
              <Typography>Applications received this month</Typography>
            </Stack>
          </Stack>
        </Button>
      </Stack>
    </SidebarLayout>
  );
};

export default ClientList;
