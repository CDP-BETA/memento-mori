import React from 'react'
import { useStores } from 'stores'
import { observer } from 'mobx-react'
import './resultTitle.scss'

const ResultTitle = observer(() => {
  const { dataStore } = useStores()
  const { result } = dataStore

  return (
    <div className={'titleContainer'}>
      <p className={'title'}>
        당신은 남들보다 {Number(result.age) < 69.9 ? '빠른' : '늦은'}<br/>
        <em>{result.age}</em> 세에 <br/>
        사망할지도 모릅니다.
      </p>
      <p className={'sub'}>* 평균 예측 수명은 69.9세 입니다.</p>
    </div>
  )
})

export default ResultTitle