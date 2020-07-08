import { action, observable, toJS } from 'mobx'
import QuestionModel from './model/QuestionModel'
import { predictDeath } from 'utils/apis'

export default class DataStore {
  @observable step
  @observable userAnswers
  @observable result
  @observable errMsg
  @observable predictErr
  constructor() {
    this.step = 0
    this.totalStep = 13
    this.questionModel = new QuestionModel()
    this.userAnswers = {
      male: null,
      pneumonia: null,
      hypertension: null,
      chest_pain: null,
      respiratory_disorder: null,
      anemia: null,
      diabetes: null,
      hypoglycemia: null,
      fever: null,
      mace: null,
      abdominal_pain: null,
      pancreatitis: null,
      married: null,
    }
    this.result = {
      age: null,
      shap: [],
    }
    this.predictErr = false
  }

  verifyAnswers = async () => {
    for (let key in this.userAnswers) {
      if (typeof this.userAnswers[key] !== 'number') {
        return false
      }
    }
    const answers = {
      answer: toJS(this.userAnswers),
    }
    return await predictDeath(answers)
  }

  @action
  stepNext = (history) => {
    if (this.step === 12) {
      this.verifyAnswers()
        .then((data) => {
          if (!data) {
            this.predictErr = true
            this.errMsg = '모든 항목을 반드시 체크해주셔야 됩니다!'
            return false
          }
          this.result = data
          history.push('/result')
        })
        .catch((err) => {
          console.log('errMsg', err)
          this.predictErr = true
          this.errMsg = '네트워크 에러가 발생했습니다.\n곧 해결해겠습니다. 죄송합니다ㅜㅠㅠ'
        })
      return
    }
    this.step += 1
    this.questionModel.setStepQuestion(this.step)
  }

  @action
  stepBack = () => {
    if (this.step === 0) return
    this.step -= 1
    this.questionModel.setStepQuestion(this.step)
  }

  @action
  setUserAnswer = (answer) => {
    this.userAnswers[this.questionModel.stepKey] = answer
  }
}
