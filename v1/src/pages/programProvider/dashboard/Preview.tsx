import { useEffect, useState } from "react";
import { Box, Divider, Stack, Typography, Button } from "@mui/material";
import { ApplicationFormCard } from "../../../components";
import {
	SkillsChip,
	CreateProgramLayout,
} from "../../../components/ProgramProviderComponents";
import placeholder from "../../../assets/bg/placeholders/program-publish-placeholder.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Edit from "../../../assets/icons/pencil-outlined.svg";
import { ProgramDetailsType, ProgramPreviewType } from "../../../types";
import { useNavigate } from "react-router";
import {
	getProgramPreview,
	programPreviewData,
	publishProgram,
	useAppDispatch,
	useAppSelector,
} from "../../../appStore";
// import PersonalInfoPreview from "../../../components/ProgramProviderComponents/ApplicationForm/PersonalInfoPreview";

const Preview = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const programId = localStorage.getItem("programId") ?? "";
	useEffect(() => {
		// @ts-ignore
		dispatch(getProgramPreview({ id: programId }));
	}, []);
	const handlePublish = async () => {
		const action = await dispatch(
			publishProgram({
				data: {
					id: programId,
					type: "program",
					attributes: { status: "Open" },
				},
			})
		);
		if (action.meta.requestStatus === "fulfilled") {
			navigate(`/provider/dashboard/program/${programId}`, { replace: true });
		} else if (action.meta.requestStatus === "rejected") {
			console.log("error");
		}
	};
	const previewDatas = useAppSelector(programPreviewData);
	const [previewData, setPreviewData] = useState<ProgramPreviewType>();
	useEffect(() => {
		setPreviewData(previewDatas);
		setData(
			previewDatas?.data?.attributes.programDetails as ProgramDetailsType
		);
	}, [previewDatas]);
	// const [personalInfo, setPersonalInfo] = useState(
	// 	previewData?.data?.attributes?.applicationForm.personalInformation
	// );
	// const [profileData, setProfileData] = useState(
	// 	previewData?.data?.attributes.applicationForm.profile
	// );
	const [data, setData] = useState<ProgramDetailsType>();

	return (
		<CreateProgramLayout data={data}>
			<Stack
				sx={{
					display: "grid",
					gridTemplateColumns: "2fr 1fr",
					gap: 3,
					my: "89px",
				}}
				className="content-wrapper">
				{/* Left Side */}
				<Box maxWidth={"690px"}>
					<Stack ml="100px">
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center">
							<Typography
								variant="h1"
								fontSize={{ xs: 30, xl: 40 }}
								sx={{ my: 3 }}>
								{data?.programType} <br /> {data?.title}
							</Typography>
							<Button>
								<img
									src={Edit}
									alt=""
								/>
							</Button>
						</Stack>

						<Typography
							fontSize={{ xs: 17, xl: 20 }}
							fontWeight={400}
							sx={{ my: 3 }}>
							{data?.summary}
						</Typography>

						<Divider sx={{ my: 5 }} />

						<Typography sx={{ my: 3 }}>{data?.description}</Typography>

						<Stack
							gap={1}
							direction="row"
							mt={4}>
							<SkillsChip label="UI" />
							<SkillsChip label="Social Media" />
							<SkillsChip label="Content Writing" />
						</Stack>
					</Stack>
					<Stack
						ml="70px"
						mt="57px">
						<ApplicationFormCard
							title="Program benefits"
							editIcon>
							<Typography>{data?.benefits}</Typography>
						</ApplicationFormCard>

						<ApplicationFormCard
							title="Application criteria"
							editIcon>
							<Typography>{data?.applicationCriteria}</Typography>
						</ApplicationFormCard>

						{/* <Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							sx={{ mt: 10, mb: 3, maxWidth: "557px" }}>
							<Typography
								variant="h1"
								fontSize={{ xs: 30, xl: 40 }}>
								Application form preview
							</Typography>
							<Button>
								<img
									src={Edit}
									alt=""
								/>
							</Button>
						</Stack> */}

						{/* Personal Info Card */}
						{/* <PersonalInfoPreview
							applicationData={personalInfo}
							setApplicationData={setPersonalInfo}
						/> */}
						{/* Profile Card */}
						{/* <ProfileForm
							applicationData={profileData}
							setApplicationData={setProfileData}
						/> */}
						{/* QuestionsForm */}
						{/* <QuestionsForm /> */}
					</Stack>
				</Box>

				{/* Right Side */}
				<Box
					sx={{
						boxShadow: "var(--shadow-6)",
						alignSelf: "start",
						borderRadius: "20px",
					}}>
					<img
						src={placeholder}
						alt=""
						style={{ maxHeight: "209px", width: "100%" }}
					/>
					<Box p="20px 30px">
						<Typography
							variant="h2"
							sx={{ maxWidth: "230px" }}>
							{data?.title}
						</Typography>

						<Box
							sx={{
								display: "grid",
								gridTemplateColumns: "1fr 1fr 1fr",
								gap: 2,
								mt: 3,
								"*": { fontSize: 11 },
							}}>
							{/* first column - location*/}
							<Typography
								sx={{
									display: "grid",
									gridTemplateColumns: "auto auto",
									gap: 1,
								}}
								fontSize={11}>
								<LocationOnIcon
									htmlColor="black"
									fontSize="inherit"
									sx={{ mr: 1 }}
								/>
								{data?.location}
							</Typography>

							{/* second column */}
							<Stack gap={2}>
								<Typography>
									Application open <br />{" "}
									{
										new Date(data?.applicationOpenDate ?? "")
											.toLocaleString()
											.split(",")[0]
									}
								</Typography>
								<Typography>
									Programme type <br /> {data?.programType}
								</Typography>
								<Typography>
									Programme start
									<br />
									{
										new Date(data?.startDate ?? "")
											.toLocaleString()
											.split(",")[0]
									}
								</Typography>
							</Stack>

							{/* third column */}
							<Stack gap={2}>
								<Typography>
									Application close
									<br />
									{
										new Date(data?.applicationCloseDate ?? "")
											.toLocaleString()
											.split(",")[0]
									}
								</Typography>
								<Typography>
									Duration
									<br />
									{data?.duration}
								</Typography>
							</Stack>
						</Box>
						<Button
							variant="contained"
							size="large"
							sx={{ bgcolor: "var(--dark-blue)", my: 3 }}
							onClick={handlePublish}
							fullWidth>
							Publish
						</Button>
					</Box>
				</Box>
			</Stack>
		</CreateProgramLayout>
	);
};

export default Preview;
