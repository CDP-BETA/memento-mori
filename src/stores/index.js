import React from 'react'
import AppStore from './AppStore'
import UserStore from './UserStore'
import DataStore from './DataStore'

export const stores = {
  appStore: new AppStore(),
  userStore: new UserStore(),
  dataStore: new DataStore()
}

export const storesContext = React.createContext({
  ...stores,
})

export const useStores = () => {
  const store = React.useContext(storesContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return store
}
