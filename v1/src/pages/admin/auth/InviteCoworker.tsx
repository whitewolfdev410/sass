import { useState } from "react";
import {
  FormControl,
  Input,
  Typography,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import { ApplicationFormCard, AuthPageLayout } from "../../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/**
 * InviteCoworker component for program providers
 */

const InviteCoworker = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
  };
  const { email } = formData;
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

        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ mt: 3, py: 3 }}
          type="submit"
        >
          Invite admin
          <ArrowForwardIosIcon sx={{ ml: 1 }} />
        </Button>
      </form>
    </AuthPageLayout>
  );
};

export default InviteCoworker;
