import { useEffect } from "react";
import { TextEditor } from "../../../components";
import { FormControl, InputBase, Box, Stack } from "@mui/material";
import { useState } from "react";
import { SkillsChip } from "../../ProgramProviderComponents";
import {
	getCurrentProgram,
	getProgramById,
	useAppDispatch,
	useAppSelector,
} from "../../../appStore";

export type Props = {
	setData?: any;
	data?: any;
};

const CreateProgramForm = ({ setData, data }: Props) => {
	const [skills, setSkills] = useState<string[]>([]);
	const [skillsList, setSkillsList] = useState<string[]>([
		"Social Media ",
		"UI",
		"UX",
		"Content Writing",
	]);
	const onHandleChange = (event: any) => {
		setData({ ...data, [event.target.name]: event.target.value });
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
			<form
				action=""
				className="custom-form">
				{/* Cover Image */}
				{/* <CoverImage /> */}

				{/* Program title  */}
				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label htmlFor="">
						Program title <span className="text-danger">*</span>
					</label>
					<InputBase
						placeholder="Summer Internship Program"
						type="text"
						name="title"
						value={data?.title}
						onChange={onHandleChange}
					/>
				</FormControl>

				{/* Summary of the program  */}
				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label htmlFor="">Summary of the program</label>
					<textarea
						name="summary"
						onChange={onHandleChange}
						value={data?.summary}
						style={{ height: "130px" }}
						placeholder="Please explain the program in less than 250 character. This helps the applicant  to get the glimpse of what is the offering "
					/>
				</FormControl>

				{/* Program Description */}
				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label htmlFor="">
						Program description <span className="text-danger">*</span>
					</label>
					<TextEditor
						name="description"
						setData={({ description }: { description: string }) => {
							onHandleChange({
								target: { name: "description", value: description },
							});
						}}
						data={{ description: data?.description }}
						placeholder={
							data?.description
								? `You can provide all information about the program here. Please make sure to set the expectation and keep it clear`
								: ""
						}
					/>
				</FormControl>

				{/* Key skills required for this program */}
				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label htmlFor="">Key skills required for this program</label>
					<InputBase
						placeholder="Search the skills"
						name="skills"
						onChange={(ev) =>
							onHandleChange({
								target: { name: "skills", value: ev.target.value.split(",") },
							})
						}
						value={data?.skills?.join(",") ?? ""}
					/>
				</FormControl>
				<Stack
					gap={1}
					direction="row">
					{skillsList.map((skill, index) => (
						<SkillsChip
							label={skill}
							key={index}
						/>
					))}
				</Stack>

				{/* Program benefits */}
				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label htmlFor="">Program benefits</label>
					<TextEditor
						placeholder={
							data?.benefits
								? `Please explain the benefits on this programs. Bullet points are always a good option`
								: ""
						}
						name="benefits"
						setData={({ benefits }: { benefits: string }) => {
							onHandleChange({
								target: { name: "benefits", value: benefits },
							});
						}}
						data={{ benefits: data?.benefits }}
					/>
				</FormControl>

				{/* Application criteria */}
				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label htmlFor="">Application criteria</label>
					<TextEditor
						placeholder={
							data?.applicationCriteria
								? `In this section, please explain what is it takes to get into this program also it is important to tell the application what are the interview process so that they can better prepare`
								: ""
						}
						name="applicationCriteria"
						setData={({
							applicationCriteria,
						}: {
							applicationCriteria: string;
						}) => {
							onHandleChange({
								target: {
									name: "applicationCriteria",
									value: applicationCriteria,
								},
							});
						}}
						data={{ applicationCriteria: data?.applicationCriteria }}
					/>
				</FormControl>
			</form>
		</Box>
	);
};

export default CreateProgramForm;
