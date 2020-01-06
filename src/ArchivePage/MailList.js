import React from 'react';
import MailDataView from './MailDataView';

const MailList = (props) => {

  const mailArray = [{author:"gmail pomoc", date:"24.06.2017", subject:"password reset"},
  {author:"pinterest", date:"24.07.2018", subject:"new ideas for your boards"}];

  return <div>
    <ul>
      {mailArray.map((elem)=><li><MailDataView author = {elem.author} date = {elem.date} subject = {elem.subject}/></li>)}
    </ul> 
    <input type="date"/>
    <input type="date"/>
  </div>
}

export default MailList;