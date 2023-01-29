import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/system";
import RatingGroup from "../RatingGroup";
import { Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { Dayjs } from "dayjs";
import {
	DateRangePicker,
	DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
	position: "absolute" as "absolute",
	left: "50%",
	transform: "translateX(-50%)",
	bgcolor: "background.paper",
	width: "708px",
	p: "30px 33px 50px 50px",
	borderRadius: "20px",
	boxShadow: "0px 0px 33px rgba(190, 190, 190, 0.5)",
	top: "5%",
};

const DeleteModal = (openProp: any) => {
	const [open, setOpen] = React.useState(openProp);
	const handleClose = () => {
		setOpen(false);
		openProp.close();
	};
	const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{
					overflow: "scroll",
					height: "100%",
					display: "block",
				}}>
				<Box sx={style}>
					<Stack>
						<span onClick={handleClose}>
							<CancelIcon sx={{ float: "right" }} />
						</span>
					</Stack>
					<Stack>
						<Typography
							sx={{
								fontFamily: "Poppins",
								fontWeight: 700,
								fontSize: "13px",
							}}>
							Locations
						</Typography>
						<TextField
							fullWidth
							placeholder="Search"
							type="email"
							className="default-style"
							InputProps={{
								startAdornment: (
									<SearchIcon sx={{ color: "var(--spanish-grey)", mr: 1 }} />
								),
							}}
							sx={{
								bgcolor: "white",
								my: 2,
								input: {
									fontSize: 11,
								},
							}}
						/>
					</Stack>
					<Stack direction="row">
						<Grid
							container
							spacing={2}>
							<Grid
								item
								xs={5}>
								<Typography
									sx={{
										fontFamily: "Poppins",
										fontWeight: 700,
										fontSize: "13px",
									}}>
									Example of yes or no question filter
								</Typography>
								<FormControlLabel
									label={<Typography variant="h5">Yes</Typography>}
									control={
										<Checkbox
											// checked={checked}
											// onChange={handleChange}
											inputProps={{ "aria-label": "controlled" }}
											sx={{ "&:has(>input:checked)": { color: "#60C69B" } }}
										/>
									}
								/>
								<FormControlLabel
									label={<Typography variant="h5">No</Typography>}
									control={
										<Checkbox
											// checked={checked}
											// onChange={handleChange}
											inputProps={{ "aria-label": "controlled" }}
											sx={{ "&:has(>input:checked)": { color: "#60C69B" } }}
										/>
									}
								/>
							</Grid>
							<Grid
								item
								xs={7}>
								<Typography
									sx={{
										fontFamily: "Poppins",
										fontWeight: 700,
										fontSize: "13px",
									}}>
									Example of yes or no question filter
								</Typography>
								<Stack direction="column">
									<FormControlLabel
										label={<Typography variant="h5">Choice 1</Typography>}
										control={
											<Checkbox
												// checked={checked}
												// onChange={handleChange}
												inputProps={{ "aria-label": "controlled" }}
												sx={{ "&:has(>input:checked)": { color: "#60C69B" } }}
											/>
										}
									/>
									<FormControlLabel
										label={<Typography variant="h5">Choice 2</Typography>}
										control={
											<Checkbox
												// checked={checked}
												// onChange={handleChange}
												inputProps={{ "aria-label": "controlled" }}
												sx={{ "&:has(>input:checked)": { color: "#60C69B" } }}
											/>
										}
									/>
									<FormControlLabel
										label={<Typography variant="h5">Choice 3</Typography>}
										control={
											<Checkbox
												// checked={checked}
												// onChange={handleChange}
												inputProps={{ "aria-label": "controlled" }}
												sx={{ "&:has(>input:checked)": { color: "#60C69B" } }}
											/>
										}
									/>
								</Stack>
							</Grid>
						</Grid>
					</Stack>
					<Stack>
						<Typography
							sx={{
								fontFamily: "Poppins",
								fontWeight: 700,
								fontSize: "13px",
							}}>
							If the dropdown which allow you to select multiple answers
						</Typography>
						<TextField
							fullWidth
							placeholder="select multiple options"
							type="email"
							className="default-style"
							InputProps={{
								endAdornment: (
									<ArrowDropDownIcon
										sx={{ color: "var(--spanish-grey)", mr: 1 }}
									/>
								),
							}}
							sx={{
								bgcolor: "white",
								my: 2,
								input: {
									fontSize: 11,
								},
							}}
						/>
					</Stack>
					<Stack>
						<Typography
							sx={{
								fontFamily: "Poppins",
								fontWeight: 700,
								fontSize: "13px",
							}}>
							Example of number question, filter between the value
						</Typography>
						<Stack
							direction="row"
							alignItems="center"
							spacing={2}>
							<TextField
								fullWidth
								placeholder="enter the value"
								type="email"
								className="default-style"
								sx={{
									bgcolor: "white",
									my: 2,
									input: {
										fontSize: 11,
									},
								}}
							/>
							<Typography> To </Typography>
							<TextField
								fullWidth
								placeholder="enter the value"
								type="email"
								className="default-style"
								sx={{
									bgcolor: "white",
									my: 2,
									input: {
										fontSize: 11,
									},
								}}
							/>
						</Stack>
					</Stack>
					<Stack spacing={2}>
						<Typography
							sx={{
								fontFamily: "Poppins",
								fontWeight: 700,
								fontSize: "13px",
							}}>
							Date range filter, show the calendar to filter between two
						</Typography>
						<LocalizationProvider
							fullWidth
							dateAdapter={AdapterDayjs}
							localeText={{ start: "start", end: "end" }}>
							<MobileDateRangePicker
								value={value}
								onChange={(newValue: any) => {
									setValue(newValue);
								}}
								renderInput={(startProps: any, endProps: any) => (
									<React.Fragment>
										<TextField
											fullWidth
											{...startProps}
										/>
										<Box sx={{ mx: 2 }}> to </Box>
										<TextField
											fullWidth
											{...endProps}
										/>
									</React.Fragment>
								)}
							/>
						</LocalizationProvider>
					</Stack>
					<Stack
						spacing={2}
						sx={{ mt: "57px" }}>
						<Typography
							sx={{ fontSize: "24px", fontWeight: 700, fontFamily: "Poppins" }}>
							Evaluation Filter
						</Typography>
						<Box
							sx={{
								">*": {
									display: "flex",
									gridTemplateColumns: "2fr 3fr",
									mb: 2,
									mt: "50px",
									alignItems: "center",
								},
							}}>
							<div
								style={{
									justifyContent: "space-between",
								}}>
								<p>Communication</p>
								<RatingGroup
									onRate={() => {}}
									name="communication"
								/>
							</div>
							<div
								style={{
									justifyContent: "space-between",
								}}>
								<p>Professionalism</p>
								<RatingGroup
									onRate={() => {}}
									name="professionalism"
								/>
							</div>
							<div
								style={{
									justifyContent: "space-between",
								}}>
								<p>Attitude</p>
								<RatingGroup
									onRate={() => {}}
									name="attitude"
								/>
							</div>
							<div
								style={{
									justifyContent: "space-between",
								}}>
								<p>Subject knowledge</p>
								<RatingGroup
									onRate={() => {}}
									name="subject-knowledge"
								/>
							</div>
						</Box>
						<h4>Would you recommend the candidate to this program?</h4>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								marginTop: "0px",
							}}>
							<p
								style={{
									fontSize: "10px",
								}}>
								Unlikely to recommend
							</p>
						</div>
						<RatingGroup
							onRate={() => {}}
							name="recommend"
						/>
					</Stack>
				</Box>
			</Modal>
		</div>
	);
};
export default DeleteModal;
