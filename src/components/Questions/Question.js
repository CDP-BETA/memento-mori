import React from 'react'
import { useStores } from 'stores'
import { observer } from 'mobx-react'
import './question.scss'

const Question = observer(() => {
  const { dataStore } = useStores()
  const { questionModel } = dataStore
  const { stepQuestion } = questionModel

  return (
    <div className={'stepQuestion'}>
      <p>{stepQuestion}</p>
    </div>
  )
})

export default Question