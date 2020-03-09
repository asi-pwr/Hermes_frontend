import React, { useState } from 'react'
import MailView from './MailView'
import MailList from './MailList'
import './archivePage.css'

const ArchivePage = () => {
  const [mailSubject, setMailSubject] = useState('')

  const onPickMailToView = (e) => setMailSubject(() => e.subject)

  return <div className="block-main">
    <MailView subject={mailSubject} content="Mail Content"/>
    <MailList onMailPick = {(e) => onPickMailToView(e)}/>
  </div>
}

export default ArchivePage
