import React, {useMemo, useState} from 'react';
// @ts-ignore
import countryList from 'react-select-country-list'
import Select from 'react-select'
import {ApplicationFormCard} from "../../cards";
import {
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    MenuItem,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import Add from "@mui/icons-material/Add";
import X from "../../../assets/icons/delete-x-danger.svg";
import Edit from "../../../assets/icons/pencil-outlined.svg";
import SelectDegree from "../dropDown/SelectDegree";

export type Props = {
    setProfileData?: any;
    profileData?: any;
};

const Profile = ({setProfileData, profileData}: Props) => {

    const [educationCountry, setEducationCountry] = useState("");
    const [experienceCountry, setExperienceCountry] = useState("");
    const [educationFlag, setEducationFlag] = useState(false);
    const [experienceFlag, setExperienceFlag] = useState(false);
    const [educationDetail, setEducationDetail] = useState({
        schoolName: "",
        degree: "",
        courseName: "",
        locationOfStudy: "",
        startDate: "",
        endDate: "",
        currentlyStudyHere: false
    });
    const [experienceDetail, setExperienceDetail] = useState({
        companyName: "",
        title: "",
        workLocation: "",
        startDate: "",
        endDate: "",
        currentlyStudyHere: false
    });

    const onAddEducation = () => {
        setEducationFlag(!educationFlag)
    };

    const onAddExperience = () => {
        setExperienceFlag(!experienceFlag)
    };

    const handleOnChange = (event: any) => {
        setEducationDetail({...educationDetail, [event.target.name]: event.target.value})
    };

    const handleChange = (event: any) => {
        setExperienceDetail({...experienceDetail, [event.target.name]: event.target.value})
    };

    const option = useMemo(() => countryList().getData(), []);

    const changeHandler = (value: any) => {
        setEducationDetail({...educationDetail, locationOfStudy : value?.label})
        setEducationCountry(value)
    };

    const changeExHandler = (value: any) => {
        setExperienceDetail({...experienceDetail, workLocation : value?.label})
        setExperienceCountry(value)
    };

    const onAddEducationDetail = () => {
        const data = profileData.candidateEducationListDTO;
        data.push(educationDetail);
        setProfileData({...profileData, candidateEducationListDTO: data})
        setEducationDetail({
            schoolName: "",
            degree: "",
            courseName: "",
            locationOfStudy: "",
            startDate: "",
            endDate: "",
            currentlyStudyHere: false
        })
        setEducationFlag(!educationFlag)
    };

    const onAddExperienceDetail = () => {
        const data = profileData.candidateWorkExperienceListDTO;
        data.push(experienceDetail);
        setProfileData({...profileData, candidateWorkExperienceListDTO: data})
        setExperienceDetail({
            companyName: "",
            title: "",
            workLocation: "",
            startDate: "",
            endDate: "",
            currentlyStudyHere: false
        });
        setExperienceFlag(!experienceFlag)
    };

    return (
        <ApplicationFormCard title="Profile">
            <Stack direction="row" justifyContent="space-between" width="100%" marginTop={2}>
                <Typography
                    sx={{
                        maxWidth: "200px",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "var(--primary)",
                    }}>
                    Education
                </Typography>
                <Button sx={{m: 2}} onClick={() => onAddEducation()}>
                    {" "}
                    <Add fontSize="large" sx={{mr: 2}}/>
                    <Typography fontSize={15} fontWeight={600}>
                        Add more
                    </Typography>
                </Button>
            </Stack>
            {
                profileData?.candidateEducationListDTO?.map((item: any) => (
                    <Stack>
                        <Stack
                            direction="row"
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr 2fr 0.5fr",
                                gap: {xs: 3, md: 7, xl: 10},
                                margin: "0.5rem 0.5rem 0.5rem",
                            }}>
                            {" "}
                            <Typography>{item?.startDate}</Typography>
                            <Typography>{item?.courseName}</Typography>
                            <Button sx={{px: 0}}>
                                {" "}
                                <img src={Edit} alt=""/>{" "}
                            </Button>
                        </Stack>
                        <Stack
                            direction="row"
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr 2fr 0.5fr",
                                gap: {xs: 3, md: 7, xl: 10},
                                margin: "0.5rem 0.5rem 0.5rem",
                            }}>
                            {" "}
                            <Typography>{item?.endDate}</Typography>
                            <Typography>{item?.locationOfStudy}</Typography>
                        </Stack>
                        <Divider />
                    </Stack>
                ))
            }
            {
                educationFlag &&
                <>
                    <Stack>
                        <FormControl sx={{my: 2}} fullWidth>
                            <label>School</label>
                            <TextField placeholder="type here" name="schoolName" value={educationDetail.schoolName}
                                       onChange={handleOnChange}/>
                        </FormControl>
                    </Stack>
                    <Stack>
                        <FormControl sx={{my: 2}} fullWidth>
                            <label>Degree</label>
                            <SelectDegree setEducationDetail={setEducationDetail} educationDetail={educationDetail}/>
                        </FormControl>
                    </Stack>
                    <Stack>
                        <FormControl sx={{my: 2}} fullWidth>
                            <label>Your course name</label>
                            <TextField placeholder="type here" name="courseName" value={educationDetail.courseName}
                                       onChange={handleOnChange}/>
                        </FormControl>
                    </Stack>
                    <Stack>
                        <FormControl sx={{my: 2}} fullWidth>
                            <label>Location of your study</label>
                            <Select options={option} value={educationCountry} onChange={changeHandler}/>
                        </FormControl>
                    </Stack>
                    <Stack direction="row" columnGap={4}>
                        <FormControl sx={{my: 2}} fullWidth>
                            <label>Start Date</label>
                            <TextField type="date" value={educationDetail.startDate} placeholder="Type here"
                                       name="startDate" onChange={handleOnChange}/>
                        </FormControl>

                        <FormControl sx={{my: 2}} fullWidth>
                            <label>End Date</label>
                            <TextField type="date" value={educationDetail.endDate} placeholder="Type here"
                                       name="endDate" onChange={handleOnChange}/>
                        </FormControl>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Button>
                            {" "}
                            <img src={X}/>
                            <Typography color="error.main" fontSize={15} fontWeight={600}>
                                Delete question
                            </Typography>
                        </Button>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={educationDetail.currentlyStudyHere}
                                    onChange={(event) => {
                                        setEducationDetail({
                                            ...educationDetail,
                                            currentlyStudyHere: event.target.checked
                                        })
                                    }}
                                />
                            }
                            label="I currently study here"
                        />
                    </Stack>
                    <Stack sx={{my: 2}} mb={12}>
                        <Button
                            color="success"
                            variant="contained"
                            onClick={() => onAddEducationDetail()}
                        >
                            Save
                        </Button>
                    </Stack>
                </>
            }
            <Divider/>
            <Stack direction="row" justifyContent="space-between" width="100%" marginTop={2}>
                <Typography
                    sx={{
                        maxWidth: "200px",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "var(--primary)",
                    }}>
                    Work Experience
                </Typography>
                <Button sx={{m: 2}} onClick={() => onAddExperience()}>
                    {" "}
                    <Add fontSize="large" sx={{mr: 2}}/>
                    <Typography fontSize={15} fontWeight={600}>
                        Add more
                    </Typography>
                </Button>
            </Stack>
            {
                profileData?.candidateWorkExperienceListDTO?.map((item: any) => (
                    <Stack>
                        <Stack
                            direction="row"
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr 2fr 0.5fr",
                                gap: {xs: 3, md: 7, xl: 10},
                                margin: "0.5rem 0.5rem 0.5rem",
                            }}>
                            {" "}
                            <Typography>{item?.startDate}</Typography>
                            <Typography>{item?.companyName}</Typography>
                            <Button sx={{px: 0}}>
                                {" "}
                                <img src={Edit} alt=""/>{" "}
                            </Button>
                        </Stack>
                        <Stack
                            direction="row"
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr 2fr 0.5fr",
                                gap: {xs: 3, md: 7, xl: 10},
                                margin: "0.5rem 0.5rem 0.5rem",
                            }}>
                            {" "}
                            <Typography>{item?.endDate}</Typography>
                            <Typography>{item?.workLocation}</Typography>
                        </Stack>
                        <Divider />
                    </Stack>
                ))
            }
            {
                experienceFlag &&
                <>
                    <Stack>
                        <FormControl sx={{my: 2}} fullWidth>
                            <label>Company</label>
                            <TextField placeholder="type here" name="companyName" value={experienceDetail?.companyName}
                                       onChange={handleChange}/>
                        </FormControl>
                    </Stack>
                    <Stack>
                        <FormControl sx={{my: 2}} fullWidth>
                            <label>Tile</label>
                            <TextField placeholder="type here" name="title" value={experienceDetail?.title}
                                       onChange={handleChange}/>
                        </FormControl>
                    </Stack>
                    <Stack>
                        <FormControl sx={{my: 2}} fullWidth>
                            <label>Location of your work</label>
                            <Select options={option} value={experienceCountry} onChange={changeExHandler}/>
                        </FormControl>
                    </Stack>
                    <Stack direction="row" columnGap={4}>
                        <FormControl sx={{my: 2}} fullWidth>
                            <label>Start Date</label>
                            <TextField type="date" value={experienceDetail?.startDate} placeholder="Type here"
                                       name="startDate" onChange={handleChange}/>
                        </FormControl>

                        <FormControl sx={{my: 2}} fullWidth>
                            <label>End Date</label>
                            <TextField type="date" value={experienceDetail?.endDate} placeholder="Type here"
                                       name="endDate" onChange={handleChange}/>
                        </FormControl>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Button>
                            {" "}
                            <img src={X}/>
                            <Typography color="error.main" fontSize={15} fontWeight={600}>
                                Delete question
                            </Typography>
                        </Button>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={experienceDetail?.currentlyStudyHere}
                                    onChange={(event) => {
                                        setExperienceDetail({
                                            ...experienceDetail,
                                            currentlyStudyHere: event.target.checked
                                        })
                                    }}
                                />
                            }
                            label="I currently study here"
                        />
                    </Stack>
                    <Stack sx={{my: 2}} mb={12}>
                        <Button
                            color="success"
                            variant="contained"
                            onClick={() => onAddExperienceDetail()}
                        >
                            Save
                        </Button>
                    </Stack>
                </>
            }
        </ApplicationFormCard>
    )
};

export default Profile;