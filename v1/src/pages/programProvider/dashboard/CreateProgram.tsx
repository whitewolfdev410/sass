import {
	AdditionalInfoForm,
	CreateProgramForm,
	CreateProgramLayout,
} from "../../../components/ProgramProviderComponents";
import { Typography } from "@mui/material";

const CreateProgram = () => {
	return (
		<CreateProgramLayout nextLink="application-form">
			{/*  */}
			{/* Create program form */}
			<CreateProgramForm />

			<Typography component="h4" fontSize="25px" fontWeight={600} sx={{ ml: { lg: 25 }, my: 4 }}>
				Additional program information
			</Typography>

			{/* Additional Information */}
			<AdditionalInfoForm />
		</CreateProgramLayout>
	);
};

export default CreateProgram;
