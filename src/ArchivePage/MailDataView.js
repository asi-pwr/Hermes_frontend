import React from 'react';
import'./archivePage.css';

const MailDataView = (props) => {
  return <div className="block block--mail-list-elem" onClick = {(e) => props.onClick(props)}>
    <span className="block__elem block__elem--date">{props.date}</span>
    <div className="block block--mail-content">
      <span className="block__elem block__elem--author">{props.author}</span>
      <span className="block__elem block__elem--subject">{props.subject}</span>
    </div>
  </div>
}

export default MailDataView;