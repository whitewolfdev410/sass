import { useState } from "react";
import {
  FormControl,
  Input,
  Typography,
  Stack,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
  Divider,
} from "@mui/material";
import { ApplicationFormCard, SidebarLayout } from "../../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  inviteProviderCoworker as inviteCoworker,
  useAppDispatch,
} from "../../../appStore";
import { addNewAlert } from "../../../utils/functions/addNewAlert";
import { CONTRIBUTOR, GUEST, OWNER } from "../../../types";

/**
 * InviteCoworker component for program providers
 */

const InviteCoworker = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    userPermission: "",
  });
  const { email, userPermission } = formData;
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleUserPermissionChange = (ev: SelectChangeEvent<string>) => {
    console.log("select value changed", ev.target.value);
    setFormData({ ...formData, userPermission: ev.target.value as string });
  };
  const handleSubmit = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    const action = await dispatch(
      inviteCoworker({ email, role: userPermission })
    );
    if (action.meta.requestStatus === "fulfilled") {
      addNewAlert(dispatch, {
        type: "success",
        title: "Invite coworker",
        msg: "Invitation successfully sent.",
      });
    } else if (action.meta.requestStatus === "rejected") {
      try {
        addNewAlert(dispatch, {
          type: "error",
          title: "Invite coworker",
          msg:
            typeof action.payload === "string"
              ? action.payload
              : "Error while sending invite to your coworker",
        });
      } catch (err) {
        console.log("rejected alert dispath error", err);
      }
    }
  };
  return (
    <SidebarLayout title="Invite your coworker" logo>
      <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
        Invite co-worker
      </Typography>

      <form action="" onSubmit={handleSubmit}>
        <FormControl variant="standard" fullWidth sx={{ mt: 3, mb: 3 }}>
          <label>Email</label>
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
          />
        </FormControl>
        <FormControl fullWidth>
          <label>{"User permission"}</label>
          <Select
            variant="standard"
            value={userPermission}
            onChange={handleUserPermissionChange}
          >
            <MenuItem value={OWNER}>{"Super Admin / Manager"}</MenuItem>
            <MenuItem value={CONTRIBUTOR}>
              {"Standard user / Assistant"}
            </MenuItem>
            <MenuItem value={GUEST}>{"Read-only access"}</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ mt: 3, py: 3 }}
          type="submit"
        >
          Invite member
          <ArrowForwardIosIcon sx={{ ml: 1 }} />
        </Button>
      </form>
      <Stack direction="row" flexWrap={"wrap"} rowGap={3} columnGap={3}>
        <ApplicationFormCard
          headerBgColor="black"
          headerColor="white"
          title="Members in the account"
        >
          <Stack divider={<Divider orientation="horizontal" flexItem />}>
            <Stack flexDirection="row" alignItems="center">
              <Stack sx={{ flexGrow: 1 }}>
                <Typography variant="h2">Junior Dawkins</Typography>
                <Typography>brett@microsoft.com</Typography>
              </Stack>
              <Stack flexDirection="column">
                <Button variant="text" color="error" sx={{ color: "#A80000" }}>
                  Delete question
                </Button>
                <Button variant="text" color="error" sx={{ color: "#A80000" }}>
                  Manage access
                </Button>
              </Stack>
            </Stack>
            <Typography>Niranjan Thampu</Typography>
          </Stack>
        </ApplicationFormCard>
        <ApplicationFormCard
          headerBgColor="black"
          headerColor="white"
          title="Members in the account"
        >
          <Stack divider={<Divider orientation="horizontal" flexItem />}>
            <Stack flexDirection="row" alignItems="center">
              <Stack sx={{ flexGrow: 1 }}>
                <Typography variant="h2">Junior Dawkins</Typography>
                <Typography>brett@microsoft.com</Typography>
              </Stack>
              <Stack flexDirection="column">
                <Button variant="text" color="error" sx={{ color: "#A80000" }}>
                  Delete question
                </Button>
                <Button variant="text" color="error" sx={{ color: "#A80000" }}>
                  Manage access
                </Button>
              </Stack>
            </Stack>
            <Typography>Niranjan Thampu</Typography>
          </Stack>
        </ApplicationFormCard>
        <ApplicationFormCard
          headerBgColor="black"
          headerColor="white"
          title="Members in the account"
        >
          <Stack divider={<Divider orientation="horizontal" flexItem />}>
            <Stack flexDirection="row" alignItems="center">
              <Stack sx={{ flexGrow: 1 }}>
                <Typography variant="h2">Junior Dawkins</Typography>
                <Typography>brett@microsoft.com</Typography>
              </Stack>
              <Stack flexDirection="column">
                <Button variant="text" color="error" sx={{ color: "#A80000" }}>
                  Delete question
                </Button>
                <Button variant="text" color="error" sx={{ color: "#A80000" }}>
                  Manage access
                </Button>
              </Stack>
            </Stack>
            <Typography>Niranjan Thampu</Typography>
          </Stack>
        </ApplicationFormCard>
      </Stack>
    </SidebarLayout>
  );
};

export default InviteCoworker;
