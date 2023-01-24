import axios from "axios";

export const baseUserURL = "https://cpusermicroservice.azurewebsites.net/api/";
export const baseProgramURL = "https://cpprogrammicroservice.azurewebsites.net/api/";
export const baseWorkflowURL = "https://cpworkflowmicroservice.azurewebsites.net/api/";

export const USER_CLIENT = axios.create({
	baseURL: baseUserURL,
});
export const PROGRAM_CLIENT = axios.create({
	baseURL: baseProgramURL,
});
export const WORKFLOW_CLIENT = axios.create({
	baseURL: baseWorkflowURL,
});

// USER_CLIENT.interceptors.response.use(() => {

// });
