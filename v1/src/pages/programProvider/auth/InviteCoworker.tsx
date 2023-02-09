import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { ApplicationFormCard, AuthPageLayout } from "../../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useAppDispatch } from "../../../appStore";
import "../../../styles/auth-select.css";

/**
 * InviteCoworker component for program providers
 */

const InviteCoworker = () => {
  const [formData, setFormData] = useState({
    email: "",
    userPermission: "",
  });
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleUserPermissionChange = (ev: SelectChangeEvent<string>) => {
    console.log("select value changed", ev.target.value);
    setFormData({ ...formData, userPermission: ev.target.value as string });
  };
  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
  };
  const { email, userPermission } = formData;
  return (
    <AuthPageLayout
      title="Reset Password"
      logo
      extraChildren={
        <>
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
                  <Button
                    variant="text"
                    color="error"
                    sx={{ color: "#A80000" }}
                  >
                    Delete question
                  </Button>
                  <Button
                    variant="text"
                    color="error"
                    sx={{ color: "#A80000" }}
                  >
                    Manage access
                  </Button>
                </Stack>
              </Stack>
              <Typography>Niranjan Thampu</Typography>
            </Stack>
          </ApplicationFormCard>
        </>
      }
    >
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
            <MenuItem value={"admin"}>{"Super Admin / Manager"}</MenuItem>
            <MenuItem value={"user"}>{"Standard user / Assistant"}</MenuItem>
            <MenuItem value={"guest"}>{"Read-only access"}</MenuItem>
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
    </AuthPageLayout>
  );
};

export default InviteCoworker;
