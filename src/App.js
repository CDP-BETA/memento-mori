import React, { useState, useEffect } from 'react'
import { create } from 'mobx-persist'
import { Provider, observer } from 'mobx-react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { stores } from 'stores'

import { HomePage, QuestionPage, ResultPage } from './pages'

const browserHistory = createBrowserHistory()

const App = observer(() => {
  const [storeLoaded, setStoreLoaded] = useState(false)

  useEffect(() => {
    const hydrate = create()
    hydrate('userStore', stores.userStore).then(() => {
      setStoreLoaded(true)
    })

    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY)
    console.log(Kakao.isInitialized() && 'kakao initialized.')
  }, [])

  return (
    <Provider {...stores}>
      <Router history={browserHistory}>
        {storeLoaded ? (
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
