import React, { useState } from "react";
import {
	Box,
	Button,
	FormControl,
	Grid,
	Input,
	Stack,
	Typography,
} from "@mui/material";
import {
	CandidateApplicationNav,
	ProgramSummaryCard,
} from "../../components/CandidatesComponents/shared";
import { SidebarLayout } from "../../components/layout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { candidateSignup } from "../../appStore/slices";
import { useAppDispatch } from "../../appStore";
import Hidden from "@mui/material/Hidden";

const CreateAccount = () => {
	const dispatch = useAppDispatch();
	const applicationData = JSON.parse(
		localStorage.getItem("candidateData") || "[]"
	);

	const [form, setForm] = useState({
		userToken: "",
		rePassword: "",
	});

	const handleChange = (event: any) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const onHandleSubmit = async () => {
		applicationData.userToken = form.userToken;
		const response = await dispatch(candidateSignup(applicationData));
		console.log("response", response);
	};

	return (
		<SidebarLayout screen="/candidate/apply/program-application">
			<Box
				sx={{ mt: "-50px" }}
				className="header">
				<CandidateApplicationNav completed={2} />
			</Box>
			<Stack
				direction="row"
				flexWrap="wrap"
				gap={5}
				mt="144px"
				ml="86px"
				mr="80px"
				className="content-wrapper"
				justifyContent="space-between">
				<Box
					className="auth-candidate"
					sx={{ mt: "10px" }}>
					<Typography
						variant="h1"
						component="h1"
						sx={{ mb: 3 }}>
						Final step- create your <br /> account
					</Typography>
					<Typography
						fontSize={14}
						sx={{ mb: 3 }}>
						By creating the account, I have agreed to the Terms and Conditions
						and Privacy Policy.
					</Typography>
					<form>
						<Grid
							container
							columnSpacing={4}>
							<Grid
								item
								md={6}>
								<FormControl
									variant="standard"
									sx={{ my: 3 }}>
									<label>Password*</label>
									<Input
										onChange={handleChange}
										value={form.userToken}
										name="userToken"
										required
									/>
								</FormControl>
							</Grid>
							<Grid
								item
								md={6}>
								<FormControl
									variant="standard"
									sx={{ my: 3 }}>
									<label>Re enter Password*</label>
									<Input
										onChange={handleChange}
										value={form.rePassword}
										name="rePassword"
										required
									/>
								</FormControl>
							</Grid>
						</Grid>

						<Button
							variant="contained"
							size="large"
							fullWidth
							sx={{ my: 3, py: 3 }}
							onClick={() => onHandleSubmit()}>
							Create an account
							<ArrowForwardIosIcon sx={{ ml: 1 }} />
						</Button>
					</form>
				</Box>
				<Hidden smDown>
					<Box>
						<ProgramSummaryCard
							image
							data={data}
						/>
					</Box>
				</Hidden>
			</Stack>
		</SidebarLayout>
	);
};

export default CreateAccount;

let data = {
	id: "string",
	programID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
	title: "string",
	description: "string",
	summary: "string",
	keySkills: "string",
	programBenefits: "string",
	applicationCriteria: "string",
	programType: 0,
	minQualification: 0,
	startDate: "2023-01-22T00:20:41.450Z",
	appOpenDate: "2023-01-22T00:20:41.450Z",
	appCloseDate: "2023-01-22T00:20:41.450Z",
	duration: "string",
	locationID: 0,
	maxAppCount: 0,
	createdOn: "2023-01-22T00:20:41.450Z",
};
