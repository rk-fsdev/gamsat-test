import React from 'react';

import './style.scss';
import { IN_MESSAGE } from '../../constants';
import { InMessage, OutMessage } from '../Popups';

const MessageList = ({ messages }) => {
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
    </div>
  );
};

export default MessageList;
