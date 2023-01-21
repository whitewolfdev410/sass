import { FormControl, FormControlLabel, Checkbox, Input, Typography, Stack, Button, Link } from "@mui/material";
import { AuthPageLayout } from "../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/**
 * Login component for program providers
 */

const Login = () => {
	return (
		<AuthPageLayout title="Signin">
			<Typography variant="h1" component="h1" sx={{ mb: 3 }}>
				Login in to <br /> Manage Applications
			</Typography>

			<form action="">
				<FormControl variant="standard" fullWidth sx={{ my: 3 }}>
					<label>First Name*</label>
					<Input></Input>
				</FormControl>

				<FormControl variant="standard" fullWidth sx={{ mt: 3, mb: 1 }}>
					<label>Password*</label>
					<Input></Input>
				</FormControl>

				<Stack direction="row" justifyContent="space-between" alignItems="center">
					<FormControlLabel
						label={
							<Typography fontSize="16px" fontFamily="Inter">
								Remember me
							</Typography>
						}
						control={<Checkbox />}
					/>

					<Link fontSize={14} fontFamily="Inter" color="primary.main" href="">
						Forgot Password
					</Link>
				</Stack>

				<Button variant="contained" size="large" fullWidth sx={{ mt: 3, py: 3 }}>
					Log in
					<ArrowForwardIosIcon sx={{ ml: 1 }} />
				</Button>
			</form>
			<Typography fontFamily="Inter" textAlign="center" marginTop={2}>
				Don’t have an account?
				<a href="" style={{ textDecoration: "underline" }}>
					Sign up
				</a>
			</Typography>
		</AuthPageLayout>
	);
};

export default Login;
