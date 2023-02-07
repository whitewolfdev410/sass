import { ApplicationFormCard } from "../../../components";
import { InputGroupInternal } from "../../../components/ProgramProviderComponents";

import { FormControl, TextField, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export type Props = {
	setApplicationData?: any;
	applicationData?: any;
};

const PersonalInformationForm = ({
	setApplicationData,
	applicationData,
}: Props) => {
	const handleOnChange = (event: any) => {
		setApplicationData({
			...applicationData,
			[event.target.name]: event.target.value,
		});
	};

	const handleChange = (event: any) => {
		setApplicationData({
			...applicationData,
			[event.target.name]: {
				...applicationData[`${event.target.name}`],
				info: event.target.value,
			},
		});
	};

	return (
		<ApplicationFormCard title="Personal Information">
			<Stack
				direction="row"
				columnGap={4}>
				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label>First Name</label>
					<TextField
						placeholder="Type here"
						type="text"
						disabled
						name="firstName"
						onChange={handleOnChange}
					/>
				</FormControl>

				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label>Last Name</label>
					<TextField
						placeholder="Type here"
						disabled
						name="lastName"
						onChange={handleOnChange}
					/>
				</FormControl>
			</Stack>

			<InputGroupInternal
				label="EmailID"
				name="EmailID"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
				input={
					<TextField
						disabled
						placeholder="Type here"
						type="email"
						name="EmailID"
						onChange={handleChange}
					/>
				}
				internal={false}
				show={false}
			/>

			<InputGroupInternal
				label={
					<span>
						Phone <Typography fontSize={15}>(without dial code)</Typography>
					</span>
				}
				internal={false}
				show={false}
				name="phone"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
				input={
					<TextField
						disabled
						placeholder="Type here"
						name="phone"
						onChange={handleChange}
					/>
				}
			/>

			<InputGroupInternal
				label="Nationality"
				internal={false}
				show={false}
				name="nationality"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
				input={
					<TextField
						disabled
						placeholder="Type here"
						name="nationality"
						onChange={handleChange}
					/>
				}
			/>

			<InputGroupInternal
				label="Country of residence"
				internal={false}
				show={false}
				name="currentlyBased"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
				input={
					<TextField
						disabled
						name="currentlyBased"
						onChange={handleChange}
						placeholder="Select location"
						type="email"
						InputProps={{
							startAdornment: (
								<SearchIcon sx={{ color: "var(--spanish-grey)", mr: 1 }} />
							),
						}}
					/>
				}
			/>

			<InputGroupInternal
				label="Saudi ID number"
				internal={false}
				show={false}
				name="NationalIDNumber"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
				input={
					<TextField
						disabled
						placeholder="Please type your number here"
						name="NationalIDNumber"
						onChange={handleChange}
					/>
				}
			/>
			<InputGroupInternal
				label="Date of birth"
				internal={false}
				show={false}
				name="dateOfBirth"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
				input={
					<TextField
						disabled
						placeholder="Type here"
						type="date"
						name="dateOfBirth"
						onChange={handleChange}
					/>
				}
			/>

			<InputGroupInternal
				label="Gender"
				internal={false}
				show={false}
				name="gender"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
				input={
					<TextField
						disabled
						placeholder="Type here"
						name="gender"
						onChange={handleChange}
					/>
				}
			/>

			<Typography
				fontSize={12}
				sx={{ color: "var(--spanish-grey)" }}>
				We ask the gender information to ensure that we provide equal
				opportunity for everyone.{" "}
			</Typography>
		</ApplicationFormCard>
	);
};

export default PersonalInformationForm;
