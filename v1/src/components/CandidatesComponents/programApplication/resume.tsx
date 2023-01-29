import React, { ChangeEvent, useState } from 'react';
import {ApplicationFormCard} from "../../cards";

export type Props = {
    setCandidateData?: any;
    candidateData?: any;
};

const Resume = ({setCandidateData, candidateData}: Props) => {
    const [file, setFile] = useState<File>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            setCandidateData({...candidateData, resume: e.target.files[0]})
        }
    };

    return (
        <ApplicationFormCard title="Resume">
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <div>{file && `${file.name} - ${file.type}`}</div>
        </ApplicationFormCard>
    )
};

export default Resume;