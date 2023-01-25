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
	programStats: {
		programApplied: number;
		programShortlisted: number;
		programInterview: number;
		programSecondRoundInterview: number;
		programEmployerScreening: number;
		programOffer: number;
		programAgreement: number;
		programApproved: number;
	};
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
