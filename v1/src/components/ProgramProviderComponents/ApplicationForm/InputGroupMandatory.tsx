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

const InputGroupMandatory = ({
	label,
	mandatory,
	show,
	setApplicationData,
	applicationData,
	name,
}: Props) => {
	return (
		<Stack
			direction="row"
			justifyContent="space-between"
			width="100%"
			marginY={2}>
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
							checked={mandatory}
							color="success"
							onChange={(event) => {
								setApplicationData({
									...applicationData,
									[`${name}`]: {
										...applicationData[`${name}`],
										mandatory: event.target.checked,
									},
								});
							}}
						/>
					}
					label="Mandatory"
				/>
				<FormControlLabel
					control={
						<Switch
							checked={show}
							color="success"
							onChange={(event) => {
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
					label={show ? "Show" : "Hide"}
				/>
			</Box>
		</Stack>
	);
};

export default InputGroupMandatory;
