import { action, observable } from 'mobx'
import { persist } from 'mobx-persist'

export default class UserStore {
  @persist @observable session_key = ''
  @persist('object') @observable currentUser = {
    email: '',
    name: '',
  }
  @persist @observable isAuthenticated = false
}
