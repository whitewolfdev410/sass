import { ProgramProviderLayout } from "../../../components";
import { PersonalInformationForm, ProfileForm, QuestionsForm } from "../../../components/ProgramProviderComponents";
import { Box, Stack, Button, Typography } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const ApplicationForm = () => {
	return (
		<ProgramProviderLayout nextLink="workflow">
			<Box className="content-wrapper">
				<Stack direction="row" justifyContent="end" marginY={3}>
					<Box>
						<Button sx={{ fontSize: 18, fontWeight: 600 }}>
							<RemoveRedEyeIcon sx={{ mr: 1 }} /> Preview
						</Button>
						<Button sx={{ fontSize: 18, fontWeight: 600 }}>Save draft</Button>
					</Box>
				</Stack>

				<Stack direction="row" justifyContent="space-between">
					<Box>
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
							width: "80%",
							maxWidth: { xs: "400px", xl: "460px" },
							borderRadius: "20px",
							mt: 3,
						}}>
						<Typography fontSize={20}>Preview coming soon</Typography>
					</Box>
				</Stack>
			</Box>
		</ProgramProviderLayout>
	);
};

export default ApplicationForm;
