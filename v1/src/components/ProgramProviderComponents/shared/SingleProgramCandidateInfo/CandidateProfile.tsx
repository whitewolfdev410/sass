import { Box, Stack, Grid, Checkbox, FormControlLabel, Typography } from "@mui/material";
import ActionCard from "../ActionCard";
import pencil from "../../../../assets/downloadImgjul.png";

const CandidateProfile = () => {
	return (
		<Box
			sx={{
				p: 2,
				paddingTop: "60px",
				width: "100%",
			}}>
			<Stack
				direction={{ xs: "column", sm: "row" }}
				sx={{
					"*": {
						fontWeight: "400",
						fontSize: "11px",
						lineHeight: "16px",
					},
					input: {
						border: "none",
						outline: "none",
						backgroundColor: "transparent",
					},
				}}
				gap={4}
				marginBottom="20px">
				{/* action cards */}
				{/* Contact information */}
				<ActionCard editable title="Aaliyah Samdi">
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "0.5rem 0",
						}}>
						{" "}
						<Typography>Current Location</Typography>
						<input value="Riyadh" />
					</Stack>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "0.5rem 0",
						}}>
						{" "}
						<Typography>Phone</Typography>
						<input value="626-398-6547" />
					</Stack>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "0.5rem 0",
						}}>
						{" "}
						<Typography>Email</Typography>
						<input value="aaliyah.samdi@gmail.com" />
					</Stack>
				</ActionCard>{" "}
				{/* Personal Information */}
				<ActionCard editable title="Personal Information">
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "0.5rem 0",
						}}>
						{" "}
						<Typography>Nationality</Typography>
						<input value="Saudi Arabia" />
					</Stack>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "0.5rem 0",
						}}>
						{" "}
						<Typography>National ID</Typography>
						<input value="235769708967" />
					</Stack>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "0.5rem 0",
						}}>
						{" "}
						<Typography>Gender</Typography>
						<input value="Female" />
					</Stack>
				</ActionCard>
				{/* action cards */}
			</Stack>

			<Stack
				direction={{ xs: "column", sm: "row" }}
				sx={{
					"*": {
						fontWeight: "400",
						fontSize: "11px",
						lineHeight: "16px",
					},
					"input , textarea": {
						border: "none",
						outline: "none",
						backgroundColor: "transparent",
						width: "100%",
						fontFamily: "inherit",
						fontSize: "inherit",
					},
				}}
				gap={4}
				marginBottom="20px">
				{/* action cards */}

				<ActionCard editable title="Education">
					<Stack
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "0.5rem 0",
						}}>
						{" "}
						<Typography>MM/YYYY – MM/YYYY</Typography>
						<textarea value="MA History and Political Science, HBS- Harvard University, United State" />
					</Stack>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "4rem 0 0 0",
						}}>
						{" "}
						<Typography>MM/YYYY – MM/YYYY</Typography>
						<textarea value="MA History King’s College London, United Kingdom" />
					</Stack>
				</ActionCard>

				<ActionCard editable title="Experience">
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "0.5rem 0",
						}}>
						{" "}
						<Typography>09/2022 – Current</Typography>
						<textarea value="Business Development, Saudi Corp, UAE" />
					</Stack>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "3rem 0 0 0",
						}}>
						{" "}
						<Typography>08/2020 – 08/2022</Typography>
						<textarea value="Job Title, Company name, Country" />
					</Stack>
				</ActionCard>

				{/* action cards */}
			</Stack>
			<Stack>
				<div
					style={{
						boxShadow: "0px 0px 33px rgba(97, 97, 97, 0.13)",
						borderRadius: "20px",
						width: "100%",
					}}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "start",
							padding: "1px 1px 0px 20px",
						}}>
						<h5 style={{ color: "#8528C8" }}>Resume</h5>
						<div
							style={{
								display: "flex",
								width: "32%",
								justifyContent: "space-between",
								margin: "auto 0 auto",
							}}>
							<span style={{ fontSize: "14px", height: "15px", color: "#000" }}>Change CV</span>
							<label
								style={{
									fontSize: "14px",
									height: "15px",
									color: "#000",
									marginRight: "10px",
									cursor: "pointer",
								}}
								htmlFor="downloadImg">
								Download <img style={{ margin: "0 4px" }} src={pencil} alt="" width="15%" />
							</label>
							<input hidden id="downloadImg" type="file" />
						</div>
					</div>
					<hr
						style={{
							border: "1px solid #B5B5B5",
							height: "0px",
							width: "100%",
							color: "#B5B5B5",
						}}
					/>
					<div
						style={{
							padding: "10px 20px",
							fontSize: "12px",
							marginLeft: "4rem",
						}}>
						<div style={{ color: "#000" }}>
							<Typography variant="h2" sx={{ margin: "1rem 0" }}>
								[Your Name]
							</Typography>
						</div>
						<div>
							<Typography variant="h3" sx={{ margin: "2rem 0 0.6rem  0" }}>
								Objective
							</Typography>
							<Typography variant="h5" sx={{ marginBottom: "1rem" }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repudiandae necessitatibus minima labore,
								eaque nemo ipsam quas amet natus quo voluptas voluptatibus ducimus, odit porro animi autem aperiam
								tempore odio. Eius ea quos cum ut unde repudiandae aperiam repellendus quo eveniet culpa eaque,
								voluptatem distinctio molestias
							</Typography>
						</div>
					</div>
				</div>
			</Stack>

			<Stack>
				<div
					style={{
						boxShadow: "0px 0px 33px rgba(97, 97, 97, 0.13)",
						borderRadius: "20px",
						width: "100%",
						margin: "1.6rem 0",
					}}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "start",
							padding: "1px 30px",
						}}>
						<h5 style={{ color: "#8528C8" }}>Answers</h5>
						<div
							style={{
								width: "10%",
								justifyContent: "space-between",
								margin: "auto 0 auto",
							}}>
							{/* <img src={pencil} alt="" width="45%" /> */}
						</div>
					</div>
					<hr
						style={{
							border: "1px solid #B5B5B5",
							height: "0px",
							width: "100%",
							color: "#B5B5B5",
						}}
					/>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: "0px 30px",
							fontSize: "12px",
						}}>
						<div style={{ color: "#A5A5A5" }}>
							<p style={{ marginBottom: "0" }}>Are you a fresh graduate and completed your studies in 2021 or 2022?</p>
							<FormControlLabel control={<Checkbox defaultChecked />} label="Yes" />
						</div>
					</div>

					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: "0px 30px",
							fontSize: "12px",
						}}>
						<div style={{ color: "#A5A5A5" }}>
							<p>
								What is your GPA?
								<br />
								3.78
							</p>
						</div>
					</div>
				</div>
			</Stack>
		</Box>
	);
};

export default CandidateProfile;
