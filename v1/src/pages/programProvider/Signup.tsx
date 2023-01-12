import { FormControl, FormControlLabel, Checkbox, Input, Typography, Stack, Button, Grid } from "@mui/material";
import { AuthPageLayout } from "../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/**
 * Signup component for program providers
 */

const Signup = () => {
	return (
		<AuthPageLayout title="Signin" logo>
			<Typography variant="h1" component="h1" sx={{ mb: 3 }}>
				Get Access to <br /> Manage Programs
			</Typography>

			<form action="">
				{/*  */}
				<Grid container columnSpacing={4}>
					<Grid item md={6}>
						<FormControl variant="standard" sx={{ my: 3 }}>
							<label>First Name*</label>
							<Input></Input>
						</FormControl>
					</Grid>
					<Grid item md={6}>
						<FormControl variant="standard" sx={{ my: 3 }}>
							<label>Last Name*</label>
							<Input></Input>
						</FormControl>
					</Grid>
				</Grid>

				<FormControl variant="standard" fullWidth sx={{ mt: 3, mb: 1 }}>
					<label>Email*</label>
					<Input></Input>
				</FormControl>

				<Grid container columnSpacing={4}>
					<Grid item md={6}>
						<FormControl variant="standard" sx={{ my: 3 }}>
							<label>Job title</label>
							<Input></Input>
						</FormControl>
					</Grid>
					<Grid item md={6}>
						<FormControl variant="standard" sx={{ my: 3 }}>
							<label>Phone number</label>
							<Input></Input>
						</FormControl>
					</Grid>
				</Grid>

				<Grid container columnSpacing={4}>
					<Grid item md={6}>
						<FormControl variant="standard" sx={{ my: 3 }}>
							<label>Password*</label>
							<Input></Input>
						</FormControl>
					</Grid>
					<Grid item md={6}>
						<FormControl variant="standard" sx={{ my: 3 }}>
							<label>Re enter Password*</label>
							<Input></Input>
						</FormControl>
					</Grid>
				</Grid>

				<Typography fontSize={9} textAlign="center">
					By creating the account, I have agreed to the Terms and Conditions and Privacy Policy.
				</Typography>

				<Button variant="contained" size="large" fullWidth sx={{ my: 3, py: 3 }}>
					Create an account
					<ArrowForwardIosIcon sx={{ ml: 1 }} />
				</Button>

				<Typography fontSize={16} fontFamily="Inter" textAlign="center">
					Already have an account? <a href="">Sign in</a>
				</Typography>
			</form>
		</AuthPageLayout>
	);
};

export default Signup;
