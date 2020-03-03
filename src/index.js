import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage/MainPage';
import * as serviceWorker from './serviceWorker';

const App = () => {
    return (
      <div >
        <MainPage/>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();