import React from 'react'
import { ResultTitle, ResultInfos, Reference } from 'components/Result'
import './resultPage.scss'

import ainizeLogo from 'assets/images/ainize_logo@2x.png'

const ResultPage = () => {
  return (
    <div className={'resultPage'}>
      <ResultTitle />
      <ResultInfos />
      <Reference />
      <img src={ainizeLogo} alt={'ainize_logo'} />
    </div>
  )
}

export default ResultPage