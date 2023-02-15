import { useEffect, useState } from "react";
import { Stack, Box } from "@mui/material";
import {
	getProviderFilterCandidateData,
	useAppDispatch,
	useAppSelector,
} from "../../../appStore";
import { SidebarLayout } from "../../../components";
import {
	SingleProgramNav,
	SingleProgramSidebar,
	SingleProgramCandidateInfo,
} from "../../../components/ProgramProviderComponents";
import SingleProgramTitle from "./SingleProgramTitle";
import {
	ProviderFilterCandidateDataType,
	ProviderFilterCandidateReturnDataType,
} from "../../../types";
import { ProviderFilterCandidateData } from "../../../appStore/slices/ProgramDashboard/selectors";

const SingleProgram = () => {
	const programId = localStorage.getItem("programId") ?? "";
	const stageId = localStorage.getItem("stageId") ?? "";
	const [status] = useState<string>("Active");
	const [filterData, setFilterData] = useState<ProviderFilterCandidateDataType>(
		{
			skip: 0,
			take: 0,
			freeFilter: "string",
			nationality: [""],
			countryOfResidence: [],
			gender: "",
			location: [""],
			levelOfEducation: [""],
			dateOfGraduationFrom: "",
			dateOfGraduationTo: "",
			locationOfStudy: [],
			yearsOfExperienceFrom: 0,
			yearsOfExperienceTo: 0,
			locationOfWork: [],
			overralScoreFrom: 0,
			overralScoreTo: 0,
			communication: 0,
			professionalism: 0,
			attitude: 0,
			subjectKnowledge: 0,
			customProfileFilters: [
				{
					questionId: "",
					textAnswer: "",
					numberAnswerFrom: 0,
					numberAnswerTo: 0,
					dateAnswerFrom: "",
					dateAnswerTo: "",
					booleanAnswer: true,
				},
			],
			customAnswersFilters: [
				{
					questionId: "",
					textAnswer: "",
					numberAnswerFrom: 0,
					numberAnswerTo: 0,
					dateAnswerFrom: "",
					dateAnswerTo: "",
					booleanAnswer: true,
				},
			],
		}
	);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(
			getProviderFilterCandidateData({
				programId: programId,
				stageId: stageId,
				status: status,
				attributes: filterData,
			})
		);
	}, []);
	const candidateDatas = useAppSelector(ProviderFilterCandidateData);
	const [candidateData, setCandidateData] =
		useState<ProviderFilterCandidateReturnDataType>(candidateDatas);
	useEffect(() => {
		setCandidateData(candidateDatas);
	}, [candidateDatas]);
	return (
		<SidebarLayout>
			<Box
				className="content-wrapper"
				sx={{ mx: 0 }}>
				<SingleProgramTitle />
				<SingleProgramNav data={data} />
				<Stack
					direction="row"
					gap={2}>
					<SingleProgramSidebar candidateData={candidateData} />
					<Box sx={{ minWidth: 0 }}>
						<SingleProgramCandidateInfo />
					</Box>
				</Stack>
			</Box>
		</SidebarLayout>
	);
};
export default SingleProgram;

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
	applied: 0,
	videoInterview: 0,
	zoomInterview: 0,
	inPersonMeeting: 0,
	placement: 0,
	offered: 0,
	workflowStagesList: [
		{
			stageName: "string",
			stageType: 0,
		},
	],
};
