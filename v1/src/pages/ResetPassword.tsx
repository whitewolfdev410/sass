import { useState } from "react";
import { FormControl, Input, Typography, Button } from "@mui/material";
import { AuthPageLayout } from "../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/**
 * ResetPassword component for program providers
 */

const ResetPassword = () => {
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
        Reset your password
      </Typography>
      <Typography sx={{ mb: 3 }}>
        No worries, we will email you the instruction
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
          Confirm & login
          <ArrowForwardIosIcon sx={{ ml: 1 }} />
        </Button>
      </form>
    </AuthPageLayout>
  );
};

export default ResetPassword;
