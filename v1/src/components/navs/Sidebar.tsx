import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, MenuItem, Stack } from "@mui/material";
import { Logo } from "..";
import HomeIconPrimary from "../../assets/icons/home-sidebar-icon-primary.svg";
import BackIconPrimary from "../../assets/icons/back-sidebar-icon-primary.svg";
import {
  authLogout,
  selectCurrentRoleIndex,
  selectRoles,
  setCurrentRoleIndexTo,
  useAppDispatch,
  useAppSelector,
} from "../../appStore";
import MenuDropdown from "../layout/MenuDropdown";

type Props = {
  logo?: boolean;
  screen?: any;
};

/**
 *  Base sidebar component
 * @param logo - boolean, optional : detaerines if the logo is shown
 */

const Sidebar = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const flag = localStorage.getItem("login");
  const handleLogout = () => {
    dispatch(authLogout());
  };
  const [currentRoles, setCurrentRoles] = useState(useAppSelector(selectRoles));
  const [currentRoleIndex, setCurrentRoleIndex] = useState(
    useAppSelector(selectCurrentRoleIndex)
  );

  const switchRoleTo = (index: number) => {
    dispatch(setCurrentRoleIndexTo(index));
  };

  return (
    <Box
      sx={{
        width: "77px",
        boxShadow: "var(--shadow-2)",
        height: {
          xs: "59px",
          md: "100vh",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "50px 0",
        gap: "10px",
        position: "sticky",
        top: 0,
      }}
    >
      {props.logo && (
        <Box sx={{ maxWidth: "50px" }}>
          {" "}
          <Logo />
        </Box>
      )}

      {/* <Button sx={{ color: "black", mb: props.logo ? 0 : 3 }}>
				<MenuIcon fontSize="medium" />
			</Button> */}

      <Stack
        spacing={2}
        direction="column"
        sx={{
          button: {
            filter: "grayscale(1)",
            "&:hover": {
              filter: "grayscale(0)",
              bgcolor: "transparent",
            },
          },
        }}
      >
        <Button onClick={() => navigate(`${props.screen}`, { replace: true })}>
          <img src={BackIconPrimary} width="24px" height="24px" />
        </Button>

        {flag === "true" && (
          <Button>
            <img src={HomeIconPrimary} width="24px" height="24px" />
          </Button>
        )}
      </Stack>
      <MenuDropdown
        title={
          <Avatar
            sx={{
              bgcolor: "info.main",
              width: "28px",
              height: "28px",
              fontSize: 14,
            }}
          >
            NT
          </Avatar>
        }
      >
        <>
          {currentRoles.map(
            ({ persona }: { persona: string; role: string }, index) => {
              if (index !== currentRoleIndex) {
                return (
                  <MenuItem key={persona} onClick={() => switchRoleTo(index)}>
                    Go as {persona}
                  </MenuItem>
                );
              }
            }
          )}
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </>
      </MenuDropdown>
    </Box>
  );
};

export default Sidebar;
