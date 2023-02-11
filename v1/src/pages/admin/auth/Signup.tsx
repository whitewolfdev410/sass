import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FormControl, Input, Typography, Button, Grid } from "@mui/material";
import { AuthPageLayout } from "../../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useAppDispatch, adminSignup as signup } from "../../../appStore";
import { AdminSignupType } from "../../../types";
import { checkIfEmail, isEmpty } from "../../../utils/functions";
import { addNewAlert } from "../../../utils/functions/addNewAlert";

/**
 * Signup component for admins
 */

interface SignupType extends AdminSignupType {
  confirmPassword?: string;
}

const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [formData, setFormData] = useState<SignupType>({
    firstName: "",
    lastName: "",
    email: searchParams.get("email") ?? "",
    password: "",
    confirmPassword: "",
    invitationCode: searchParams.get("invitationCode") ?? "",
  });
  const [isValidated, setIsValidated] = useState<boolean>(false);

  const { email, password, confirmPassword, firstName, lastName } = formData;

  useEffect(() => {
    checkValidation();
  }, [formData]);

  const checkValidation = () => {
    if (
      !checkIfEmail(email) ||
      password !== confirmPassword ||
      isEmpty(firstName, lastName, password)
    ) {
      setIsValidated(false);
    } else {
      setIsValidated(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    delete formData.confirmPassword;
    const action = await dispatch(signup(formData));
    if (action.meta.requestStatus === "fulfilled") {
      navigate("/signin");
      addNewAlert(dispatch, {
        type: "success",
        title: "Sign up",
        msg: "Successfully signed up",
      });
    } else if (action.meta.requestStatus === "rejected") {
      addNewAlert(dispatch, {
        type: "error",
        title: "Sign up",
        msg: "Sorry, but you are not invited to this provider",
      });
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
          <a href="/signin" style={{ textDecoration: "underline" }}>
            Sign in
          </a>
        </Typography>
      </form>
    </AuthPageLayout>
  );
};

export default Signup;
