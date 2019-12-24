import React,{ useState } from 'react';
import './index.css';
import './center.css';
//import App from './App';
import Button from '@material-ui/core/Button';


const MainPage = () => {
    return <div >
      <Form  ></Form>
      </div>
}

const Form = ()=>{
  const [subject,setSubject] = useState("");
  const [content,setContent] = useState("");
  return <div className="grid">
      <div>
      <form>
      <label className = "center">
          <div>Subject:</div>
          <input  type="text"  value={subject} onChange={(e) => setSubject(e.target.value)} />
        </label>
        <label className = "center">
          Content:
          <textarea className =  "resized" value={content} onChange={(e) => setContent(e.target.value)}/>
        </label>
      </form>
      </div>
      <div><Buttons className="right" subject={subject} content = {content} ></Buttons></div>
  </div>
}

const Buttons = (props) =>{
    return <div >
        <div className="a"><Button variant="contained" color="primary" onClick={() => modifyTemplate(props.subject,props.content)}>modifyTemplate</Button></div>
      <div className="a"><Button variant="contained" color="primary" onClick={() => deleteTemplate()}>deleteTemplate</Button></div>
      <div className="a"><Button variant="contained" color="primary" onClick={() => sendMail(props.subject,props.content)}>sendMail</Button></div>
      <div className="a"><Button variant="contained" color="primary" onClick={() => addTemplate(props.subject,props.content)}>addTemplate</Button></div>      
    </div>
}

const addTemplate = (a,b) => {alert(a); alert(b)}
const modifyTemplate = () => {}
const deleteTemplate = () => {}
const sendMail = () => {}

export default MainPage;
