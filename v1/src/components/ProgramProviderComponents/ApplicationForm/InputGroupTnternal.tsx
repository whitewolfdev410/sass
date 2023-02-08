import {
	Box,
	FormControlLabel,
	Checkbox,
	FormControl,
	Stack,
} from "@mui/material";
import React, { useState } from "react";
import { CustomSwitch as Switch } from "../../../components";

type Props = {
	// input: React.ReactNode;
	label: React.ReactNode;
	internal?: boolean;
	show?: boolean;
	setApplicationData?: any;
	applicationData?: any;
	name?: string;
};

const InternalShowGroup = ({
	label,
	internal = true,
	show = true,
	setApplicationData,
	applicationData,
	name,
}: Props) => {
	let [internalUse, setinternalUse] = useState(internal);
	let [showState, setShowState] = useState(show);

	return (
		<FormControl
			sx={{ my: 2 }}
			fullWidth>
			<Stack
				direction="row"
				justifyContent="space-between">
				<label>{label}</label>
				<Box
					sx={{
						".MuiFormControlLabel-label": {
							fontSize: 15,
						},
					}}>
					<FormControlLabel
						control={
							<Checkbox
								checked={internalUse}
								color="success"
								onChange={(event) => {
									setinternalUse((prev) => !prev);
									setApplicationData({
										...applicationData,
										[`${name}`]: {
											...applicationData[`${name}`],
											internalUse: event.target.checked,
										},
									});
								}}
							/>
						}
						label="Internal use"
					/>
					<FormControlLabel
						control={
							<Switch
								checked={showState}
								color="success"
								onChange={(event) => {
									setShowState((prev) => !prev);
									setApplicationData({
										...applicationData,
										[`${name}`]: {
											...applicationData[`${name}`],
											show: event.target.checked,
										},
									});
								}}
							/>
						}
						label={showState ? "Show" : "Hide"}
					/>
				</Box>
			</Stack>
			{/* {input} */}
		</FormControl>
	);
};

export default InternalShowGroup;
