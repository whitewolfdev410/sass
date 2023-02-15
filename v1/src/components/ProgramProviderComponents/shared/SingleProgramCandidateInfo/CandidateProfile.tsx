import React, { useState, useRef, useEffect } from "react";
import {
	Box,
	Stack,
	Checkbox,
	FormControlLabel,
	Typography,
} from "@mui/material";
import ActionCard from "../ActionCard";
import pencil from "../../../../assets/downloadImgjul.png";
import { Document, Page, pdfjs } from "react-pdf";
import {
	selectCandidateProfileData,
	updateCandidateApplication,
	useAppSelector,
	useAppDispatch,
} from "../../../../appStore";
import {
	candidateEducationType,
	candidatePersonalInfoType,
	candidatePersonAnswerType,
	CandidateProfileType,
	candidateWorkExperienceType,
} from "../../../../types";
// import taskPDF from "https://www.nypl.org/sites/default/files/Learn_ESOL_Aug_2010.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
	cMapUrl: "cmaps/",
	cMapPacked: true,
	standardFontDataUrl: "standard_fonts/",
};
const CandidateProfile = () => {
	const candidateWholeData = useAppSelector(selectCandidateProfileData);
	const candidateProfileDatas = candidateWholeData?.data?.attributes;
	const applicationId = candidateWholeData?.data?.id;
	const [candidateProfileData, setCandidateProfileData] = useState(
		candidateProfileDatas
	);
	const [personalInfo, setPersonalInfo] = useState(
		candidateProfileData?.personalInformation as candidatePersonalInfoType
	);
	const EducationList = candidateProfileData?.profile
		?.education as candidateEducationType[];
	const ExperienceList = candidateProfileData?.profile
		?.workExperience as candidateWorkExperienceType[];
	const Answers = candidateProfileData?.profile
		?.profileAnswers as candidatePersonAnswerType[];
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [file, setFile] = useState<any>("");
	const [numPages, setNumPages] = useState(null);
	const [showDropDown, setShowDropDown] = useState<boolean>(false);
	const [currentlyEditing, setCurrentlyEditing] = useState(false);
	const handleSave = () => {
		if (currentlyEditing)
			setCandidateProfileData({
				...candidateProfileData,
				personalInformation: personalInfo,
				profile: {
					education: EducationList,
					workExperience: ExperienceList,
					profileAnswers: Answers,
				},
			});
		setCurrentlyEditing(!currentlyEditing);
		onSaveData();
	};
	const dispatch = useAppDispatch();
	const programId = localStorage.getItem("programId") ?? "";
	const onSaveData = async () => {
		const data = {
			data: {
				id: applicationId,
				type: "candidateApplication",
				attributes: candidateProfileData,
			},
		} as CandidateProfileType;
		const response = await dispatch(
			updateCandidateApplication({ data, programId })
		);
	};
	const onFileChange = (event: any) => {
		setFile(event.target.files[0]);
	};
	const handleFileUpload = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const onDocumentLoadSuccess = ({ numPages: nextNumPages }: any) => {
		setNumPages(nextNumPages);
	};
	const handleDownload = () => {
		window.open(file);
	};
	const toggleDropDown = () => {
		setShowDropDown(!showDropDown);
	};
	const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
		if (event.currentTarget === event.target) {
			setShowDropDown(false);
		}
	};
	const onClickHandler = (option: string): void => {
		// citySelection(option);
	};
	const handleChange = (e: any) => {
		setPersonalInfo({
			...personalInfo,
			[e.target.name]: e.target.value,
		});
	};
	const handleProfile = (e: any) => {
		console.log(e.target.value);
	};
	useEffect(() => {
		setCandidateProfileData(candidateProfileDatas);
	}, [candidateProfileDatas]);
	return (
		<Box
			sx={{
				paddingTop: "60px",
				width: "100%",
			}}>
			<Stack
				direction={{ xs: "column", sm: "row" }}
				sx={{
					"*": {
						fontWeight: "400",
						fontSize: "11px",
						lineHeight: "16px",
					},
					input: {
						border: "none",
						outline: "none",
						backgroundColor: "transparent",
					},
					"div:first-of-type > div:first-of-type > p:first-of-type": {
						fontSize: "20px !important",
						fontWeight: 700,
						color: "black",
					},
				}}
				gap={4}
				marginBottom="20px">
				{/* action cards */}
				{/* Contact information */}
				<ActionCard
					editable
					currentlyEditing={currentlyEditing}
					setCurrentlyEditing={handleSave}
					key={personalInfo?.emailId}
					title={`${personalInfo?.firstName} ${personalInfo?.lastName}`}>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "0.5rem 0",
						}}>
						{" "}
						<Typography>Current Location</Typography>
						<input
							value={personalInfo?.currentResidence}
							name="currentResidence"
							onChange={handleChange}
						/>
					</Stack>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "0.5rem 0",
						}}>
						{" "}
						<Typography>Phone</Typography>
						<input
							value={personalInfo?.phoneNumber}
							name="phoneNumber"
							onChange={handleChange}
						/>
					</Stack>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "0.5rem 0",
						}}>
						{" "}
						<Typography>Email</Typography>
						<input
							value={personalInfo?.emailId}
							name="emailId"
							onChange={handleChange}
						/>
					</Stack>
				</ActionCard>{" "}
				{/* Personal Information */}
				<ActionCard
					editable
					currentlyEditing={currentlyEditing}
					setCurrentlyEditing={handleSave}
					key={personalInfo?.idNumber}
					title="Personal Information">
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "0.5rem 0",
						}}>
						{" "}
						<Typography>Nationality</Typography>
						<input
							value={personalInfo?.nationality}
							name="nationality"
							onChange={handleChange}
						/>
					</Stack>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "0.5rem 0",
						}}>
						{" "}
						<Typography>National ID</Typography>
						<input
							value={personalInfo?.idNumber}
							name="idNumber"
							onChange={handleChange}
						/>
					</Stack>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
							gap: { xs: 5, md: 15, xl: 20 },
							margin: "0.5rem 0",
						}}>
						{" "}
						<Typography>Gender</Typography>
						<input
							value={personalInfo?.gender}
							name="gender"
							onChange={handleChange}
						/>
					</Stack>
				</ActionCard>
				{/* action cards */}
			</Stack>

			<Stack
				direction={{ xs: "column", sm: "row" }}
				sx={{
					"*": {
						fontWeight: "400",
						fontSize: "11px",
						lineHeight: "16px",
					},
					"input , textarea": {
						border: "none",
						outline: "none",
						backgroundColor: "transparent",
						width: "100%",
						fontFamily: "inherit",
						fontSize: "inherit",
					},
				}}
				gap={4}
				marginBottom="20px">
				{/* action cards */}

				<ActionCard
					editable
					currentlyEditing={currentlyEditing}
					setCurrentlyEditing={handleSave}
					key="Education"
					title="Education">
					{EducationList &&
						EducationList.map((Education: any, index: number) => {
							return (
								<Stack
									key={index.toString()}
									sx={{
										display: "grid",
										gridTemplateColumns: "1fr 2fr",
										gap: { xs: 5, md: 15, xl: 20 },
										margin: "0.5rem 0",
									}}>
									{" "}
									<Typography>
										{new Date(Education.startDate).toLocaleDateString()} –{" "}
										{new Date(Education.endDate).toLocaleDateString()}
									</Typography>
									<textarea
										value={`${Education?.course}, ${Education?.school}, ${Education?.location}`}
										onChange={handleProfile}
									/>
								</Stack>
							);
						})}
				</ActionCard>

				<ActionCard
					editable
					currentlyEditing={currentlyEditing}
					setCurrentlyEditing={handleSave}
					key="Experience"
					title="Experience">
					{ExperienceList?.map((Experience: any, index: number) => {
						return (
							<Stack
								key={index.toString()}
								direction="row"
								sx={{
									display: "grid",
									gridTemplateColumns: "1fr 2fr",
									gap: { xs: 5, md: 15, xl: 20 },
									margin: "0.5rem 0",
								}}>
								{" "}
								{Experience?.currentlyWorkHere ? (
									<Typography>{`${new Date(
										Experience?.startDate
									).toLocaleDateString()} - NOW`}</Typography>
								) : (
									<Typography>{`${new Date(
										Experience?.startDate
									).toLocaleDateString()} - ${new Date(
										Experience?.endDate
									).toLocaleDateString()}`}</Typography>
								)}
								<textarea
									value={`${Experience?.title}-${Experience?.company}-${Experience?.location}`}
									onChange={handleProfile}
								/>
							</Stack>
						);
					})}
				</ActionCard>

				{/* action cards */}
			</Stack>
			<Stack>
				<div
					style={{
						boxShadow: "0px 0px 33px rgba(97, 97, 97, 0.13)",
						borderRadius: "20px",
						width: "100%",
					}}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "start",
							padding: "1px 1px 0px 20px",
						}}>
						<h5 style={{ color: "#8528C8" }}>Resume</h5>
						<div
							style={{
								display: "flex",
								width: "32%",
								justifyContent: "space-between",
								margin: "auto 0 auto",
							}}>
							<span
								style={{
									fontSize: "14px",
									height: "15px",
									color: "#000",
								}}
								onClick={handleFileUpload}>
								Change CV
							</span>
							<input
								ref={fileInputRef}
								onChange={onFileChange}
								type="file"
								hidden
							/>
							<label
								style={{
									fontSize: "14px",
									height: "15px",
									color: "#000",
									marginRight: "10px",
									cursor: "pointer",
									display: "flex",
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
					</div>
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
						style={{
							overflow: "auto",
							height: 200,
							marginBottom: 11,
							marginLeft: 10,
						}}>
						<Document
							file={"http://localhost:3000/Task.pdf"}
							onLoadSuccess={onDocumentLoadSuccess}
							options={options}
							onLoadError={console.error}>
							{Array.from(new Array(numPages), (el, index) => (
								<Page
									key={`page_${index + 1}`}
									pageNumber={index + 1}
								/>
							))}
						</Document>
					</div>
				</div>
			</Stack>

			<Stack>
				<div
					style={{
						boxShadow: "0px 0px 33px rgba(97, 97, 97, 0.13)",
						borderRadius: "20px",
						width: "100%",
						margin: "1.6rem 0",
					}}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "start",
							padding: "1px 30px",
						}}>
						<h5 style={{ color: "#8528C8" }}>Answers</h5>
						<div
							style={{
								width: "10%",
								justifyContent: "space-between",
								margin: "auto 0 auto",
							}}>
							{/* <img src={pencil} alt="" width="45%" /> */}
						</div>
					</div>
					<hr
						style={{
							border: "1px solid #B5B5B5",
							height: "0px",
							width: "100%",
							color: "#B5B5B5",
						}}
					/>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: "0px 30px",
							fontSize: "12px",
						}}>
						{Answers?.map((Answer: any) => {
							{
								if (Answer?.Type === "yesNo")
									return (
										<div
											style={{ color: "#A5A5A5" }}
											key={Answer.id}>
											<p style={{ marginBottom: "0" }}>{Answer?.Question}</p>
											{Answer?.Answer === "yes" ? (
												<FormControlLabel
													control={<Checkbox defaultChecked />}
													label="Yes"
												/>
											) : (
												<FormControlLabel
													control={<Checkbox defaultChecked />}
													label="No"
												/>
											)}
										</div>
									);
							}
						})}
					</div>

					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: "0px 30px",
							fontSize: "12px",
						}}>
						{Answers?.map((Answer: any, index: number) => {
							{
								if (Answer?.Type === "paragraph")
									return (
										<div
											style={{ color: "#A5A5A5" }}
											key={index.toString()}>
											<p>
												{Answer?.Question}
												<br />
												<br />
												{Answer?.Answer}
											</p>
										</div>
									);
							}
						})}
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: "0px 30px",
							fontSize: "12px",
						}}>
						{Answers?.map((Answer: any) => {
							{
								if (Answer?.Type === "dropDown")
									return (
										<div
											style={{ color: "#A5A5A5" }}
											key={Answer?.id}>
											<p>
												{Answer?.Question}
												<br />
												<br />
												<button
													className={showDropDown ? "active" : undefined}
													onClick={(): void => toggleDropDown()}
													style={{
														position: "relative",
														color: "#A5A5A5",
														background: "#ddd",
														border: "#ddd",
														fontWeight: "400",
														cursor: "pointer",
													}}
													onBlur={(
														e: React.FocusEvent<HTMLButtonElement>
													): void => dismissHandler(e)}>
													<div>
														{Answer?.answer ? Answer?.answer : "No Answer"}{" "}
													</div>
													{showDropDown && (
														<div>
															{Answer?.selectedChoices.map(
																(
																	option: string,
																	index: number
																): JSX.Element => {
																	return (
																		<p
																			key={index}
																			onClick={(): void => {
																				onClickHandler(option);
																			}}>
																			{option}
																		</p>
																	);
																}
															)}
														</div>
													)}
												</button>
											</p>
										</div>
									);
							}
						})}
					</div>
				</div>
			</Stack>
		</Box>
	);
};

export default CandidateProfile;
