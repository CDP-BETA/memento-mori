import { action, observable } from 'mobx'
import QuestionModel from './model/QuestionModel'

export default class DataStore {
  @observable step
  @observable userAnswers
  constructor() {
    this.step = 0
    this.totalStep = 13
    this.questionModel = new QuestionModel()
    this.userAnswers = {
      sex: 0,
      Pneumonia: null,
      high_blood_pressure: null,
      chest_pain: null,
      respiratory_failure: null,
      anemia: null,
      diabetes: null,
      fever: null,
      cardiovascular_disease: null,
      abdominal_pain: null,
      pancreatitis: null,
      spouse: null
    }
  }

  @action
  stepNext = () => {
    if(this.step === 12) return
    this.step += 1
    this.questionModel.setStepQuestion(this.step)
  }

  @action
  stepBack = () => {
    if(this.step === 0) return
    this.step -= 1
    this.questionModel.setStepQuestion(this.step)
  }

  @action
  setUserAnswer = (answer) => {
    this.userAnswers[this.questionModel.stepKey] = answer
  }
}