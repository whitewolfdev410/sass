import axios from "axios";

export const baseUserURL: string =
	// "https://cp-services-dev.azurewebsites.net/api/1.0/";
	"https://stoplight.io/mocks/scott-perham/cp-api/2763286/";
export const baseProgramURL: string =
	"https://stoplight.io/mocks/surija/cp/134330842/api/1.0";
export const baseWorkflowURL: string =
	// "https://cpworkflowmicroservice.azurewebsites.net/api/";
	"https://stoplight.io/mocks/surija/cp/134330842/api/1.0";

export const USER_CLIENT = axios.create({
	baseURL: baseUserURL,
	headers: {
		"Content-Type": "application/json",
	},
});
export const PROGRAM_CLIENT = axios.create({
	baseURL: baseProgramURL,
});
export const WORKFLOW_CLIENT = axios.create({
	baseURL: baseWorkflowURL,
});

// USER_CLIENT.interceptors.response.use(() => {

// });
