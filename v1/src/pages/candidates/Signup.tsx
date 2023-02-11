import { useState } from "react";
import { useNavigate } from "react-router";
import {
  FormControl,
  Input,
  Typography,
  Stack,
  Button,
  Grid,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
// import Select from "react-select";
import { Country } from "country-state-city";
import { AuthPageLayout } from "../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { candidateSignup as signup } from "../../appStore/slices";
import { useAppDispatch } from "../../appStore";
import "../../styles/auth-select.css";
import { addNewAlert } from "../../utils/functions/addNewAlert";

/**
 * Signup component for program providers
 */

const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [countries, setCountries] = useState(Country.getAllCountries());
  //
  // const updatedCountries = countries.map((country: any) => ({
  // 	label: country.name,
  // 	value: country.id,
  // 	...country
  // }));

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    nationality: "",
    dateOfBirth: "",
  });
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    nationality,
    dateOfBirth,
  } = formData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNationalitySelectChange = (ev: SelectChangeEvent<string>) => {
    setFormData({ ...formData, nationality: ev.target.value as string });
  };

  const handleSubmit = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();
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
        msg:
          typeof action.payload === "string"
            ? action.payload
            : "Sorry, error occured while signing up",
      });
    }
  };

  return (
    <AuthPageLayout title="Signin">
      <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
        Sign up to <br /> Apply for Programs
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

        <Grid container columnSpacing={4} alignItems={"center"}>
          <Grid item md={6}>
            <FormControl fullWidth>
              <label>{"Nationality"}</label>
              <Select
                variant="standard"
                value={nationality}
                onChange={handleNationalitySelectChange}
              >
                {countries.map((country: any) => (
                  <MenuItem value={country.name}>{country.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard" sx={{ my: 3 }} fullWidth>
              <label>Date of birth</label>
              <Input
                type="date"
                onChange={handleChange}
                value={dateOfBirth}
                name="dateOfBirth"
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
                onChange={handleChange}
                value={password}
                name="password"
                required
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard" sx={{ my: 3 }}>
              <label>Re enter Password*</label>
              <Input
                type="password"
                onChange={handleChange}
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
