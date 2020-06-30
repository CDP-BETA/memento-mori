import React from 'react'
import Header from 'components/Header/Header'
import { StepNumber, Question, AnswerBox, StepContainer } from 'components/Questions'
import './questionPage.scss'

const QuestionPage = () => {
  return (
    <div className={'questionPage'}>
      <Header />
      <StepNumber />
      <Question />
      <hr/>
      <AnswerBox />
      <StepContainer />
    </div>
  )
}

export default QuestionPage
