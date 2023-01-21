import {
	PersonalInformationForm,
	ProfileForm,
	QuestionsForm,
	CreateProgramLayout,
} from "../../../components/ProgramProviderComponents";
import { Box, Stack, Button, Typography } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const ApplicationForm = () => {
	return (
		<CreateProgramLayout nextLink="workflow">
			<Box className="content-wrapper">
				<Stack direction="row" justifyContent="end" marginY={1}>
					<Box>
						<Button sx={{ fontSize: 16, fontWeight: 600 }}>
							<RemoveRedEyeIcon sx={{ mr: 1 }} /> Preview
						</Button>
						<Button sx={{ fontSize: 16, fontWeight: 600 }}>Save draft</Button>
					</Box>
				</Stack>

				<Stack direction="row" justifyContent="space-between">
					<Box mt={-3}>
						{/* Personal Info Card */}
						<PersonalInformationForm />
						{/* Profile Card */}
						<ProfileForm />
						{/* QuestionsForm */}
						<QuestionsForm />
					</Box>
					{/* Preview Coming soon */}
					<Box
						sx={{
							height: "663px",
							background: "white",
							border: "1px dashed #9C4DE2",
							boxShadow: "3px 3px 14px rgba(190, 190, 190, 0.3)",
							display: "grid",
							placeContent: "center",
							width: "100%",
							maxWidth: "480px",
							borderRadius: "20px",
						}}>
						<Typography fontSize={18} sx={{ color: "var(--spanish-grey)" }}>
							Preview coming soon
						</Typography>
					</Box>
				</Stack>
			</Box>
		</CreateProgramLayout>
	);
};

export default ApplicationForm;
