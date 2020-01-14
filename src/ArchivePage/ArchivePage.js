import React from 'react';
import MailView from './MailView';
import MailList from './MailList';
import './archivePage.css';

const ArchivePage = () => {
  return <div className="archive-main-content">
      <MailView subject=" Hello World!" content="My first mail"/>
      <MailList/>
  </div>
}

export default ArchivePage;
