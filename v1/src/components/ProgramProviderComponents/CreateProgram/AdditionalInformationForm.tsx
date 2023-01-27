import { Box, Select, FormControl, TextField, MenuItem, Radio, Divider, FormControlLabel, Stack } from "@mui/material";

export type Props = {
	setData?: any;
	data?: any;
};

const AdditionalInformationForm = ({setData, data}: Props) => {

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
						<Select name="programType" value="" onChange={onHandleChange}>
							<MenuItem value="1">Internship</MenuItem>
							<MenuItem value="2">Job</MenuItem>
							<MenuItem value="3">Training</MenuItem>
							<MenuItem value="4">Masterclass</MenuItem>
							<MenuItem value="5">Webinar</MenuItem>
							<MenuItem value="6">Course</MenuItem>
							<MenuItem value="7">Live Seminar</MenuItem>
							<MenuItem value="8">Volunteering</MenuItem>
							<MenuItem value="9">Other</MenuItem>
						</Select>
					</FormControl>

					{/* Program start */}
					<FormControl sx={{ my: 2, maxWidth: "300px" }}>
						<label>Program start</label>
						<TextField type="date" onChange={onHandleChange} name="programStartDate"/>
					</FormControl>

					{/* Application open  */}
					<FormControl sx={{ my: 2, maxWidth: "300px" }}>
						<label>
							Application open <span className="text-danger">*</span>
						</label>
						<TextField type="date" onChange={onHandleChange} name="applicationOpenDate"/>
					</FormControl>

					{/* Application close */}
					<FormControl sx={{ my: 2, maxWidth: "300px" }}>
						<label>
							Application close <span className="text-danger">*</span>
						</label>
						<TextField type="date" onChange={onHandleChange} name="applicationCloseDate"/>
					</FormControl>

					{/* Duration */}
					<FormControl sx={{ my: 2, maxWidth: "300px" }}>
						<label>Duration</label>
						<TextField placeholder="6 Months" onChange={onHandleChange} name="duration"/>
					</FormControl>

					{/* Program location * */}
					<FormControl sx={{ my: 2, maxWidth: "500px" }}>
						<label>
							Program location <span className="text-danger">*</span>
						</label>
						<TextField
							onChange={onHandleChange} name="location"
							placeholder="London, UK"
							sx={{
								".MuiInputBase-input": {
									maxWidth: "300px",
								},
							}}
							InputProps={{
								endAdornment: (
									<Stack direction="row" flexGrow={1} alignItems="center">
										<Divider orientation="vertical" flexItem sx={{ mr: 2, bgcolor: "black", my: 0.5 }} />
										<FormControlLabel
											control={<Radio color="primary" />}
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
						<Select value="" onChange={onHandleChange} name="minQualification">
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
						<TextField placeholder="20,000" type="number" onChange={onHandleChange} name="maxApplications"/>
					</FormControl>
				</Box>
			</form>
		</Box>
	);
};

export default AdditionalInformationForm;
