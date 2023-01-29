import {useState} from "react";
import {useNavigate} from "react-router";
import { FormControl, FormControlLabel, Checkbox, Input, Typography, Stack, Button, Grid, Select } from "@mui/material";
// import Select from "react-select";
// import { Country }  from 'country-state-city';
import { AuthPageLayout } from "../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {candidateLogin, candidateSignup, programProviderSignup as signup} from "../../appStore/slices";
import {useAppDispatch} from "../../appStore";

/**
 * Signup component for program providers
 */

const Signup = () => {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	// const countries = Country.getAllCountries();
	//
	// const updatedCountries = countries.map((country: any) => ({
	// 	label: country.name,
	// 	value: country.id,
	// 	...country
	// }));

	const [form, setForm] = useState({
		programProviderID: 0,
		firstName: "",
		lastName: "",
		email: "",
		nationality: "",
		dateOfBirth: "",
		userToken: "",
		candidateID: "" ,
		phoneNumber: "" ,
		currentlyBased: "" ,
		nationalIDNumber: "" ,
		gender: "" ,
		education: "" ,
		experience: "" ,
		resume: "" ,
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
	};

	return (
		<AuthPageLayout title="Signin">
			<Typography variant="h1" component="h1" sx={{ mb: 3 }}>
				Sign up to <br /> Apply for Programs
			</Typography>

			<form action=""
				  onSubmit={async (e) => {
					  e.preventDefault();
					  const response = await dispatch(candidateSignup(form));
					  console.log("response",response)
					  navigate('/candidate/dashboard', {replace: true})
				  }}>
				{/*  */}
				<Grid container columnSpacing={4}>
					<Grid item md={6}>
						<FormControl variant="standard" sx={{ my: 3 }}>
							<label>First Name*</label>
							<Input onChange={handleChange} value={form.firstName} name="firstName" required />
						</FormControl>
					</Grid>
					<Grid item md={6}>
						<FormControl variant="standard" sx={{ my: 3 }}>
							<label>Last Name*</label>
							<Input onChange={handleChange} value={form.lastName} name="lastName" required/>
						</FormControl>
					</Grid>
				</Grid>

				<FormControl variant="standard" fullWidth sx={{ mt: 3, mb: 1 }}>
					<label>Email*</label>
					<Input onChange={handleChange} value={form.email} name="email" required/>
				</FormControl>

				<Grid container columnSpacing={4}>
					<Grid item md={6}>
						<FormControl variant="standard" sx={{ my: 3 }} fullWidth>
							<label>Nationality </label>
							<Select
								id="country"
								name="country"
								// label="country"
								// options={updatedCountries}
								value={form.nationality}
								onChange={(value: any) => {
									setForm({...form, nationality: value  });
								}}
							/>
						</FormControl>
					</Grid>
					<Grid item md={6}>
						<FormControl variant="standard" sx={{ my: 3 }} fullWidth>
							<label>Date of birth</label>
							<Input type="date" onChange={handleChange} value={form.dateOfBirth} name="dateOfBirth"/>
						</FormControl>
					</Grid>
				</Grid>

				<Grid container columnSpacing={4}>
					<Grid item md={6}>
						<FormControl variant="standard" sx={{ my: 3 }}>
							<label>Password*</label>
							<Input onChange={handleChange} value={form.userToken} name="userToken" required />
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
					By creating the account, I have agreed to the Terms and Conditions and Privacy Policy.
				</Typography>

				<Button variant="contained" size="large" fullWidth sx={{ my: 3, py: 3 }} type="submit">
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
