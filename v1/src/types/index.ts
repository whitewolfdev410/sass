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
export type newProgramType = {
	data: {
		id: string;
		type: string;
		attributes: ProgramDetailsType;
	};
};

export type ProviderType = {
	companyName: string;
	providerId: string;
	providerAlias: string;
	companyLogo?: string;
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
export type ProgramPreviewType = {
	data: {
		id: string;
		type: string;
		attributes: {
			applicationForm: ApplicationFormTemplateType;
			programDetails: ProgramDetailsType;
		};
	};
};
export type candidateApplicationDataType = {
	data: {
		id: string;
		type: string;
		attributes: {
			personalInformation: candidatePersonalInfoType;
		};
	};
};
export type candidateFormProfileType = {
	education: candidateEducationType[];
	workExperience: candidateWorkExperienceType[];
	profileAnswers: candidatePersonAnswerType[];
	resume?: {
		mandatory: boolean;
		show: boolean;
	};
};
export type candidateEducationType = {
	school: string;
	degree: string;
	course: string;
	location: string;
	startDate: string;
	endDate: string;
	currentlyStudyHere: boolean;
};
export type candidateWorkExperienceType = {
	company: string;
	title: string;
	location: string;
	startDate: string;
	endDate: string;
	currentlyWorkHere: boolean;
};
export type candidatePersonalInfoType = {
	firstName: string;
	lastName: string;
	emailId?: string;
	phoneNumber?: string;
	nationality?: string;
	currentResidence?: string;
	idNumber?: string;
	dateOfBirth?: string;
	gender?: string;
	personalAnswers: candidatePersonAnswerType[];
};
export type candidatePersonAnswerType = {
	id: string;
	answer?: string;
	selectedChoices?: string[];
	question?: string;
	type?: string;
	disqualify?: boolean;
	other?: boolean;
	booleanAnswer: boolean | null;
	numberAnswer: number | null;
	dateAnswer: string | null;
};
export type CandidateApplicationFormType = {
	data: {
		id: string;
		type: string;
		attributes: ApplicationFormTemplateType;
	};
};
export type commonType = {
	internalUse: boolean;
	show: boolean;
};
export type personalInformationType = {
	firstName: commonType;
	lastName: commonType;
	emailId: commonType;
	phoneNumber: commonType;
	nationality: commonType;
	currentResidence: commonType;
	idNumber: commonType;
	dateOfBirth: commonType;
	gender: commonType;
	personalQuestions: candidatePersonalQuestionType[];
};
export type candidatePersonalQuestionType = {
	id: string;
	type: string;
	question: string;
	choices: string[];
	maxChoice: number;
	disqualify: boolean;
	other: boolean;
};

export type ApplicationFormTemplateType = {
	coverImage: string;
	personalInformation: personalInformationType;
	profile: {
		education: {
			mandatory: boolean;
			show: boolean;
		};
		experience: {
			mandatory: boolean;
			show: boolean;
		};
		resume: {
			mandatory: boolean;
			show: boolean;
		};
		profileQuestions: [
			{
				id: string;
				type: string;
				question: string;
				choices: string;
				disquality: boolean;
				other: boolean;
			}
		];
	};
	customisedQuestions: [
		{
			id: string;
			type: string;
			question: string;
			choices: string;
			disquality: boolean;
			other: boolean;
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
export type CandidateAppStatusType = {
	data: {
		id: string;
		type: string;
		attributes: {
			applications: applicationType[];
		};
	};
};
export type applicationType = {
	id: string;
	programId: string;
	programCoverImage: string;
	programTitle: string;
	status: string;
	appliedOn: string;
	currentStage: string;
	workflowLastUpdatedOn: string;
	workflowStages: candidateWorkflowStageType[];
};
export type candidateWorkflowStageType = {
	id: string;
	name: string;
};

export type ProviderSignupType = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	invitationCode: string;
	jobTitle: string;
	phoneNumber: string;
	provider: string;
};

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
export type WorkFlowWholeType = {
	data: {
		id: string;
		type: string;
		attributes: {
			stages: workStageType[];
		};
	};
};
export type workStageType = {
	id: string;
	name: string;
	type: string;
	hideFromCandidate: boolean;
	interviewQuestions: interviewQuestionType[];
};
export type interviewQuestionType = {
	id?: string;
	question: string;
	description: string;
	duration: number;
	durationType: string;
	deadlineInDays: number;
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

export type AlertProps = {
	title: string;
	type: "error" | "success" | "info";
	msg: string;
};

export const ADMIN_ROUTE = "admin";
