import React from 'react'
import { GlobalForEmployers } from '../../components/global-for-employers/global-for-emloyers'
import { musicData } from './EmployerMockData'

const MusicPro = () => {
  return (
    <GlobalForEmployers
      heroImg={musicData.heroImg}
      heroHeading={musicData.heroHeading}
      heroSubHead={musicData.heroSubHead}
      btnData={musicData.btnData}
      btnHeading={musicData.heroHeading}
      btnSubHead={musicData.btnSubHead}
    />
  )
}

export default MusicPro