import manNormalIcon from 'assets/images/answerIcon/man_icon_normal.png'
import womanNormalIcon from 'assets/images/answerIcon/woman_icon_normal.png'
import manSelectIcon from 'assets/images/answerIcon/man_icon_select.png'
import womanSelectIcon from 'assets/images/answerIcon/woman_icon_select.png'
import oNormalIcon from 'assets/images/answerIcon/o_normal.png'
import oSelectIcon from 'assets/images/answerIcon/o_select.png'
import xNormalIcon from 'assets/images/answerIcon/x_normal.png'
import xSelectIcon from 'assets/images/answerIcon/x_select.png'
import { observable } from 'mobx'

export default class QuestionModel {
  questionList
  @observable stepQuestion
  @observable stepKey
  @observable stepAnswers
  @observable answerIcons
  @observable selectedAnswerIcons
  constructor() {
    this.questionList = [
      {
        question: '내 성별은',
        key: 'sex',
        answers: ['남자', '여자'],
        answerIcons: [manNormalIcon, womanNormalIcon],
        selectedAnswerIcons: [manSelectIcon, womanSelectIcon]
      },
      {
        question: '난 폐 질환이',
        key: 'pneumonia',
        answers: ['있다', '없다'],
        answerIcons: [oNormalIcon, xNormalIcon],
        selectedAnswerIcons: [oSelectIcon, xSelectIcon]
      },
      {
        question: '난 고혈압이',
        key: 'high_blood_pressure',
        answers: ['있다', '없다'],
        answerIcons: [oNormalIcon, xNormalIcon],
        selectedAnswerIcons: [oSelectIcon, xSelectIcon]
      },
      {
        question: '난 가슴 통증이',
        key: 'chest_pain',
        answers: ['있다', '없다'],
        answerIcons: [oNormalIcon, xNormalIcon],
        selectedAnswerIcons: [oSelectIcon, xSelectIcon]
      },
      {
        question: '난 호흡기 질환이',
        key: 'respiratory_failure',
        answers: ['있다', '없다'],
        answerIcons: [oNormalIcon, xNormalIcon],
        selectedAnswerIcons: [oSelectIcon, xSelectIcon]
      },
      {
        question: '난 빈혈이',
        key: 'anemia',
        answers: ['있다', '없다'],
        answerIcons: [oNormalIcon, xNormalIcon],
        selectedAnswerIcons: [oSelectIcon, xSelectIcon]
      },
      {
        question: '난 당뇨병이',
        key: 'diabetes',
        answers: ['있다', '없다'],
        answerIcons: [oNormalIcon, xNormalIcon],
        selectedAnswerIcons: [oSelectIcon, xSelectIcon]
      },
      {
        question: '난 저혈당이',
        key: 'hypoglycemia',
        answers: ['있다', '없다'],
        answerIcons: [oNormalIcon, xNormalIcon],
        selectedAnswerIcons: [oSelectIcon, xSelectIcon]
      },

      {
        question: '난 열이',
        key: 'fever',
        answers: ['있다', '없다'],
        answerIcons: [oNormalIcon, xNormalIcon],
        selectedAnswerIcons: [oSelectIcon, xSelectIcon]
      },
      {
        question: '난 심혈관 질환이',
        key: 'cardiovascular_disease',
        answers: ['있다', '없다'],
        answerIcons: [oNormalIcon, xNormalIcon],
        selectedAnswerIcons: [oSelectIcon, xSelectIcon]
      },
      {
        question: '난 복부 통증이',
        key: 'abdominal_pain',
        answers: ['있다', '없다'],
        answerIcons: [oNormalIcon, xNormalIcon],
        selectedAnswerIcons: [oSelectIcon, xSelectIcon]
      },
      {
        question: '난 췌장염이',
        key: 'pancreatitis',
        answers: ['있다', '없다'],
        answerIcons: [oNormalIcon, xNormalIcon],
        selectedAnswerIcons: [oSelectIcon, xSelectIcon]
      },
      {
        question: '난 배우자가',
        key: 'spouse',
        answers: ['있다', '없다'],
        answerIcons: [oNormalIcon, xNormalIcon],
        selectedAnswerIcons: [oSelectIcon, xSelectIcon]
      }

    ]
    this.stepKey = this.questionList[0].key
    this.stepQuestion = this.questionList[0].question
    this.stepAnswers = this.questionList[0].answers
    this.answerIcons = this.questionList[0].answerIcons
    this.selectedAnswerIcons = this.questionList[0].selectedAnswerIcons
  }

  setStepQuestion = (step) => {
    this.stepKey = this.questionList[step].key
    this.stepQuestion = this.questionList[step].question
    this.stepAnswers = this.questionList[step].answers
    this.answerIcons = this.questionList[step].answerIcons
    this.selectedAnswerIcons = this.questionList[step].selectedAnswerIcons
  }
}
