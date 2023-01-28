import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/system";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TextEditor, { Props } from "../../../form/TextEditor";
import CancelIcon from "@mui/icons-material/Cancel";

const inputform: Props = {
	height: "200px",
	placeholder:
		"You can add anything related to this candidate here. It can be your private note or you can share it with everyone. ",
};

const style = {
	position: "absolute" as "absolute",
	top: "60%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	width: "60%",
	p: 4,
	borderRadius: "20px",
	boxShadow: "0px 0px 33px rgba(190, 190, 190, 0.5)",
};

const EmailModal = (openProp: any) => {
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
				aria-describedby="modal-modal-description"
				sx={{
					overflow: "scroll",
					height: "100%",
					display: "block",
				}}>
				<Box sx={style}>
					<span onClick={handleClose}>
						<CancelIcon sx={{ float: "right" }} />
					</span>
					<Stack>
						<Typography variant="h2">Send Email</Typography>
						<TextField
							fullWidth
							placeholder="Select saved template from the list"
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
					</Stack>
					<Stack>
						<Typography variant="h2">To</Typography>
						<TextField
							fullWidth
							placeholder="Send email"
							type="text"
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
					<Stack>
						<Typography variant="h2">Email Subject</Typography>
						<TextField
							fullWidth
							placeholder="Send email"
							type="text"
							className="default-style"
							sx={{
								bgcolor: "white",
								my: 2,
								input: {
									fontSize: 11,
								},
							}}
						/>

						<TextEditor {...inputform} />
					</Stack>
					<Stack
						direction="row"
						marginTop={5}
						spacing={2}
						justifyContent="end">
						<Button>Cancel</Button>
						<Button sx={{ background: "red", color: "white" }}>Reject</Button>
					</Stack>
				</Box>
			</Modal>
		</div>
	);
};
export default EmailModal;
