import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  Input,
  Typography,
  Stack,
  Button,
  Divider,
  Box,
} from "@mui/material";
import { ApplicationFormCard, SidebarLayout } from "../../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  adminGetMemberAccounts,
  inviteAdminCoworker as inviteCoworker,
  selectAdminMemberAccounts,
  useAppDispatch,
  useAppSelector,
} from "../../../appStore";
import { addNewAlert } from "../../../utils/functions/addNewAlert";

/**
 * InviteCoworker component for program providers
 */

const InviteCoworker = () => {
  const dispatch = useAppDispatch();
  const accounts = useAppSelector(selectAdminMemberAccounts);
  const [memberAccounts, setMemberAccounts] = useState(accounts);
  const [formData, setFormData] = useState({
    email: "",
  });
  const { email } = formData;
  useEffect(() => {
    dispatch(adminGetMemberAccounts());
  }, []);
  useEffect(() => {
    setMemberAccounts(accounts);
  }, [accounts]);
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    const action = await dispatch(inviteCoworker(formData));
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
    <SidebarLayout title="Invite your coworker as an admin" logo>
      <Box marginX={"auto"} maxWidth={"600px"}>
        <Box padding={5} marginBottom={2} borderRadius={2} boxShadow={3}>
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
              Invite member
              <ArrowForwardIosIcon sx={{ ml: 1 }} />
            </Button>
          </form>
        </Box>
        <Stack direction="row" flexWrap={"wrap"} rowGap={3} columnGap={3}>
          <ApplicationFormCard
            headerBgColor="black"
            headerColor="white"
            title="Members in the account"
          >
            <Stack divider={<Divider orientation="horizontal" flexItem />}>
              {memberAccounts.map((account) => (
                <Stack flexDirection="row" alignItems="center">
                  <Stack sx={{ flexGrow: 1 }}>
                    <Typography variant="h2">{`${account.firstName} ${account.lastName}`}</Typography>
                    <Typography>{account.email}</Typography>
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
              ))}
            </Stack>
          </ApplicationFormCard>
        </Stack>
      </Box>
    </SidebarLayout>
  );
};

export default InviteCoworker;
