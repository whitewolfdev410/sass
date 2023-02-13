import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Box, Button, Stack } from "@mui/material";
import Hidden from "@mui/material/Hidden";
import { SidebarLayout } from "../../components";
import {
	CandidateApplicationNav,
	ProgramSummaryCard,
} from "../../components/CandidatesComponents";
import CandidatePersonalInformation from "../../components/CandidatesComponents/programApplication/candidateForm";
import Profile from "../../components/CandidatesComponents/programApplication/profile";
import Resume from "../../components/CandidatesComponents/programApplication/resume";
import AdditionalQuestion from "../../components/CandidatesComponents/programApplication/additionalQuestion";
import {
	checkCandidateEmail,
	getCandidateAppForm,
	selectCandidateApplicationForm,
	// getApplicationTemplate,
	SaveCandidateApplicationForm,
} from "../../appStore/slices";
import { useAppDispatch, useAppSelector } from "../../appStore";
import {
	candidateEducationType,
	candidateFormProfileType,
	candidatePersonalInfoType,
	candidatePersonalQuestionType,
	candidatePersonAnswerType,
	candidateWorkExperienceType,
	personalInformationType,
} from "../../types";

const CandidateApplicationForm = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const programId = localStorage.getItem("programId") ?? "";
	useEffect(() => {
		dispatch(getCandidateAppForm({ programId: programId }));
	}, []);
	const [applicationFormData] = useState(
		useAppSelector(selectCandidateApplicationForm)
	);

	const [candidateFormData] = useState<personalInformationType>(
		applicationFormData?.data?.attributes?.personalInformation
	);
	const [profileFormData] = useState<candidateFormProfileType>(
		applicationFormData?.data?.attributes?.profile
	);
	const [customisedAnswerData, setCustomisedAnswerData] = useState<
		candidatePersonalQuestionType[]
	>(applicationFormData?.data?.attributes?.customisedQuestions);
	const [personalAnswers, setPersonalAnswers] = useState<
		candidatePersonAnswerType[]
	>([
		{
			id: "",
			answer: "",
			selectedChoices: [],
			question: "",
			type: "",
			disqualify: false,
			other: false,
			booleanAnswer: null,
			dateAnswer: null,
			numberAnswer: null,
		},
	]);

	const [candidateData, setCandidateData] = useState<candidatePersonalInfoType>(
		{
			firstName: "",
			lastName: "",
			emailId: "",
			phoneNumber: "",
			nationality: "",
			currentResidence: "",
			idNumber: "",
			dateOfBirth: "",
			gender: "",
			personalAnswers: personalAnswers,
		}
	);
	const [educationData, setEducationData] = useState<candidateEducationType[]>(
		[]
	);
	const [workExperienceData, setWorkExperienceData] = useState<
		candidateWorkExperienceType[]
	>([]);
	const [profileAnswerData, setProfileAnswersData] = useState<
		candidatePersonAnswerType[]
	>([]);
	const [profileData, setProfileData] = useState<candidateFormProfileType>({
		education: educationData,
		workExperience: workExperienceData,
		profileAnswers: profileAnswerData,
	});
	const [resume, setResume] = useState<string>("http://example.com");
	const [stage, setStage] = useState<string>(
		"9f09bdb0-89bd-4a1a-b468-0312474f1023"
	);
	const [status, setStatus] = useState<string>("Active");
	const [overallScore] = useState<string>("N/A");
	const [data, setData] = useState({
		personalInformation: candidateData,
		profile: profileData,
		resume: resume,
		customisedAnswers: customisedAnswerData,
		stage: stage,
		status: status,
		overallScore: overallScore,
	});
	useEffect(() => {
		setData({
			...data,
			personalInformation: candidateData,
			profile: profileData,
			resume: resume,
			stage: stage,
			status: status,
			overallScore: overallScore,
		});
	}, [candidateData, profileData, resume, stage, status]);
	const onSaveApplication = async () => {
		const candidateResponse = await dispatch(
			SaveCandidateApplicationForm({
				data: { type: "candidateApplication", attributes: data },
				programId,
			})
		);
		// console.log("===============", candidateResponse);
		// localStorage.setItem("candidateData", JSON.stringify(candidateData));
		// const response = await dispatch(
		// 	checkCandidateEmail({ emailID: candidateData?.email })
		// );
		// if (response?.payload) {
		// 	navigate("/candidate/apply/program-status", { replace: true });
		// } else {
		// 	navigate("/candidate/apply/create-account", { replace: true });
		// }
	};

	return (
		<SidebarLayout screen="/candidate/dashboard">
			<Box
				sx={{ mt: "-50px" }}
				className="header">
				<CandidateApplicationNav completed={2} />
			</Box>
			<Stack
				direction="row"
				flexWrap="wrap"
				gap={5}
				mt="115px"
				ml="110px"
				className="content-wrapper"
				justifyContent="space-between">
				<Box mt="-24px">
					<CandidatePersonalInformation
						setCandidateData={setCandidateData}
						candidateData={candidateData}
						candidateFormData={candidateFormData}
					/>
					<Profile
						setProfileData={setProfileData}
						profileData={profileData}
						profileFormData={profileFormData}
					/>
					{profileFormData?.resume?.show && (
						<Resume
							setCandidateData={setResume}
							candidateData={resume}
						/>
					)}
					<AdditionalQuestion
						setCandidateData={setData}
						candidateData={data}
						candidateFormData={customisedAnswerData}
					/>
					{/* <VideoQuestion /> */}
					<Button
						onClick={() => onSaveApplication()}
						variant="contained"
						size="large"
						sx={{
							bgcolor: "#21B592",
							my: "70px",
							width: { xs: "555px", xl: "595px" },
							maxWidth: "90vw",
						}}>
						Submit & next
					</Button>
				</Box>
				<Hidden smDown>
					<Box paddingRight="57px">
						{/* <ProgramSummaryCard
							image
							data={data}
						/> */}
					</Box>
				</Hidden>
			</Stack>
		</SidebarLayout>
	);
};
export default CandidateApplicationForm;

// let data = {
// 	id: "string",
// 	programID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
// 	title: "string",
// 	description: "string",
// 	summary: "string",
// 	keySkills: "string",
// 	programBenefits: "string",
// 	applicationCriteria: "string",
// 	programType: 0,
// 	minQualification: 0,
// 	startDate: "2023-01-22T00:20:41.450Z",
// 	appOpenDate: "2023-01-22T00:20:41.450Z",
// 	appCloseDate: "2023-01-22T00:20:41.450Z",
// 	duration: "string",
// 	locationID: 0,
// 	maxAppCount: 0,
// 	createdOn: "2023-01-22T00:20:41.450Z",
// };
