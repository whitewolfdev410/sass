import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
	Paper,
	Typography,
	Stack,
	Button,
	ButtonGroup,
	Menu,
	MenuItem,
	Box,
	Avatar,
	useMediaQuery,
} from "@mui/material";
import { ProgramType } from "../../../types";
import { useRef, useState } from "react";

/**
 * @TODO type the @param data object after schema is gotten from API
 * and change the property names on ProviderStatsBase component
 * Provider Stats shows all starts for each program
 */
const ProviderStats = ({ data }: { data: Partial<ProgramType> }) => {
	const shortScreen = useMediaQuery("(max-height: 800px)");

	const [showUnPublish, setShowUnpublish] = useState(false);
	const anchorEl = useRef<HTMLAnchorElement | null>(null);

	return (
		<Paper
			className="content-wrapper"
			sx={{
				boxShadow: "var(--shadow-3)",
				p: { xs: "20px", lg: "20px 27px 15px 40px" },
				border: "1px solid white",

				":hover": {
					border: "1px solid var(--primary)",
					bgcolor: "var(--active-text-button)",
				},
			}}>
			<Stack direction={{ lg: "row" }} justifyContent="space-between" alignItems="start">
				{/* Title and Location */}
				<Box
					sx={{
						marginBottom: shortScreen ? 2 : 3,
						display: "grid",
						gridTemplateColumns: "2fr 1fr",
						gap: 1,
						alignItems: "center",
						width: "550px",
						maxWidth: "90vw",
					}}>
					<Typography variant="h2" component="h5">
						{data.title}
					</Typography>

					<Typography
						variant="h3"
						component="p"
						fontWeight={500}
						color="var(--grey)"
						sx={{
							display: "flex",
							alignItems: "center",
						}}>
						<LocationOnIcon htmlColor="black" fontSize="inherit" sx={{ mr: 1 }} /> {data.locationID}
					</Typography>
				</Box>

				{/* Action Buttons */}
				<Stack direction={{ lg: "row" }} gap={1.5}>
					<Button
						variant="outlined"
						sx={{
							color: "var(--grey)",
							borderColor: "var(--grey)",
							px: 3,
						}}>
						Edit
					</Button>
					<ButtonGroup variant="contained" color="success">
						<Button>Publish</Button>
						{/* @ts-ignore */}
						<Button
							sx={{ px: 0.5 }}
							onClick={(e) => {
								setShowUnpublish((state) => !state);
							}}
							ref={anchorEl}>
							<KeyboardArrowDownIcon fontSize="small" />
							<Menu
								open={showUnPublish}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "right",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								anchorEl={anchorEl.current}
								sx={{ py: 1 }}>
								<MenuItem sx={{ py: 0, fontSize: 12 }}>Unpublish </MenuItem>
							</Menu>
						</Button>
					</ButtonGroup>
				</Stack>
				{/* End of action buttons */}
			</Stack>

			{/* StatisticsBase */}
			<ButtonGroup
				variant="text"
				sx={{
					my: 3,
					display: "grid",
					gridTemplateColumns: "repeat(8, 1fr)",
					"> button": {
						borderColor: "var(--light-grey) !important",
						color: "var(--grey)",
						height: "71px",
						display: "grid",
						gridTemplateRows: "2fr 1fr",
					},

					"> button:hover": {
						backgroundColor: "transparent",
					},

					" .stat-info": {
						fontSize: shortScreen ? 22.5 : 30,
						lineHeight: shortScreen ? "23px" : "30px",
					},
					" .stat-title": {
						fontSize: 12,
						lineHeight: "12px",
						fontWeight: 400,
					},
				}}>
				<Button>
					<span className="stat-info">{data?.programStats?.programApplied}</span>
					<span className="stat-title">Applied</span>
				</Button>

				<Button>
					<span className="stat-info">{data?.programStats?.programShortlisted}</span>
					<span className="stat-title">Shortlisted</span>
				</Button>
				<Button>
					<span className="stat-info">{data?.programStats?.programInterview}</span>
					<span className="stat-title">Interview</span>
				</Button>
				<Button>
					<span className="stat-info">{data?.programStats?.programSecondRoundInterview}</span>
					<span className="stat-title">2nd Round Interview</span>
				</Button>
				<Button>
					<span className="stat-info">{data?.programStats?.programEmployerScreening}</span>
					<span className="stat-title">Employer Screening</span>
				</Button>
				<Button>
					<span className="stat-info">{data?.programStats?.programOffer}</span>
					<span className="stat-title">Offer</span>
				</Button>
				<Button>
					<span className="stat-info">{data?.programStats?.programAgreement}</span>
					<span className="stat-title">Agreement</span>
				</Button>
				<Button>
					<span className="stat-info">{data?.programStats?.programApproved}</span>
					<span className="stat-title">Approved</span>
				</Button>
			</ButtonGroup>

			<Stack justifyContent="flex-end" direction="row" gap={2} alignItems="center">
				<Typography fontFamily="Inter" fontSize="9px" fontWeight={600}>
					TEAM
				</Typography>
				<Stack direction="row" spacing={0.5}>
					{team.map(() => (
						<Avatar sx={{ width: "25px", height: "25px" }}></Avatar>
					))}
				</Stack>
				<Button
					sx={{
						display: "grid",
						px: 0,
						minWidth: "fit-content",
					}}>
					<AddCircleOutlineIcon htmlColor="black" fontSize="small" />
					<Typography fontSize={7} color="black">
						Invite
					</Typography>
				</Button>
			</Stack>
		</Paper>
	);
};

export default ProviderStats;
let team = [
	{
		member_avatar_url: "",
	},
	{
		member_avatar_url: "",
	},
	{
		member_avatar_url: "",
	},
	{
		member_avatar_url: "",
	},
];
