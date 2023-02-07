import React, { ChangeEvent, useState, useRef } from "react";
import { ApplicationFormCard } from "../../cards";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Stack, Typography } from "@mui/material";

export type Props = {
	setCandidateData?: any;
	candidateData?: any;
};

const Resume = ({ setCandidateData, candidateData }: Props) => {
	const [file, setFile] = useState<File>();
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
			setCandidateData({ ...candidateData, resume: e.target.files[0] });
		}
	};
	const handleClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	return (
		<ApplicationFormCard title="Resume">
			<Stack
				justifyContent="center"
				border="dashed 1px #A0A0A0"
				borderRadius="20px"
				height="197px"
				alignItems="center">
				<CloudUploadIcon
					onClick={handleClick}
					fontSize="large"
				/>
				<input
					type="file"
					ref={fileInputRef}
					accept="application/pdf"
					onChange={handleFileChange}
					hidden
				/>
				{file ? (
					<div>{file && `${file.name}`}</div>
				) : (
					<div
						style={{
							color: "#B5B5B5",
							fontSize: "15px",
						}}>
						Upload here
					</div>
				)}
			</Stack>
			<div
				style={{
					color: "#B5B5B5",
					marginTop: "12px",
				}}>
				<Typography variant="h5">
					Maximun uploaded file size: 10MB| Must be PDF file
				</Typography>
			</div>
		</ApplicationFormCard>
	);
};

export default Resume;
