import React from 'react'
import { GlobalForEmployers } from '../../components/global-for-employers/global-for-emloyers'
import { childActorData } from './EmployerMockData'

const ChildActors = () => {
  return (
    <GlobalForEmployers
      heroImg={childActorData.heroImg}
      heroHeading={childActorData.heroHeading}
      heroSubHead={childActorData.heroSubHead}
      btnData={childActorData.btnData}
      btnHeading={childActorData.heroHeading}
    />
  )
}

export default ChildActors