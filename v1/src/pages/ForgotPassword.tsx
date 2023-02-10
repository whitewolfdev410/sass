import { useState } from "react";
import { FormControl, Input, Typography, Button } from "@mui/material";
import { AuthPageLayout } from "../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/**
 * ForgotPassword component for program providers
 */

const ForgotPassword = () => {
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
      </form>
    </AuthPageLayout>
  );
};

export default ForgotPassword;
