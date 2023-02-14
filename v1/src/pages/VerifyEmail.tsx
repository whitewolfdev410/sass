import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  Input,
  Typography,
  Stack,
  Button,
  Link,
} from "@mui/material";
import { AuthPageLayout } from "../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  selectCurrentEmail,
  useAppDispatch,
  useAppSelector,
  verifyEmail,
} from "../appStore";
import { addNewAlert } from "../utils/functions/addNewAlert";

/**
 * VerifyEmail component for program providers
 */

const VerifyEmail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentEmail = useAppSelector(selectCurrentEmail);

  const [formData, setFormData] = useState({
    email: "",
    verificationCode: "",
  });
  const [editEmail, setEditEmail] = useState(false);
  useEffect(() => {
    setFormData({ ...formData, email: currentEmail });
  }, [currentEmail]);
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    const action = await dispatch(verifyEmail({ verificationCode }));
    if (action.meta.requestStatus === "fulfilled") {
      addNewAlert(dispatch, {
        type: "success",
        title: "Verify Email",
        msg: "Successfly verified",
      });
    } else if (action.meta.requestStatus === "rejected") {
      addNewAlert(dispatch, {
        type: "error",
        title: "Verify Email",
        msg: "Error occured verifying your email",
      });
    }
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
            <Button type="submit" onClick={resendCode}>
              Resend the code
            </Button>
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
          <Button type="submit" onClick={resendCode}>
            Resend 0.50 sec
          </Button>
        </Stack>
      </form>
    </AuthPageLayout>
  );
};

export default VerifyEmail;
