import { Box, Select, FormControl, TextField, MenuItem, Radio, Divider, FormControlLabel, Stack } from "@mui/material";

const AdditionalInformationForm = () => {
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
					<FormControl sx={{ my: 2, maxWidth: "500px" }}>
						<label>
							Program location <span className="text-danger">*</span>
						</label>
						<TextField
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
	);
};

export default AdditionalInformationForm;
