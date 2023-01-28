import { Stack } from "@mui/system";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import pencil from "../../../../assets/downloadImgjul.png";

// import './Sample.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
	cMapUrl: "cmaps/",
	cMapPacked: true,
	standardFontDataUrl: "standard_fonts/",
};

const MyPdfViewer = ({ pdfUrl }: any) => {
	const [file, setFile] = useState(pdfUrl);
	const [numPages, setNumPages] = useState(null);
	const onFileChange = (event: any) => {
		setFile(event.target.files[0]);
	};

	const onDocumentLoadSuccess = ({ numPages: nextNumPages }: any) => {
		setNumPages(nextNumPages);
	};
	const handleDownload = () => {
		window.open(file);
	};

	return (
		<div className="Example">
			<div className="Example__container">
				<Stack direction="row">
					<div className="Example__container__load">
						<span style={{ fontSize: "14px", height: "15px", color: "#000" }}>
							Change CV
						</span>
						<input
							onChange={onFileChange}
							type="file"
						/>
					</div>
					<div>
						<label
							style={{
								fontSize: "14px",
								height: "15px",
								color: "#000",
								marginRight: "10px",
								cursor: "pointer",
							}}
							htmlFor="downloadImg">
							Download{" "}
							<img
								style={{ margin: "0 4px" }}
								src={pencil}
								alt=""
								width="15%"
							/>
						</label>
						<input
							hidden
							id="downloadImg"
							type="button"
							onClick={handleDownload}
						/>
					</div>
				</Stack>
				<hr
					style={{
						border: "1px solid #B5B5B5",
						height: "0px",
						width: "100%",
						color: "#B5B5B5",
					}}
				/>
				<div
					className="Example__container__document"
					style={{ overflow: "auto", height: 200 }}>
					<Document
						file={file}
						onLoadSuccess={onDocumentLoadSuccess}
						options={options}>
						{Array.from(new Array(numPages), (el, index) => (
							<Page
								key={`page_${index + 1}`}
								pageNumber={index + 1}
							/>
						))}
					</Document>
				</div>
			</div>
		</div>
	);
};
export default MyPdfViewer;
