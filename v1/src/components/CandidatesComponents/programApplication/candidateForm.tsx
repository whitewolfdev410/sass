import React from 'react';
import {FormControl, Stack, TextField, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {ApplicationFormCard} from "../../cards";

export type Props = {
    setCandidateData?: any;
    candidateData?: any;
};

const CandidatePersonalInformation = ({setCandidateData, candidateData}: Props) => {

    const handleOnChange = (event: any) => {
        setCandidateData({...candidateData, [event.target.name] : event.target.value})
    };

    return (
        <ApplicationFormCard title="Personal Information">
            <Stack direction="row" columnGap={4}>
                <FormControl sx={{ my: 2 }} fullWidth>
                    <label>First Name</label>
                    <TextField placeholder="Type here" name="firstName" onChange={handleOnChange}/>
                </FormControl>

                <FormControl sx={{ my: 2 }} fullWidth>
                    <label>Last Name</label>
                    <TextField placeholder="Type here" name="lastName" onChange={handleOnChange}/>
                </FormControl>
            </Stack>

            <Stack>
                <FormControl sx={{ my: 2 }} fullWidth>
                    <label>Email</label>
                    <TextField placeholder="Type here" type="email" name="email" onChange={handleOnChange}/>
                </FormControl>
            </Stack>

            <Stack>
                <FormControl sx={{ my: 2 }} fullWidth>
                    <label><span>Phone <Typography fontSize={15}>(without dial code)</Typography></span></label>
                    <TextField placeholder="Type here" name="phone" onChange={handleOnChange}/>
                </FormControl>
            </Stack>

            <Stack>
                <FormControl sx={{ my: 2 }} fullWidth>
                    <label>Nationality</label>
                    <TextField placeholder="Type here" name="nationality" onChange={handleOnChange}/>
                </FormControl>
            </Stack>

            <Stack>
                <FormControl sx={{ my: 2 }} fullWidth>
                    <label>Country of residence</label>
                    <TextField
                        InputProps={{
                            startAdornment: <SearchIcon sx={{ color: "var(--spanish-grey)", mr: 1 }} />,
                        }}
                        placeholder="Select location" name="currentlyBased" onChange={handleOnChange}/>
                </FormControl>
            </Stack>

            <Stack>
                <FormControl sx={{ my: 2 }} fullWidth>
                    <label>Saudi ID number</label>
                    <TextField placeholder="Please type your number here" name="NationalIDNumber" onChange={handleOnChange}/>
                </FormControl>
            </Stack>

            <Stack>
                <FormControl sx={{ my: 2 }} fullWidth>
                    <label>Date of birth</label>
                    <TextField type="date" placeholder="Type here" name="dateOfBirth" onChange={handleOnChange}/>
                </FormControl>
            </Stack>

            <Stack>
                <FormControl sx={{ my: 2 }} fullWidth>
                    <label>Gender</label>
                    <TextField placeholder="Type here" name="gender" onChange={handleOnChange}/>
                </FormControl>
            </Stack>

            <Typography fontSize={12} sx={{ color: "var(--spanish-grey)" }}>
                We ask the gender information to ensure that we provide equal opportunity for everyone.{" "}
            </Typography>
        </ApplicationFormCard>
    )
};

export default CandidatePersonalInformation;