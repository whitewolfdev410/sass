import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {Box, Button, Stack} from "@mui/material";
import {SidebarLayout} from "../../components";
import {CandidateApplicationNav, ProgramSummaryCard} from "../../components/CandidatesComponents";
import CandidatePersonalInformation from "../../components/CandidatesComponents/programApplication/candidateForm";
import Profile from "../../components/CandidatesComponents/programApplication/profile";
import Resume from "../../components/CandidatesComponents/programApplication/resume";
import AdditionalQuestion from "../../components/CandidatesComponents/programApplication/additionalQuestion";
import VideoQuestion from "../../components/CandidatesComponents/programApplication/videoQuestion";
import {checkCandidateEmail, getApplicationTemplate, SaveCandidateApplicationForm} from "../../appStore/slices";
import {useAppDispatch} from "../../appStore";

const CandidateApplicationForm = () => {

	const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const programId = localStorage.getItem("programId");

    const [country, setCountry] = useState("");
    const [candidateData, setCandidateData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        PhoneNumber: "",
        nationality: "",
        currentlyBased: "",
        NationalIDNumber: "",
        dateOfBirth: "",
        gender: "",
        education: "",
        experience: "",
        resume: "",
    });
    const [profileData, setProfileData] = useState({
        candidateEducationListDTO: [],
        candidateWorkExperienceListDTO: []
    });

    useEffect(() => {
        getQuestionList()
    },[]);

    const getQuestionList = async () => {
        // @ts-ignore
        const response = await dispatch(getApplicationTemplate({programID: programId}));
        console.log("response",response)
    };

    const onSaveApplication = async () => {
        const data = {
            programID: programId,
            firstName: candidateData?.firstName,
            lastName: candidateData?.lastName,
            emailID: candidateData?.email,
            phoneNumber: candidateData?.PhoneNumber,
            nationality: candidateData?.nationality,
            currentlyBased: candidateData?.currentlyBased,
            nationalIDNumber: candidateData?.NationalIDNumber,
            dateOfBirth: candidateData?.dateOfBirth,
            gender: candidateData?.gender,
            educationList: profileData?.candidateEducationListDTO,
            workExperienceList: profileData?.candidateWorkExperienceListDTO,
            resume: ""
        };
        const candidateResponse = await dispatch(SaveCandidateApplicationForm({ data }));
        console.log("===============",candidateResponse)
        localStorage.setItem("candidateData", JSON.stringify(candidateData));
        const response = await dispatch(checkCandidateEmail({emailID: candidateData?.email}));
		if(response?.payload){
            navigate('/candidate/apply/program-status', {replace: true})
		}else {
            navigate('/candidate/apply/create-account', {replace: true})
		}
    };

    return (
        <SidebarLayout>
            <Box sx={{mt: "-50px"}} className="header">
                <CandidateApplicationNav completed={1}/>
            </Box>
            <Stack direction="row" flexWrap="wrap" gap={5} className="content-wrapper" justifyContent="space-between">
                <Box>
                    <CandidatePersonalInformation setCandidateData={setCandidateData} candidateData={candidateData} setCountry={setCountry} country={country}/>
                    <Profile setProfileData={setProfileData} profileData={profileData}/>
                    <Resume setCandidateData={setCandidateData} candidateData={candidateData}/>
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
