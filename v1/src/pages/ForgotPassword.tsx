import { useState } from "react";
import { FormControl, Input, Typography, Button, Link } from "@mui/material";
import { AuthPageLayout } from "../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  selectProviderInfo,
  sendResetPasswordRequest as sendRequest,
  useAppDispatch,
  useAppSelector,
} from "../appStore";
import { addNewAlert } from "../utils/functions/addNewAlert";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "../types";

/**
 * ForgotPassword component for program providers
 */

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const providerInfo = useAppSelector(selectProviderInfo);
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    const action = await dispatch(sendRequest(formData));
    if (action.meta.requestStatus === "fulfilled") {
      addNewAlert(dispatch, {
        type: "success",
        title: "Reset passowrd",
        msg: "Request accepted",
      });
    } else if (action.meta.requestStatus === "rejected") {
      addNewAlert(dispatch, {
        type: "error",
        title: "Reset password",
        msg: "Error occured while resetting password",
      });
    }
  };
  const { email } = formData;
  return (
    <AuthPageLayout title="Reset Password" logo>
      <Typography variant="h1" component="h1">
        Forgot Password?
      </Typography>
      <Typography sx={{ mb: 3 }}>
        No worries, we will email you the instruction
      </Typography>

      <form action="" onSubmit={handleSubmit}>
        <FormControl variant="standard" fullWidth sx={{ mt: 3, mb: 1 }}>
          <label>Your email</label>
          <Input
            onChange={handleChange}
            type="text"
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
          Reset password
          <ArrowForwardIosIcon sx={{ ml: 1 }} />
        </Button>
        <Link onClick={() => navigate(-1)}>Go back</Link>
      </form>
    </AuthPageLayout>
  );
};

export default ForgotPassword;
