import { action, observable } from 'mobx'
import QuestionModel from './model/QuestionModel'
import { predictDeath } from 'utils/apis'

export default class DataStore {
  @observable step
  @observable userAnswers
  @observable result
  constructor() {
    this.step = 0
    this.totalStep = 13
    this.questionModel = new QuestionModel()
    this.userAnswers = {
      sex: null,
      pneumonia: null,
      high_blood_pressure: null,
      chest_pain: null,
      respiratory_failure: null,
      anemia: null,
      diabetes: null,
      hypoglycemia: null,
      fever: null,
      cardiovascular_disease: null,
      abdominal_pain: null,
      pancreatitis: null,
      spouse: null
    }
    this.result = {}
  }

  verifyAnswers = () => {
    for(let key in this.userAnswers) {
      if (typeof this.userAnswers[key] !== 'number') {
        return false
      }
    }
    const answers = {
      answers: this.userAnswers
    }
    return predictDeath(answers)
  }

  @action
  stepNext = async () => {
    if(this.step === 12) {
      await this.verifyAnswers().then(({ data }) => {
        this.result = data
      })
      return
    }
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