import { Stack, Box, Checkbox, FormControlLabel } from "@mui/material";
import { CustomSwitch as Switch } from "../../../components";
import { useState } from "react";

type Props = {
	label: React.ReactNode;
	mandatory?: boolean;
	show?: boolean;
	setApplicationData?: any;
	applicationData?: any;
	name?: string;
};

const InputGroupMandatory = ({ label, mandatory, show, setApplicationData, applicationData, name }: Props) => {
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
							onChange={(event) => {
								setMandatoryState((prev) => !prev);
								setApplicationData({...applicationData, [`${name}`] : {...applicationData[`${name}`], internalUse:  event.target.checked}})
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
							onChange={(event) => {
								setShowState((prev) => !prev);
								setApplicationData({...applicationData, [`${name}`] : {...applicationData[`${name}`], show:  event.target.checked}})
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
