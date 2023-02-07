export type ProgramType = {
	id: string;
	programID: number | string;
	title: string;
	description: string;
	summary: string;
	keySkills: string;
	programBenefits: string;
	applicationCriteria: string;
	programType: number;
	minQualification: number;
	startDate: string;
	appOpenDate: string;
	appCloseDate: string;
	duration: string;
	locationID: number;
	maxAppCount: number;
	createdOn: string;
	updatedOn: string;
};
export type summaryProgramType = {
	programId: string;
	title: string;
	location: string;
	workflowStages: WorkflowStageType[];
	teamMembers: TeamMemberType[];
};
export type WorkflowStageType = {
	stageId: string;
	name: string;
	count: number;
};
export type TeamMemberType = {
	userId: string;
	displayPicture: string;
};

export type ProgramProviderType = {
	programProviderID: number;
	firstName: string;
	lastName: string;
	email: string;
	jobTitle: string;
	phoneNumber: string;
	userToken: string;
};

export type ProgramDetailsType = {
	title: string;
	summary: string;
	description: string;
	skills: string[];
	benefits: string;
	applicationCriteria: string;
	programType: string;
	startDate: string;
	applicationOpenDate: string;
	applicationCloseDate: string;
	duration: string;
	location: string;
	minimumQualification: string;
	maxApplication: number;
	isFullyRemote: boolean;
	status: string;
	programProviderId: string;
	coverImage: string;
};

export type ApplicationFormTemplateType = {
	programGUID: string;
	firstName: string;
	lastName: string;
	phone: {
		id: string;
		controlName: string;
		info: number;
		internalUse: boolean;
		show: boolean;
	};
	nationality: {
		id: string;
		controlName: string;
		info: string;
		internalUse: boolean;
		show: boolean;
	};
	currentlyBased: {
		id: string;
		controlName: string;
		info: string;
		internalUse: boolean;
		show: boolean;
	};
	nationalIDNumber: {
		id: string;
		controlName: string;
		info: string;
		internalUse: boolean;
		show: boolean;
	};
	dateOfBirth: {
		id: string;
		controlName: string;
		info: string;
		internalUse: boolean;
		show: boolean;
	};
	gender: {
		id: string;
		controlName: string;
		info: number;
		internalUse: boolean;
		show: boolean;
	};
	education: {
		id: string;
		controlName: string;
		info: string;
		internalUse: boolean;
		show: boolean;
	};
	experience: {
		id: string;
		controlName: string;
		info: string;
		internalUse: boolean;
		show: boolean;
	};
	resume: {
		id: string;
		controlName: string;
		info: string;
		internalUse: boolean;
		show: boolean;
	};
	listOfQuestions: [
		{
			id: string;
			question: string;
			answer: string;
		}
	];
};

export type ProgramDashboardType = ProgramType[];
export type ProgramSummaryType = {
	data: {
		id: string;
		type: string;
		attributes: {
			programs: [
				{
					programId: string;
					title: string;
					location: string;
					workflowStages: WorkflowStageType[];
					teamMembers: TeamMemberType[];
				}
			];
		};
	};
};

export type NewProgramType = Omit<ProgramDetailsType, "benefits"> & {
	programApplicationFormDTO: ApplicationFormTemplateType;
	programBenefits: string;
};

export type CandidateType = {
	// candidateID: number | string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	nationality: string;
	currentlyBased: string;
	nationalIDNumber: string;
	dateOfBirth: string;
	gender: string;
	education: string;
	experience: string;
	resume: string;
	userToken: string;
};

export type ProviderSignupType = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	invitationCode: string;
	jobTitle: string;
	phoneNumber: string;
}

export type StageType = {
	stageName: string;
	stageType: number;
};

export type workFlowType = {
	programID: string;
	stageName: string;
	stageType: number;
	stageShownToCandidate: boolean;
};

export type WorkflowType = {
	programID: string | number;
	applied: number;
	videoInterview: number;
	zoomInterview: number;
	inPersonMeeting: number;
	placement: number;
	offered: number;
	workflowStagesList: StageType[];
};
export type CandidateProfileType = {
	CandidateID: string;
	ProgramID: string;
	FirstName: string;
	LastName: string;
	EmailID: string;
	PhoneNumber: string;
	Nationality: string;
	CurrentlyBased: string;
	NationalIDNumber: string;
	DateOfBirth: string;
	Gender: string;
	EducationList: [
		{
			SchoolName: string;
			Degree: string;
			CourseName: string;
			LocationOfStudy: string;
			StartDate: string;
			EndDate: string;
			CurrentlyStudyHere: boolean;
		}
	];
	WorkExperienceList: [
		{
			CompanyName: string;
			Title: string;
			WorkLocation: string;
			StartDate: string;
			EndDate: string;
			CurrentlyWorkHere: boolean;
		}
	];
	Resume: string;
	Answers: [
		{
			QuestionID: string;
			Answer: string;
			SelectedChoices: string | null;
			Type: string;
			Question: string;
			Disqualify: string | null;
		},
		{
			QuestionID: string;
			Answer: string;
			SelectedChoices: string | null;
			Type: string;
			Question: string;
			Disqualify: boolean;
		},
		{
			QuestionID: string;
			Answer: string;
			SelectedChoices: string[];
			Type: string;
			Question: string;
			Disqualify: string | null;
		}
	];
};
