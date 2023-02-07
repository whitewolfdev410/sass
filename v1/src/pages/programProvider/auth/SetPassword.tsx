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
  TextField,
} from "@mui/material";
import { AuthPageLayout } from "../../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  useAppDispatch,
  programProviderLogin as login,
} from "../../../appStore";

/**
 * SetPassword component for program providers
 */

const SetPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
  };
  const { password, confirmPassword } = formData;
  return (
    <AuthPageLayout title="Reset Password" logo>
      <Typography variant="h1" component="h1">
        Please enter a password to
        <br />
        create account
      </Typography>

      <form action="" onSubmit={handleSubmit}>
        <FormControl variant="standard" fullWidth sx={{ mt: 3, mb: 1 }}>
          <label>Password</label>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
          />
        </FormControl>
        <FormControl variant="standard" fullWidth sx={{ mt: 3, mb: 1 }}>
          <label>Re-enter</label>
          <Input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            value={confirmPassword}
          />
        </FormControl>

        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ mt: 3, py: 3 }}
          type="submit"
        >
          Create Account
          <ArrowForwardIosIcon sx={{ ml: 1 }} />
        </Button>
      </form>
    </AuthPageLayout>
  );
};

export default SetPassword;
