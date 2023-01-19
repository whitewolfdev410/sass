import { ApplicationFormCard } from "../../../components";
import { InputGroupInternal } from "../../../components/ProgramProviderComponents";

import { FormControl, TextField, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const PersonalInformationForm = () => {
	return (
		<ApplicationFormCard title="Personal Information">
			<Stack direction="row" columnGap={4}>
				<FormControl sx={{ my: 2 }} fullWidth>
					<label>First Name</label>
					<TextField placeholder="Type here" />
				</FormControl>

				<FormControl sx={{ my: 2 }} fullWidth>
					<label>Last Name</label>
					<TextField placeholder="Type here" />
				</FormControl>
			</Stack>

			<InputGroupInternal
				label="Email"
				input={<TextField placeholder="Type here" type="email" />}
				internal={false}
				show={false}
			/>

			<InputGroupInternal
				label={
					<span>
						Phone <Typography fontSize={15}>(without dial code)</Typography>
					</span>
				}
				input={<TextField placeholder="Type here" />}
			/>

			<InputGroupInternal label="Nationality" input={<TextField placeholder="Type here" />} />

			<InputGroupInternal
				label="Currently based"
				input={
					<TextField
						placeholder="Select location"
						type="email"
						InputProps={{
							startAdornment: <SearchIcon sx={{ color: "var(--spanish-grey)", mr: 1 }} />,
						}}
					/>
				}
			/>

			<InputGroupInternal label="Saudi ID number" input={<TextField placeholder="Please type your number here" />} />
			<InputGroupInternal label="Date of birth" input={<TextField placeholder="Type here" type="date" />} />

			<InputGroupInternal label="Gender" input={<TextField placeholder="Type here" select />} />

			<Typography fontSize={12} sx={{ color: "var(--spanish-grey)" }}>
				We ask the gender information to ensure that we provide equal opportunity for everyone.{" "}
			</Typography>
		</ApplicationFormCard>
	);
};

export default PersonalInformationForm;
