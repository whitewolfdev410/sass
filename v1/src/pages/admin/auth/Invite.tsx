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
  Grid,
} from "@mui/material";
import { AuthPageLayout, FileUpload } from "../../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  useAppDispatch,
  programProviderSignup as signup,
} from "../../../appStore";
import { ProgramProviderType } from "../../../types";

/**
 * Invite component for program providers
 */

const Invite = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState<ProgramProviderType>({
    programProviderID: 0,
    firstName: "",
    lastName: "",
    email: "",
    userToken: "",
    phoneNumber: "",
    jobTitle: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleUpload = (acceptedFiles: any) => {};
  return (
    <AuthPageLayout title="Signup" logo>
      <Stack flexDirection="row" alignItems="center" sx={{ width: "100%" }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ mb: 3, whiteSpace: "nowrap", flexGrow: 1 }}
        >
          Create Master
          <br />
          Client Account
        </Typography>
        <FileUpload
          onUpload={handleUpload}
          title=""
          desc="Click here to upload company logo"
          logo={false}
          customStyle={{ width: "150px", height: "100px" }}
        />
      </Stack>

      <form
        action=""
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        {/*  */}
        <Grid container columnSpacing={4}>
          <Grid item md={6}>
            <FormControl variant="standard" sx={{ my: 3 }}>
              <label>First Name*</label>
              <Input
                onChange={handleChange}
                value={form.firstName}
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
                value={form.lastName}
                name="lastName"
                required
              />
            </FormControl>
          </Grid>
        </Grid>

        <FormControl variant="standard" fullWidth sx={{ mt: 3, mb: 1 }}>
          <label>Email*</label>
          <Input
            onChange={handleChange}
            value={form.email}
            name="email"
            required
          />
        </FormControl>

        <Grid container columnSpacing={4}>
          <Grid item md={6}>
            <FormControl variant="standard" sx={{ my: 3 }}>
              <label>Job title</label>
              <Input
                onChange={handleChange}
                value={form.jobTitle}
                name="jobTitle"
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard" sx={{ my: 3 }}>
              <label>Phone number</label>
              <Input
                onChange={handleChange}
                value={form.phoneNumber}
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
                onChange={handleChange}
                value={form.userToken}
                name="userToken"
                required
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard" sx={{ my: 3 }}>
              <label>Re enter Password*</label>
              <Input onChange={handleChange} name="" required />
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

export default Invite;