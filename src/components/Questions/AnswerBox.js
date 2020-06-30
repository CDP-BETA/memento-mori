import React from 'react'
import { useStores } from 'stores'
import { observer } from 'mobx-react'
import './answerBox.scss'

const AnswerBox = observer(() => {
  const { dataStore } = useStores()
  const { questionModel, stepNext, setUserAnswer } = dataStore
  const { stepAnswers, answerIcons, selectedAnswerIcons } = questionModel

  const setAnswer = (number) => {
    setUserAnswer(number);
    stepNext()
  }

  return (
    <div className={'answerBoxContainer'}>
      <div className={'answerBox'} onClick={() => setAnswer(0)}>
        <img src={answerIcons[0]} alt={'answer_icon1'} />
        <p>{stepAnswers[0]}</p>
      </div>
      <div className={'answerBox'} onClick={() => setAnswer(1)}>
        <img src={answerIcons[1]} alt={'answer_icon2'} />
        <p>{stepAnswers[1]}</p>
      </div>
    </div>
  )
})

export default AnswerBox