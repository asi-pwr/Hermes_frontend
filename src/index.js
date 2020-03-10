import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import MainPage from './MainPage/MainPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ArchivePage from './ArchivePage/ArchivePage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/archive">
            <ArchivePage />
          </Route>
          <Route>
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
