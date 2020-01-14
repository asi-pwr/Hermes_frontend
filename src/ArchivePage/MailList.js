import React from 'react';
import MailDataView from './MailDataView';
import './mailList.css';

const MailList = (props) => {

  const mailArray = [{author:"gmail pomoc", date:"24.06.2017", subject:"password reset"},
  {author:"pinterest", date:"24.07.2018", subject:"new ideas for your boards"},
  {author:"pinterest", date:"24.07.2018", subject:"new ideas for your boards"},
  {author:"pinterest", date:"24.07.2018", subject:"new ideas for your boards"},
  {author:"pinterest", date:"24.07.2018", subject:"new ideas for your boards"},
  {author:"pinterest", date:"24.07.2018", subject:"new ideas for your boards"}];

  return <div className="mail-list-main-form">
    <ul className="mail-list">
      {mailArray.map((elem)=><li><MailDataView author = {elem.author} date = {elem.date} subject = {elem.subject}/></li>)}
    </ul> 
    <span>From:</span><input className="archive-date-pick" type="date"/>
    <span>To:</span><input className="archive-date-pick" type="date"/>
  </div>
}

export default MailList;