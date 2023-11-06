import React from 'react'
import { GlobalForEmployers } from "../../components/global-for-employers/global-for-emloyers";
import { singerData } from "./EmployerMockData";

const Singers = () => {
  return (
    <GlobalForEmployers
      heroImg={singerData.heroImg}
      heroHeading={singerData.heroHeading}
      heroSubHead={singerData.heroSubHead}
      btnData={singerData.btnData}
      btnHeading={singerData.heroHeading}
      btnSubHead={singerData.btnSubHead}
    />
  )
}

export default Singers