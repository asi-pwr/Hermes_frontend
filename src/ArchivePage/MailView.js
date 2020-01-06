import React from 'react';

const MailView = (props) => {
  return <div>
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