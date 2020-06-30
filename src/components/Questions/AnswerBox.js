import React, { useEffect } from 'react'
import { useStores } from 'stores'
import { observer } from 'mobx-react'
import './answerBox.scss'

const AnswerBox = observer(() => {
  const { dataStore } = useStores()
  const { questionModel, stepNext, setUserAnswer, userAnswers } = dataStore
  const { stepKey, stepAnswers, answerIcons, selectedAnswerIcons } = questionModel

  const userAnswer = userAnswers[stepKey]

  const setAnswer = (number) => {
    setUserAnswer(number)
    stepNext()
  }

  const getHeight = () => {
    if(window.innerHeight < 600) return { height: '7rem' }
    else if(window.innerHeight > 700) return { height: '9.5rem'}
  }
  // useEffect(() => {
  //   console.log('hi')
  //   setTimeout(() => {}, 2000)
  // },[userAnswer])

  return (
    <div className={'answerBoxContainer'}>
      <div className={userAnswer === 0 ? 'answerBox selected' : 'answerBox'} onClick={() => setAnswer(0)}  style={getHeight()}>
        <img src={userAnswer === 0 ? selectedAnswerIcons[0] : answerIcons[0]} alt={'answer_icon1'} />
        <p>{stepAnswers[0]}</p>
      </div>
      <div className={userAnswer === 1 ? 'answerBox selected' : 'answerBox'} onClick={() => setAnswer(1)}  style={getHeight()}>
        <img src={userAnswer === 1 ? selectedAnswerIcons[1] : answerIcons[1]} alt={'answer_icon2'} />
        <p>{stepAnswers[1]}</p>
      </div>
    </div>
  )
})

export default AnswerBox