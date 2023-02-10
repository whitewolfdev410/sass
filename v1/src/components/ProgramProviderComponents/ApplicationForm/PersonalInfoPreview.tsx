import { ApplicationFormCard } from "../../../components";
import { InputGroupInternal } from "../../../components/ProgramProviderComponents";

import {
	FormControl,
	Typography,
	Divider,
	TextField,
	Stack,
} from "@mui/material";

export type Props = {
	setApplicationData?: any;
	applicationData?: any;
};

const PersonalInfoPreview = ({
	setApplicationData,
	applicationData,
}: Props) => {
	const labelComp = [];
	for (const [key, value] of Object.entries(applicationData)) {
		if ((value as any)?.show) {
			labelComp.push(
				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label>{key}</label>
					<TextField
						placeholder="Type here"
						disabled
						name="firstName"
					/>
				</FormControl>
			);
		}
	}
	return (
		<ApplicationFormCard title="Personal Information">
			<Stack
				direction="row"
				columnGap={4}></Stack>
			{labelComp}

			<FormControl
				sx={{ my: 2 }}
				fullWidth>
				<label>
					Phone
					<Typography fontSize={15}>(without dial code)</Typography>
				</label>
				<TextField
					placeholder="Type here"
					disabled
					name="emailId"
				/>
			</FormControl>
		</ApplicationFormCard>
	);
};

export default PersonalInfoPreview;
