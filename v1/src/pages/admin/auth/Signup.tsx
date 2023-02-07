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
  Grid,
} from "@mui/material";
import { AuthPageLayout } from "../../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  useAppDispatch,
  useAppSelector,
  programProviderSignup as signup,
  selectProviderProfile,
} from "../../../appStore";
import { ProviderSignupType } from "../../../types";

/**
 * Signup component for program providers
 */

interface SignupType extends ProviderSignupType {
  confirmPassword: string;
}

const Signup = () => {
  const dispatch = useAppDispatch();
  const providerProfile = useAppSelector(selectProviderProfile);
  const navigate = useNavigate();

  const { invitationCode } = useParams();

  const [formData, setFormData] = useState<SignupType>({
    firstName: providerProfile.firstName ?? "",
    lastName: providerProfile.lastName ?? "",
    email: providerProfile.email ?? "",
    password: "",
    confirmPassword: "",
    invitationCode: invitationCode ?? "",
    jobTitle: providerProfile.jobTitle ?? "",
    phoneNumber: providerProfile.phoneNumber ?? "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    const res = await dispatch(signup(formData));
    if (res.payload) {
      navigate("/provider/signin");
    }
  };
  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    jobTitle,
    phoneNumber,
  } = formData;
  return (
    <AuthPageLayout title="Signup" logo>
      <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
        Get Access to <br /> Manage Programs
      </Typography>

      <form action="" onSubmit={handleSubmit}>
        {/*  */}
        <Grid container columnSpacing={4}>
          <Grid item md={6}>
            <FormControl variant="standard" sx={{ my: 3 }}>
              <label>First Name*</label>
              <Input
                onChange={handleChange}
                value={firstName}
                name="firstName"
                required
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard" sx={{ my: 3 }}>
              <label>Last Name*</label>
              <Input
                onChange={handleChange}
                value={lastName}
                name="lastName"
                required
              />
            </FormControl>
          </Grid>
        </Grid>

        <FormControl variant="standard" fullWidth sx={{ mt: 3, mb: 1 }}>
          <label>Email*</label>
          <Input onChange={handleChange} value={email} name="email" required />
        </FormControl>

        <Grid container columnSpacing={4}>
          <Grid item md={6}>
            <FormControl variant="standard" sx={{ my: 3 }}>
              <label>Job title</label>
              <Input onChange={handleChange} value={jobTitle} name="jobTitle" />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard" sx={{ my: 3 }}>
              <label>Phone number</label>
              <Input
                onChange={handleChange}
                value={phoneNumber}
                name="phoneNumber"
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container columnSpacing={4}>
          <Grid item md={6}>
            <FormControl variant="standard" sx={{ my: 3 }}>
              <label>Password*</label>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard" sx={{ my: 3 }}>
              <label>Re enter Password*</label>
              <Input
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                required
              />
            </FormControl>
          </Grid>
        </Grid>

        <Typography fontSize={9} textAlign="center">
          By creating the account, I have agreed to the Terms and Conditions and
          Privacy Policy.
        </Typography>

        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ my: 3, py: 3 }}
          type="submit"
        >
          Create an account
          <ArrowForwardIosIcon sx={{ ml: 1 }} />
        </Button>

        <Typography fontFamily="Inter" textAlign="center">
          Already have an account?{" "}
          <a href="" style={{ textDecoration: "underline" }}>
            Sign in
          </a>
        </Typography>
      </form>
    </AuthPageLayout>
  );
};

export default Signup;
