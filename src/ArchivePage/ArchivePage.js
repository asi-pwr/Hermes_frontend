import React from 'react';
import MailView from './MailView';
import MailList from './MailList';

const ArchivePage = () => {
  return <div >
      <MailView subject=" Hello World!" content="My first mail"/>
      <MailList/>
  </div>
}

export default ArchivePage;
