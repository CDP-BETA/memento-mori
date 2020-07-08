import React, { useEffect } from 'react'
import { useStores } from 'stores'
import { useHistory } from 'react-router-dom'
import { ResultTitle, ResultInfos, Reference, ShareButtons } from 'components/Result'
import Loading from 'components/Loading'
import './resultPage.scss'

import { observer } from 'mobx-react'
import Footer from 'components/Footer'

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
      <Footer />
    </div>
  )
})

export default ResultPage
