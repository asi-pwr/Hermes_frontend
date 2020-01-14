import React from 'react';
import './mailDataView.css'

const MailDataView = (props) => {
  return <div className="mail-data">
    <span className="date">{props.date}</span>
    <div className="mail-content">
      <span className="author">{props.author}</span>
      <span className="subject">{props.subject}</span>
    </div>
  </div>
}

export default MailDataView;