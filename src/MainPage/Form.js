import React, { useState } from 'react'
import '../center.css'
import Buttons from './Buttons.js'

const Form = () => {
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  return (
    <div className="main-page-form">
      <div>
        <form>
          <label className = "main-page-form__centralised-element">
            <div>Subject:</div>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </label>
          <label className = "main-page-form__centralised-element">
              Content:
            <textarea className = "main-page-form__message-content-textarea" value={content} onChange={(e) => setContent(e.target.value)}/>
          </label>
        </form>
      </div>
      <div><Buttons subject={subject} content = {content} ></Buttons></div>
    </div>
  )
}

export default Form
