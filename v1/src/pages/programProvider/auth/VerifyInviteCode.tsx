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
import { useAppDispatch } from "../../../appStore";

/**
 * VerifyInviteCode component for program providers
 */

const VerifyInviteCode = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    invitationCode: "",
  });
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    // const res = await dispatch(verify(formData));
    // if (res.payload) {
    //   navigate(`/provider/signup/${invitationCode}`);
    // } else {
    // }
  };
  const { email, invitationCode } = formData;
  return (
    <AuthPageLayout title="Verify Your Invite Code">
      <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
        Verify your invite code
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
          <label>Invite Code*</label>
          <Input
            onChange={handleChange}
            type="text"
            name="invitationCode"
            value={invitationCode}
          ></Input>
        </FormControl>

        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ mt: 3, py: 3, color: "white", fontWeight: "bold" }}
          type="submit"
          color="success"
        >
          Verify
          <ArrowForwardIosIcon sx={{ ml: 1 }} />
        </Button>
      </form>
    </AuthPageLayout>
  );
};

export default VerifyInviteCode;
