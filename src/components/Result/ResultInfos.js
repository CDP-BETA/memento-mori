import React from 'react'
import { useStores } from 'stores'
import './resultInfos.scss'

const ResultInfos = () => {
  const { dataStore } = useStores()
  const { result } = dataStore

  const Paragraph = () => {
    return (
      result.shap.map((sentence, i) => (
        <p key={'shap_' + i}>- {sentence}</p>
      ))
    )
  }
  return (
    <div className={'infoContainer'}>
      <Paragraph/>
    </div>
  )
}

export default ResultInfos