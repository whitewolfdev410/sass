import { Box, FormControlLabel, Checkbox } from "@mui/material";
import { CustomSwitch as Switch } from "../../components";

const InternalShowGroup = () => {
	return (
		<Box
			sx={{
				".MuiFormControlLabel-label": {
					fontSize: 15,
				},
			}}>
			<FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Internal use" />
			<FormControlLabel control={<Switch defaultChecked color="success" />} label="Show" />
		</Box>
	);
};

export default InternalShowGroup;
