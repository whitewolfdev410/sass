import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  Typography,
  Stack,
  Button,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { AuthPageLayout } from "../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  authLogin,
  selectProviderInfo,
  useAppDispatch,
  useAppSelector,
} from "../appStore";
import { addNewAlert } from "../utils/functions/addNewAlert";

/**
 * Login component for program providers
 */

const Login = () => {
  const dispatch = useAppDispatch();
  const providerInfo = useAppSelector(selectProviderInfo);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    providerId: providerInfo?.providerId as string,
  });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    const action = await dispatch(authLogin(formData));
    if (action.meta.requestStatus === "fulfilled") {
    } else if (action.meta.requestStatus === "rejected") {
      addNewAlert(dispatch, {
        type: "error",
        title: "Login failed",
        msg: action.payload,
      });
    }
  };
  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  const { email, password } = formData;
  return (
    <AuthPageLayout title="Signin">
      <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
        Welcome to Log in
      </Typography>

      <form action="" onSubmit={handleSubmit}>
        <FormControl variant="standard" fullWidth sx={{ my: 3 }}>
          <label>Email*</label>
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
          ></Input>
        </FormControl>

        <FormControl variant="standard" fullWidth sx={{ mt: 3, mb: 1 }}>
          <label>Password*</label>
          <Input
            onChange={handleChange}
            type={passwordVisibility ? "text" : "password"}
            name="password"
            value={password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility}>
                  {passwordVisibility ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
          ></Input>
        </FormControl>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FormControlLabel
            label={
              <Typography fontSize="16px" fontFamily="Inter">
                Remember me
              </Typography>
            }
            control={<Checkbox />}
          />

          <Link
            fontSize={14}
            fontFamily="Inter"
            color="primary.main"
            href="/provider/forgot-password"
          >
            Forgot Password
          </Link>
        </Stack>

        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ mt: 3, py: 3 }}
          type="submit"
        >
          Log in
          <ArrowForwardIosIcon sx={{ ml: 1 }} />
        </Button>
      </form>
    </AuthPageLayout>
  );
};

export default Login;