import React, { useEffect } from 'react'
import { useStores } from 'stores'
import { useHistory } from 'react-router-dom'
import { ResultTitle, ResultInfos, Reference } from 'components/Result'
import './resultPage.scss'

import ainizeLogo from 'assets/images/ainize_logo@2x.png'

const ResultPage = () => {
  // const { dataStore } = useStores
  // const history = useHistory()
  // useEffect(() => {
  //   if(dataStore.result.age === null) { history.replace('/') }
  // },[])
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