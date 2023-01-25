import React from "react";
import VideoTab from "./VideoTab";
import NotesTab from "./NotesTab";
import LogsTab from "./LogsTab";
import CandidateProfile from "../CandidateProfile";

type Props = {
  currentTab: number;
};

export default function Index({ currentTab }: Props) {
  return (
    <>
      {/* {currentTab === 1 && <CandidateProfile />} */}
      {currentTab === 2 && <VideoTab />}
      {currentTab === 4 && <NotesTab />}
      {currentTab === 6 && <LogsTab />}
      {/* {currentTab == 2 && <VideoTab />} */}
    </>
  );
}
