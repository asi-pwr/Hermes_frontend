import React, {useState} from 'react';
import MailDataView from './MailDataView';
import'./archivePage.css';

const mailArray = [{author:"Gmail pomoc", date:"2019-12-02", subject:"Password reset"},
{author:"Dział Spraw Międzynarodowych", date:"2020-01-11", subject:"Newsletter Działu Spraw Międzynarodowych"},
{author:"Pinterest", date:"2019-11-29", subject:"New ideas for your boards"},
{author:"Spotify", date:"2020-01-06", subject:"Nowa muzyka, już teraz w Twoim Radarze premier"},
{author:"Youtube", date:"2020-01-04", subject:"Użytkownik właśnie przesłał film"},
{author:"NetAcad Notifications", date:"2019-12-31", subject:"Najnowsze powiadomienia z systemu Canvas"},
{author:"Dział Spraw Międzynarodowych", date:"2020-01-19", subject:"Newsletter Działu Spraw Międzynarodowych"}];


const MailList = (props) => {

  const [mailList,setMailList] = useState(mailArray);
  const [fromDate,setFromDate] = useState("");
  const [toDate,setToDate] = useState("");


  const changeFilterDate = (fromDate,toDate) => setMailList(mailArray.filter((elem)=>elem.date>=fromDate && (elem.date<=toDate||toDate==="")));
  const onFromDateChange = (e) => {
    setFromDate(e.target.value);
    changeFilterDate(e.target.value, toDate);
  };

  const onToDateChange = (e) => {
    setToDate(e.target.value);
    changeFilterDate(fromDate,e.target.value);
  };

  return <div className="block block--mail">
    <ul className="list list--mails">
      {mailList.map((elem)=><li><MailDataView author = {elem.author} date = {elem.date} subject = {elem.subject} onClick = {props.onMailPick}/></li>)}
    </ul> 
    <span>From:</span><input className="input input--date" type="date" onChange = {(e) => onFromDateChange(e)}/>
    <span>To:</span><input className="input input--date" type="date"  onChange = {(e) => onToDateChange(e)}/>
  </div>
}

export default MailList;