import { action, observable } from 'mobx'
import { persist } from 'mobx-persist'

export default class AppStore {
  @persist @observable appInfo = {}
  @observable baseUrl = ''

  @action
  setBaseUrl = (url) => {
    this.baseUrl = url.toString()
  }
}
