import { FormControl, FormControlLabel, Checkbox, Input, Typography, Stack, Button, Link } from "@mui/material";
import { AuthPageLayout } from "../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { useAppDispatch, programProviderLogin as login } from "../../appStore";

/**
 * Login component for program providers
 */

const Login = () => {
	const dispatch = useAppDispatch();

	const [form, setForm] = useState({
		emailID: "",
		token: "",
	});
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
	};
	return (
		<AuthPageLayout title="Signin" logo>
			<Typography variant="h1" component="h1" sx={{ mb: 3 }}>
				Login in to <br /> Manage Programs
			</Typography>

			<form
				action=""
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(login(form));
				}}>
				<FormControl variant="standard" fullWidth sx={{ my: 3 }}>
					<label>Email*</label>
					<Input onChange={handleChange} name="emailID" value={form.emailID}></Input>
				</FormControl>

				<FormControl variant="standard" fullWidth sx={{ mt: 3, mb: 1 }}>
					<label>Password*</label>
					<Input onChange={handleChange} value={form.token} name="token"></Input>
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

				<Button variant="contained" size="large" fullWidth sx={{ mt: 3, py: 3 }} type="submit">
					Log in
					<ArrowForwardIosIcon sx={{ ml: 1 }} />
				</Button>
			</form>
		</AuthPageLayout>
	);
};

export default Login;
