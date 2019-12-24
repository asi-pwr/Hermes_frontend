import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './center.css'
//import App from './App';
import MainPage from './MainPage';
import * as serviceWorker from './serviceWorker';
import Button from '@material-ui/core/Button'
import { string } from 'prop-types';
import zIndex from '@material-ui/core/styles/zIndex';
import { Grid } from '@material-ui/core';

const App = () => {
    return <div >
      <MainPage/>
      </div>
}



ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
