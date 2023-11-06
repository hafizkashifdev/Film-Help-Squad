import React from 'react'
import { GlobalForEmployers } from "../../components/global-for-employers/global-for-emloyers";
import { dancerData } from "./EmployerMockData";

const Dancers = () => {
  return (
    <GlobalForEmployers
      heroImg={dancerData.heroImg}
      heroHeading={dancerData.heroHeading}
      heroSubHead={dancerData.heroSubHead}
      btnData={dancerData.btnData}
      btnHeading={dancerData.heroHeading}
      btnSubHead={dancerData.btnSubHead}
    />
  )
}

export default Dancers