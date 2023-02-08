import {
	PersonalInformationForm,
	ProfileForm,
	QuestionsForm,
	CreateProgramLayout,
	CoverImage,
} from "../../../components/ProgramProviderComponents";
import { Box, Stack, Button, Typography } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState, useEffect } from "react";
import { ApplicationFormTemplateType } from "../../../types";
import { ApplicationFormCard } from "../../../components";

const ApplicationForm = () => {
	const [personalInformation, setPersonalInformation] = useState<any>({
		firstName: {
			internalUse: false,
			show: true,
		},
		lastName: {
			internalUse: false,
			show: true,
		},
		emailId: {
			internalUse: false,
			show: true,
		},
		phoneNumber: {
			internalUse: false,
			show: false,
		},
		nationality: {
			internalUse: false,
			show: false,
		},
		currentResidence: {
			internalUse: false,
			show: false,
		},
		idNumber: {
			internalUse: false,
			show: false,
		},
		dateOfBirth: {
			internalUse: false,
			show: false,
		},
		gender: {
			internalUse: false,
			show: false,
		},
	});
	const [profile, setProfile] = useState<any>({
		education: {
			mandatory: false,
			show: false,
		},
		experience: {
			mandatory: false,
			show: false,
		},
		resume: {
			mandatory: false,
			show: false,
		},
		profileQuestions: [
			{
				id: "",
				type: "",
				question: "",
				choices: "",
				disquality: false,
				other: false,
			},
		],
	});
	const programId = localStorage.getItem("programId") ?? "";
	const [customisedQuestions, setCustomisedQuestions] = useState<any>([
		{
			id: programId,
			type: "Paragraph",
			question: "",
			choices: [],
			maxChoice: 0,
			disquality: false,
			other: false,
		},
	]);
	const [applicationData, setApplicationData] =
		useState<ApplicationFormTemplateType>({
			coverImage: "http://example.com",
			personalInformation: personalInformation,
			profile: profile,
			customisedQuestions: customisedQuestions,
		});
	useEffect(() => {
		setApplicationData({
			...applicationData,
			personalInformation: personalInformation,
			profile: profile,
			customisedQuestions: customisedQuestions,
		});
	}, [personalInformation, profile, customisedQuestions]);
	console.log("applicationData", applicationData);

	return (
		<CreateProgramLayout
			screen="applicationForm"
			nextLink="workflow"
			data={applicationData}>
			<Box className="content-wrapper">
				<Stack
					direction="row"
					justifyContent="end"
					marginY={1}>
					<Box>
						{/* <Button sx={{ fontSize: 16, fontWeight: 600 }}>
							<RemoveRedEyeIcon sx={{ mr: 1 }} /> Preview
						</Button> */}
						<Button sx={{ fontSize: 16, fontWeight: 600 }}>Save draft</Button>
					</Box>
				</Stack>

				<Stack
					direction="row"
					justifyContent="space-between">
					<Box mt={-3}>
						{/* Personal Info Card */}

						<ApplicationFormCard title="Upload cover image">
							<CoverImage
								setApplicationData={setApplicationData}
								applicationData={applicationData}
							/>
						</ApplicationFormCard>

						<PersonalInformationForm
							setApplicationData={setPersonalInformation}
							applicationData={personalInformation}
						/>
						{/* Profile Card */}
						<ProfileForm
							setApplicationData={setProfile}
							applicationData={profile}
						/>
						{/* QuestionsForm */}
						<QuestionsForm
							setApplicationData={setCustomisedQuestions}
							applicationData={customisedQuestions}
						/>
					</Box>
					{/* Preview Coming soon */}
					{/* <Box
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
						<Typography
							fontSize={18}
							sx={{ color: "var(--spanish-grey)" }}>
							Preview coming soon
						</Typography>
					</Box> */}
				</Stack>
			</Box>
		</CreateProgramLayout>
	);
};

export default ApplicationForm;
