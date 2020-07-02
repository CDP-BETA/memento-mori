import React from 'react'
import { create } from 'mobx-persist'
import { Provider, observer, useLocalStore } from 'mobx-react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { stores } from 'stores'

import { HomePage, QuestionPage, ResultPage } from './pages'

const browserHistory = createBrowserHistory()
const hydrate = create()

const App = observer(() => {
  const store = useLocalStore(() => ({
    storeLoaded: false,
    setStoreLoaded: (load) => (store.storeLoaded = load),
  }))

  React.useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY)
    console.log(Kakao.isInitialized() && 'kakao initialized.')
    const load = async () => {
      await hydrate('userStore', stores.userStore).then(() => {
        store.setStoreLoaded(true)
      })
    }
    load()
  }, [])

  return (
    <Provider {...stores}>
      <Router history={browserHistory}>
        {store.storeLoaded ? (
          <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route path={'/question'} component={QuestionPage} />
            <Route path={'/result'} component={ResultPage} />
          </Switch>
        ) : null}
      </Router>
    </Provider>
  )
})

export default App
