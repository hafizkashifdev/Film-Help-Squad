import React from "react";
import { GlobalForEmployers } from "../../components/global-for-employers/global-for-emloyers";
import { talentData } from "./EmployerMockData";

const Talent = () => {
  return (
    <GlobalForEmployers
      heroImg={talentData.heroImg}
      heroHeading={talentData.heroHeading}
      heroSubHead={talentData.heroSubHead}
      btnData={talentData.btnData}
      btnHeading={talentData.heroHeading}
      btnSubHead={talentData.btnSubHead}
    />
  );
};

export default Talent;
