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
		programType: 1,
		programStartDate: "",
		applicationOpenDate: "",
		applicationCloseDate: "",
		duration: "",
		location: "",
		minQualification: 1,
		maxApplications: 0,
	});
	const dispatch = useAppDispatch();

	useEffect(() => {
		setData((data) => ({ ...data, applicationOpenDate: "" }));
	}, []);

	return (
		<CreateProgramLayout
			screen="programDetail"
			data={data}
			nextLink="application-form"
		>
			{/*  */}
			{/* Create program form */}
			<CreateProgramForm setData={setData} data={data}/>

			<Typography sx={{
				width: { lg: "967px" },
				p: 5,
				mx: "auto",
				my: 4
			}} component="h4" fontSize="25px" fontWeight={600}>
				Additional program information
			</Typography>

			{/* Additional Information */}
			<AdditionalInfoForm setData={setData} data={data}/>
		</CreateProgramLayout>
	);
};

export default CreateProgram;
