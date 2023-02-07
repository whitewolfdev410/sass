import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { AuthPageLayout } from "../../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  useAppDispatch,
  programProviderLogin as login,
} from "../../../appStore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

/**
 * Login component for program providers
 */

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    dispatch(login(formData));
  };
  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  const { email, password } = formData;
  return (
    <AuthPageLayout title="Signin" logo>
      <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
        Login in to <br /> Manage Programs
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
