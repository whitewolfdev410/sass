import { Stack, Box, Checkbox, FormControlLabel } from "@mui/material";
import { CustomSwitch as Switch } from "../../../components";
import { useState } from "react";

type Props = {
	label: React.ReactNode;
	mandatory?: boolean;
	show?: boolean;
};

const InputGroupMandatory = ({ label, mandatory, show }: Props) => {
	let [mandatoryState, setMandatoryState] = useState(mandatory);
	let [showState, setShowState] = useState(show);
	return (
		<Stack direction="row" justifyContent="space-between" width="100%" marginY={2}>
			<label htmlFor="">{label}</label>

			<Box
				sx={{
					".MuiFormControlLabel-label": {
						fontSize: 15,
					},
				}}>
				<FormControlLabel
					control={
						<Checkbox
							checked={mandatoryState}
							color="success"
							onClick={() => {
								setMandatoryState((prev) => !prev);
							}}
						/>
					}
					label="Mandatory"
				/>
				<FormControlLabel
					control={
						<Switch
							checked={showState}
							color="success"
							onClick={() => {
								setShowState((prev) => !prev);
							}}
						/>
					}
					label={showState ? "Show" : "Hide"}
				/>
			</Box>
		</Stack>
	);
};

export default InputGroupMandatory;
