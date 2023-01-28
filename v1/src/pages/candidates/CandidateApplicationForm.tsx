import {useState} from "react";
import {useNavigate} from "react-router";
import {Box, Button, Stack} from "@mui/material";
import {SidebarLayout} from "../../components";
import {CandidateApplicationNav, ProgramSummaryCard} from "../../components/CandidatesComponents";
import CandidatePersonalInformation from "../../components/CandidatesComponents/programApplication/candidateForm";
import Profile from "../../components/CandidatesComponents/programApplication/profile";
import Resume from "../../components/CandidatesComponents/programApplication/resume";
import AdditionalQuestion from "../../components/CandidatesComponents/programApplication/additionalQuestion";
import VideoQuestion from "../../components/CandidatesComponents/programApplication/videoQuestion";
import {checkCandidateEmail} from "../../appStore/slices";
import {useAppDispatch} from "../../appStore";

const CandidateApplicationForm = () => {

	const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [candidateData, setCandidateData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        nationality: "",
        currentlyBased: "",
        NationalIDNumber: "",
        dateOfBirth: "",
        gender: "",
        education: "",
        experience: "",
        resume: "",
    });

    const onSaveApplication = async () => {
        localStorage.setItem("candidateData", JSON.stringify(candidateData))
        const response = await dispatch(checkCandidateEmail({emailID: candidateData?.email}));
		if(response?.payload){
            navigate('/candidate/apply/signIn', {replace: true})
		}else {
            navigate('/candidate/apply/create-account', {replace: true})
		}
    };

    return (
        <SidebarLayout>
            <Box sx={{mt: "-50px"}}>
                <CandidateApplicationNav completed={1}/>
            </Box>
            <Stack direction="row" flexWrap="wrap" gap={5} className="content-wrapper" justifyContent="space-between">
                <Box>
                    <CandidatePersonalInformation setCandidateData={setCandidateData} candidateData={candidateData}/>
                    <Profile/>
                    <Resume/>
                    <AdditionalQuestion/>
                    <VideoQuestion/>
                    <Button
                        onClick={() => onSaveApplication()}
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: "var(--dark-blue)",
                            my: 2,
                            width: {xs: "555px", xl: "595px"},
                            maxWidth: "90vw",
                        }}>
                        Submit & next
                    </Button>
                </Box>
                <Box>
                    <ProgramSummaryCard image data={data}/>
                </Box>
            </Stack>
        </SidebarLayout>
    );
};
export default CandidateApplicationForm;

let data = {
    id: "string",
    programID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    title: "string",
    description: "string",
    summary: "string",
    keySkills: "string",
    programBenefits: "string",
    applicationCriteria: "string",
    programType: 0,
    minQualification: 0,
    startDate: "2023-01-22T00:20:41.450Z",
    appOpenDate: "2023-01-22T00:20:41.450Z",
    appCloseDate: "2023-01-22T00:20:41.450Z",
    duration: "string",
    locationID: 0,
    maxAppCount: 0,
    createdOn: "2023-01-22T00:20:41.450Z",
};
