import {
	PersonalInformationForm,
	ProfileForm,
	QuestionsForm,
	CreateProgramLayout,
} from "../../../components/ProgramProviderComponents";
import { Box, Stack, Button, Typography } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {useState} from "react";

const ApplicationForm = () => {

	const [applicationData, setApplicationData] = useState({
		phone: {
			"internalUse": false,
			"show": false
		},
		EmailID: {
			"internalUse": false,
			"show": false
		},
		nationality: {
			"internalUse": false,
			"show": false
		},
		currentlyBased: {
			"internalUse": false,
			"show": false
		},
		NationalIDNumber: {
			"internalUse": false,
			"show": false
		},
		dateOfBirth: {
			"internalUse": false,
			"show": false
		},
		gender: {
			"internalUse": false,
			"show": false
		},
		education: {
			"internalUse": false,
			"show": false
		},
		experience: {
			"internalUse": false,
			"show": false
		},
		resume: {
			"internalUse": false,
			"show": false
		},
		listOfQuestions: []
	});

	return (
		<CreateProgramLayout
			screen="applicationForm"
			nextLink="workflow"
			data={applicationData}
		>
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
						<PersonalInformationForm setApplicationData={setApplicationData} applicationData={applicationData}/>
						{/* Profile Card */}
						<ProfileForm setApplicationData={setApplicationData} applicationData={applicationData}/>
						{/* QuestionsForm */}
						<QuestionsForm setApplicationData={setApplicationData} applicationData={applicationData}/>
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
