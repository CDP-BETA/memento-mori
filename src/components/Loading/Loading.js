import React from 'react'
import ReactLoading from 'react-loading'
import { useStores } from 'stores'
import { observer } from 'mobx-react'
import './loading.scss'

const Loading = observer(() => {
  const { appStore } = useStores()
  const { loading } = appStore
  return (
    <div className={loading ? 'loadingContainer isLoading' : 'loadingContainer'}>
      <ReactLoading type={'bars'} color={'#fff'} className={'loadingBar'} />
    </div>
  )
})

export default Loading
