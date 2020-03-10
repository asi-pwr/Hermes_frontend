import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import './mainPage.css'

const Buttons = (props) => {
  return (
    <div>
      <div className="main-page-form__button"><Button variant="contained" color="primary" onClick={() => modifyTemplate(props.subject, props.content)}>modifyTemplate</Button></div>
      <div className="main-page-form__button"><Button variant="contained" color="primary" onClick={() => deleteTemplate()}>deleteTemplate</Button></div>
      <div className="main-page-form__button"><Button variant="contained" color="primary" onClick={() => sendMail(props.subject, props.content)}>sendMail</Button></div>
      <div className="main-page-form__button"><Button variant="contained" color="primary" onClick={() => addTemplate(props.subject, props.content)}>addTemplate</Button></div>
      <div className="main-page-form__button"><Button variant="contained" color="primary"><Link className="main-page-form__link" to="/archive">ArchivePage</Link></Button></div>
    </div>
  )
}

/**
 * @todo write implementation for each of these functions
 */
const addTemplate = () => {}
const modifyTemplate = () => {}
const deleteTemplate = () => {}
const sendMail = () => {}

export default Buttons
