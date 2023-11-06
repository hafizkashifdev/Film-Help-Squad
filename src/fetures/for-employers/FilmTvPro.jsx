import React from 'react'
import { GlobalForEmployers } from '../../components/global-for-employers/global-for-emloyers'
import { filmTvData } from './EmployerMockData'

const FilmTvPro = () => {
  return (
    <GlobalForEmployers
      heroImg={filmTvData.heroImg}
      heroHeading={filmTvData.heroHeading}
      heroSubHead={filmTvData.heroSubHead}
      btnData={filmTvData.btnData}
      btnHeading={filmTvData.heroHeading}
      btnSubHead={filmTvData.btnSubHead}
    />
  )
}

export default FilmTvPro