import React, { useState } from "react";
import { ApplicationFormCard } from "../../cards";
import { FormControl, MenuItem, Select, Stack, TextField } from "@mui/material";
import {
	CountryRegionData,
	RegionDropdown,
} from "react-country-region-selector";
import { Multiselect } from "multiselect-react-dropdown";
import "./style.css";
export type Props = {
	setCandidateData?: any;
	candidateData?: any;
};
const style = {
	chips: {
		background: "#C4C4C4",
	},
	searchBox: {
		outerHeight: "50px",
		border: "1px solid black",
	},
	searchWrapper: {
		color: "#C4C4C4",
	},
};

const AdditionalQuestion = ({ setCandidateData, candidateData }: Props) => {
	const questionList = [
		{ label: "question  1", id: 1 },
		{ label: "question  2", id: 2 },
	];
	const options = [
		{ name: "Srigar", id: 1 },
		{ name: "Sam", id: 2 },
	];
	const [items, setItems] = useState([]);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(items);
	};

	const handleSelect = (selectedList: any) => {
		setItems(selectedList);
	};

	const handleRemove = (selectedList: any) => {
		setItems(selectedList);
	};
	const handleOnChange = (event: any) => {
		setCandidateData({
			...candidateData,
			[event.target.name]: event.target.value,
		});
	};
	const handleRegion = (val: any) => {
		setCandidateData({
			...candidateData,
			currentlyBased: val,
		});
	};

	return (
		<ApplicationFormCard title="Additional questions">
			<Stack sx={{ height: "200px" }}>
				<FormControl
					sx={{ my: 2, height: "100%" }}
					fullWidth>
					<label>Please select your region</label>
					<RegionDropdown
						country={candidateData?.nationality}
						value={candidateData?.currentlyBased}
						onChange={(val: any) => handleRegion(val)}
					/>
				</FormControl>
			</Stack>
			<Stack>
				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label>
						What inspire you to apply for this program? It should be no more
						than 100 words
					</label>
					<textarea
						name="summary"
						onChange={handleOnChange}
						style={{ height: "130px" }}
						placeholder="Please type your answer here"
					/>
				</FormControl>
			</Stack>
			<Stack>
				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label>Have you studied abroad in the past 12 months? </label>
					<Select
						name="questionApplication"
						sx={{ mb: "25px" }}
						value={candidateData?.questionApplication}
						placeholder="select from the list"
						onChange={handleOnChange}>
						{questionList.map((item: any) => (
							<MenuItem value={item?.label}>{item?.label}</MenuItem>
						))}
					</Select>
					<TextField
						placeholder='Please specify "Other"'
						name="question"
						onChange={handleOnChange}
					/>
				</FormControl>
			</Stack>
			<Stack>
				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label>Multiple choice display at the front </label>
					<Multiselect
						style={style}
						options={options} // Options to display in the dropdown
						selectedValues={items} // Preselected value to persist in dropdown
						onSelect={handleSelect} // Function will trigger on select event
						onRemove={handleRemove} // Function will trigger on remove event
						displayValue="name" // Property name to display in the dropdown options
					/>
				</FormControl>
			</Stack>
		</ApplicationFormCard>
	);
};

export default AdditionalQuestion;
