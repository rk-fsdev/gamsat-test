import React from 'react';

import './style.scss';
import { IN_MESSAGE } from '../../containers/ChatWidget/constants';
import { InMessage, OutMessage } from '../Popups';

const MessageList = ({ messages }) => {
  let messagesEnd;

  const scrollToBottom = () => {
    messagesEnd.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  });

  return (
    <div className="message-list">
      <h1>Messages</h1>
      {messages.map((message, index) =>
        message.type === IN_MESSAGE ? (
          <InMessage text={message.text} key={index} />
        ) : (
          <OutMessage text={message.text} key={index} />
        )
      )}
      <div
        style={{ float: 'left', clear: 'both' }}
        ref={el => {
          messagesEnd = el;
        }}
      ></div>
    </div>
  );
};

export default MessageList;
