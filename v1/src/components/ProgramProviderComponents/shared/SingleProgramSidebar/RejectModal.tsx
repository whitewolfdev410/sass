import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/system";
import { TextField } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	width: "802px",
	p: "40px 46px 40px 43px",
	borderRadius: "20px",
	boxShadow: "0px 0px 33px rgba(190, 190, 190, 0.5)",
};

const RejectModal = (openProp: any) => {
	const [open, setOpen] = React.useState(openProp);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		openProp.close();
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box sx={style}>
					<Stack>
						<span onClick={handleClose}>
							<CancelIcon sx={{ float: "right" }} />
						</span>
					</Stack>
					<Stack>
						<Typography variant="h2">
							Record why you are bulk rejecting
						</Typography>
						<TextField
							fullWidth
							placeholder="candidate did not meet basic qualifications"
							type="text"
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
						<Typography
							variant="h6"
							sx={{ color: "#B5B5B5", mb: 0 }}>
							*rejection reasons will not be shared with the application
						</Typography>
					</Stack>
					<Stack
						spacing={2}
						sx={{ marginTop: "23px" }}>
						<Typography variant="h2">Additional note</Typography>
						<textarea
							name=""
							value="Candidate GPA's are below the required level for this program "
							style={{
								height: "125px",
								padding: 5,
								border: "1px solid #BDBDBD",
								boxShadow: "2px 2px 3px rgba(209, 209, 233, 0.3)",
								borderRadius: "5px",
							}}></textarea>
					</Stack>
					<Stack
						direction="row"
						marginTop={5}
						spacing={2}
						justifyContent="end">
						<Button>Cancel</Button>
						<Button
							sx={{
								background: "red",
								color: "white",
								width: "153px",
								height: "41px",
							}}>
							Reject
						</Button>
					</Stack>
				</Box>
			</Modal>
		</div>
	);
};
export default RejectModal;
