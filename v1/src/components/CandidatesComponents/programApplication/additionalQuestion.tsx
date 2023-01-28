import React from 'react';
import {ApplicationFormCard} from "../../cards";
import {FormControl, Stack, TextField} from "@mui/material";

const AdditionalQuestion = () => {

    const handleOnChange = () => {

    };

    return (
        <ApplicationFormCard title="Additional questions">
            <Stack>
                <FormControl sx={{ my: 2 }} fullWidth>
                    <label>Please select your region</label>
                    <TextField placeholder="Type here" name="email" onChange={handleOnChange}/>
                </FormControl>
            </Stack>
            <Stack>
                <FormControl sx={{ my: 2 }} fullWidth>
                    <label>What inspire you to apply for this program?  It should be no more than 100 words</label>
                    <textarea
                        name="summary" onChange={handleOnChange}
                        style={{ height: "130px" }}
                        placeholder="Please type your answer here"
                    />
                </FormControl>
            </Stack>
            <Stack>
                <FormControl sx={{ my: 2 }} fullWidth>
                    <label>Have you studied  abroad in the past 12 months? </label>
                    <TextField placeholder="Select from the list" name="email" onChange={handleOnChange}/>
                </FormControl>
            </Stack>
        </ApplicationFormCard>
    )
};

export default AdditionalQuestion;