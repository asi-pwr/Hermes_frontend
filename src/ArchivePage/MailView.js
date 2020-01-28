import React from 'react';
import './archivePage.css';

const MailView = (props) => {
  return <div className = "block block--mail">
      <div>
          <h4> 
              <span>Subject: </span>
              <span>{props.subject} </span>
          </h4>
      </div>
      <div>
          {props.content}
      </div>
  </div>
}

export default MailView;