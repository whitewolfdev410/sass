export type ProgramType = {
	programGUID: string;
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
	location: string;
	maxAppCount: number;
	createdOn: string;
	updatedOn: string;
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
	keySkills: string;
	benefits: string;
	criteria: string;
	programType: number;
	programStartDate: string;
	applicationOpenDate: string;
	applicationCloseDate: string;
	duration: string;
	location: string;
	minQualification: number;
	maxApplications: number;
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

export type NewProgramType = ProgramDetailsType & { programApplicationFormDTO: ApplicationFormTemplateType };

export type CandidateType = {
	candidateID: number | string;
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

export type WorkflowType = {
	programID: string;
	applied: number;
	videoInterview: number;
	zoomInterview: number;
	inPersonMeeting: number;
	placement: number;
	offered: number;
	workflowStagesList: [
		{
			stageName: string;
			stageType: number;
		}
	];
};
