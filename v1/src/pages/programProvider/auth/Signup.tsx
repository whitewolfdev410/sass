import { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
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
  verifyInviteCode as verify,
} from "../../../appStore";
import { ProviderSignupType } from "../../../types";
import { checkIfEmail, isEmpty } from "../../../utils/functions";

/**
 * Signup component for program providers
 */

interface SignupType extends ProviderSignupType {
  confirmPassword?: string;
}

const Signup = () => {
  const dispatch = useAppDispatch();
  const providerProfile = useAppSelector(selectProviderProfile);
  const navigate = useNavigate();
  const { provider } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [formData, setFormData] = useState<SignupType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    invitationCode: searchParams.get("invitationCode") ?? "",
    jobTitle: "",
    phoneNumber: "",
    provider: provider as string,
  });
  const [isValidated, setIsValidated] = useState<boolean>(false);

  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    jobTitle,
    phoneNumber,
  } = formData;

  useEffect(() => {
    dispatch(
      verify({
        email: searchParams.get("email") as string,
        inviteCode: searchParams.get("invitationCode") as string,
        provider: provider as string,
      })
    );
  }, []);

  useEffect(() => {
    setFormData({
      ...formData,
      firstName: providerProfile.firstName ?? "",
      lastName: providerProfile.lastName ?? "",
      email: providerProfile.email ?? "",
      jobTitle: providerProfile.jobTitle ?? "",
      phoneNumber: providerProfile.phoneNumber ?? "",
    });
  }, [providerProfile]);

  useEffect(() => {
    if (
      !checkIfEmail(email) ||
      password !== confirmPassword ||
      isEmpty(firstName, lastName, jobTitle, phoneNumber, password)
    ) {
      setIsValidated(false);
    } else {
      setIsValidated(true);
    }
  }, [formData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    delete formData.confirmPassword;
    const res = await dispatch(signup(formData));
    if (res.payload) {
      navigate("../../signin");
    }
  };
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
          disabled={!isValidated}
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
