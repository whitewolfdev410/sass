import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  Input,
  Typography,
  Stack,
  Button,
  Link,
} from "@mui/material";
import { AuthPageLayout } from "../../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useAppDispatch } from "../../../appStore";

/**
 * VerifyEmail component for program providers
 */

const VerifyEmail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    verificationCode: "",
  });
  const [editEmail, setEditEmail] = useState(false);
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();
  };
  const resendCode = () => {
    setEditEmail(false);
  };
  const { email, verificationCode } = formData;
  return (
    <AuthPageLayout title="Verify Email" logo>
      <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
        Verify your email <br /> address
      </Typography>

      <form action="" onSubmit={handleSubmit}>
        <Stack flexDirection={"row"} alignItems={"center"}>
          <FormControl variant="standard" fullWidth sx={{ my: 3, flexGrow: 1 }}>
            {editEmail ? (
              <Input
                onChange={handleChange}
                type="email"
                name="email"
                value={email}
              />
            ) : (
              <Typography>{email}</Typography>
            )}
          </FormControl>
          {editEmail ? (
            <Link
              onClick={resendCode}
              sx={{ cursor: "pointer", whiteSpace: "nowrap" }}
            >
              Resend the code
            </Link>
          ) : (
            <Link
              onClick={() => {
                setEditEmail(true);
              }}
              sx={{ cursor: "pointer" }}
            >
              Edit
            </Link>
          )}
        </Stack>

        <FormControl variant="standard" fullWidth sx={{ mt: 3, mb: 1 }}>
          <label>Verification Code</label>
          <Input
            onChange={handleChange}
            type="text"
            name="verificationCode"
            value={verificationCode}
          />
        </FormControl>

        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ mt: 3, py: 3 }}
          type="submit"
        >
          Verify
          <ArrowForwardIosIcon sx={{ ml: 1 }} />
        </Button>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 3 }}
        >
          <Typography>Didn't receive the email?</Typography>
          <Link onClick={resendCode} sx={{ cursor: "pointer" }}>
            Resend 0.50 sec
          </Link>
        </Stack>
      </form>
    </AuthPageLayout>
  );
};

export default VerifyEmail;
