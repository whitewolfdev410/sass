import { Box } from "@mui/material";
import { FileUpload } from "../..";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const CoverImage = () => {
	const [preview, setPreview] = useState<string | undefined>();

	const onUpload = (file: any) => {
		setPreview(URL.createObjectURL(file[0]));
	};

	return (
		<Box sx={{ mb: 3 }}>
			{preview ? (
				<div style={{ position: "relative" }}>
					<img src={preview} width="100%" height="190px" style={{ borderRadius: "5px" }} />
					<DeleteIcon
						sx={{ position: "absolute", right: "10px", bgcolor: "white", top: "5px" }}
						onClick={() => {
							setPreview(undefined);
						}}
					/>
				</div>
			) : (
				<FileUpload onUpload={onUpload} />
			)}
		</Box>
	);
};

export default CoverImage;
