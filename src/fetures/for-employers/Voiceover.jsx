import React from "react";
import { GlobalForEmployers } from "../../components/global-for-employers/global-for-emloyers";
import { voiceoverData } from "./EmployerMockData";

const Voiceover = () => {
  return (
    <GlobalForEmployers
      heroImg={voiceoverData.heroImg}
      heroHeading={voiceoverData.heroHeading}
      heroSubHead={voiceoverData.heroSubHead}
      btnData={voiceoverData.btnData}
      btnHeading={voiceoverData.heroHeading}
      btnSubHead={voiceoverData.btnSubHead}
    />
  );
};

export default Voiceover;
