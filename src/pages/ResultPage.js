import React, { useEffect } from 'react'
import { useStores } from 'stores'
import { useHistory } from 'react-router-dom'
import { ResultTitle, ResultInfos, Reference, ShareButtons } from 'components/Result'
import Loading from 'components/Loading'
import './resultPage.scss'

import ainizeLogo from 'assets/images/ainize_logo@2x.png'
import { observer } from 'mobx-react'

const ResultPage = observer(() => {
  const { dataStore, appStore } = useStores()
  const history = useHistory()
  if (dataStore.result.age === null) {
    alert('문항을 제대로 입력해주세요.')
    history.replace('/')
  }

  useEffect(() => {
    appStore.setLoading(false)
  }, [])

  return (
    <div className={'resultPage'}>
      <Loading />
      <ResultTitle />
      <ResultInfos />
      <ShareButtons />
      <Reference />
      <img className={'ainizeLogo'} src={ainizeLogo} alt={'ainize_logo'} />
    </div>
  )
})

export default ResultPage
