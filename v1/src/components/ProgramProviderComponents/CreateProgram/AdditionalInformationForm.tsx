import {
	Box,
	Select,
	FormControl,
	TextField,
	MenuItem,
	Radio,
	Divider,
	FormControlLabel,
	Stack,
	Input,
} from "@mui/material";

export type Props = {
	setData?: any;
	data?: any;
};

const AdditionalInformationForm = ({ setData, data }: Props) => {
	const onHandleChange = (event: any) => {
		const { name, value } = event.target;
		setData({ ...data, [name]: value });
	};

	const stringToDate = (dateString: string) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return `${date.getFullYear()}-${(date.getMonth() + 1)
			.toString()
			.padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
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
			{/* Create program form */}
			<form
				action=""
				className="custom-form">
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
						<Select
							name="programType"
							value={data?.programType}
							onChange={onHandleChange}>
							<MenuItem value="Internship">Internship</MenuItem>
							<MenuItem value="Job">Job</MenuItem>
							<MenuItem value="Training">Training</MenuItem>
							<MenuItem value="Masterclass">Masterclass</MenuItem>
							<MenuItem value="Webinar">Webinar</MenuItem>
							<MenuItem value="Course">Course</MenuItem>
							<MenuItem value="LiveSeminar">LiveSeminar</MenuItem>
							<MenuItem value="Volunteering">Volunteering</MenuItem>
							<MenuItem value="Other">Other</MenuItem>
						</Select>
					</FormControl>

					{/* Program start */}
					<FormControl sx={{ my: 2, maxWidth: "300px" }}>
						<label>Program start</label>
						<TextField
							type="date"
							value={stringToDate(data?.startDate)}
							onChange={onHandleChange}
							name="startDate"
						/>
					</FormControl>

					{/* Application open  */}
					<FormControl sx={{ my: 2, maxWidth: "300px" }}>
						<label>
							Application open <span className="text-danger">*</span>
						</label>
						<TextField
							type="date"
							value={stringToDate(data?.applicationOpenDate)}
							onChange={onHandleChange}
							name="applicationOpenDate"
						/>
					</FormControl>

					{/* Application close */}
					<FormControl sx={{ my: 2, maxWidth: "300px" }}>
						<label>
							Application close <span className="text-danger">*</span>
						</label>
						<TextField
							type="date"
							value={stringToDate(data?.applicationCloseDate)}
							onChange={onHandleChange}
							name="applicationCloseDate"
						/>
					</FormControl>

					{/* Duration */}
					<FormControl sx={{ my: 2, maxWidth: "300px" }}>
						<label>Duration</label>
						<TextField
							placeholder="6 Months"
							value={data?.duration}
							onChange={onHandleChange}
							name="duration"
						/>
					</FormControl>

					{/* Program location * */}
					<FormControl sx={{ my: 2, maxWidth: "500px" }}>
						<label>
							Program location <span className="text-danger">*</span>
						</label>
						<TextField
							onChange={onHandleChange}
							name="location"
							value={data?.location}
							placeholder="London, UK"
							sx={{
								".MuiInputBase-input": {
									maxWidth: "300px",
								},
							}}
							InputProps={{
								endAdornment: (
									<Stack
										direction="row"
										flexGrow={1}
										alignItems="center">
										<Divider
											orientation="vertical"
											flexItem
											sx={{ mr: 2, bgcolor: "black", my: 0.5 }}
										/>
										<FormControlLabel
											control={
												<Radio
													color="primary"
													value={data?.isFullyRemote}
													onChange={onHandleChange}
												/>
											}
											label="Fully Remote"
											sx={{ fontSize: 14, flexGrow: 1 }}
										/>
									</Stack>
								),
							}}
						/>
					</FormControl>

					{/* Min qualifications  */}
					<FormControl sx={{ my: 2, maxWidth: "300px" }}>
						<label htmlFor="">Min qualifications</label>
						<Select
							value={data?.minimumQualification}
							onChange={onHandleChange}
							name="minimumQualification">
							<MenuItem value="HighSchool">HighSchool</MenuItem>
							<MenuItem value="College">College</MenuItem>
							<MenuItem value="Graduate">Graduate</MenuItem>
							<MenuItem value="University">University</MenuItem>
							<MenuItem value="Phd">Phd</MenuItem>
							<MenuItem value="Any">Any</MenuItem>
						</Select>
					</FormControl>

					{/* Max number of application */}
					<FormControl sx={{ my: 2, maxWidth: "300px" }}>
						<label>Max number of application</label>
						<TextField
							placeholder="20000"
							type="number"
							onChange={onHandleChange}
							name="maxApplication"
							value={data?.maxApplication}
						/>
					</FormControl>
				</Box>
			</form>
		</Box>
	);
};

export default AdditionalInformationForm;
