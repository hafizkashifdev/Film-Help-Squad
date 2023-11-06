import React from 'react'
import { GlobalForEmployers } from '../../components/global-for-employers/global-for-emloyers'
import { theatreData } from './EmployerMockData'

const Theatre = () => {
  return (
    <GlobalForEmployers
      heroImg={theatreData.heroImg}
      heroHeading={theatreData.heroHeading}
      heroSubHead={theatreData.heroSubHead}
      btnData={theatreData.btnData}
      btnHeading={theatreData.heroHeading}
      btnSubHead={theatreData.btnSubHead}
    />
  )
}

export default Theatre