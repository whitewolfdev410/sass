import { TextEditor } from "../../../components";
import CoverImage from "./CoverImage";
import { FormControl, InputBase, Box, Stack } from "@mui/material";
import { useState } from "react";
import { SkillsChip } from "../../ProgramProviderComponents";

export type Props = {
	setData?: any;
	data?: any;
};

const CreateProgramForm = ({setData, data}: Props) => {
	const [skills, setSkills] = useState<string[]>(["Social Media ", "UI", "UX", "Content Writing"]);

	const onHandleChange = (event: any) => {
		setData({...data, [event.target.name] : event.target.value})
	};

	return (
		<Box
			sx={{
				width: { lg: "967px" },
				boxShadow: "var(--shadow-4)",
				p: 5,
				mx: "auto",
				mt: { xs: 5, xl: 10 },
			}}>
			<form action="" className="custom-form">
				{/* Cover Image */}
				<CoverImage />

				{/* Program title  */}
				<FormControl sx={{ my: 2 }} fullWidth>
					<label htmlFor="">
						Program title <span className="text-danger">*</span>
					</label>
					<InputBase placeholder="Summer Internship Program" name="title" onChange={onHandleChange}/>
				</FormControl>

				{/* Summary of the program  */}
				<FormControl sx={{ my: 2 }} fullWidth>
					<label htmlFor="">Summary of the program</label>
					<textarea
						name="summary" onChange={onHandleChange}
						style={{ height: "130px" }}
						placeholder="Please explain the program in less than 250 character. This helps the applicant  to get the glimpse of what is the offering "
					/>
				</FormControl>

				{/* Program Description */}
				<FormControl sx={{ my: 2 }} fullWidth>
					<label htmlFor="">
						Program description <span className="text-danger">*</span>
					</label>
					<TextEditor
						name="description"
						setData={setData} data={data}
						placeholder="You can provide all information about the program here. 
						Please make sure to set the expectation and keep it clear"
					/>
				</FormControl>

				{/* Key skills required for this program */}
				<FormControl sx={{ my: 2 }} fullWidth>
					<label htmlFor="">Key skills required for this program</label>
					<InputBase placeholder="Search the skills" name="keySkills" onChange={onHandleChange}/>
				</FormControl>
				<Stack gap={1} direction="row">
					{skills.map((skill) => (
						<SkillsChip label={skill} />
					))}
				</Stack>

				{/* Program benefits */}
				<FormControl sx={{ my: 2 }} fullWidth>
					<label htmlFor="">Program benefits</label>
					<TextEditor placeholder="Please explain the benefits on this programs. Bullet points are always a good option"
								name="benefits" setData={setData} data={data}/>
				</FormControl>

				{/* Application criteria */}
				<FormControl sx={{ my: 2 }} fullWidth>
					<label htmlFor="">Application criteria</label>
					<TextEditor placeholder="In this section, please explain what is it takes to get into this program also it is important to tell the application what are the interview process so that they can better prepare"
								name="criteria" setData={setData} data={data}/>
				</FormControl>
			</form>
		</Box>
	);
};

export default CreateProgramForm;
