import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import MainPage from './MainPage/MainPage'

const App = () => {
  return (
    <div>
      sadasdsadddddddddddddddd
      <MainPage/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
