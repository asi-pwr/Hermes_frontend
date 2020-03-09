import React, { useState } from 'react'
import MailDataView from './MailDataView'
import mailArray from './testData'
import './archivePage.css'

const MailList = (props) => {
  const [mailList, setMailList] = useState(mailArray)
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  const changeFilterDate = (fromDate, toDate) => {
    setMailList(mailArray.filter((elem) => elem.date >= fromDate && (elem.date <= toDate || toDate === '')))
  }
  const onFromDateChange = (e) => {
    setFromDate(e.target.value)
    changeFilterDate(e.target.value, toDate)
  }

  const onToDateChange = (e) => {
    setToDate(e.target.value)
    changeFilterDate(fromDate, e.target.value)
  }

  return <div className="block-mail-search">
    <ul className="list-mails">
      {mailList.map((elem, index) =>
        <li key = {index}>
          <MailDataView author = {elem.author} date = {elem.date} subject = {elem.subject} onClick = {props.onMailPick}/>
        </li>)}
    </ul>
    <label>From:</label><input className="input-date-start" type="date" onChange = {(e) => onFromDateChange(e)}/>
    <label>To:</label><input className="input-date-end" type="date" onChange = {(e) => onToDateChange(e)}/>
  </div>
}

export default MailList
