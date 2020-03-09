import React from 'react'
import './archivePage.css'

const MailDataView = (props) => {
  return <div className="block-list block-list--theme-green" onClick = {(e) => props.onClick(props)}>
    <span className="block-list__elem block-list__elem--date">{props.date}</span>
    <div className="block-list-content">
      <span className="block-list__elem block-list__elem--author">{props.author}</span>
      <span className="block-list__elem block-list__elem--subject">{props.subject}</span>
    </div>
  </div>
}

export default MailDataView
