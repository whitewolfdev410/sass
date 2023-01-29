import React from 'react';
import {MenuItem, Select} from "@mui/material";

export type Props = {
    setEducationDetail?: any;
    educationDetail?: any;
};

const SelectDegree = ({setEducationDetail, educationDetail}: Props) => {

    const onHandleChange = (event: any) => {
        setEducationDetail({...educationDetail, [event.target.name] : event.target.value})
    };

    return (
        <>
            <Select name="degree" value={educationDetail?.degree} onChange={onHandleChange}>
                <MenuItem value="HighSchool">HighSchool</MenuItem>
                <MenuItem value="Diploma">Diploma</MenuItem>
                <MenuItem value="Bachelors">Bachelors</MenuItem>
                <MenuItem value="Masters">Masters</MenuItem>
                <MenuItem value="PhD">PhD</MenuItem>
            </Select>
        </>
    )
};

export default SelectDegree;