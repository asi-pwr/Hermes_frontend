import React from 'react';
import './archivePage.css';

const MailView = (props) => {
  return <div className = "block-mail-view">
      <div>
        <span>Subject: </span>
        <span>{props.subject}</span>
      </div>
      <div>
          {props.content}
      </div>
  </div>
}

export default MailView;