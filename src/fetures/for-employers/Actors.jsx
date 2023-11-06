import React from "react";
import { GlobalForEmployers } from "../../components/global-for-employers/global-for-emloyers";
import { actorData } from "./EmployerMockData";

const Actors = () => {
  return (
    <GlobalForEmployers
      heroImg={actorData.heroImg}
      heroHeading={actorData.heroHeading}
      heroSubHead={actorData.heroSubHead}
      btnData={actorData.btnData}
      btnHeading={actorData.heroHeading}
      btnSubHead={actorData.btnSubHead}
      profile={true}
    />
  );
};

export default Actors;
