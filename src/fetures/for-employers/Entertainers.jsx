import React from "react";
import { GlobalForEmployers } from "../../components/global-for-employers/global-for-emloyers";
import { entertainerData } from "./EmployerMockData";

const Entertainers = () => {
  return (
    <GlobalForEmployers
      heroImg={entertainerData.heroImg}
      heroHeading={entertainerData.heroHeading}
      heroSubHead={entertainerData.heroSubHead}
      btnData={entertainerData.btnData}
      btnHeading={entertainerData.heroHeading}
      btnSubHead={entertainerData.btnSubHead}
    />
  );
};

export default Entertainers;
