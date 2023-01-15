import { FileUpload, ProgramProviderLayout, TextEditor } from "../../../components";
import {
	Box,
	Button,
	Input,
	Select,
	FormControl,
	InputBase,
	Typography,
	TextField,
	MenuItem,
	InputAdornment,
} from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const CreateProgram = () => {
	const [preview, setPreview] = useState<string | undefined>();

	const onUpload = (file: any) => {
		setPreview(URL.createObjectURL(file[0]));
	};

	return (
		<ProgramProviderLayout nextLink="application-form">
			<Box
				sx={{
					width: { lg: "967px" },
					boxShadow: "var(--shadow-4)",
					p: 5,
					mx: "auto",
					mt: { xs: 5, xl: 10 },
				}}>
				{/* Create program form */}
				<form action="" className="custom-form">
					{/* Cover Image */}
					<Box sx={{ mb: 3 }}>
						{preview ? (
							<div style={{ position: "relative" }}>
								<img src={preview} width="100%" height="190px" style={{ borderRadius: "5px" }} />
								<DeleteIcon
									sx={{ position: "absolute", right: "10px", bgcolor: "white", top: "5px" }}
									onClick={() => {
										setPreview(undefined);
									}}
								/>
							</div>
						) : (
							<FileUpload onUpload={onUpload} />
						)}
					</Box>

					{/* Program title  */}
					<FormControl sx={{ my: 2 }} fullWidth>
						<label htmlFor="">
							Program title <span className="text-danger">*</span>
						</label>
						<InputBase placeholder="Summer Internship Program" />
					</FormControl>

					{/* Summary of the program  */}
					<FormControl sx={{ my: 2 }} fullWidth>
						<label htmlFor="">Summary of the program</label>
						<textarea
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
							placeholder="You can provide all information about the program here. 
						Please make sure to set the expectation and keep it clear"
							height="150px"
						/>
					</FormControl>

					{/* Key skills required for this program */}
					<FormControl sx={{ my: 2 }} fullWidth>
						<label htmlFor="">Key skills required for this program</label>
						<InputBase placeholder="Search the skills" />
					</FormControl>

					{/* Program benefits */}
					<FormControl sx={{ my: 2 }} fullWidth>
						<label htmlFor="">Program benefits</label>
						<TextEditor placeholder="Please explain the benefits on this programs. Bullet points are always a good option" />
					</FormControl>

					{/* Application criteria */}
					<FormControl sx={{ my: 2 }} fullWidth>
						<label htmlFor="">Application criteria</label>
						<TextEditor placeholder="In this section, please explain what is it takes to get into this program also it is important to tell the application what are the interview process so that they can better prepare" />
					</FormControl>
				</form>
			</Box>

			<Typography component="h4" fontSize="25px" fontWeight={600} sx={{ ml: { lg: 25 }, my: 4 }}>
				Additional program information
			</Typography>

			{/* Additional Information */}
			<Box
				sx={{
					width: { lg: "967px" },
					boxShadow: "var(--shadow-4)",
					p: 5,
					mx: "auto",
					mt: { xs: 5, xl: 10 },
				}}>
				{/* Create program form */}
				<form action="" className="custom-form">
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							columnGap: "50px",
						}}>
						{/* Program type *  */}
						<FormControl sx={{ my: 2, maxWidth: "300px" }}>
							<label htmlFor="">
								Program type <span className="text-danger">*</span>
							</label>
							<Select value="">
								<MenuItem value="Internship">Internship</MenuItem>
								<MenuItem value="Job">Job</MenuItem>
								<MenuItem value="Training">Training</MenuItem>
								<MenuItem value="Masterclass">Masterclass</MenuItem>
								<MenuItem value="Webinar">Webinar</MenuItem>
								<MenuItem value="Course">Course</MenuItem>
								<MenuItem value="Live Seminar">Live Seminar</MenuItem>
								<MenuItem value="Volunteering">Volunteering</MenuItem>
								<MenuItem value="Other">Other</MenuItem>
							</Select>
						</FormControl>

						{/* Program start */}
						<FormControl sx={{ my: 2, maxWidth: "300px" }}>
							<label>Program start</label>
							<TextField type="date" />
						</FormControl>

						{/* Application open  */}
						<FormControl sx={{ my: 2, maxWidth: "300px" }}>
							<label>
								Application open <span className="text-danger">*</span>
							</label>
							<TextField type="date" />
						</FormControl>

						{/* Application close */}
						<FormControl sx={{ my: 2, maxWidth: "300px" }}>
							<label>
								Application close <span className="text-danger">*</span>
							</label>
							<TextField type="date" />
						</FormControl>

						{/* Duration */}
						<FormControl sx={{ my: 2, maxWidth: "300px" }}>
							<label>Duration</label>
							<TextField placeholder="6 Months" />
						</FormControl>

						{/* Program location * */}
						<FormControl sx={{ my: 2 }}>
							<label>
								Program location <span className="text-danger">*</span>
							</label>
							<TextField placeholder="London, UK" />
						</FormControl>

						{/* Min qualifications  */}
						<FormControl sx={{ my: 2, maxWidth: "300px" }}>
							<label htmlFor="">Min qualifications</label>
							<Select value="">
								<MenuItem value="High School">High School</MenuItem>
								<MenuItem value="College">College</MenuItem>
								<MenuItem value="Graduate">Graduate</MenuItem>
								<MenuItem value="University">University</MenuItem>
								<MenuItem value="Masters">Masters</MenuItem>
								<MenuItem value="Ph.D">Ph.D</MenuItem>
								<MenuItem value="Any">Any</MenuItem>
							</Select>
						</FormControl>

						{/* Max number of application */}
						<FormControl sx={{ my: 2, maxWidth: "300px" }}>
							<label>Max number of application</label>
							<TextField placeholder="20,000" />
						</FormControl>
					</Box>
				</form>
			</Box>
		</ProgramProviderLayout>
	);
};

export default CreateProgram;
