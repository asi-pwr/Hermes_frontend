import React from 'react';

const MailDataView = (props) => {
  return <div>
    {props.author}
    {props.date}
    {props.subject}
  </div>
}

export default MailDataView;