import { Box, FormControlLabel, Checkbox, FormControl, Stack } from "@mui/material";
import React, { useState } from "react";
import { CustomSwitch as Switch } from "../../../components";

type Props = {
	input: React.ReactNode;
	label: React.ReactNode;
	internal?: boolean;
	show?: boolean;
};

const InternalShowGroup = ({ input, label, internal = true, show = true }: Props) => {
	let [internalUse, setinternalUse] = useState(internal);
	let [showState, setShowState] = useState(show);

	return (
		<FormControl sx={{ my: 2 }} fullWidth>
			<Stack direction="row" justifyContent="space-between">
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
								onClick={() => {
									setinternalUse((prev) => !prev);
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
								onClick={() => {
									setShowState((prev) => !prev);
								}}
							/>
						}
						label={showState ? "Show" : "Hide"}
					/>
				</Box>
			</Stack>
			{input}
		</FormControl>
	);
};

export default InternalShowGroup;
