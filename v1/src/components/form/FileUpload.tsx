import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Typography } from "@mui/material";
import FileUploadIcon from "../../assets/icons/file-upload.svg";

type Props = {
	onUpload: (files: any) => void;
};

const FileUpload = ({ onUpload }: Props) => {
	const onDrop = useCallback((acceptedFiles: any) => {
		onUpload(acceptedFiles);
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		maxSize: 1048576,
	});

	return (
		<Button
			fullWidth
			variant="outlined"
			className="custom-file-upload"
			onClick={(e) => {
				const target = e.target as HTMLButtonElement;

				Array.from(target.children).forEach((elem) => {
					if (elem.tagName == "INPUT") {
						let input = elem as HTMLInputElement;
						input.click();
					}
				});
			}}
			sx={{
				py: { xs: 4, xl: 6 },
			}}
			{...getRootProps()}>
			<img src={FileUploadIcon} />
			{isDragActive ? (
				<Typography fontSize={20} sx={{ color: "black" }}>
					Drop the files here ...
				</Typography>
			) : (
				<>
					<Typography variant="h4" fontWeight={600} sx={{ color: "black" }}>
						Upload cover image
					</Typography>
					<Typography fontSize={14} sx={{ color: "var(--spanish-grey)" }}>
						16:9 ratio is recommended. Max image size 1mb
					</Typography>
				</>
			)}
			<input type="file" hidden accept="image/*" {...getInputProps()} />
		</Button>
	);
};

export default FileUpload;
