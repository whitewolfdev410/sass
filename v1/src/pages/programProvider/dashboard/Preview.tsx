import { Box, Divider, Stack, Typography } from "@mui/material";
import { ApplicationFormCard, ProgramProviderLayout } from "../../../components";
import { PersonalInformationForm, ProfileForm, QuestionsForm } from "../../../components/ProgramProviderComponents";

const Preview = () => {
	return (
		<ProgramProviderLayout>
			<Stack sx={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 3 }} className="content-wrapper">
				<Box maxWidth={"690px"}>
					<Typography variant="h1" fontSize={40} sx={{ my: 3 }}>
						London internship <br /> programme{" "}
					</Typography>

					<Typography fontSize={20} fontWeight={400} sx={{ my: 3 }}>
						As an intern, you will be working for one of our partner companies in London. Apart from gaining
						international working experience, you will learn the British working culture, gain international work
						experience, develop your communication and interper.
					</Typography>

					<Divider sx={{ my: 5 }} />

					<Typography sx={{ my: 3 }}>
						London is a perfect internship spot for keeping a cultural hub of diversity and opportunity as its central
						pedestal. Our associated companies span from large multinationals to start-ups working on cutting-edge
						technology. Whether you're looking to build your career or learn crucial skills to take away, our list of
						London firms have plenty to offer, and with so much under the belt for what this city has to offer, there's
						certainly no room for boredom.
						<ul style={{ marginTop: "16px" }}>
							<li>
								On-Job Training: The program is designed to enrich the participant's knowledge and provide them with the
								skills needed in this early stage of their career to be ready for their professional lives.
							</li>
							<li>Program Name: Future Gears</li>
							<li>Program Duration: 6 Months</li>
						</ul>
					</Typography>

					<Typography fontWeight={700} sx={{ my: 3 }}>
						Industries covered
					</Typography>

					<Typography sx={{ my: 3 }}>
						Law, Investment Banking, Management Consulting, Marketing, IT and Journalism are some of the 25+ different
						sectors we provide internships in.
					</Typography>

					<ApplicationFormCard title="Program benefits" editIcon>
						<Typography>
							<ul>
								<li>Local and global network access to founders, investors, community and more.</li>
								<li>Workshops and mentorship by world-class experts and mentors</li>
								<li>Zero equity</li>
								<li>Support services and perks</li>
								<li>Access to shared office spaces</li>
								<li>On-going post program support</li>
							</ul>
						</Typography>
					</ApplicationFormCard>

					<ApplicationFormCard title="Application criteria" editIcon>
						<Typography>
							The application criteria for this program is fairly competitive and please make sure that you are meeting
							all the requirements listed below. If you do not meet the criteria below, your application will be
							rejected automatically.{" "}
						</Typography>
						<Typography>
							<ul>
								<li>Saudi Nationals only with valid passport with at least 12 months of validity</li>
								<li>Fresh graduates with a bachelor’s degree in 2022, 2021</li>
								<li>To never have been rejected for any visa applications in the past</li>
								<li>Available to travel to London between 22nd October 2022 to 20th December 2022</li>
								<li>
									You will need to prove your English language proficiency by passing the iTEP Internship test at the B2
									level or must have a valid IELTS test score of 6.0 or above. Or a TOEFL test score of 80 or above.
								</li>
								<li>
									You will be exempted from the language test requirement if you have completed your studies in UK,
									Canada, USA, New Zeland or Australia.
								</li>
								<li>You must have a minimum GPA score of 3.2 out of 4 or equivalent</li>
								<li>Strong English Proficiency - You must be a fluent and confident communicator in English</li>
							</ul>
						</Typography>
					</ApplicationFormCard>

					{/* Personal Info Card */}
					<PersonalInformationForm />
					{/* Profile Card */}
					<ProfileForm />
					{/* QuestionsForm */}
					<QuestionsForm />
				</Box>
			</Stack>
		</ProgramProviderLayout>
	);
};

export default Preview;
