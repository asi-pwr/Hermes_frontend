import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Button from '@material-ui/core/Button'

const App = () => {
    return <div>
      <div><Button variant="contained" color="primary" onClick={addTemplate}>addTemplate</Button></div>
      <div><Button variant="contained" color="primary" onClick={modifyTemplate}>modifyTemplate</Button></div>
      <div><Button variant="contained" color="primary" onClick={deleteTemplate}>deleteTemplate</Button></div>
      <div><Button variant="contained" color="primary" onClick={sendMail}>sendMail</Button></div>
      </div>
}


const addTemplate = () => {}
const modifyTemplate = () => {}
const deleteTemplate = () => {}
const sendMail = () => {}


ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
