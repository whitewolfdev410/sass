import {
	AdditionalInfoForm,
	CreateProgramForm,
	CreateProgramLayout,
} from "../../../components/ProgramProviderComponents";
import { Typography } from "@mui/material";
import { saveNewProgramDetails, useAppDispatch } from "../../../appStore";
import { useEffect, useState } from "react";
import { ProgramDetailsType } from "../../../types";

const CreateProgram = () => {
	const [data, setData] = useState<ProgramDetailsType>({
		title: "",
		summary: "",
		description: "",
		keySkills: "",
		benefits: "",
		criteria: "",
		programType: 0,
		programStartDate: "",
		applicationOpenDate: "",
		applicationCloseDate: "",
		duration: "",
		location: "",
		minQualification: 0,
		maxApplications: 0,
	});
	const dispatch = useAppDispatch();

	useEffect(() => {
		setData((data) => ({ ...data, applicationOpenDate: "" }));
	}, []);

	return (
		<CreateProgramLayout
			// nextLink="application-form"
			publishAction={() => {
				// dispatch(saveNewProgramDetails({ data }));
				console.log(data.applicationCloseDate);
			}}>
			{/*  */}
			{/* Create program form */}
			<CreateProgramForm />

			<Typography component="h4" fontSize="25px" fontWeight={600} sx={{ ml: { lg: 25 }, my: 4 }}>
				Additional program information
			</Typography>

			{/* Additional Information */}
			<AdditionalInfoForm />
		</CreateProgramLayout>
	);
};

export default CreateProgram;
